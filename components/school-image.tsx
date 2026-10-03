'use client';

import type { ComponentProps } from 'react';
import { preload as preloadImage } from 'react-dom';
import manifest from '@/lib/image-manifest.json';
import { responsiveImage, type ImageAsset } from '@/lib/responsive-image';

type SchoolImageProps = Omit<ComponentProps<'img'>, 'src' | 'srcSet'> & {
  src: string;
  alt: string;
  fill?: boolean;
  preload?: boolean;
};
const assets: Record<string, ImageAsset> = manifest;

/** Native responsive markup keeps image selection independent of the host's image shim. */
export function SchoolImage({
  src,
  alt,
  sizes = '100vw',
  fill = false,
  preload = false,
  loading,
  fetchPriority,
  width,
  height,
  style,
  ...props
}: SchoolImageProps) {
  const asset = assets[src];
  const image = asset ? responsiveImage(asset) : { src, srcSet: undefined };
  if (preload) {
    preloadImage(image.src, {
      as: 'image',
      imageSrcSet: image.srcSet,
      imageSizes: asset ? sizes : undefined,
      fetchPriority: 'high',
    });
  }
  return (
    // Generated WebP srcsets are intentional: Vinext's custom loader omits srcset.
    // oxlint-disable-next-line next/no-img-element
    <img
      {...props}
      alt={alt}
      width={fill ? undefined : (width ?? asset?.width)}
      height={fill ? undefined : (height ?? asset?.height)}
      loading={loading ?? (preload ? 'eager' : 'lazy')}
      decoding="async"
      fetchPriority={fetchPriority ?? (preload ? 'high' : undefined)}
      sizes={asset ? sizes : undefined}
      style={
        fill
          ? {
              position: 'absolute',
              inset: 0,
              width: '100%',
              height: '100%',
              ...style,
            }
          : style
      }
      srcSet={image.srcSet}
      src={image.src}
    />
  );
}
