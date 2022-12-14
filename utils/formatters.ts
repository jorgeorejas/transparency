export type priceFormatterProps = {
  locale: string
  amount: number
  currency: string
}

export function currencyFormatter({
  locale,
  amount,
  currency,
}: priceFormatterProps) {
  const formatter = new Intl.NumberFormat(locale, {
    style: "currency",
    currency,
    maximumFractionDigits: 2,
    minimumFractionDigits: 2,
  })
  return formatter.format(amount / 100)
}
