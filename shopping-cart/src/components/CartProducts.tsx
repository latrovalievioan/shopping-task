import { Basket } from "../types"
import styled from "styled-components"
import { BasketProduct } from "./BasketProduct"
import React from "react"

const CartProductsU = (props: { className?: string; basket: Basket }) => {
  return (
    <div className={props.className}>
      <div className="title-rect">Product</div>
      <div className="title-rect">Quantity</div>
      <div className="title-rect last">Subtotal</div>
      {props.basket.items.map((item) => {
        return (
          <>
            <BasketProduct item={item} />
            <div className="product-quantity">{item.quantity}</div>
            <div className="subtotal last product-span"> {item.price}</div>
          </>
        )
      })}
    </div>
  )
}

export const CartProducts = styled(CartProductsU)`
  display: grid;
  grid-template-columns: 50% 25% 25%;
  box-sizing: border-box;

  & .title-rect {
    background-color: #fec2c2;
    box-sizing: border-box;
    display: flex;
    color: #2f4c73;
    font-weight: 600;
  }

  & .last {
    justify-content: flex-end;
    text-align: end;
  }

  & * {
    border: 1px solid black;
  }

  & .product-span {
    min-height: 7rem;
    display: flex;
    align-items: center;
  }

  & .subtotal {
    color: #d5e7fe;
  }

  & .product-quantity {
    align-items: center;
    justify-content: center;
    color: #d5e7fe;
    height: 100%;
    width: 100%;
  }
`
