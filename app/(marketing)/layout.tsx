import { Header } from "@components/marketing/Header"
import { getCurrentUser } from "@lib/session"
import { TailwindIndicator } from "@utils/TailwindIndicator"
import { MktNav } from "config/mkt_nav"
import Link from "next/link"
import "@styles/globals.css"

export default async function MarketingLayout({
  children,
}: {
  children: React.ReactNode
}) {
  // on page load
  const user = await getCurrentUser()
  return (
    <>
      <Header user={user} sticky={true}>
        {MktNav.items.map((item) => (
          <Link key={item.name} href={item.url}>
            {item.name}
          </Link>
        ))}
      </Header>
      {children}
    </>
  )
}
