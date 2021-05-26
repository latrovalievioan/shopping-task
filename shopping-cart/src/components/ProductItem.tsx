import {Product} from "../types"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import { faCartPlus } from '@fortawesome/free-solid-svg-icons'
import styled from 'styled-components'


export const ProductItem = styled((props: {product:Product}) => {
    console.log(props.product)
    return <div>
        <img src={props.product?.image} alt=""></img>
        <div>
            <h1>{props.product?.name}</h1>
            <div className="price">
                <span className="price">{props.product?.price}</span>
                <span className="currency">{props.product?.currency}</span>
            </div>
            <div className="description">{props.product?.description}</div>
            <div className="material">{props.product?.material}</div>
            <div className="color">{props.product?.color}</div>
            <button className="Add to cart">
            <span><FontAwesomeIcon icon={faCartPlus}/></span>
            Add to cart 
            </button>
        </div>
        </div>
})``