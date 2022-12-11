import { NextApiRequest, NextApiResponse } from "next"
import * as z from "zod"

import { withMethods } from "@lib/api-middlewares/with-methods"
import { withPost } from "@lib/api-middlewares/with-post"
import prisma from "@lib/prismadb"
import { postPatchSchema } from "@lib/validations/post"

async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "DELETE") {
    try {
      await prisma.posts.delete({
        where: {
          id: req.query.postId as string,
        },
      })

      return res.status(204).end()
    } catch (error) {
      console.log(error)
      return res.status(500).end()
    }
  }

  if (req.method === "PATCH") {
    try {
      const postId = req.query.postId as string
      const post = await prisma.posts.findUnique({
        where: {
          id: postId,
        },
      })

      const body = postPatchSchema.parse(req.body)

      // TODO: Implement sanitization for content.

      await prisma.posts.update({
        where: {
          id: post?.id || postId,
        },
        data: {
          title: body.title,
          content: body.content,
        },
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

export default withMethods(["DELETE", "PATCH"], withPost(handler))