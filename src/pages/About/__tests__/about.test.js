import { screen } from "@testing-library/react";
import { render } from "utils/tests/test-utils";

import About from "../About";

describe("About page", () => {
  it("renders About me title", () => {
    render(<About />);

    const titleElement = screen.getByText(/About me/i);

    expect(titleElement).toBeInTheDocument();
  });

  it("renders page correctly", () => {
    const { asFragment } = render(<About />);

    expect(asFragment()).toMatchSnapshot();
  });
});
