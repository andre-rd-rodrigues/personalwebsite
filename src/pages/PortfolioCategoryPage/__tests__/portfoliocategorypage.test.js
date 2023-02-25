import { render } from "utils/tests/test-utils";
import PortfolioCategoryPage from "../PortfolioCategoryPage";

describe("Portfolio Category Page", () => {
  it("renders page correctly", () => {
    const { asFragment } = render(<PortfolioCategoryPage />);

    expect(asFragment()).toMatchSnapshot();
  });
});
