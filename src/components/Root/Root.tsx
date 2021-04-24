import React from "react"

import ArtBlock from "../ArtBlock"
import Gallery from "../Gallery"
import Cart from "../Cart"
import Payment from "../Payment"
import Login from "../Login"
import Signup from "../Signup"
import { Route } from "react-router-dom"
import { ScParent } from "./Root.styles"
import { RootProps } from "./Root.types"

const Root: React.FC<RootProps> = ({
  cart,
  setCart,
  artifacts,
  setLoggedin,
  loggedin,
  next,
  setNext,
}) => {
  return (
    <ScParent data-testid="Root" className="root">
      <div>
        <Route
          exact
          path="/"
          component={() => <Gallery artifacts={artifacts} />}
        />
        <Route
          path="/art/:url"
          exact
          component={rrprop => (
            <ArtBlock
              id={rrprop.match.params.url}
              cart={cart}
              setCart={setCart}
              loggedin={loggedin}
            />
          )}
        />
        <Route path="/cart" exact component={() => <Cart cart={cart} />} />
        <Route path="/payment_status" exact component={Payment} />
        <Route
          path="/login"
          exact
          component={() => (
            <Login
              loggedin={loggedin}
              setLoggedin={setLoggedin}
              setCart={setCart}
              next={next}
              setNext={setNext}
            />
          )}
        />
        <Route
          path="/signup"
          exact
          component={() => <Signup setLoggedin={setLoggedin} />}
        />
      </div>
    </ScParent>
  )
}

export default Root
