import { authOptions } from "@lib/auth"
import { getCurrentUser } from "@lib/session"
import { stripe } from "@lib/stripe"
import { redirect } from "next/navigation"
import { cache } from "react"
import * as Tremor from "@tremor/react"
import { PriceCard } from "@components/dashboard/Card/PriceCard/PriceCard"
import { Button, Card } from "@design-system/molecules"
import * as DashboardUI from "@components/dashboard"
import { Skeleton } from "@design-system/atoms"
const getStripeSubscriptions = cache(async () => {
  return stripe.prices.list({})
})
export default async function PostsPage() {
  const user = await getCurrentUser()
  if (!user) {
    redirect(authOptions.pages.signIn)
  }
  const { data } = await getStripeSubscriptions()
  const processedPrices = data.map((price) => {
    return {
      id: price.id,
      nickname: price.nickname || "Price",
      unit_amount: price.unit_amount / 100,
      currency: price.currency,
      recurring: {
        interval: price.recurring.interval,
        interval_count: price.recurring.interval_count,
      },
      active: price.active,
    }
  })
  return (
    <>
      <DashboardUI.Layout.DashboardHeader
        heading="Billing"
        text="Create and manage subscription tiers."
      >
        <Button.Link href="/owner/billing/create">Create Price</Button.Link>
      </DashboardUI.Layout.DashboardHeader>
      <DashboardUI.Layout.DashboardContainer>
        {processedPrices?.length ? (
          <Card className="border divide-y rounded-md divide-neutral-200 border-slate-200">
            {processedPrices.map((price, i) => (
              <PriceCard price={price} key={i} />
            ))}
          </Card>
        ) : (
          <Card>
            <Skeleton />
          </Card>
        )}
      </DashboardUI.Layout.DashboardContainer>
    </>
  )
}
