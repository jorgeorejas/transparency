import { Text } from "@design-system/atoms"

interface DashboardHeaderProps {
  heading: string
  text?: string
  children?: React.ReactNode
}

export function DashboardHeader({
  heading,
  text,
  children,
}: DashboardHeaderProps) {
  return (
    <div className="flex items-center justify-between py-2 ">
      <div className="grid gap-1">
        <Text.Header htmlTag="h4">{heading}</Text.Header>
        {text && <Text>{text}</Text>}
      </div>
      {children}
    </div>
  )
}
