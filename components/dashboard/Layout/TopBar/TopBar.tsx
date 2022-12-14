"use client"
import { Icon } from "@design-system/atoms"
import { Button } from "@design-system/molecules"
import Link from "next/link"
import { usePathname } from "next/navigation"
export default function DashboardTopbar({
  children,
  editor = false,
}: {
  children: React.ReactNode
  editor?: boolean
}) {
  // should split the pathname and get the first two parts of the path joined with "/"
  const path = usePathname()
    .split("/")
    .slice(0, editor ? -2 : -1)
    .join("/")
  return (
    <div className="flex items-center justify-between w-full">
      <div className="flex items-center space-x-10">
        <Button.Link href={path} negative>
          <>
            <Icon name="ChevronLeftIcon" className="w-4 h-4 mr-2" />
            Back
          </>
        </Button.Link>
        <p>{children}</p>
      </div>
    </div>
  )
}
