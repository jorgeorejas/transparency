import { createElement, ReactNode } from "react"
import { useRouter } from "next/navigation"
import cn from "classnames"
import Link from "next/link"

export type BasicProps = {
  children?: string | ReactNode
  className?: string
  onClick?: any
  disabled?: boolean
}

const Button = ({ children, className, disabled, ...props }: BasicProps) => {
  return (
    <button
      className={cn(
        "relative inline-flex items-center h-8 px-6 py-1 text-sm font-medium text-white border border-transparent rounded-md bg-brand-900 hover:bg-brand-800 focus:outline-none focus:ring-2 focus:ring-brand-900 focus:ring-offset-2",
        className
      )}
      {...props}
      disabled={disabled}
    >
      {children}
    </button>
  )
}

export type ButtonLinkProps = {
  children?: string | ReactNode
  className?: string
  href: string
  target?: "_blank" | "_self" | "_parent" | "_top"
}

const ButtonLink = ({
  children,
  className,
  href,
  target,
  ...props
}: ButtonLinkProps) => {
  return (
    <Link
      href={href}
      className={cn(
        "relative inline-flex items-center h-8 px-6 py-1 text-sm font-medium text-white border border-transparent rounded-md bg-brand-900 hover:bg-brand-800 focus:outline-none focus:ring-2 focus:ring-brand-900 focus:ring-offset-2",
        className
      )}
      {...props}
      target={target}
    >
      {children}
    </Link>
  )
}

Button.Link = ButtonLink

export default Button
