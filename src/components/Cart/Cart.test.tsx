import React from "react";
import { render } from "@testing-library/react";

import Cart from "./Cart";
import { CartProps } from "./Cart.types";

describe("sample test suite", () => {
  let props: CartProps;

  beforeEach(() => {
    props = {
      foo: "bar"
    };
  });

  const renderComponent = () => render(<Cart {...props} />);

  it("should render foo text", () => {
    props.foo = "sample text";
    const { getByTestId } = renderComponent();

    const component = getByTestId("Cart");

    expect(component).toHaveTextContent("sample text");
  });
});
