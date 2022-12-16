import { Banner, PriceCard, Section } from "@components/marketing"
import { getCurrentUser } from "@lib/session"
import stripeInteractor from "@utils/stripeInteractor"
import { landingHero } from "config/marketing"

export default async function MyPage() {
  const stripe = new stripeInteractor()
  const products = await stripe.getProducts()
  const user = getCurrentUser()
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
      <Section.Info header="Our pricing" type="grid-cols-4" className="w-full">
        {products &&
          products.map((product) => (
            <PriceCard key={product.id} product={product} />
          ))}
      </Section.Info>
    </>
  )
}
