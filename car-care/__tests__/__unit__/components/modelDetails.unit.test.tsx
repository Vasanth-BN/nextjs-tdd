import ModelDetails from "@/components/models/modelDetails";
import { COMMON_CONST } from "@/constants/appConstants";
import { render } from "@testing-library/react";

describe("Model details page", () => {
  test("should render header properly", () => {
    render(<ModelDetails id={0} />);

    expect(`${COMMON_CONST.HEADER_SELECTED_MODEL}${0}`).toBeDefined();
  });
});
