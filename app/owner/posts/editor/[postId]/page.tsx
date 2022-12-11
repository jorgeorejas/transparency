import { notFound, redirect } from "next/navigation"
import * as DashboardUI from "@components/dashboard"

import { posts, User } from "@prisma/client"
import prisma from "@lib/prismadb"
import { getCurrentUser } from "@lib/session"
import { authOptions } from "@lib/auth"
import { Editor } from "@components/dashboard"

async function getPostForUser(postId: posts["id"], userId: User["id"]) {
  return await prisma.posts.findFirst({
    where: {
      id: postId,
      authorId: userId,
    },
  })
}

interface EditorPageProps {
  params: { postId: string }
}

export default async function EditorPage({ params }: EditorPageProps) {
  const user = await getCurrentUser()

  if (!user) {
    redirect(authOptions.pages.signIn)
  }

  const post = await getPostForUser(params.postId, user.id)

  if (!post) {
    notFound()
  }

  return (
    <DashboardUI.Layout.DashboardContainer>
      <Editor
        post={{
          id: post.id,
          title: post.title,
          content: post.content,
          published: post.published,
          slug: post.slug,
          description: post.description,
        }}
      />
    </DashboardUI.Layout.DashboardContainer>
  )
}
