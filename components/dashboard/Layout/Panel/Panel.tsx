"use client"
import cn from "classnames"
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

  return (
    <div className={style}>
      <aside>
        <DashboardNavigation />
      </aside>
      {children}
    </div>
  )
}
