import { authOptions } from "@lib/auth"
import { stripe } from "@lib/stripe"
import type { NextApiRequest, NextApiResponse } from "next"
import { unstable_getServerSession } from "next-auth"

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { priceId } = req.body
  const session = await unstable_getServerSession(req, res, authOptions)
  if (!session) {
    return res.status(401).json({
      error: "Not authenticated",
      redirectUrl: "/login",
    })
  }
  const { stripeCustomerId } = session.user

  const checkoutSession = await stripe.checkout.sessions.create({
    mode: "subscription",
    customer: stripeCustomerId,
    line_items: [{ price: priceId, quantity: 1 }],
    success_url: `http://localhost:3000/?session_id={CHECKOUT_SESSION_ID}`,
    cancel_url: "http://localhost:3000/?cancelledPayment=true",
    subscription_data: {
      metadata: {
        // This isn't 100% required, but it helps to have so that we can manually check in Stripe for whether a customer has an active subscription later, or if our webhook integration breaks.
        payingUserId: session.user.id,
      },
    },
  })
  if (!checkoutSession.url) {
    return res.status(500).json({
      cpde: "stripe-error",
      error: "Could not create checkout session",
    })
  }
  return res.status(200).json({ redirectUrl: checkoutSession.url })
}
