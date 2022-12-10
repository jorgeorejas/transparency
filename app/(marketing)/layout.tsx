import { Header } from "@components/marketing/Header"
import { authOptions } from "@lib/auth"
import { getCurrentUser } from "@lib/session"
import { MktNav } from "config/mkt_nav"
import { useLiveReload } from "next-contentlayer/hooks"
import Link from "next/link"
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
      <div className="max-w-[90vw] mx-auto">
        {children}
        <pre>{JSON.stringify(user, null, 2)}</pre>
      </div>
    </>
  )
}
