import React from "react"
import { ArtBlockProps } from "./ArtBlock.types"
import { Link } from "react-router-dom"
import { getCSCart, setCSCart } from "../../common/utils"

import { ScParent, ScImageBlock, ScContent, ScButton } from "./ArtBlock.styles"
import axios from "axios"

const ArtBlock: React.FC<ArtBlockProps> = ({ id, cart, setCart, loggedin }) => {
  const addcart = () => {
    console.log("add-to-cart", id)
    console.log("cart", cart)
    setCart([...cart, id])

    var cs_cart: Array<string> = getCSCart() //client-side cart
    setCSCart(cs_cart, id)

    if (loggedin) {
      const new_cart: Array<string> = [...cs_cart, id]
      const body = {
        artifacts: new_cart,
      }
      axios
        .post(`/api/cart/`, body, {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        })
        .then(res => {
          console.log(res.data)
          if (res.status === 200 && res.data.status === "success") {
            console.log("successfully added in cart", id)
          } else {
            console.log("add cart api failed", id)
          }
        })
    }
  }
  return (
    <ScParent>
      <ScImageBlock>
        <Link to="/">{id}</Link>
      </ScImageBlock>
      <ScContent>
        <ScButton onClick={addcart}>add to cart</ScButton>
      </ScContent>
    </ScParent>
  )
}

export default ArtBlock
