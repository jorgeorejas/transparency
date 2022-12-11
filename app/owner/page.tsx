import * as DashboardUI from "@components/dashboard"
import { Text } from "@design-system/atoms"
import { authOptions } from "@lib/auth"
import prisma from "@lib/prismadb"
import { getCurrentUser } from "@lib/session"
import { User } from "@prisma/client"
import { redirect } from "next/navigation"
import { cache } from "react"

export default async function DashboardPage() {
  const user = await getCurrentUser()
  if (!user) {
    redirect(authOptions.pages.signIn)
  }

  return (
    <DashboardUI.Layout.DashboardContainer>
      <div>
        <Text.Header htmlTag="h2">Hola</Text.Header>
      </div>
    </DashboardUI.Layout.DashboardContainer>
  )
}
