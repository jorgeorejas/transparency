import { NextApiRequest, NextApiResponse } from "next"
import * as z from "zod"

import { withMethods } from "@lib/api-middlewares/with-methods"
import { withPost } from "@lib/api-middlewares/with-post"
import prisma from "@lib/prismadb"
import { postPatchSchema } from "@lib/validations/post"

async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    try {
      await prisma.posts.update({
        where: {
          id: req.query.postId as string,
        },
        data: {
          published: true,
        },
      })

      return res.status(204).end()
    } catch (error) {
      return res.status(500).end()
    }
  }
  if (req.method === "DELETE") {
    try {
      await prisma.posts.update({
        where: {
          id: req.query.postId as string,
        },
        data: {
          published: false,
        },
      })

      return res.status(204).end()
    } catch (error) {
      return res.status(500).end()
    }
  }
}

export default withMethods(["POST", "DELETE"], withPost(handler))
