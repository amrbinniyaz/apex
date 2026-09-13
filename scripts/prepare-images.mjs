import fs from 'node:fs/promises';
import path from 'node:path';
import sharp from 'sharp';

const files = [
  'apex-cinematic-hero-v2.png',
  'apex-skating-hero.png',
  'apex-campus-pencil.png',
  'apex-chapter-illustration.png',
  'apex-possibilities-illustration.png',
  'apex-campus-source.jpg',
  'apex-cinematic-source.jpg',
  'apex-skating-source.png',
  'apex-video-campus.jpg',
];
const manifest = {};
let originalBytes = 0;
let largestVariantBytes = 0;
await fs.mkdir('public/assets/responsive', { recursive: true });
for (const file of files) {
  const input = path.join('public/assets', file);
  const metadata = await sharp(input).metadata();
  const widths = [
    ...new Set(
      [480, 800, 1200, Math.min(1680, metadata.width)].filter(
        (width) => width <= metadata.width,
      ),
    ),
  ].sort((a, b) => a - b);
  const stem = path.parse(file).name;
  for (const width of widths) {
    await sharp(input)
      .resize({ width, withoutEnlargement: true })
      .webp({ quality: 82 })
      .toFile(`public/assets/responsive/${stem}-${width}.webp`);
  }
  manifest[`/assets/${file}`] = {
    width: metadata.width,
    height: metadata.height,
    widths,
    stem,
  };
  originalBytes += (await fs.stat(input)).size;
  largestVariantBytes += (
    await fs.stat(`public/assets/responsive/${stem}-${widths.at(-1)}.webp`)
  ).size;
}
await fs.writeFile(
  'lib/image-manifest.json',
  JSON.stringify(manifest, null, 2) + '\n',
);
console.log(
  JSON.stringify({ images: files.length, originalBytes, largestVariantBytes }),
);
