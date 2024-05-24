import Brands from "@/app/(main)/brand/components/brands";
import { BRAND_CONST } from "@/constants/appConstants";
import { render, screen } from "@testing-library/react";

jest.mock("next/navigation", () => ({
  useRouter: jest.fn(() => ({
    push: jest.fn(),
  })),
  usePathname: jest.fn(() => ""),
}));
describe("Audi Page components", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });
  test("should render title properly", () => {
    render(<Brands />);
    expect(screen.getByText(BRAND_CONST.HEADER_BRAND)).toBeDefined();
  });
});
