import * as DashboardUI from "@components/dashboard"

import { Button } from "@design-system/molecules"
import { authOptions } from "@lib/auth"
import prisma from "@lib/prismadb"
import { getCurrentUser } from "@lib/session"
import { redirect } from "next/navigation"

export default async function PostsPage() {
  const user = await getCurrentUser()
  if (user?.userType !== "OWNER" || !user) {
    redirect(authOptions.pages.signIn)
  }

  const users = await prisma.user.findMany({
    where: {
      userType: {
        not: "OWNER",
      },
    },
  })

  return (
    <>
      <DashboardUI.Layout.DashboardHeader
        heading="User Management"
        text="Create and manage new users."
      >
        <Button.Link href="/owner/users/create">Create</Button.Link>
      </DashboardUI.Layout.DashboardHeader>
      <DashboardUI.Layout.DashboardContainer>
        <DashboardUI.UsersTable
          categories={["id", "name", "email", "userType"]}
          data={users}
        />
      </DashboardUI.Layout.DashboardContainer>
    </>
  )
}
