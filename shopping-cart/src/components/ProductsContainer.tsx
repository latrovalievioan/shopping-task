import React from "react"
import { ProductItem } from "./ProductItem"
import { Product } from "../types"
import styled from "styled-components"

const ProductsContainerU = (props: {
  products: Product[]
  className?: string
}) => {
  return (
    <div className={props.className}>
      {/* <ProductItem product={props.products[0]} /> */}
      {props.products.map((product) => {
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
