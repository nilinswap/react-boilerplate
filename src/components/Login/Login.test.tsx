import React from "react";
import { render } from "@testing-library/react";

import Login from "./Login";
import { LoginProps } from "./Login.types";

describe("sample test suite", () => {
  let props: LoginProps;

  beforeEach(() => {
    props = {
      foo: "bar"
    };
  });

  const renderComponent = () => render(<Login {...props} />);

  it("should render foo text", () => {
    props.foo = "sample text";
    const { getByTestId } = renderComponent();

    const component = getByTestId("Login");

    expect(component).toHaveTextContent("sample text");
  });
});
