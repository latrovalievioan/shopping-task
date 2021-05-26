import {Product} from "../types"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import { faCartPlus } from '@fortawesome/free-solid-svg-icons'
import styled from 'styled-components'


export const ProductItem = styled((props: {product:Product, className?: string}) => {
    console.log(props.product)
    return <div className={props.className}>
            <div className="product-content">
                <h2 className="product-title">{props.product?.name}</h2>
                <p className="product-body">{props.product?.description}</p>
                <p className="product-price">
                    <span className="price">{props.product?.price}</span>
                    <span className="currency">{props.product?.currency}</span>
                </p>
            </div>
        </div>
})`
    color: #D5E7F2;
    background-image: url(${props => props.product?.image});
    background-size: cover;
    padding: 10rem 0 0;
    max-width: 35ch;
    border-radius: 1rem;
    transition: transform 500ms ease;
    overflow: hidden;

    &:hover {
        transform: scale(1.05);
    };

    & .product-content {
        padding: 1.5rem;
        background: linear-gradient(
            hsl(0 0% 0% / 0),
            hsl(0 0% 0% / 0.2) 20%,
            hsl(0 0% 0% / 1)
        );
        transform: translateY(70%);
        transition: transform 500ms ease;

    };

    &:hover .product-content {
        transform: translateY(0%);
    }

    & .product-title {
        position: relative;
        width: max-content;
        margin-bottom: 0.6em;
    };

    & .product-title::after {
        content: '';
        position: absolute;
        height: 3px;
        width: calc(100% + 1rem);
        background: #FEC2C2;
        left: -1rem;
        bottom: 0;
        transform: scale(0);
        transform-origin: left;
        transition: transform 500ms ease;
    }

    &:hover .product-title::after {
        transform: scale(1);
    }

    & .product-body {
        color: rgba(255, 255, 255, 0.8);
        margin-bottom: 0.5em;
    }

    & .product-price {
        display: inline-block;
        font-size: 15px;
        color: #0B1426;
        background-color: #FEC2C2;
        padding: 0.5em 1.25em;
        opacity: .9;
        border-radius: .25em;
    }
`