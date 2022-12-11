import { Icon } from "../Icon"
import cn from "classnames"
import { pageInfo } from "config/page"
export type LogoProps = {
  size: "lg" | "md" | "sm"
  className?: string
  flow: "row" | "column"
}

const Logo = ({
  size = "md",
  flow = "row",
  className,
  ...props
}: LogoProps) => {
  const style = cn({
    "w-64 h-64": size === "lg",
    "w-32 h-32": size === "md",
    "w-16 h-16": size === "sm",
  })
  const divStyle = cn(
    "flex justify-center items-center",
    {
      "gap-2": size === "lg",
      "gap-1": size === "md",
      "gap-0": size === "sm",
    },
    {
      "flex-row": flow === "row",
      "flex-col": flow === "column",
    },
    className
  )
  return (
    <div className={divStyle}>
      <Icon name={pageInfo.icon} className={style} {...props} />
    </div>
  )
}

const Isotype = ({
  size = "md",
  flow = "row",
  className,
  ...props
}: LogoProps) => {
  const iconStyle = cn(
    {
      "w-16 h-16": size === "lg", // 16 is 4rem
      "w-10 h-10": size === "md", // 6 is 2.5rem
      "w-8 h-8": size === "sm", // 8 is 2rem
    },
    "shrink-0"
  )
  const textStyle = cn(
    {
      "text-5xl": size === "lg", // 5xl is 3rem
      "text-2xl": size === "md", // 2xl is 1.5rem
      "text-base": size === "sm", // base is 1rem
    },
    "font-semibold"
  )
  const divStyle = cn(
    "flex justify-center items-center",
    {
      "gap-4": size === "lg",
      "gap-2": size === "md",
      "gap-1": size === "sm",
    },
    {
      "flex-row": flow === "row",
      "flex-col": flow === "column",
    },
    className
  )

  return (
    <div className={divStyle}>
      <Icon name={pageInfo.icon} className={iconStyle} {...props} />
      <span className={textStyle}>{pageInfo.title}</span>
    </div>
  )
}

Logo.Isotype = Isotype

export default Logo
