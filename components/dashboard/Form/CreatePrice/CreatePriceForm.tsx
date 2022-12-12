"use client"

import { Text } from "@design-system/atoms"
import { zodResolver } from "@hookform/resolvers/zod"
import { priceCreateSchema } from "@lib/validations/price"
import React from "react"
import { useForm } from "react-hook-form"
import * as z from "zod"
import cn from "classnames"

type FormData = z.infer<typeof priceCreateSchema>

type CreatePriceFormProps = {
  className?: string
}

export default function CreatePriceForm({ className }: CreatePriceFormProps) {
  const [hasChanges, setHasChanges] = React.useState<boolean>(false)
  const style = cn("w-full", className)
  const { register, handleSubmit } = useForm<FormData>({
    resolver: zodResolver(priceCreateSchema),
  })
  return (
    <form className={style}>
      <Text.Header htmlTag="h4">Create New Price</Text.Header>
      <label>
        <Text>Nickname:</Text>
        <input
          id="nickname"
          name="nickname"
          placeholder="Price Nickname"
          {...register("nickname")}
        />
      </label>
      <label>
        <Text>Price:</Text>
        <input
          id="price"
          name="price"
          type={"number"}
          placeholder="Price"
          {...register("unit_amount")}
        />
      </label>
      <label>
        <Text>Interval:</Text>
        <select
          id="interval"
          name="interval"
          placeholder="Interval"
          {...register("recurring.interval")}
        ></select>
      </label>
    </form>
  )
}
