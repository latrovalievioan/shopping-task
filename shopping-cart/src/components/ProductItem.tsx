import { Product } from "../types"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCartPlus } from "@fortawesome/free-solid-svg-icons"
import styled from "styled-components"
import { addToBasket } from "../api"

const ProductItemU = (props: { product: Product; className?: string }) => {
  return (
    <div className={props.className}>
      <p className="product-price">
        <span className="price">{props.product?.price}</span>
        <span className="currency">{props.product?.currency}</span>
      </p>
      <div className="product-content">
        <h2 className="product-title">{props.product?.name}</h2>
        <p className="product-body">{props.product?.description}</p>
        <span className="price-add">
          <p
            className="add"
            onClick={() => {
              addToBasket(props.product.id, props.product)
            }}
          >
            <FontAwesomeIcon icon={faCartPlus}></FontAwesomeIcon>
          </p>
        </span>
      </div>
    </div>
  )
}

export const ProductItem = styled(ProductItemU)`
  color: #d5e7f2;
  background-image: url(${(props) => props.product?.image});
  background-size: cover;
  padding: 10rem 0 0;
  max-width: 35ch;
  border-radius: 1rem;
  transition: transform 500ms ease;
  overflow: hidden;
  position: relative;

  &:hover {
    transform: scale(1.05);
  }

  & .product-content {
    padding: 0.5rem;
    background: linear-gradient(
      hsl(0 0% 0% / 0),
      hsl(0 0% 0% / 0.2) 20%,
      hsl(0 0% 0% / 1)
    );
    height: 13rem;
  }

  &:hover .product-content {
    transform: translateY(0%);
  }

  & .product-title {
    position: relative;
    margin-bottom: 3ch;
    margin-top: -1ch;
  }

  & .product-title::after {
    content: "";
    position: absolute;
    height: 3px;
    width: calc(100% + 1.5rem);
    background: #fec2c2;
    left: -1.5rem;
    bottom: 0;
    transform-origin: left;
    transition: transform 500ms ease;
  }

  &:hover .product-title::after {
    transform: scale(1);
  }

  & .product-body {
    color: rgba(255, 255, 255, 0.8);
    margin-bottom: 0.5rem;
  }

  & .product-price {
    display: flex;
    text-align: center;
    flex-direction: column;
    font-size: 15px;
    color: #0b1426;
    background-color: #fec2c2;
    padding: 0.5rem 1.25rem;
    opacity: 0.9;
    position: absolute;
    top: 1rem;
    right: 0;
    font-weight: 600;
  }

  & .price-add {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  & .add {
    transform: scale(1.5);
  }

  & .add:hover {
    color: #d5e7f2;
    transform: scale(2);
    cursor: pointer;
  }

  @media (hover) {
    & .product-content {
      transform: translateY(70%);
      transition: transform 500ms ease;
    }

    & .product-title:after {
      transform: scale(0);
    }

    & .add {
      color: #2f4c73;
    }
  }
`
