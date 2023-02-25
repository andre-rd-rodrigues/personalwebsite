import { render } from "utils/tests/test-utils";
import Footer from "../Footer";

describe("Portfolio Category Page", () => {
  it("renders page correctly", () => {
    const { asFragment } = render(<Footer />);

    expect(asFragment()).toMatchSnapshot();
  });
});
