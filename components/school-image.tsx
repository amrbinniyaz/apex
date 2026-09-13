'use client';

import Image, { type ImageLoaderProps, type ImageProps } from 'next/image';
import manifest from '@/lib/image-manifest.json';

type ImageAsset = {
  width: number;
  height: number;
  widths: number[];
  stem: string;
};
const assets: Record<string, ImageAsset> = manifest;

function localImageLoader({ src, width }: ImageLoaderProps) {
  const asset = assets[src];
  if (!asset) return src;
  const selected =
    asset.widths.find((candidate) => candidate >= width) ??
    asset.widths[asset.widths.length - 1];
  return `/assets/responsive/${asset.stem}-${selected}.webp`;
}

/** Pre-generated responsive images work on every host without an image service. */
export function SchoolImage({ src, sizes = '100vw', ...props }: ImageProps) {
  const asset = typeof src === 'string' ? assets[src] : undefined;
  return (
    <Image
      {...props}
      src={src}
      sizes={asset ? sizes : undefined}
      loader={asset ? localImageLoader : undefined}
    />
  );
}
