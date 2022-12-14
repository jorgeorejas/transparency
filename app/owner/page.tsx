import * as DashboardUI from "@components/dashboard"
import { Text } from "@design-system/atoms"
import { Card } from "@design-system/molecules"
import { authOptions } from "@lib/auth"
import { getCurrentUser } from "@lib/session"
import { redirect } from "next/navigation"

export default async function DashboardPage() {
  const user = await getCurrentUser()
  if (!user || user?.userType !== "OWNER") {
    redirect(authOptions.pages.signIn)
  }

  return (
    <>
      <DashboardUI.Layout.DashboardHeader
        heading="Dashboard"
        text={`Welcome back, ${user.name}!`}
      />
      <DashboardUI.Layout.DashboardContainer
        type="grid-cols-2"
        className="h-full"
      >
        <Card>
          <Text>Card 1</Text>
        </Card>
        <Card>
          <Text>Card 2</Text>
        </Card>
        <Card>
          <Text>Card 3</Text>
        </Card>
        <Card>
          <Text>Card 4</Text>
        </Card>
      </DashboardUI.Layout.DashboardContainer>
    </>
  )
}
