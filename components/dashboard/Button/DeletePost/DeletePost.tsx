"use client"

import { useRouter } from "next/navigation"
import * as React from "react"

import { Icon } from "@design-system/atoms"
import { Button } from "@design-system/molecules"
import cn from "classnames"
interface PostDeleteButtonProps {
  className?: string
  postId: string
}

export function PostDeleteButton({
  className,
  postId,
  ...props
}: PostDeleteButtonProps) {
  const router = useRouter()
  const [isLoading, setIsLoading] = React.useState<boolean>(false)

  async function onClick() {
    // sends an api request to delete the post
    setIsLoading(true)
    const response = await fetch(`/api/posts/${postId}`, {
      method: "DELETE",
    })

    if (response.ok) {
      router.refresh()
    }
    setIsLoading(false)
  }

  return (
    <Button
      onClick={onClick}
      className={cn(
        {
          "cursor-not-allowed opacity-60": isLoading,
        },
        className
      )}
      {...props}
    >
      {isLoading ? (
        <Icon name="ArrowPathIcon" className="w-4 h-4 mr-2 animate-spin" />
      ) : (
        <Icon name="TrashIcon" className="w-4 h-4 mr-2" />
      )}
      Delete
    </Button>
  )
}
