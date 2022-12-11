"use client"
import cn from "classnames"
import { navUrls } from "config/owner"
import { usePathname } from "next/navigation"
import { DashboardNavigation } from "../Navigation"

export type PanelProps = {
  children: React.ReactNode
  className?: string
}

export default function DashboardPanel({ children, className }: PanelProps) {
  const style = cn(
    "max-w-[90vw] mx-auto grid gap-12 md:grid-cols-[200px_1fr]",
    className
  )
  const path = usePathname()

  if (!navUrls.includes(path)) {
    return <div className="max-w-[90vw] mx-auto">{children}</div>
  }
  return (
    <div className={style}>
      <aside>
        <DashboardNavigation />
      </aside>
      {children}
    </div>
  )
}
