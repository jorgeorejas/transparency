import { authOptions } from "@lib/auth"
import { getCurrentUser } from "@lib/session"
import { stripe } from "@lib/stripe"
import { redirect } from "next/navigation"
import { cache } from "react"
import * as Tremor from "@tremor/react"
import { PriceCard } from "@components/dashboard/Card/PriceCard/PriceCard"
import { Card } from "@design-system/molecules"
import * as DashboardUI from "@components/dashboard"
import { Skeleton, Text } from "@design-system/atoms"
const getStripeSubscriptions = cache(async () => {
  return stripe.prices.list({})
})
export default async function PostsPage() {
  const user = await getCurrentUser()
  if (!user) {
    redirect(authOptions.pages.signIn)
  }

  return (
    <>
      <DashboardUI.Layout.DashboardTopBar>
        <Text>Create new price</Text>
      </DashboardUI.Layout.DashboardTopBar>
      <DashboardUI.Layout.DashboardContainer>
        <DashboardUI.Form.CreatePriceForm />
      </DashboardUI.Layout.DashboardContainer>
    </>
  )
}
