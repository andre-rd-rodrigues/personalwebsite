import { render } from "utils/tests/test-utils";
import PageNotFound from "../PageNotFound";

describe("404 page", () => {
  it("renders page correctly", () => {
    const { asFragment } = render(<PageNotFound />);

    expect(asFragment()).toMatchSnapshot();
  });
});
