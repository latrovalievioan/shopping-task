import styled from "styled-components"
import { Basket } from "../types"
import React from "react"
import { getBasket } from "../api"
import { CartProducts } from "./CartProducts"

const CartU = (props: { className?: string }) => {
  const [basket, setBasket] = React.useState<Basket>({
    items: [],
    total: 0,
    numOfItems: 0,
  })

  React.useEffect(() => {
    const abortController = new AbortController()
    getBasket(abortController).then((parsed: Basket) => {
      setBasket(parsed)
    })
    return () => abortController.abort()
  }, [])

  return (
    <div className={props.className}>
      <CartProducts basket={basket}></CartProducts>
      <div className="price"></div>
      {/* <button>Checkout!</button> */}
    </div>
  )
}

export const Cart = styled(CartU)`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 15rem;
`
