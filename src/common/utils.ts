export const setCSCart = (cs_cart: Array<string>, id: string) => {
  cs_cart.push(id)
  localStorage.setItem("cart", JSON.stringify(cs_cart))
}

export const getCSCart: () => Array<string> = () => {
  console.log("localStorage", localStorage)
  var cart_val = localStorage.getItem("cart")
  if (cart_val === null) cart_val = "[]"
  if (cart_val[0] !== "[") {
    localStorage.clear()
    cart_val = "[]"
  }

  var cs_cart: Array<string> = JSON.parse(cart_val) //client-side cart
  return cs_cart
}

export const addCSCart = (artifact_id: string) => {
  var cs_cart: Array<string> = getCSCart() //client-side cart
  setCSCart(cs_cart, artifact_id)
}
