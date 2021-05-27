import styled from "styled-components"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faHome,
  faShoppingCart,
  faClipboardList,
} from "@fortawesome/free-solid-svg-icons"

import { Link } from "react-router-dom"

const NavU = (props: { className?: string }) => {
  return (
    <nav className={props.className}>
      <h1 className="nav-title">Ioni's Shop</h1>
      <Link to="/" className="home nav-button">
        <FontAwesomeIcon icon={faHome} />
      </Link>
      <Link to="/cart" className="cart nav-button">
        <FontAwesomeIcon icon={faShoppingCart} />
      </Link>
      <Link to="/wishlist" className="wishlist nav-button">
        <FontAwesomeIcon icon={faClipboardList} />
      </Link>
    </nav>
  )
}

export const Nav = styled(NavU)`
  display: flex;
  width: 50%;
  justify-content: flex-end;
  align-self: center;
  align-items: center;
  border-bottom: 1px solid #fec2c2;
  margin-top: 3rem;

  & .nav-button {
    width: 5rem;
    height: 5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    color: #d5e7f2;
  }

  & .nav-button:hover {
    transform: scale(1.4);
  }

  & .nav-title {
    color: #d5e7f2;
    justify-self: flex-start;
    margin-right: auto;
  }
`

//    color: #8fbdd9;
