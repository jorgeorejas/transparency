import { Skeleton, Text } from "@design-system/atoms"
import cn from "classnames"

export type SectionProps = {
  children: React.ReactNode
  type?: "default" | "grid-cols-2" | "grid-cols-3" | "grid-cols-4" | "grid-cols"
  className?: string
  id?: string
}

function Section({
  children,
  type = "default",
  className,
  id,
  ...props
}: SectionProps) {
  const style = cn(
    "max-w-[90vw] mx-auto mt-4 gap-4",
    {
      "flex flex-col ": type === "default",
      "items-center justify-center":
        type === "grid-cols-2" ||
        type === "grid-cols-3" ||
        type === "grid-cols-4",
      "md:grid flex flex-col md:grid-cols-2": type === "grid-cols-2",
      "md:grid flex flex-col md:grid-cols-3": type === "grid-cols-3",
      "md:grid flex flex-col md:grid-cols-4": type === "grid-cols-4",
    },
    className
  )
  return (
    <div className={style} {...props} id={id}>
      {children}
    </div>
  )
}

export type SectionWithInfoProps = SectionProps & {
  header: React.ReactNode
  description?: React.ReactNode
  cta?: React.ReactNode
}

function SectionWithInfo({
  children,
  type = "default",
  className,
  header,
  description,
  cta,
  id,
  ...props
}: SectionWithInfoProps) {
  return (
    <div {...props} id={id} className="max-w-[90vw] mx-auto mt-4">
      <div className="flex items-center justify-between py-2">
        <div className="grid gap-1">
          <Text.Header htmlTag="h4">{header}</Text.Header>
          {description && <Text>{description}</Text>}
        </div>
        {cta}
      </div>
      <Section type={type} className={className}>
        {children}
      </Section>
    </div>
  )
}

function SectionWithInfoSkeleton() {
  return (
    <div className="max-w-[90vw] mx-auto mt-4">
      <div className="flex items-center justify-between w-full py-2">
        <div className="grid w-full gap-1">
          <Skeleton className="w-32 h-4" />
          <Skeleton className="w-64 h-4" />
        </div>
        <Skeleton.Button />
      </div>
      <Section type={"grid-cols-2"} className="w-full">
        <Skeleton className="w-full h-64" />
        <Skeleton className="w-full h-64" />
      </Section>
    </div>
  )
}

Section.Info = SectionWithInfo
Section.Skeleton = SectionWithInfoSkeleton

export default Section
