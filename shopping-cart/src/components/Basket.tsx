import styled from "styled-components"

const BasketU = (props: { className?: string }) => {
  return <div className={props.className}>Hello World</div>
}

export const Basket = styled(BasketU)`
  background: black;
  color: white;
`
