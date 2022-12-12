import * as DashboardUI from "@components/dashboard"
import { authOptions } from "@lib/auth"
import { getCurrentUser } from "@lib/session"
import { stripe } from "@lib/stripe"
import { redirect } from "next/navigation"
import { cache } from "react"
import * as Tremor from "@tremor/react"

const getStripeSubscriptions = cache(async () => {
  return stripe.prices.list({})
})
export default async function PostsPage() {
  const user = await getCurrentUser()
  if (!user) {
    redirect(authOptions.pages.signIn)
  }
  const prices = await getStripeSubscriptions()
  const processedPrices = prices.data.map((price) => {
    return {
      id: price.id,
      name: price.nickname || "Price",
      price: price.unit_amount,
      currency: price.currency,
      interval: price.recurring.interval,
    }
  })
  return (
    <>
      <DashboardUI.Layout.DashboardHeader
        heading="Billing"
        text="Create and manage subscription tiers."
      />
      <DashboardUI.Layout.DashboardContainer>
        <pre>{JSON.stringify(processedPrices, null, 2)}</pre>
      </DashboardUI.Layout.DashboardContainer>
    </>
  )
}
