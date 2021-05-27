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
  width: 100%;
  justify-content: center;

  & .nav-button {
    width: 5rem;
    height: 5rem;
  }
`
