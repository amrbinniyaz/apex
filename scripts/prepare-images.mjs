import fs from 'node:fs/promises';
import path from 'node:path';
import sharp from 'sharp';

const files = [
  'apex-kickboxing-cinematic-hero.webp',
  'achievements/apex-it-fest-achievers.webp',
  'achievements/apex-kickboxing-medallists.webp',
  'results/class-of-2026.webp',
  'results/nehan-bin-shibil.webp',
  'results/liyan-firoz-np.webp',
  'results/amaan-iskander.webp',
  'results/class-results-2025-26.webp',
  'results/toppers-2025-26.webp',
  'results/perfect-scores-2025-26.webp',
  'results/student-results-2025-26.webp',
  'apex-art-cinematic-hero.png',
  'apex-art-cinematic-hero-mobile.png',
  'activities/taekwondo.webp',
  'activities/school-radio.webp',
  'activities/art-and-craft.webp',
  'activities/skating.webp',
  'activities/chess.webp',
  'apex-creativity-hero-v2.png',
  'apex-skating-editorial-hero.png',
  'apex-cinematic-hero-v2.png',
  'apex-skating-hero.png',
  'apex-campus-pencil.png',
  'apex-chapter-illustration-transparent.png',
  'apex-possibilities-illustration.png',
  'apex-campus-source.jpg',
  'apex-cinematic-source.jpg',
  'apex-skating-source.png',
  'apex-video-campus.jpg',
  '07a6dcb8-4d03-4929-a681-785467613806.JPG',
  'cab4df71-3a80-47cc-8d48-e48c96e9e7a9.JPG',
  'library/art-original-2019.jpg',
  'library/art-talent-2022.jpg',
  'library/chess-day-2024.jpg',
  'library/guitar-talent-2022.jpg',
  'library/skating-original-2019.jpg',
  'library/taekwondo-original-2019.jpg',
  'library/school-radio-original-2019.jpg',
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
