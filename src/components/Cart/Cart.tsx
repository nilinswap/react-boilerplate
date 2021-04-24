import React from "react"
import { Link } from "react-router-dom"
import { CartProps } from "./Cart.types"
import { ScFlexColumn, ScButton } from "./Cart.styles"

const Cart: React.FC<CartProps> = ({ cart }) => (
  <ScFlexColumn>
    {cart.toString()}
    {cart.length !== 0 ? (
      <Link to="/payment_status">
        <ScButton>go to payment</ScButton>
      </Link>
    ) : (
      "no item found in cart"
    )}
  </ScFlexColumn>
)

export default Cart
