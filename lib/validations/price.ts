import * as z from "zod"

export const pricePatchSchema = z.object({
  id: z.string(),
  nickname: z.string().max(24).min(3),
  active: z.boolean(),
})

export const priceCreateSchema = pricePatchSchema.extend({
  unit_amount: z.number().min(0),
  currency: z.enum(["usd", "eur"]),
  recurring: z.object({
    interval: z.enum(["day", "week", "month", "year"]),
    interval_count: z.number().min(1),
  }),
})
