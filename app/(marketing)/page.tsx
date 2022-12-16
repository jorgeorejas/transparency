import { Banner } from "@components/marketing"
import { landingHero } from "config/marketing"
export default function MyPage() {
  return (
    <>
      <Banner.BannerCTA
        img={landingHero.img}
        title={landingHero.title}
        description={landingHero.description}
        cta={landingHero.cta}
        ctaDestination={landingHero.ctaDestination}
        className="md:min-h-80"
      />
    </>
  )
}
