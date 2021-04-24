import React from "react"
import { HeaderProps } from "./Header.types"
import { Link } from "react-router-dom"
import {
  ScParent,
  ScHeading,
  ScTopRightOptions,
  ScWhiteLink,
} from "./Header.styles"

const getLoginWithNext: () => string = () => {
  console.log("wlp", window.location.pathname)
  return "/login/?next=" + window.location.pathname
}

const Header: React.FC<HeaderProps> = ({
  cartLength,
  loggedin,
  setLoggedin,
  setCart,
}) => {
  const deleteCookie = () => {
    document.cookie = "connect.sid=; expires=Thu, 01 Jan 1970 00:00:00 UTC;"
    setLoggedin(false)
    setCart([])
    localStorage.clear()
  }
  return (
    <ScParent>
      <ScHeading>
        <ScWhiteLink to="/">Lilyhill</ScWhiteLink>
      </ScHeading>
      <ScTopRightOptions>
        <ScWhiteLink to="/cart">cart({cartLength})</ScWhiteLink>
      </ScTopRightOptions>
      {loggedin ? (
        <strong onClick={deleteCookie}>LogOut</strong>
      ) : (
        <strong>
          <Link to={getLoginWithNext()}>LogIn</Link>
        </strong>
      )}
    </ScParent>
  )
}

export default Header
