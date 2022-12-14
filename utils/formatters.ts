export type priceFormatterProps = {
  locale: string
  value: number
  currency: string
}

export function currencyFormatter({
  locale,
  value,
  currency,
}: priceFormatterProps) {
  const formatter = new Intl.NumberFormat(locale, {
    style: "currency",
    currency,
    maximumFractionDigits: 2,
    minimumFractionDigits: 2,
  })
  return formatter.format(value / 100)
}
