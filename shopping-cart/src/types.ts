export type Product = {
  id: number
  name: string
  slug: string
  material: string
  color: string
  description: string
  price: string
  currency: string
  image: string
}

export type Basket = {
  total: number
  numOfItems: number
  items: (Product & { quantity: number })[]
}
