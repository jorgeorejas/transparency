"use client"

import { Section } from "@components/marketing"
import Image, { ImageProps } from "@design-system/atoms/Image/Image"
import Text from "@design-system/atoms/Text/Text"
import { Button } from "@design-system/molecules"

import { redirect } from "next/navigation"
export type BannerBlogProps = {
  img: ImageProps
  title: string
  description: string
  className?: string
  leftImg?: boolean
  hasCTA?: boolean
  id?: string
}

export default function BannerBlog({
  img,
  title,
  description,
  className,
  leftImg = false,
  hasCTA = false,
  id,
}: BannerBlogProps) {
  switch (leftImg) {
    case true: {
      return (
        <Section type="grid-cols-2" className={className} id={id}>
          <BannerImage />
          <BannerText hasCTA={hasCTA} />
        </Section>
      )
    }
    case false:
      return (
        <Section type="grid-cols-2" className={className} id={id}>
          <BannerText hasCTA={hasCTA} />
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

  function BannerText({ hasCTA = false }: { hasCTA?: boolean }) {
    return (
      <div className="flex flex-col w-4/5 gap-4">
        <Text.Header htmlTag="h2" className="w-full text-justify shrink-0">
          {title}
        </Text.Header>
        <Text.Header htmlTag="h4" className="text-justify">
          {description}
        </Text.Header>
        {hasCTA && (
          <div className="flex gap-4">
            <Button.Link href="/blog#latest">Latest Posts</Button.Link>
            <Button.Link href="/blog#featured">Featured Posts</Button.Link>
          </div>
        )}
      </div>
    )
  }
}
