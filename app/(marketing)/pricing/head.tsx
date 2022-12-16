import { pageInfo } from "config/page"

export default function Head() {
  return (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Pricing | {pageInfo.title}</title>
    </>
  )
}
