#!/usr/bin/env bash
# Run on your PC (Git Bash) from anywhere:  bash deploy/deploy.sh <droplet-ip> <domain>
# Builds the site, uploads it to the droplet over SSH, installs or updates it there. Re-run it for every update.
set -euo pipefail
IP=${1:?usage: bash deploy/deploy.sh <droplet-ip> <domain>}
DOMAIN=${2:?usage: bash deploy/deploy.sh <droplet-ip> <domain>}
cd "$(dirname "$0")/.."
SSH_OPTS=(-o StrictHostKeyChecking=accept-new)

# The database URI is asked only the first time (the server keeps it in /etc/kalpvan.env afterwards).
URI=""; rc=0
ssh -n "${SSH_OPTS[@]}" "root@$IP" 'test -f /etc/kalpvan.env' || rc=$?
[ "$rc" -ne 255 ] || { echo "Cannot SSH to root@$IP. Check the IP, and that the droplet was created with your SSH key."; exit 1; }
if [ "$rc" -ne 0 ]; then
  read -rsp "Paste your Atlas MONGO_URI (must end /kalpvan_live?...), or just press Enter to run MongoDB on the server itself: " URI; echo
  if [ -n "$URI" ]; then
    [[ $URI =~ ^mongodb(\+srv)?://[^/]+/[^/?]+ ]] || { echo "The URI needs a database name after the host, e.g. ...mongodb.net/kalpvan_live?retryWrites=true"; exit 1; }
    [[ $URI != *"'"* ]] || { echo "The URI must not contain a single quote"; exit 1; }
  fi
fi

(cd frontend && { [ -d node_modules ] || npm ci --include=dev; } && npm run build)

tar -czf kalpvan.tgz --exclude=node_modules --exclude=.env --exclude=backend/uploads backend frontend/dist deploy/remote.sh
scp "${SSH_OPTS[@]}" kalpvan.tgz "root@$IP:/root/kalpvan.tgz"
rm -f kalpvan.tgz

printf '%s\n' "$URI" | ssh "${SSH_OPTS[@]}" "root@$IP" \
  "mkdir -p /opt/kalpvan && rm -rf /opt/kalpvan/frontend/dist && tar -xzf /root/kalpvan.tgz -C /opt/kalpvan && bash /opt/kalpvan/deploy/remote.sh '$DOMAIN'"
