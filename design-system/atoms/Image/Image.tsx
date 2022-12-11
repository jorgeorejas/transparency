/* eslint-disable @next/next/no-img-element */

import cn from "classnames"

export type ImageProps = {
  className?: string
  imgAspectRatio?:
    | "video"
    | "crt"
    | "square"
    | "panoramic"
    | "mac"
    | "ultraPanoramic"
  src: string
  alt: string
  imgClassname?: string
}

export default function Image({
  className,
  imgAspectRatio,
  imgClassname,
  src,
  alt,
}: ImageProps) {
  const containerStyle = cn(className, "rounded-lg overflow-hidden shadow", {
    "aspect-video": imgAspectRatio === "video",
    "aspect-crt": imgAspectRatio === "crt",
    "aspect-square": imgAspectRatio === "square",
    "aspect-panoramic": imgAspectRatio === "panoramic",
    "aspect-ultrapanoramic": imgAspectRatio === "ultraPanoramic",
    "aspect-mac": imgAspectRatio === "mac",
  })

  const imgStyle = cn("object-cover h-full w-full", imgClassname)

  return (
    <div className={containerStyle}>
      <img src={src} className={imgStyle} alt={alt} />
    </div>
  )
}
