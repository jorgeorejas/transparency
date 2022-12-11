"use client"

import { navigation } from "config/owner"
import cn from "classnames"
import { Icon } from "@design-system/atoms"
import Link from "next/link"
import { usePathname } from "next/navigation"
export type NavigationProps = {
  className?: string
}

export default function DashboardNavigation({ className }: NavigationProps) {
  const path = usePathname()

  const items = navigation.items
  if (!items?.length) {
    return null
  }

  return (
    <nav className="grid items-start gap-2">
      {items.map((item, index) => {
        switch (item.type) {
          case "link":
            return (
              <Link href={item.disabled ? "#" : item.url} key={index}>
                <span
                  className={cn(
                    "flex items-center px-3 py-2 text-sm font-medium rounded-md group text-slate-800 hover:bg-slate-100",
                    path === item.url ? "bg-slate-200" : "transparent",
                    item.disabled && "cursor-not-allowed opacity-80"
                  )}
                >
                  <Icon name={item.icon} className="w-4 h-4 mr-2" />
                  <span>{item.name}</span>
                </span>
              </Link>
            )
          case "divider": {
            if (item.divider === "hr") {
              return <hr key={index} className="my-2" />
            } else {
              return <div key={index} className="h-4" />
            }
          }
        }
      })}
    </nav>
  )
}
