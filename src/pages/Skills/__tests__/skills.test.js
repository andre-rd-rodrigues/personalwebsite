import { render } from "utils/tests/test-utils";
import Skills from "../Skills";

describe("Skills page", () => {
  it("renders page correctly", () => {
    const { asFragment } = render(<Skills />);

    expect(asFragment()).toMatchSnapshot();
  });
});
