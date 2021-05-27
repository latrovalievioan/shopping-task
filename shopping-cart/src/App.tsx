import React from "react"
import "./App.css"
import { ProductsContainer } from "./components/ProductsContainer"
import styled from "styled-components"

const AppU = (props: { className?: string }) => {
  return (
    <div className={`${props.className} App`}>
      <ProductsContainer />
    </div>
  )
}

export const App = styled(AppU)`
  background: #0b1426;
`

export default App
