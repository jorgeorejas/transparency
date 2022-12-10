import { notFound } from "next/navigation"

import { Header } from "@components/marketing"
import { getCurrentUser } from "@lib/session"

interface DashboardLayoutProps {
  children?: React.ReactNode
}

export default async function DashboardLayout({
  children,
}: DashboardLayoutProps) {
  const user = await getCurrentUser()

  if (user?.userType !== "OWNER" || !user) {
    return notFound()
  }

  return (
    <>
      <Header user={user} sticky={true} />
      {children}
    </>
  )
}
