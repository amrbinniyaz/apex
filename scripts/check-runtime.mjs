import assert from 'node:assert/strict';
const origin = process.argv[2] || 'http://127.0.0.1:4173';
const routes = [
  '/',
  '/about',
  '/visit-us',
  '/apply-now',
  '/contact-us',
  '/results',
  '/life-at-apex',
  '/life-at-apex/art-and-craft',
  '/life-at-apex/skating',
  '/life-at-apex/chess',
  '/life-at-apex/taekwondo',
  '/life-at-apex/school-radio',
];
for (const route of routes) {
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
  assert.doesNotMatch(html, /noindex/);
  assert.match(html, /Apex International School/);
  assert.match(html, /assets\/responsive\//);
  for (const imageTag of html.match(/<img\b[^>]*>/g) || []) {
    if (imageTag.includes('/assets/responsive/')) {
      assert.match(
        imageTag,
        /srcSet=|srcset=/,
        `${route}: responsive image candidates`,
      );
    }
  }
  const stylesheet = html.match(/<link[^>]+href="([^"]+\.css)"/);
  assert.ok(stylesheet, `${route}: stylesheet`);
  if (route === '/') {
    for (const encoding of ['gzip', 'br']) {
      const css = await fetch(new URL(stylesheet[1], origin), {
        headers: { 'Accept-Encoding': encoding },
      });
      assert.equal(css.status, 200);
      assert.equal(css.headers.get('content-encoding'), encoding);
      assert.ok(
        Number(css.headers.get('content-length')) < 60000,
        'compressed CSS below 60 KB',
      );
      await css.arrayBuffer();
    }
    assert.ok(!html.includes('.ttf'), 'modern WOFF2 fonts');
    const scenes = html.match(/class="home-life-scene"[\s\S]*?<\/div>/g) || [];
    assert.equal(
      scenes.filter((scene) => scene.includes('<img')).length,
      1,
      'only the active activity image is loaded',
    );
  }
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
assert.equal((xml.match(/<loc>/g) || []).length, routes.length);
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

const font = await fetch(new URL('/assets/lora-regular.woff2', origin));
assert.equal(font.status, 200);
assert.match(font.headers.get('cache-control') || '', /max-age=604800/);
assert.match(image.headers.get('cache-control') || '', /max-age=604800/);
console.log(
  'Performance: responsive srcsets, compressed CSS, WOFF2 fonts and asset caching verified',
);
