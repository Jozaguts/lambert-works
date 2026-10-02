import images from "../../data/images.json";

export default function ResponsiveImage({ src, alt, sizes = "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 440px", loading = "lazy", ...props }) {
  const image = typeof src === "string" ? images[src] : src;
  const img = (
    <img
      src={image?.src ?? src}
      srcSet={image?.srcSet}
      width={image?.width}
      height={image?.height}
      sizes={image?.srcSet ? sizes : undefined}
      alt={alt}
      loading={loading}
      decoding="async"
      {...props}
    />
  );
  return image?.avifSrcSet ? (
    <picture>
      <source type="image/avif" srcSet={image.avifSrcSet} sizes={sizes} />
      {img}
    </picture>
  ) : img;
}
