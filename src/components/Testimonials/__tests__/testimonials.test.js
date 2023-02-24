import { render } from "utils/tests/test-utils";
import Testimonials from "../Testimonials";

describe("Testimonials", () => {
  it("renders page correctly", () => {
    const { asFragment } = render(<Testimonials />);

    expect(asFragment()).toMatchSnapshot();
  });
});
