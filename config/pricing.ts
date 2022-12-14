export type Feature = {
  name: string
  value: boolean
}
export type tier = {
  id: string
  name: string
  features: Feature[]
}

export type pricingFeaturesProps = tier[]

const freeFeatures: Feature[] = [
  {
    name: "Feature 1",
    value: true,
  },
  {
    name: "Feature 2",
    value: false,
  },
  {
    name: "Feature 3",
    value: false,
  },
  {
    name: "Feature 4",
    value: false,
  },
]

const basicFeatures: Feature[] = [
  {
    name: "Feature 1",
    value: true,
  },
  {
    name: "Feature 2",
    value: true,
  },
  {
    name: "Feature 3",
    value: false,
  },
  {
    name: "Feature 4",
    value: false,
  },
]

const startupFeatures: Feature[] = [
  {
    name: "Feature 1",
    value: true,
  },
  {
    name: "Feature 2",
    value: true,
  },
  {
    name: "Feature 3",
    value: true,
  },
  {
    name: "Feature 4",
    value: false,
  },
]

const enterpriseFeatures: Feature[] = [
  {
    name: "Feature 1",
    value: true,
  },
  {
    name: "Feature 2",
    value: true,
  },
  {
    name: "Feature 3",
    value: true,
  },
  {
    name: "Feature 4",
    value: true,
  },
]
export const pricingFeatures: pricingFeaturesProps = [
  {
    name: "Free",
    id: "prod_Mz0IuTd1GfFgfy",
    features: freeFeatures,
  },
  {
    name: "Basic",
    id: "prod_Mxq08SUnBxvSvA",
    features: basicFeatures,
  },
  {
    name: "Startup",
    id: "prod_Mz0IOFEYzYusCo",
    features: startupFeatures,
  },
  {
    name: "Enterprise",
    id: "prod_Mz0JbF4sgZf7zZ",
    features: enterpriseFeatures,
  },
]
