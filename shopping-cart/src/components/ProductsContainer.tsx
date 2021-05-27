import React from "react"
import { ProductItem } from "./ProductItem"
import { Product } from "../types"
import styled from "styled-components"
import { getProducts } from "../api"

const ProductsContainerU = (props: { className?: string }) => {
  const [products, setProducts] = React.useState<Product[]>([])

  React.useEffect(() => {
    const abortController = new AbortController()

    getProducts(abortController).then((parsed: Product[]) => {
      setProducts(parsed)
    })
    return () => abortController.abort()
  }, [])

  return (
    <div className={props.className}>
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
  box-sizing: border-box;
  padding: 20em;
  gap: 3em;
  justify-content: center;
  justify-items: center;

  @media screen and (max-width: 1600px) {
    grid-template-columns: 50% 50%;
  }
`
