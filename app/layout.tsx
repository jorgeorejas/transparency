import "@styles/globals.css"
import "@tremor/react/dist/esm/tremor.css"

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
