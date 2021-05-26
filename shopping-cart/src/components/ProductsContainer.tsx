import React from 'react';
import { ProductItem } from "./ProductItem"
import { Product } from "../types"
import styled from 'styled-components'



export const ProductsContainer = styled((props: { products: Product[], className?: string}) => {
    return <div className={props.className}><ProductItem product={props.products[0]} /></div>
})`
width: 100%;
height: 100%;
`