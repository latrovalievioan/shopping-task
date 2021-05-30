import { Basket } from "../types"
import styled from "styled-components"
import { CartItem } from "./CartItem"
import React from "react"

const CartProductsU = (props: {
  className?: string
  basket: Basket
  setBasket: (value: Basket) => void
}) => {
  return (
    <div className={props.className}>
      <div className="title-rect">Product:</div>
      <div className="title-rect">Quantity:</div>
      <div className="title-rect last">Subtotal:</div>
      {props.basket.items.map((item, i) => {
        return (
          <>
            <CartItem item={item} setBasket={props.setBasket} />
            <div className="product-quantity">{item.quantity}</div>
            <div className="subtotal last product-span">
              {`${item.currency} ${item.price}`}
            </div>
          </>
        )
      })}
      <div className="total">
        <div className="total-items">{`Items: ${props.basket.items.length}`}</div>
        <div className="total-price">{`Total: BGN ${props.basket.total}`}</div>
      </div>
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

  & .total {
    grid-column: 3;
    display: flex;
    flex-direction: column;
    color: #d5e7fe;
    gap: 1rem;
    justify-content: center;
    align-items: flex-end;
  }

  & .total:before {
    content: "";
    background-color: #fec2c2;
    width: 10rem;
    height: 0.1rem;
  }
`
