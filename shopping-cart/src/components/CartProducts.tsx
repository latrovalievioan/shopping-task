import { Basket } from "../types"
import styled from "styled-components"
import { BasketProduct } from "./BasketProduct"
import React from "react"

const CartProductsU = (props: { className?: string; basket: Basket }) => {
  return (
    <div className={props.className}>
      <div className="title-rect">Product:</div>
      <div className="title-rect">Quantity:</div>
      <div className="title-rect last">Subtotal:</div>
      {props.basket.items.map((item, i) => {
        return (
          <>
            <BasketProduct item={item} />
            <div className="product-quantity">{item.quantity}</div>
            <div className="subtotal last product-span">
              {`${item.currency} ${item.price}`}
            </div>
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
    background-color: #2f4c73;
    box-sizing: border-box;
    display: flex;
    color: #d5e7fe;
    height: 1.4rem;
    align-items: center;
    padding: 0.2rem;
  }

  & .last {
    justify-content: flex-end;
    text-align: end;
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
    display: flex;
    align-items: center;
    justify-content: flex-start;
    color: #d5e7fe;
    height: 100%;
    width: 100%;
  }
`
