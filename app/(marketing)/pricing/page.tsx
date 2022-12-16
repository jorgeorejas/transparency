import { Section } from "@components/marketing"
import { PriceCard } from "@components/marketing/PriceCard"
import { getCurrentUser } from "@lib/session"
import stripeInteractor from "@utils/stripeInteractor"

export default async function Pricing() {
  const stripe = new stripeInteractor()
  const products = await stripe.getProducts()
  const user = getCurrentUser()
  return (
    <Section.Info header="Our pricing" type="grid-cols-4" className="w-full">
      {products.map((product) => (
        <PriceCard key={product.id} product={product} />
      ))}
    </Section.Info>
  )
}
