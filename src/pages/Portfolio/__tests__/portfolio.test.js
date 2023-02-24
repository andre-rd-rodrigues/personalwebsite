import { fireEvent, render, screen } from "utils/tests/test-utils";
import Portfolio from "../Portfolio";

describe("Portfolio page", () => {
  it("renders page correctly", () => {
    const { asFragment } = render(<Portfolio />);

    expect(asFragment()).toMatchSnapshot();
  });

  it("renders websites category page when link is clicked", () => {
    render(<Portfolio />);

    const websitesLinkElement = screen.getByText(/websites/i);

    fireEvent.click(websitesLinkElement);

    expect(window.location.href).toBe(
      "http://localhost/portfolio/category?type=websites"
    );
  });

  it("renders apps category page when link is clicked", () => {
    render(<Portfolio />);

    const websitesLinkElement = screen.getByText(/apps/i);

    fireEvent.click(websitesLinkElement);

    expect(window.location.href).toBe(
      "http://localhost/portfolio/category?type=apps"
    );
  });

  it("renders contacts page when link is clicked", () => {
    render(<Portfolio />);

    const websitesLinkElement = screen.getByText(/lets talk/i);

    fireEvent.click(websitesLinkElement);

    expect(window.location.href).toBe("http://localhost/contact");
  });
});
