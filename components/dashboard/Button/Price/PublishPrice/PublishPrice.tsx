"use client"
import { useRouter } from "next/navigation"
import * as React from "react"

import { Icon } from "@design-system/atoms"
import { Button } from "@design-system/molecules"
import cn from "classnames"
interface PricePublishButtonProps {
  className?: string
  postId: string
  isPublic: boolean
  disabled?: boolean
}

export function PricePublishButton({
  className,
  postId,
  isPublic,
  disabled = false,
  ...props
}: PricePublishButtonProps) {
  const router = useRouter()
  const [isLoading, setIsLoading] = React.useState<boolean>(false)

  async function onClick(isPublic: boolean) {
    // sends an api request to delete the post
    setIsLoading(true)
    const response = await fetch(`/api/billing/${postId}`, {
      method: isPublic ? "DELETE" : "PUBLISH",
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
          name={isPublic ? "EyeSlashIcon" : "EyeIcon"}
          className={disabled ? "hidden" : "w-4 h-4 mr-2"}
        />
      )}
      {disabled ? "Save First" : isPublic ? "Unpublish" : "Publish"}
    </Button>
  )
}
