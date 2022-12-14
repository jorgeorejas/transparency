import { posts } from "@prisma/client"

import {
  PostDeleteButton,
  PostPublishButton,
} from "@components/dashboard/Button/Post"
import { Skeleton } from "@design-system/atoms"
import { formatDate } from "@lib/utils"

interface PostItemProps {
  post: Pick<posts, "id" | "title" | "published" | "created_at">
}
export function PostCard({ post }: PostItemProps) {
  return (
    <div className="flex items-center justify-between p-4">
      <div className="grid gap-1">
        <p>
          <a
            href={`/owner/posts/editor/${post.id}`}
            className="font-semibold hover:underline"
          >
            {post.title}{" "}
          </a>
        </p>
        <div>
          <p className="text-sm text-slate-600">
            {formatDate(post.created_at?.toDateString())}
            {post.published ? null : (
              <span className="px-2 ml-2 py-0.5 rounded hover:no-underline text-slate-700 text-sm bg-slate-200">
                Private Post
              </span>
            )}
          </p>
        </div>
      </div>
      <div className="flex gap-2">
        <PostPublishButton
          isPublic={post.published}
          postId={post.id}
          className="flex items-center justify-center w-full"
        />
        <PostDeleteButton
          pageId={post.id}
          className="flex items-center justify-center w-full"
        />
      </div>
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
