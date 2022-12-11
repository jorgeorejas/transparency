import { createElement, ReactNode } from "react"
import { useRouter } from "next/navigation"
import cn from "classnames"

export type BasicProps = {
  children?: string | ReactNode
  className?: string
  onClick?: any
}

const Button = ({ children, className, ...props }: BasicProps) => {
  return (
    <button
      className={cn(
        "relative inline-flex items-center h-8 px-6 py-1 text-sm font-medium text-white border border-transparent rounded-md bg-brand-500 hover:bg-brand-400 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:ring-offset-2",
        className
      )}
      {...props}
    >
      {children}
    </button>
  )
}

export default Button
