import { pageInfo } from "config/page"

export default function Head() {
  return (
    <>
      <title>{pageInfo.title}</title>
    </>
  )
}
