import BrandDetails from "@/app/(main)/brand/[id]/components/brandDetails";
import { COMMON_CONST } from "@/constants/appConstants";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { mockBrands } from "../../../../__fixtures__/app/components";

jest.mock("next/navigation", () => ({
  usePathname: jest.fn(() => ""),
}));
describe("Brand details components", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });
  test("should render titles properly", () => {
    const mockProps = mockBrands(1)[0];
    render(<BrandDetails brand={mockProps} />);
    expect(screen.getByAltText(mockProps.brandBg.altText)).toBeDefined();
    expect(screen.getByAltText(mockProps.brandLogo.altText)).toBeDefined();
    expect(
      screen.getByText(
        `${COMMON_CONST.HEADER_VIEW_MODELS}${mockProps.brandName}`
      )
    ).toBeDefined();
  });
});
describe("Brand details behavior", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });
  test("should show the models on header click", async () => {
    const mockProps = mockBrands(1)[0];
    render(<BrandDetails brand={mockProps} />);
    fireEvent.click(
      screen.getByText(
        `${COMMON_CONST.HEADER_VIEW_MODELS}${mockProps.brandName}`
      )
    );
    await waitFor(() => {
      expect(screen.getByText(mockProps.models[0].modelName)).toBeDefined();
    });
  });
});
