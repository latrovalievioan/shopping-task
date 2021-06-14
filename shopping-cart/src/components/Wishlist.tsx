import styled from "styled-components"
import { Product } from "../types"
import React from "react"
import { getWishlist } from "../api"

const WishlistU = (props: { className?: string }) => {
  const [list, setList] = React.useState<Product[]>([])

  React.useEffect(() => {
    getWishlist().then((parsed: Product[]) => {
      setList(parsed)
    })
  }, [])

  console.log(list)

  return (
    <div className={props.className}>
      <ul className="list-items">
        {list.map((prod) => {
          return <div className="product"></div>
        })}
      </ul>
    </div>
  )
}

export const Wishlist = styled(WishlistU)`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 15rem;
`
