import type { NextApiRequest, NextApiResponse } from "next"
import { buffer } from "micro"
import { stripe } from "@lib/stripe"
import prisma from "@lib/prismadb"
import Stripe from "stripe"

const endpointSecret = process.env.STRIPE_WEBHOOK_SECRET

export const config = {
  api: {
    bodyParser: false,
  },
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> {
  try {
    const requestBuffer = await buffer(req)
    const sig = req.headers["stripe-signature"] as string
    let event
    try {
      event = stripe.webhooks.constructEvent(
        requestBuffer.toString(),
        sig,
        endpointSecret
      )
    } catch (err) {
      console.log(`⚠️  Webhook signature verification failed.`, err.message)
      return res.status(400).send(`Webhook signature verification failed.`)
    }
    switch (event.type) {
      case "customer.subscription.created": {
        const subscription = event.data.object as Stripe.Subscription
        await prisma.user.update({
          where: {
            stripeCustomerId: subscription.customer as string,
          },
          data: {
            isActive: true,
          },
        })
        break
      }
      // ... handle other event types
      default:
        console.log(`Unhandled event type ${event.type}`)
    }
  } catch (err) {
    // Return a 500 error
    console.log(err)
    res.status(500).end()
  }
}
