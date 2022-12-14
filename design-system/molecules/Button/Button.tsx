import { createElement, ReactNode } from "react"
import { useRouter } from "next/navigation"
import cn from "classnames"
import Link from "next/link"

export type BasicProps = {
  children?: string | ReactNode
  className?: string
  onClick?: any
  disabled?: boolean
  negative?: boolean
  type?: "button" | "submit" | "reset"
}

const Button = ({
  children,
  className,
  disabled = false,
  negative = false,
  type,
  ...props
}: BasicProps) => {
  return (
    <button
      className={cn(
        {
          "text-brand-white bg-brand-cta hover:bg-brand-hover focus:ring-brand-cta":
            negative === false,
          "text-brand-cta bg-brand-pale hover:bg-brand-white focus:ring-brand-pale":
            negative === true,
        },
        "inline-flex items-center h-8 px-6 py-1 text-sm font-medium  rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2",
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
  negative?: boolean
}

const ButtonLink = ({
  children,
  className,
  href,
  target,
  negative = false,
  ...props
}: ButtonLinkProps) => {
  return (
    <Link
      href={href}
      className={cn(
        {
          "text-brand-white bg-brand-cta hover:bg-brand-hover focus:ring-brand-cta":
            negative === false,
          "text-brand-cta bg-brand-pale hover:bg-brand-white focus:ring-brand-pale":
            negative === true,
        },
        "inline-flex items-center h-8 px-6 py-1 text-sm font-medium  rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2",
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
