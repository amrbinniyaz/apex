import assert from 'node:assert/strict';
const origin = process.argv[2] || 'http://127.0.0.1:4173';
for (const route of ['/', '/visit-us', '/apply-now']) {
  const response = await fetch(new URL(route, origin));
  assert.equal(response.status, 200, route);
  const html = await response.text();
  assert.equal(
    (html.match(/<h1\b/g) || []).length,
    1,
    `${route}: one primary heading`,
  );
  assert.match(html, /<link[^>]+rel="canonical"/);
  assert.match(html, /application\/ld\+json/);
  assert.doesNotMatch(html, /noindex|pgs\.org\.uk|Portsmouth/);
  assert.match(html, /assets\/responsive\//);
  console.log(`${route}: rendered with metadata and responsive images`);
}
const robots = await fetch(new URL('/robots.txt', origin));
assert.equal(robots.status, 200);
assert.match(
  await robots.text(),
  /Sitemap: https:\/\/apexinternationalschool.org\/sitemap.xml/,
);
const sitemap = await fetch(new URL('/sitemap.xml', origin));
assert.equal(sitemap.status, 200);
const xml = await sitemap.text();
assert.equal((xml.match(/<loc>/g) || []).length, 3);
console.log('Robots and sitemap: correct');
const image = await fetch(
  new URL('/assets/responsive/apex-cinematic-hero-v2-800.webp', origin),
);
assert.equal(image.status, 200);
assert.match(image.headers.get('content-type'), /image\/webp/);
console.log('Responsive WebP: served directly');
const endpoint = new URL('/api/enquiries', origin);
for (const [headers, body, status] of [
  [{ 'Content-Type': 'application/json' }, '{}', 403],
  [{ 'Content-Type': 'application/json', Origin: origin }, '{', 400],
  [{ 'Content-Type': 'application/json', Origin: origin }, '{}', 400],
  [{ 'Content-Type': 'text/plain', Origin: origin }, '{}', 415],
  [
    { 'Content-Type': 'application/json', Origin: origin },
    'x'.repeat(9000),
    413,
  ],
]) {
  const response = await fetch(endpoint, { method: 'POST', headers, body });
  assert.equal(response.status, status);
}
console.log(
  'Enquiry API: rejects invalid origin, malformed, invalid and oversized requests',
);
