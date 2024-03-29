import { render } from "utils/tests/test-utils";

import Contact from "../Contact";

describe("Contact page", () => {
  it("renders page correctly", () => {
    const { asFragment } = render(<Contact />);

    expect(asFragment()).toMatchSnapshot();
  });
});
