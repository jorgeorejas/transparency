import cn from "classnames"

export type DashboardContainerProps = {
  children: React.ReactNode
  type?: "default" | "grid-cols-2" | "grid-cols-3" | "grid-cols-4"
}

export function DashboardContainer({
  children,
  type = "default",
}: DashboardContainerProps) {
  const style = cn({
    "flex flex-col": type === "default",
    "grid grid-cols-2 gap-4": type === "grid-cols-2",
    "grid grid-cols-3 gap-4": type === "grid-cols-3",
    "grid grid-cols-4 gap-4": type === "grid-cols-4",
  })
  return <div className={style}>{children}</div>
}
