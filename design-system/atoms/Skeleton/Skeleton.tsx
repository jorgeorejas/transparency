import cn from "classnames"

interface SkeletonProps extends React.HTMLAttributes<HTMLDivElement> {}

export default function Skeleton({ className, ...props }: SkeletonProps) {
  return (
    <div
      className={cn(
        "w-2/5 h-5 rounded-lg animate-pulse bg-slate-100",
        className
      )}
      {...props}
    />
  )
}

Skeleton.Button = function SkeletonButton() {
  return <div className="w-32 h-8 rounded-lg animate-pulse bg-slate-100" />
}
