import { NextApiRequest, NextApiResponse } from "next"
import * as z from "zod"
import { pricePatchSchema } from "@lib/validations/price"

import { withMethods } from "@lib/api-middlewares/with-methods"
import { withPost } from "@lib/api-middlewares/with-post"

import { stripe } from "@lib/stripe"

async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "DELETE") {
    try {
      const price = await stripe.prices.update(req.query.priceId as string, {
        active: false,
      })
      console.log(price)
      return res.status(204).end()
    } catch (error) {
      console.log(error)
      return res.status(500).end()
    }
  }
  if (req.method === "PUBLISH") {
    try {
      await stripe.prices.update(req.query.priceId as string, {
        active: true,
      })
      return res.status(204).end()
    } catch (error) {
      console.log("error", error)
      return res.status(500).end()
    }
  }
  if (req.method === "PATCH") {
    try {
      const priceId = req.query.priceId as string
      const body = pricePatchSchema.parse(req.body)

      // TODO: Implement sanitization for content.

      await stripe.prices.update(priceId, {
        active: body.active,
        nickname: body.nickname,
      })

      return res.end()
    } catch (error) {
      if (error instanceof z.ZodError) {
        return res.status(422).json(error.issues)
      }

      return res.status(422).end()
    }
  }
}

export default withMethods(["DELETE", "PUBLISH", "PATCH"], handler)
