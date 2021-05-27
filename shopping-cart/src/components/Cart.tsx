import styled from "styled-components"

const CartU = (props: { className?: string }) => {
  return <div className={props.className}>Hello World</div>
}

export const Cart = styled(CartU)`
  background: black;
  color: white;
`
