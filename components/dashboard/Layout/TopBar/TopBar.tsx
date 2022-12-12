"use client"
import { Icon } from "@design-system/atoms"
import Link from "next/link"
import { usePathname } from "next/navigation"
export default function DashboardTopbar({
  children,
}: {
  children: React.ReactNode
}) {
  // should split the pathname and get the first two parts of the path joined with "/"
  const path = usePathname().split("/").slice(0, -1).join("/")
  return (
    <div className="flex items-center justify-between w-full">
      <div className="flex items-center space-x-10">
        <Link
          href={path}
          className="inline-flex items-center py-2 pl-3 pr-5 text-sm font-medium bg-transparent border border-transparent rounded-lg text-slate-900 hover:border-slate-200 hover:bg-slate-100 focus:z-10 focus:outline-none focus:ring-4 focus:ring-slate-200 dark:border-slate-600 dark:bg-slate-800 dark:text-slate-400 dark:hover:bg-slate-700 dark:hover:text-white dark:focus:ring-slate-700"
        >
          <>
            <Icon name="ChevronLeftIcon" className="w-4 h-4 mr-2" />
            Back
          </>
        </Link>
        <p>{children}</p>
      </div>
    </div>
  )
}
