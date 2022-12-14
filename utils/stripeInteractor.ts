import { stripe } from "@lib/stripe"
import Stripe from "stripe"

export type StripeProduct = Stripe.Product & {
  prices: Stripe.Price[]
}

class stripeInteractor {
  private stripe: typeof stripe
  constructor() {
    this.stripe = stripe
  }
  async getProduct(productId: string): Promise<StripeProduct> {
    const sProduct = await this.stripe.products.retrieve(productId)
    const prices = await this.stripe.prices.list({
      product: productId,
      active: true,
    })
    // sort prices by unit_amount
    prices.data.sort((a, b) => {
      if (a.unit_amount && b.unit_amount) {
        return a.unit_amount - b.unit_amount
      }
      return 0
    })
    const product: StripeProduct = {
      ...sProduct,
      prices: prices.data,
    }
    return product
  }

  async getProducts(): Promise<StripeProduct[]> {
    const products = await this.stripe.products.list()
    // sort products by order
    products.data.sort((a, b) => {
      if (a.metadata.order && b.metadata.order) {
        return parseInt(a.metadata.order) - parseInt(b.metadata.order)
      }
      return 0
    })
    const productsWithPrices = await Promise.all(
      products.data.map(async (product) => {
        return this.getProduct(product.id)
      })
    )

    return productsWithPrices
  }
}

export default stripeInteractor
