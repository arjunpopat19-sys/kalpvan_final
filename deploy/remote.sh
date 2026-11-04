#!/usr/bin/env bash
# Runs ON the droplet (Ubuntu 24.04) as root; deploy.sh starts it. Safe to re-run: installs once, then just updates the app.
# usage: bash remote.sh <domain>      (first run also reads one line from stdin: the Atlas MONGO_URI, or an empty line to run MongoDB on this server)
set -euo pipefail
DOMAIN=${1:?domain required}
APP=/opt/kalpvan
APT="apt-get -o DPkg::Lock::Timeout=300 -y -qq"   # the lock timeout waits out Ubuntu's first-boot auto-updates
export DEBIAN_FRONTEND=noninteractive

# Small servers (512 MiB) have no swap, so apt/npm can get OOM-killed. Add 1 GiB once; skipped if swap already exists.
if [ -z "$(swapon --show --noheadings)" ]; then
  { fallocate -l 1G /swapfile && chmod 600 /swapfile && mkswap /swapfile >/dev/null && swapon /swapfile \
    && echo '/swapfile none swap sw 0 0' >> /etc/fstab; } || echo "Could not add swap (container-type VPS?). Continuing without it."
fi

if ! command -v node >/dev/null; then
  $APT update
  $APT install ca-certificates curl gnupg
  curl -fsSL https://deb.nodesource.com/setup_22.x | bash -
  $APT install nodejs
fi

if ! command -v caddy >/dev/null; then
  $APT install debian-keyring debian-archive-keyring apt-transport-https curl gnupg
  curl -1sLf 'https://dl.cloudsmith.io/public/caddy/stable/gpg.key' | gpg --dearmor --yes -o /usr/share/keyrings/caddy-stable-archive-keyring.gpg
  curl -1sLf 'https://dl.cloudsmith.io/public/caddy/stable/debian.deb.txt' > /etc/apt/sources.list.d/caddy-stable.list
  chmod o+r /usr/share/keyrings/caddy-stable-archive-keyring.gpg /etc/apt/sources.list.d/caddy-stable.list
  $APT update
  $APT install caddy
fi

# Firewall: SSH + web only (port 5000 stays private behind Caddy).
$APT install ufw
ufw allow 22/tcp >/dev/null; ufw allow 80/tcp >/dev/null; ufw allow 443/tcp >/dev/null
ufw --force enable >/dev/null

id kalpvan >/dev/null 2>&1 || useradd --system --home-dir "$APP" --shell /usr/sbin/nologin kalpvan
mkdir -p "$APP/backend/uploads"

# Secrets live only here, never in the repo. Created once; later deploys leave it alone.
if [ ! -f /etc/kalpvan.env ]; then
  IFS= read -r MONGO_URI || true
  if [ -z "$MONGO_URI" ]; then   # no Atlas URI given: run MongoDB on this server instead (set up below)
    MONGO_URI="mongodb://kalpvan_app:$(openssl rand -base64 24 | tr -d '\n/+=')@127.0.0.1:27017/kalpvan_live?authSource=admin"
  fi
  JWT_SECRET=$(openssl rand -base64 48 | tr -d '\n/+=')
  ADMIN_PASSWORD=$(openssl rand -base64 18 | tr -d '\n/+=')
  install -m 640 -o root -g kalpvan /dev/null /etc/kalpvan.env
  cat > /etc/kalpvan.env <<EOF
NODE_ENV=production
PORT=5000
MONGO_URI='$MONGO_URI'
JWT_SECRET='$JWT_SECRET'
ADMIN_EMAIL='admin@kalpvan.com'
ADMIN_PASSWORD='$ADMIN_PASSWORD'
EOF
  echo "ADMIN LOGIN  admin@kalpvan.com  /  $ADMIN_PASSWORD   (kept in /etc/kalpvan.env on the server)"
fi

chown -R kalpvan:kalpvan "$APP"
cd "$APP/backend"
runuser -u kalpvan -- env HOME="$APP" npm ci --omit=dev --no-audit --no-fund

set -a; . /etc/kalpvan.env; set +a

# Local database (chosen when no Atlas URI was given): MongoDB on this server, loopback only, password login, small cache for a 512 MiB box.
if [[ $MONGO_URI == *@127.0.0.1:27017/* ]]; then
  if ! command -v mongod >/dev/null; then
    curl -fsSL https://www.mongodb.org/static/pgp/server-8.0.asc | gpg --dearmor --yes -o /usr/share/keyrings/mongodb-server-8.0.gpg
    echo "deb [signed-by=/usr/share/keyrings/mongodb-server-8.0.gpg] https://repo.mongodb.org/apt/ubuntu noble/mongodb-org/8.0 multiverse" > /etc/apt/sources.list.d/mongodb-org-8.0.list
    $APT update
    $APT install mongodb-org-server
  fi
  mongod_conf() {   # $1 = enabled | disabled (password login); restarts MongoDB with it
    cat > /etc/mongod.conf <<EOF
storage:
  dbPath: /var/lib/mongodb
  wiredTiger:
    engineConfig:
      cacheSizeGB: 0.25
systemLog:
  destination: file
  logAppend: true
  path: /var/log/mongodb/mongod.log
net:
  port: 27017
  bindIp: 127.0.0.1
security:
  authorization: $1
EOF
    systemctl enable mongod >/dev/null 2>&1
    systemctl restart mongod
  }
  mongo_login() {   # exit 0 once the app's login works; creates it if missing and MongoDB allows it
    runuser -u kalpvan -- env MONGO_URI="$MONGO_URI" node - <<'JS'
const { MongoClient } = require('mongodb');
const u = new URL(process.env.MONGO_URI);
(async () => {
  try { await (await MongoClient.connect(process.env.MONGO_URI)).close(); return; }
  catch (e) { if (e.code !== 18) throw e; }
  const c = await MongoClient.connect(`mongodb://${u.host}/?directConnection=true`);
  await c.db('admin').command({ createUser: u.username, pwd: u.password, roles: [{ role: 'readWrite', db: 'kalpvan_live' }] });
  await c.close();
})().catch(e => { console.error(e.message); process.exit(1); });
JS
  }
  mongod_conf enabled
  # Fresh server: MongoDB refuses to create the first login with password login on, so run it without for a few seconds (loopback only, firewalled).
  if ! mongo_login 2>/dev/null; then
    mongod_conf disabled
    mongo_login || { mongod_conf enabled; exit 1; }
    mongod_conf enabled
  fi
fi

# First deploy only: load the 37 treatments into the empty database. importOldData refuses a non-empty collection.
if out=$(runuser -u kalpvan -- env MONGO_URI="$MONGO_URI" node importOldData.js seed/treatments.json treatments 2>&1); then
  echo "$out"
  runuser -u kalpvan -- env MONGO_URI="$MONGO_URI" node final_seq.js
elif [[ $out == *"refusing to import"* ]]; then
  :   # already loaded on an earlier deploy
else
  echo "$out"
  echo "Database check failed. Most likely this server's IP is not yet in Atlas > Network Access: add it and re-run the same command."
  echo "Wrong URI instead? Run: ssh root@<ip> rm /etc/kalpvan.env   and re-run to enter it again."
  exit 1
fi

cat > /etc/systemd/system/kalpvan.service <<EOF
[Unit]
Description=Kalpvan Ayurvedashram site
After=network-online.target
Wants=network-online.target

[Service]
User=kalpvan
WorkingDirectory=$APP/backend
EnvironmentFile=/etc/kalpvan.env
Environment=NODE_OPTIONS=--max-old-space-size=192
ExecStart=/usr/bin/node server.js
Restart=always
RestartSec=3

[Install]
WantedBy=multi-user.target
EOF

cat > /etc/caddy/Caddyfile <<EOF
$DOMAIN {
	encode zstd gzip
	reverse_proxy 127.0.0.1:5000
}

www.$DOMAIN {
	redir https://$DOMAIN{uri} permanent
}
EOF

systemctl daemon-reload
systemctl enable kalpvan >/dev/null 2>&1
systemctl restart kalpvan
systemctl reload caddy 2>/dev/null || systemctl restart caddy

for _ in $(seq 20); do
  curl -fs http://127.0.0.1:5000/api/treatments >/dev/null && { echo "App is up. https://$DOMAIN works once DNS points at this server."; exit 0; }
  sleep 1
done
echo "App did not answer. Logs: journalctl -u kalpvan -n 50 --no-pager"; exit 1
