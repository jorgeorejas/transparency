"use client"

import { useRouter } from "next/navigation"
import * as React from "react"

import { Icon, ToastMessage } from "@design-system/atoms"
import cn from "classnames"
import { Button } from "@design-system/molecules"

interface PriceCreateButtonProps {
  className?: string
  userId: string
}

export function PriceCreateButton({
  className,
  userId,
  ...props
}: PriceCreateButtonProps) {
  const router = useRouter()
  const [isLoading, setIsLoading] = React.useState<boolean>(false)

  async function onClick() {
    setIsLoading(true)

    const response = await fetch("/api/price", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        nickname: "New Price",
      }),
    })

    setIsLoading(false)

    if (!response?.ok) {
      if (response.status === 402) {
        return ToastMessage({
          title: "Limit of 3 posts reached.",
          message: "Please upgrade to the PRO plan.",
          type: "error",
        })
      }

      return ToastMessage({
        title: "Something went wrong.",
        message: "Your post was not created. Please try again.",
        type: "error",
      })
    }

    // This forces a cache invalidation.
    router.refresh()
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
        <Icon name="PlusIcon" className="w-4 h-4 mr-2" />
      )}
      New post
    </Button>
  )
}
