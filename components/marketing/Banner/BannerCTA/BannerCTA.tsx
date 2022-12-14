"use client"

import { Section } from "@components/marketing"
import Image, { ImageProps } from "@design-system/atoms/Image/Image"
import Text from "@design-system/atoms/Text/Text"
import { Button } from "@design-system/molecules"

import { redirect } from "next/navigation"
export type BannerCTAProps = {
  img: ImageProps
  title: string
  description: string[]
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
          <BannerImage />
          <BannerText />
        </Section>
      )
    }
    case false:
      return (
        <Section type="grid-cols-2" className={className}>
          <BannerText />
          <BannerImage />
        </Section>
      )
  }

  function BannerImage() {
    return (
      <Image
        alt={img.alt}
        src={img.src}
        imgAspectRatio={img.imgAspectRatio}
        className="shrink-0"
      />
    )
  }

  function BannerText() {
    return (
      <div className="flex flex-col gap-4 md:w-4/5">
        <Text.Header htmlTag="h2" className="w-full text-justify shrink-0">
          {title}
        </Text.Header>
        {description.map((text, index) => (
          <Text key={index} className="text-justify">
            {text}
          </Text>
        ))}
        <Button.Link
          href={ctaDestination}
          className="mr-auto hover:cursor-pointer"
        >
          {cta}
        </Button.Link>
      </div>
    )
  }
}
