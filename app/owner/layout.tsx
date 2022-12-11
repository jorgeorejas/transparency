import { notFound } from "next/navigation"

import { Header } from "@components/marketing"
import { getCurrentUser } from "@lib/session"
import * as DashboardUI from "@components/dashboard"
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
    return notFound()
  }

  return (
    <div className="min-h-screen space-y-6">
      <Header user={user} sticky={true} />
      <DashboardUI.Layout.DashboardPanel>
        {children}
      </DashboardUI.Layout.DashboardPanel>
    </div>
  )
}
