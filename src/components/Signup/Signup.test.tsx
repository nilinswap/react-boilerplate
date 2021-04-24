import React from "react";
import { render } from "@testing-library/react";

import Signup from "./Signup";
import { SignupProps } from "./Signup.types";

describe("sample test suite", () => {
  let props: SignupProps;

  beforeEach(() => {
    props = {
      foo: "bar"
    };
  });

  const renderComponent = () => render(<Signup {...props} />);

  it("should render foo text", () => {
    props.foo = "sample text";
    const { getByTestId } = renderComponent();

    const component = getByTestId("Signup");

    expect(component).toHaveTextContent("sample text");
  });
});
