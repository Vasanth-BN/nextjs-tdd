import { BRAND_CONST } from "@/constants/appConstants";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import HomePage from "../../../src/app/(main)/page";
jest.mock("next/navigation", () => ({
  useRouter: jest.fn(() => ({
    push: jest.fn(),
  })),
  usePathname: jest.fn(() => ""),
}));
describe("Home Page", () => {
  test("should render title properly", () => {
    render(<HomePage />);
    expect(screen.getByAltText("Home Background Image")).toBeDefined();
  });

  test("should navigate to brand page on click", async () => {
    render(<HomePage />);
    fireEvent.click(screen.getByAltText("Home Background Image"));

    await waitFor(() => {
      expect(BRAND_CONST.HEADER_BRAND).toBeDefined();
    });
  });
});
