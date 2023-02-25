import { render } from "utils/tests/test-utils";
import AppNavbar from "../AppNavbar";

describe("Portfolio Category Page", () => {
  it("renders page correctly", () => {
    const { asFragment } = render(<AppNavbar />);

    expect(asFragment()).toMatchSnapshot();
  });
});
