import * as React from "react"
import Root from "../components/Root"
import Header from "../components/Header"
import Footer from "../components/Footer"
import { useEffect, useState } from "react"
import { ArtifactType } from "./App.types"
import { ScFlexColumn, ScSideHolder, ScMainHolder } from "./App.styles"
import { getCSCart } from "~/common/utils"

const idList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
function getCookieValue(name) {
  let result = document.cookie.match(
    "(^|[^;]+)\\s*" + name + "\\s*=\\s*([^;]+)"
  )
  return result ? result.pop() : null
}

const App = () => {
  const [artifacts, setArtifacts] = useState<Array<ArtifactType>>([])
  const [cart, setCart] = useState<Array<string>>([])
  const [loggedin, setLoggedin] = useState<boolean>(false)
  const [next, setNext] = useState<string>("/")

  useEffect(() => {
    const artifactList: Array<ArtifactType> = idList.map(id => {
      return {
        id: id.toString(),
      }
    })
    console.log("artifactsList", artifactList)
    setArtifacts(artifactList)

    //cart
    setCart(getCSCart())

    //login
    let connect_sid = getCookieValue("connect.sid")
    if (connect_sid !== null) {
      console.log("connect_sid", connect_sid)
      setLoggedin(true)
    }
  }, [])

  return (
    <div className="App">
      <ScFlexColumn>
        <ScSideHolder>
          <Header
            cartLength={cart.length}
            loggedin={loggedin}
            setLoggedin={setLoggedin}
            setCart={setCart}
          />
        </ScSideHolder>
        <ScMainHolder>
          <Root
            artifacts={artifacts}
            setCart={setCart}
            cart={cart}
            setLoggedin={setLoggedin}
            loggedin={loggedin}
            next={next}
            setNext={setNext}
          />
        </ScMainHolder>
        <ScSideHolder>
          <Footer />
        </ScSideHolder>
      </ScFlexColumn>
    </div>
  )
}
export default App
