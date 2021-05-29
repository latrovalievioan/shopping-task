import styled from "styled-components"
import { Product } from "../types"
import { removeFromBasket } from "../api"

const BasketProductU = (props: { className?: string; item: Product }) => {
  return (
    <div className={props.className}>
      <img src={props.item.image} alt=""></img>
      <div className="info-container">
        <h2 className="product-title">{props.item.name}</h2>
        <span className="price">
          <span>{props.item.currency}</span>
          <span>{props.item.price}</span>
        </span>
        <button
          className="remove-button"
          onClick={() => {
            removeFromBasket(props.item.id)
          }}
        >
          Remove
        </button>
      </div>
    </div>
  )
}

export const BasketProduct = styled(BasketProductU)`
  display: flex;
  max-height: 100%;
  max-width: 100%;
  align-items: center;
  justify-content: flex-start;

  & img {
    max-width: 50%;
    max-height: 50%;
  }

  & .product-title {
    font-size: 16px;
  }

  & .info-container {
    display: flex;
    flex-direction: column;
  }
`
