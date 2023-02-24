import { fireEvent, screen } from "@testing-library/react";
import { render } from "utils/tests/test-utils";

import Homepage from "../Homepage";

describe("Contact page", () => {
  it("renders page correctly", () => {
    const { asFragment } = render(<Homepage />);

    expect(asFragment()).toMatchSnapshot();
  });

  it("cta should redirect to correct page", () => {
    render(<Homepage />);

    const linkButton = screen.getByText(/portfolio/i);

    fireEvent.click(linkButton);

    expect(window.location.href).toBe("http://localhost/portfolio");
  });
});
