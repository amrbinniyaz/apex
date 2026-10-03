import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import sharp from 'sharp';
import { responsiveImage, type ImageAsset } from '../lib/responsive-image.ts';

const inspectImage = sharp as (path: string) => {
  metadata(): Promise<{ format?: string; width?: number }>;
};

const assets = JSON.parse(
  await readFile(
    new URL('../lib/image-manifest.json', import.meta.url),
    'utf8',
  ),
) as Record<string, ImageAsset>;

await test('responsive candidates point to real WebP files with accurate width descriptors', async () => {
  for (const asset of Object.values(assets)) {
    const image = responsiveImage(asset);
    assert.ok(
      asset.widths.includes(Number(image.src.match(/-(\d+)\.webp$/)![1])),
    );
    for (const candidate of image.srcSet.split(', ')) {
      const [url, descriptor] = candidate.split(' ');
      const metadata = await inspectImage(
        new URL(`../public${url}`, import.meta.url).pathname,
      ).metadata();
      assert.equal(metadata.format, 'webp', url);
      assert.equal(metadata.width, Number(descriptor.slice(0, -1)), url);
    }
  }
});

await test('small original images are never advertised as enlarged candidates', () => {
  const image = responsiveImage({
    width: 326,
    height: 328,
    widths: [326],
    stem: 'portrait',
  });
  assert.equal(image.src, '/assets/responsive/portrait-326.webp');
  assert.equal(image.srcSet, '/assets/responsive/portrait-326.webp 326w');
});
