import React from "react";
import { render } from "@testing-library/react";

import Gallery from "./Gallery";
import { GalleryProps } from "./Gallery.types";

describe("sample test suite", () => {
  let props: GalleryProps;

  beforeEach(() => {
    props = {
      foo: "bar"
    };
  });

  const renderComponent = () => render(<Gallery {...props} />);

  it("should render foo text", () => {
    props.foo = "sample text";
    const { getByTestId } = renderComponent();

    const component = getByTestId("Gallery");

    expect(component).toHaveTextContent("sample text");
  });
});
