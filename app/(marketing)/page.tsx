import { Banner, Section } from "@components/marketing"
import { Image, Text } from "@design-system/atoms"
import { ImageProps } from "@design-system/atoms/Image/Image"
import { pageInfo } from "config/page"

export default function MyPage() {
  const bannerImg: ImageProps = {
    alt: "banner image",
    src: "https://picsum.photos/seed/hr/1920/1080",
    imgAspectRatio: "crt",
  }
  return (
    <div>
      <Banner.BannerCTA
        img={bannerImg}
        title={pageInfo.title}
        description={pageInfo.description}
        cta="Get Started"
        ctaDestination={"/"}
        className="min-h-80"
      />
    </div>
  )
}
