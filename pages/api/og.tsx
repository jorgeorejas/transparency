import { Text } from "@design-system/atoms"
import { ImageResponse } from "@vercel/og"

export const config = {
  runtime: "experimental-edge",
}

export default async function handler() {
  try {
    return new ImageResponse(
      (
        <div className="flex">
          <Text>Work in progress</Text>
        </div>
      ),
      {
        width: 1200,
        height: 630,
      }
    )
  } catch (error) {
    return new Response(`Failed to generate image`, {
      status: 500,
    })
  }
}
