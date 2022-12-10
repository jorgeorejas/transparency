import { SessionProvider } from "next-auth/react"
import { useLiveReload } from "next-contentlayer/hooks"
import "@styles/globals.css"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  useLiveReload()

  return (
    <html>
      <head />
      <body>{children}</body>
    </html>
  )
}
