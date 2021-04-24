import React from "react"
import { render } from "@testing-library/react"

import ArtBlock from "./ArtBlock"
import { ArtBlockProps } from "./ArtBlock.types"

describe("sample test suite", () => {
  let props: ArtBlockProps

  beforeEach(() => {
    props = {
      id: "bar",
    }
  })

  const renderComponent = () => render(<ArtBlock {...props} />)

  it("should render id text", () => {
    props.id = "sample text"
    const { getByTestId } = renderComponent()

    const component = getByTestId("ArtBlock")

    expect(component).toHaveTextContent("sample text")
  })
})
