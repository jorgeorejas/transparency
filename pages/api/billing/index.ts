import { NextApiRequest, NextApiResponse } from "next"
import * as z from "zod"
import { unstable_getServerSession } from "next-auth/next"

import { stripe } from "@lib/stripe"
import { withMethods } from "@lib/api-middlewares/with-methods"

import { authOptions } from "@lib/auth"

const priceCreateSchema = z.object({
  unit_amount: z.number().min(0),
  nickname: z.string().max(24).min(3),
  currency: z.string().max(3).min(3),
  active: z.boolean(),
  recurring: z.object({
    interval: z.enum(["day", "week", "month", "year"]),
    interval_count: z.number().min(1),
  }),
})

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const session = await unstable_getServerSession(req, res, authOptions)

  const { user } = session

  if (!session || user.userType !== "OWNER") {
    return res.status(403).end()
  }

  if (req.method === "GET") {
    try {
      const prices = await stripe.prices.list()

      return res.json(prices)
    } catch (error) {
      console.log("error", error)
      return res.status(500).end()
    }
  }

  if (req.method === "POST") {
    try {
      const body = priceCreateSchema.parse(req.body)

      const price = await stripe.prices.create({
        currency: body.currency,
        unit_amount: body.unit_amount,
        nickname: body.nickname,
        active: body.active,
        recurring: {
          interval: body.recurring.interval,
          interval_count: body.recurring.interval_count,
          trial_period_days: 7,
        },
      })

      return res.json(price)
    } catch (error) {
      if (error instanceof z.ZodError) {
        return res.status(422).json(error.issues)
      }
      console.log("error", error)

      return res.status(500).end()
    }
  }
}

export default withMethods(["GET", "POST"], handler)
