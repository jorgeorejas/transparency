import { Banner, Section } from "@components/marketing"
import { Image, Text } from "@design-system/atoms"
import { ImageProps } from "@design-system/atoms/Image/Image"
import { pageInfo } from "config/page"
import { landingHero } from "config/marketing"
export default function MyPage() {
  return (
    <div>
      <Banner.BannerCTA
        img={landingHero.img}
        title={landingHero.title}
        description={landingHero.description}
        cta={landingHero.cta}
        ctaDestination={landingHero.ctaDestination}
        className="min-h-80"
      />
    </div>
  )
}
