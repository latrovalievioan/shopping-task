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
  numOfItems: 1
  items: (Product & { quantity: number })[]
}
