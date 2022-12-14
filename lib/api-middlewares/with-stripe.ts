import { authOptions } from "@lib/auth"
import type { NextApiHandler, NextApiRequest, NextApiResponse } from "next"
import { unstable_getServerSession } from "next-auth/next"

export function withStripe(handler: NextApiHandler) {
  return async function (req: NextApiRequest, res: NextApiResponse) {
    const session = await unstable_getServerSession(req, res, authOptions)
    if (!session.user) {
      return res.status(401).end()
    }
    return handler(req, res)
  }
}

// checks if there is a user logged in
// if not, return 401
// if yes, continue
