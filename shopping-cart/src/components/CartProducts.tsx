import { Basket } from "../types"
import styled from "styled-components"
import { BasketProduct } from "./BasketProduct"
import React from "react"

const CartProductsU = (props: { className?: string; basket: Basket }) => {
  return (
    <div className={props.className}>
      <div className="title-rect">Product</div>
      <div className="title-rect"></div>
      <div className="title-rect">Quantity</div>
      <div className="title-rect last">Subtotal</div>
      {props.basket.items.map((item) => {
        return (
          <>
            <BasketProduct item={item} />
            <div className="product-span"></div>
            <div className="quantity product-span">
              <button className="minus">g</button>
              <input type="number" />
              <button className="plus">g</button>
            </div>
            <div className="price last product-span"> {item.price}</div>
          </>
        )
      })}
    </div>
  )
}

export const CartProducts = styled(CartProductsU)`
  display: grid;
  grid-template-columns: 25% 25% 25% 25%;
  box-sizing: border-box;

  & .title-rect {
    background-color: #fec2c2;
    box-sizing: border-box;
    display: flex;
  }

  & .last {
    justify-content: flex-end;
    text-align: end;
  }

  & * {
    background-color: red;
  }

  & .product-span {
    min-height: 7rem;
    display: flex;
    align-items: center;
  }
`
