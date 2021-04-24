import React from "react"
import axios from "axios"
import { SignupProps } from "./Signup.types"
import { useState, useEffect } from "react"
import {
  ScForm,
  ScFormScreen,
  ScAppTitle,
  ScFormForm,
  ScControlGroup,
  ScFormInput,
  ScFormLabel,
  ScBtn,
} from "../../common/form.styles"

const Signup: React.FC<SignupProps> = ({ setLoggedin }) => {
  const [email, setEmail] = useState<string>("")
  const [firstname, setFirstname] = useState<string>("")
  const [lastname, setLastname] = useState<string>("")
  const [password, setPassword] = useState<string>("")
  const [repassword, setRepassword] = useState<string>("")

  const handleSubmit = (e: any) => {
    e.preventDefault() // stops default reloading behaviour
    console.log(email, password)
    const body = {
      email: email,
      password: password,
    }
    axios
      .post(`/api/register/`, body, {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      })
      .then(res => {
        console.log(res)
        console.log(res.data)
        console.log("res cookies", res.headers, res.headers["Set-Cookie"])
        if (res.status === 200) {
          console.log("guy is logged in")
          setLoggedin(true)
        }
      })
  }

  const renderStringInput = (
    placeholder: string,
    state: string,
    id: string,
    setStatefunc: (arg0: string) => void
  ) => {
    const variableAttributes = {
      value: state,
      placeholder: placeholder,
      id: `signup-${id}`,
    }
    return (
      <ScControlGroup>
        <ScFormInput
          type="text"
          {...variableAttributes}
          onChange={e => setStatefunc(e.target.value)}
        />
        <ScFormLabel
          className="signup-field-icon fui-user"
          htmlFor={`${variableAttributes.id}`}
        />
      </ScControlGroup>
    )
  }

  useEffect(() => {
    console.log("changed", email, password, firstname, lastname)
  })

  return (
    <ScForm>
      <ScFormScreen>
        <ScAppTitle>
          <h1>Signup</h1>
        </ScAppTitle>

        <ScFormForm onSubmit={handleSubmit}>
          {renderStringInput("Email", email, "email", setEmail)}
          {renderStringInput(
            "First Name",
            firstname,
            "firstname",
            setFirstname
          )}
          {renderStringInput("Last Name", lastname, "lastname", setLastname)}
          {renderStringInput("Password", password, "password", setPassword)}
          {renderStringInput(
            "Repeat Password",
            repassword,
            "repassword",
            setRepassword
          )}

          <ScBtn className="btn-primary btn-large btn-block" type="submit">
            Submit
          </ScBtn>
        </ScFormForm>
      </ScFormScreen>
    </ScForm>
  )
}

export default Signup
