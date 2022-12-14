import * as DashboardUI from "@components/dashboard"

import { Text } from "@design-system/atoms"
import { Button } from "@design-system/molecules"
import { authOptions } from "@lib/auth"
import { getCurrentUser } from "@lib/session"
import { redirect } from "next/navigation"

export default async function PostsPage() {
  const user = await getCurrentUser()
  if (user?.userType !== "OWNER" || !user) {
    redirect(authOptions.pages.signIn)
  }

  return (
    <>
      <DashboardUI.Layout.DashboardHeader
        heading="Billing"
        text="Create and manage subscription tiers."
      >
        <Button.Link href="https://dashboard.stripe.com" target="_blank">
          Visit Stripe
        </Button.Link>
      </DashboardUI.Layout.DashboardHeader>
      <DashboardUI.Layout.DashboardContainer
        type="grid-cols-3"
        className="grid-rows-5"
      >
        <Text.Header htmlTag="h1">WIP</Text.Header>
      </DashboardUI.Layout.DashboardContainer>
    </>
  )
}
