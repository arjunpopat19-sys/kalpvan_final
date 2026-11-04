const fs = require('fs');
const path = require('path');

const frontendDir = path.resolve(__dirname, '..');
const treatmentsFilePath = path.join(frontendDir, 'src/data/treatments.ts');
const publicDir = path.join(frontendDir, 'public');

if (!fs.existsSync(treatmentsFilePath)) {
  console.error('File not found:', treatmentsFilePath);
  process.exit(1);
}

const content = fs.readFileSync(treatmentsFilePath, 'utf8');

// Extract all treatment IDs
const regex = /"?treatmentId"?\s*:\s*["']([^"']+)["']/g;
const ids = [];
let match;
while ((match = regex.exec(content)) !== null) {
  if (!ids.includes(match[1])) {
    ids.push(match[1]);
  }
}

const domain = 'https://kalpvanayurvedashram.com';
const today = new Date().toISOString().split('T')[0];

const staticPages = [
  { path: '', priority: '1.0', changefreq: 'weekly' },
  { path: '/treatments', priority: '0.9', changefreq: 'weekly' },
  { path: '/about', priority: '0.8', changefreq: 'monthly' },
  { path: '/appointment', priority: '0.9', changefreq: 'weekly' },
  { path: '/contact', priority: '0.8', changefreq: 'monthly' },
];

let xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9
        http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
`;

// Add static pages
for (const p of staticPages) {
  xml += `  <url>
    <loc>${domain}${p.path}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${p.changefreq}</changefreq>
    <priority>${p.priority}</priority>
  </url>\n`;
}

// Add all treatment pages
for (const id of ids) {
  xml += `  <url>
    <loc>${domain}/treatments/${encodeURIComponent(id)}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>\n`;
}

xml += `</urlset>\n`;

fs.writeFileSync(path.join(publicDir, 'sitemap.xml'), xml, 'utf8');
console.log(`✓ Generated sitemap.xml with ${staticPages.length + ids.length} URLs in ${publicDir}`);

const robots = `User-agent: *
Allow: /
Disallow: /admin
Disallow: /admin/
Disallow: /login
Disallow: /register

# Search Engine Crawlers
User-agent: Googlebot
Allow: /

User-agent: Bingbot
Allow: /

Sitemap: ${domain}/sitemap.xml
`;

fs.writeFileSync(path.join(publicDir, 'robots.txt'), robots, 'utf8');
console.log(`✓ Updated robots.txt in ${publicDir}`);
