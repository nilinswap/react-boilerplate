import React from "react";
import { render } from "@testing-library/react";

import Payment from "./Payment";
import { PaymentProps } from "./Payment.types";

describe("sample test suite", () => {
  let props: PaymentProps;

  beforeEach(() => {
    props = {
      foo: "bar"
    };
  });

  const renderComponent = () => render(<Payment {...props} />);

  it("should render foo text", () => {
    props.foo = "sample text";
    const { getByTestId } = renderComponent();

    const component = getByTestId("Payment");

    expect(component).toHaveTextContent("sample text");
  });
});
