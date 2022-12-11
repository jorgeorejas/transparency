"use client"

import { navigation } from "config/dashboard"
import cn from "classnames"
import { Icon } from "@design-system/atoms"
import Link from "next/link"
import { usePathname } from "next/navigation"
export type NavigationProps = {
  className?: string
}

export default function DashboardNavigation({ className }: NavigationProps) {
  const path = usePathname()

  const links = navigation.items
  if (!links?.length) {
    return null
  }

  return (
    <nav className="grid items-start gap-2">
      {links.map((link, index) => {
        return (
          <Link href={link.disabled ? "#" : link.url} key={index}>
            <span
              className={cn(
                "flex items-center px-3 py-2 text-sm font-medium rounded-md group text-slate-800 hover:bg-slate-100",
                path === link.url ? "bg-slate-200" : "transparent",
                link.disabled && "cursor-not-allowed opacity-80"
              )}
            >
              <Icon name={link.icon} className="w-6 h-6" />
              <span>{link.name}</span>
            </span>
          </Link>
        )
      })}
    </nav>
  )
}
