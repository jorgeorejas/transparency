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
  rounded?: boolean
}

export default function Image({
  className,
  imgAspectRatio,
  rounded = true,
  src,
  alt,
}: ImageProps) {
  const containerStyle = cn(
    "overflow-hidden shadow",
    {
      "aspect-video": imgAspectRatio === "video",
      "aspect-crt": imgAspectRatio === "crt",
      "aspect-square": imgAspectRatio === "square",
      "aspect-panoramic": imgAspectRatio === "panoramic",
      "aspect-ultrapanoramic": imgAspectRatio === "ultraPanoramic",
      "aspect-mac": imgAspectRatio === "mac",
      "rounded-lg": rounded,
    },
    className
  )

  return (
    <div className={containerStyle}>
      <img src={src} className="object-cover w-full h-full" alt={alt} />
    </div>
  )
}
