import React from "react"
import "./App.css"
import { ProductsContainer } from "./components/ProductsContainer"
import styled from "styled-components"
import { Nav } from "./components/Nav"
import { Cart } from "./components/Cart"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import { Wishlist } from "./components/Wishlist"

const AppU = (props: { className?: string }) => {
  return (
    <Router>
      <div className={`${props.className} App`}>
        <Nav />
        <Switch>
          <Route exact path="/">
            <ProductsContainer />
          </Route>
          <Route path="/cart">
            <Cart />
          </Route>
          <Route path="/wishlist">
            <Wishlist />
          </Route>
        </Switch>
      </div>
    </Router>
  )
}

export const App = styled(AppU)`
  background: #0b1426;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`

export default App
