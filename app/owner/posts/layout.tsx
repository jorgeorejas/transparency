import { notFound } from "next/navigation"

import { Header } from "@components/marketing"
import { getCurrentUser } from "@lib/session"
import * as DashboardUI from "@components/dashboard"

interface DashboardLayoutProps {
  children?: React.ReactNode
  params: string
}

export default async function PostsLayout({
  params,
  children,
}: DashboardLayoutProps) {
  const user = await getCurrentUser()

  if (user?.userType !== "OWNER" || !user) {
    return notFound()
  }

  return (
    <>
      <DashboardUI.Layout.DashboardHeader
        heading="Posts"
        text="Create and manage posts."
      >
        <DashboardUI.Button.PostCreateButton userId={user.id} />
      </DashboardUI.Layout.DashboardHeader>
      {children}
    </>
  )
}
