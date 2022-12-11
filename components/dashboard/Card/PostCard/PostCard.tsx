import { posts } from "@prisma/client"

import { Button } from "@components/dashboard"
import { Skeleton } from "@design-system/atoms"
import { formatDate } from "@lib/utils"

interface PostItemProps {
  post: Pick<posts, "id" | "title" | "published" | "created_at">
}
export function PostCard({ post }: PostItemProps) {
  return (
    <div className="flex items-center justify-between p-4">
      <div className="grid gap-1">
        <a
          href={`/owner/editor/${post.id}`}
          className="font-semibold hover:underline"
        >
          {post.title}
        </a>
        <div>
          <p className="text-sm text-slate-600">
            {formatDate(post.created_at?.toDateString())}
          </p>
        </div>
      </div>

      <Button.PostDeleteButton postId={post.id} />
    </div>
  )
}

PostCard.Skeleton = function PostItemSkeleton() {
  return (
    <div className="flex items-center justify-between p-4">
      <div className="grid w-full gap-1">
        <Skeleton className="w-full h-5" />
        <div>
          <Skeleton className="w-4/5 h-4" />
        </div>
      </div>
      <Skeleton.Button />
    </div>
  )
}
