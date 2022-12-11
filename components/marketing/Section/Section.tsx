import cn from "classnames"

export type SectionProps = {
  children: React.ReactNode
  type?: "default" | "grid-cols-2" | "grid-cols-3" | "grid-cols-4" | "grid-cols"
  className?: string
}

export default function Section({
  children,
  type = "default",
  className,
}: SectionProps) {
  const style = cn(
    "max-w-[90vw] mx-auto mt-4 items-center justify-center ",
    {
      "flex flex-col gap-4": type === "default",
      "grid grid-cols-2 gap-4": type === "grid-cols-2",
      "grid grid-cols-3 gap-4": type === "grid-cols-3",
      "grid grid-cols-4 gap-4": type === "grid-cols-4",
    },
    className
  )
  return <div className={style}>{children}</div>
}
