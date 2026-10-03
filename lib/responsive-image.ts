export type ImageAsset = {
  width: number;
  height: number;
  widths: number[];
  stem: string;
};

/** Supply real width candidates so the browser can choose for its viewport and DPR. */
export function responsiveImage(asset: ImageAsset) {
  const url = (width: number) =>
    `/assets/responsive/${asset.stem}-${width}.webp`;
  const fallback =
    asset.widths.find((width) => width >= 800) ?? asset.widths.at(-1)!;
  return {
    src: url(fallback),
    srcSet: asset.widths.map((width) => `${url(width)} ${width}w`).join(', '),
  };
}
