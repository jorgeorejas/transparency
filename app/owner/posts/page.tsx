import * as DashboardUI from "@components/dashboard"
import { Card } from "@design-system/molecules"
import { authOptions } from "@lib/auth"
import prisma from "@lib/prismadb"
import { getCurrentUser } from "@lib/session"
import { User } from "@prisma/client"
import { redirect } from "next/navigation"
import { cache } from "react"

const getPostsForUser = cache(async (userId: User["id"]) => {
  return await prisma.posts.findMany({
    where: {
      authorId: userId,
    },
    select: {
      id: true,
      title: true,
      published: true,
      content: true,
      created_at: true,
    },
    orderBy: {
      updated_at: "desc",
    },
  })
})
export default async function PostsPage() {
  const user = await getCurrentUser()
  if (!user || user?.userType !== "OWNER") {
    redirect(authOptions.pages.signIn)
  }
  const posts = await getPostsForUser(user.id)
  return (
    <>
      <DashboardUI.Layout.DashboardHeader
        heading="Posts"
        text="Create and manage posts."
      >
        <DashboardUI.Button.PostCreateButton userId={user.id} />
      </DashboardUI.Layout.DashboardHeader>
      <DashboardUI.Layout.DashboardContainer>
        <div>
          {posts?.length ? (
            <Card className="border divide-y rounded-md divide-neutral-200 border-slate-200">
              {posts.map((post) => (
                <DashboardUI.Card.PostCard key={post.id} post={post} />
              ))}
            </Card>
          ) : (
            <div className="border divide-y rounded-md divide-neutral-200 border-slate-200">
              <DashboardUI.Card.PostCard.Skeleton />
            </div>
          )}
        </div>
      </DashboardUI.Layout.DashboardContainer>
    </>
  )
}
