import { Section } from "@components/marketing"
import { Icon, Skeleton, Text } from "@design-system/atoms"
import { Button, Card } from "@design-system/molecules"
import { currencyFormatter } from "@utils/formatters"
import stripeInteractor from "@utils/stripeInteractor"
import { pricingFeatures } from "config/pricing"

export default async function BlogPage() {
  const stripe = new stripeInteractor()
  const products = await stripe.getProducts()
  if (!products) {
    return (
      <Section.Info header="We don't have prices yet.">
        <Skeleton className="w-full h-32" />
      </Section.Info>
    )
  }
  return (
    <Section.Info header="Our pricing" type="grid-cols-4" className="w-full">
      {products.map((product) => (
        <PriceCard key={product.id} product={product} />
      ))}
    </Section.Info>
  )
}

function PriceCard({ product }) {
  // select the pricing features that are available for this product by id
  const tier = pricingFeatures.filter((feature) =>
    feature.id.includes(product.id)
  )
  const goToCheckout = async () => {
    const res = await fetch(`/api/stripe/create-checkout-session`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        priceId: product.prices[0].id,
      }),
    })
    const { redirectUrl } = await res.json()
    if (redirectUrl) {
      window.location.assign(redirectUrl)
    } else {
      console.log("Error creating checkout session")
    }
  }
  return (
    <Card className="flex flex-col w-full gap-4">
      <div>
        <Text.Header htmlTag="h3">{product.name}</Text.Header>
        {product.description && <Text>{product.description}</Text>}
        {product.prices.length && (
          <Text.Header htmlTag="h5">
            Desde{" "}
            {currencyFormatter({
              locale: "es-ES",
              currency: product.prices[0].currency,
              value: product.prices[0].unit_amount,
            })}{" "}
            / mes
          </Text.Header>
        )}
      </div>
      <hr />
      <ul className="flex flex-col">
        {tier[0].features.map((feature, i) => (
          <Text key={i} className="inline-flex text-lg">
            <Icon
              name={feature.value ? "CheckCircleIcon" : "XCircleIcon"}
              className="w-6 h-6 mr-2"
            />
            {feature.name}
          </Text>
        ))}
      </ul>
      <Button className="justify-center" onClick={goToCheckout}>
        <Text>Join Plan</Text>
        <Icon name="ArrowLongRightIcon" isOutline className="w-4 h-6 ml-2" />
      </Button>
    </Card>
  )
}
