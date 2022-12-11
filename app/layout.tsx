import "@styles/globals.css"
import { TailwindIndicator } from "@utils/TailwindIndicator"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <head />
      <body>{children}</body>
    </html>
  )
}
