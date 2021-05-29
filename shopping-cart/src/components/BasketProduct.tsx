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
          {`${props.item.currency} ${props.item.price}`}
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
  align-items: space-around;
  justify-content: space-between;
  padding: 2rem;
  color: #d5e7fe;

  & img {
    max-width: 25%;
    max-height: auto;
  }

  & .product-title {
    font-size: 16px;
  }

  & .info-container {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    justify-content: space-between;
    padding: 2rem;
  }

  & button {
    border: none;
    background-color: #8fbdd9;
    height: 2em;
    width: 7em;
    border-radius: 10px;
  }

  & button:hover {
    background-color: #d5e7fe;
    cursor: pointer;
    transform: scale(1.2);
  }
`
