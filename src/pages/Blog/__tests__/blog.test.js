import { screen } from "@testing-library/react";
import { render } from "utils/tests/test-utils";

import Blog from "../Blog";

describe("Blog", () => {
  it("renders page correctly", () => {
    const { asFragment } = render(<Blog />);

    expect(asFragment()).toMatchSnapshot();
  });

  it("renders Blog title correctly", () => {
    render(<Blog />);

    const titleElement = screen.getByText(/Curiosity Gem/i);

    expect(titleElement).toBeInTheDocument();
  });

  it("redirects to blog website on link click", () => {
    render(<Blog />);

    const linkElement = screen.getByText(/Go to blog/i);

    expect(linkElement).toHaveAttribute("href", "https://www.curiositygem.com");
  });
});
