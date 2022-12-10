import { MdxHead } from "@components/documentation"

export default function Head({ params }) {
  return (
    <MdxHead
      params={params}
      og={{
        type: "Blog Post",
      }}
    />
  )
}
