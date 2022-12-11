"use client"

import { useRouter } from "next/navigation"
import * as React from "react"

import { Icon } from "@design-system/atoms"
import { Button } from "@design-system/molecules"
import cn from "classnames"
interface PostPublishButtonProps {
  className?: string
  postId: string
  isPublic: boolean
  disabled?: boolean
}

export function PostPublishButton({
  className,
  postId,
  isPublic,
  disabled = false,
  ...props
}: PostPublishButtonProps) {
  const router = useRouter()
  const [isLoading, setIsLoading] = React.useState<boolean>(false)

  async function onClick(isPublic: boolean) {
    // sends an api request to delete the post
    setIsLoading(true)
    const response = await fetch(`/api/posts/publish/${postId}`, {
      method: isPublic ? "DELETE" : "POST",
    })

    if (response.ok) {
      router.refresh()
    }
    setIsLoading(false)
  }

  return (
    <Button
      onClick={() => onClick(isPublic)}
      disabled={disabled}
      className={cn(
        {
          "cursor-not-allowed opacity-60": isLoading || disabled,
        },
        className
      )}
      {...props}
    >
      {isLoading ? (
        <Icon name="ArrowPathIcon" className="w-4 h-4 mr-2 animate-spin" />
      ) : (
        <Icon
          name={isPublic ? "LockClosedIcon" : "LockOpenIcon"}
          className={disabled ? "hidden" : "w-4 h-4 mr-2"}
        />
      )}
      {disabled ? "Save First" : isPublic ? "Unpublish" : "Publish"}
    </Button>
  )
}
