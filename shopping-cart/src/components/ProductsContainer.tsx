import React from "react"
import { ProductItem } from "./ProductItem"
import { Product } from "../types"
import styled from "styled-components"
import { getProducts } from "../api"

const ProductsContainerU = (props: { className?: string }) => {
  const [products, setProducts] = React.useState<Product[]>([])

  React.useEffect(() => {
    getProducts().then((parsed: Product[]) => {
      setProducts(parsed)
    })
  }, [])

  return (
    <div className={props.className}>
      {/* <ProductItem product={props.products[0]} /> */}
      {products.map((product) => {
        return <ProductItem product={product} />
      })}
    </div>
  )
}

export const ProductsContainer = styled(ProductsContainerU)`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 25% 25% 25% 25%;
  gap: 3em;

  @media screen and (max-width: 1600px) {
    grid-template-columns: 25% 25%;
  }
`
