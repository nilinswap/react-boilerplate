import React from "react"
import queryString from "query-string"
import axios from "axios"
import { LoginProps } from "./Login.types"
import { useState, useEffect } from "react"
import {
  ScForm,
  ScFormScreen,
  ScAppTitle,
  ScFormForm,
  ScControlGroup,
  ScFormInput,
  ScFormLabel,
  ScFormLink,
  ScBtn,
} from "../../common/form.styles"
import { Redirect } from "react-router"

const Login: React.FC<LoginProps> = ({
  loggedin,
  setLoggedin,
  setCart,
  next,
  setNext,
}) => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  useEffect(() => {
    let searchParams = queryString?.parse(location.search)
    if (searchParams?.next) {
      setNext(searchParams?.next as string)
    }
  }, [])

  const handleSubmit = (e: any) => {
    e.preventDefault() // stops default reloading behaviour
    const body = {
      email: email,
      password: password,
    }
    axios
      .post(`/api/login/`, body, {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      })
      .then(res => {
        e.preventDefault()
        if (res.status === 200) {
          setLoggedin(true)
          let cs_cart_st = localStorage.getItem("cart")
          var final_cart = []
          if (cs_cart_st) {
            let cs_cart = JSON.parse(cs_cart_st)
            if (cs_cart.length > 0 && res.data.data.cart.length === 0) {
              final_cart = cs_cart
            } else {
              final_cart = res.data.data.cart
            }
            localStorage.clear()
            console.log(
              "cs_cart res.data.data.cart",
              cs_cart,
              res.data.data.cart
            )
            cs_cart_st = JSON.stringify(final_cart)
            console.log("cs_cart_st2", cs_cart_st)
          } else {
            cs_cart_st = JSON.stringify(res.data.data.cart)
          }
          localStorage.setItem("cart", cs_cart_st)
          setCart(final_cart) //NOTE DANGER: this will override anonymous cart
        }
      })
  }

  if (loggedin) {
    return <Redirect to={next !== "/login" ? next : "/"} />
  }

  return (
    <ScForm>
      <ScFormScreen>
        <ScAppTitle>
          <h1>Login</h1>
        </ScAppTitle>

        <ScFormForm onSubmit={handleSubmit}>
          <ScControlGroup>
            <ScFormInput
              type="text"
              className="login-field"
              value={email}
              placeholder="email"
              id="login-email"
              onChange={e => setEmail(e.target.value)}
            />
            <ScFormLabel
              className="login-field-icon fui-user"
              htmlFor="login-email"
            />
          </ScControlGroup>

          <ScControlGroup>
            <ScFormInput
              type="password"
              className="login-field"
              value={password}
              placeholder="password"
              id="login-pass"
              onChange={e => setPassword(e.target.value)}
            />
            <ScFormLabel
              className="login-field-icon fui-lock"
              htmlFor="login-pass"
            />
          </ScControlGroup>

          <ScBtn className="btn-primary btn-large btn-block" type="submit">
            login
          </ScBtn>

          <ScFormLink href="#">Lost your password?</ScFormLink>
        </ScFormForm>
      </ScFormScreen>
    </ScForm>
  )
}

export default Login
