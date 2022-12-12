import { PricePublishButton } from "@components/dashboard/Button/Price"
import { Skeleton } from "@design-system/atoms"

interface PriceCardProps {
  price: {
    id: string
    nickname: string
    active: boolean
    unit_amount: number
    currency: string
    recurring: {
      interval: "day" | "week" | "month" | "year"
      interval_count: number
    }
  }
}
export function PriceCard({ price }: PriceCardProps) {
  function formatPrice(unit_amount, currency) {
    return new Intl.NumberFormat("es-ES", {
      style: "currency",
      currency,
    }).format(unit_amount)
  }

  return (
    <div className="flex items-center justify-between w-full p-4">
      <div className="grid gap-1">
        <p className="font-semibold">{price.nickname} </p>
        <p className="text-sm text-slate-600">
          {formatPrice(price.unit_amount, price.currency)} /{" "}
          {price.recurring.interval}
        </p>
      </div>
      <div className="flex gap-2">
        <PricePublishButton
          isPublic={price.active}
          postId={price.id}
          className="flex items-center justify-center w-full"
        />
      </div>
    </div>
  )
}

PriceCard.Skeleton = function PostItemSkeleton() {
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
