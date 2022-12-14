import { notFound, redirect } from "next/navigation"

import { Header } from "@components/marketing"
import { getCurrentUser } from "@lib/session"
import * as DashboardUI from "@components/dashboard"
import { authOptions } from "@lib/auth"
import Link from "next/link"
interface DashboardLayoutProps {
  children?: React.ReactNode
  params: string
}

export default async function DashboardLayout({
  params,
  children,
}: DashboardLayoutProps) {
  const user = await getCurrentUser()

  if (user?.userType !== "OWNER" || !user) {
    redirect(authOptions.pages.signIn)
  }

  return (
    <div className="min-h-screen space-y-6">
      <Header user={user} sticky={false}>
        <Link href="/">Home</Link>
      </Header>
      <DashboardUI.Layout.DashboardPanel>
        {children}
      </DashboardUI.Layout.DashboardPanel>
    </div>
  )
}
