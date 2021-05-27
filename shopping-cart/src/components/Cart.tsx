import styled from "styled-components"
import { Basket } from "../types"
import React from "react"
import { getBasket } from "../api"

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

  console.log(basket)

  return <div className={props.className}></div>
}

export const Cart = styled(CartU)`
  background: black;
  color: white;
`
