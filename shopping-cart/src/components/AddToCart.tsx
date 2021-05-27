import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import { faCartPlus } from '@fortawesome/free-solid-svg-icons'
import styled from 'styled-components'

export const AddToCart = styled((props: {className?:string}) => {
  return  <div className={props.className}>Add to Cart! <FontAwesomeIcon icon={faCartPlus}></FontAwesomeIcon></div>
})`
.add-to-cart {
    background: #0B1426;
    color: #D5E7F2;
    width: 10em;
}
`