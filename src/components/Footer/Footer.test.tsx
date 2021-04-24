import React from "react";
import { render } from "@testing-library/react";

import Footer from "./footer";
import { FooterProps } from "./Footer.types";

describe("sample test suite", () => {
  let props: FooterProps;

  beforeEach(() => {
    props = {
      foo: "bar"
    };
  });

  const renderComponent = () => render(<Footer {...props} />);

  it("should render foo text", () => {
    props.foo = "sample text";
    const { getByTestId } = renderComponent();

    const component = getByTestId("Footer");

    expect(component).toHaveTextContent("sample text");
  });
});
