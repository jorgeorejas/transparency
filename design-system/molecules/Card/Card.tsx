import cn from "classnames"
export default function Card({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) {
  const style = cn("rounded-lg shadow p-2 max-w-1/2 bg-white", className)
  return <div className={style}>{children}</div>
}
