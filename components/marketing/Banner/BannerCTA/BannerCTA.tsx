"use client"

import { Section } from "@components/marketing"
import Image, { ImageProps } from "@design-system/atoms/Image/Image"
import Text from "@design-system/atoms/Text/Text"
import { Button } from "@design-system/molecules"

import { redirect } from "next/navigation"
export type BannerCTAProps = {
  img: ImageProps
  title: string
  description: string
  cta: string
  ctaDestination: string
  className?: string
  leftImg?: boolean
}

export default function BannerCTA({
  img,
  title,
  description,
  cta,
  ctaDestination,
  className,
  leftImg = false,
}: BannerCTAProps) {
  switch (leftImg) {
    case true: {
      return (
        <Section type="grid-cols-2" className={className}>
          <Image
            alt={img.alt}
            src={img.src}
            imgAspectRatio={img.imgAspectRatio}
            className="shrink-0"
          />
          <div className="flex flex-col w-4/5 gap-4">
            <Text.Header htmlTag="h2" className="w-full text-justify shrink-0">
              {title}
            </Text.Header>
            <Text.Header htmlTag="h4" className="text-justify">
              {description}
            </Text.Header>
            <Button
              onClick={() => redirect(ctaDestination)}
              className="mr-auto "
            >
              {cta}
            </Button>
          </div>
        </Section>
      )
      break
    }
    case false:
      return (
        <Section type="grid-cols-2" className={className}>
          <div className="flex flex-col w-4/5 gap-4">
            <Text.Header htmlTag="h2" className="w-full text-justify shrink-0">
              {title}
            </Text.Header>
            <Text.Header htmlTag="h4" className="text-justify">
              {description}
            </Text.Header>
            <Button
              onClick={() => redirect(ctaDestination)}
              className="mr-auto "
            >
              {cta}
            </Button>
          </div>
          <Image
            alt={img.alt}
            src={img.src}
            imgAspectRatio={img.imgAspectRatio}
            className="shrink-0"
          />
        </Section>
      )
  }
}
