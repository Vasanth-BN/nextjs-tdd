import { SidePanel } from "@/app/(main)/brand/components/sidePanel";
import {
  BRAND_CONST,
  COMMON_CONST,
  LOGO_CONST,
} from "@/constants/appConstants";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { mockSidePanelProps } from "../../../../__fixtures__/app/brand";
import { signOut } from "next-auth/react";
jest.mock("next-auth/react", () => ({
  signOut: jest.fn(),
  useSession: jest.fn(),
}));
describe("Sid panel component", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });
  test("should render logo properly", () => {
    render(<SidePanel {...mockSidePanelProps} />);
    expect(screen.getByAltText(LOGO_CONST.BRAND_LOGO_ALT_LABEL)).toBeDefined();
  });
});
describe("Sid panel behaviors", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test("should navigate to the brand page on logo click", async () => {
    const mockProps = { ...mockSidePanelProps };
    render(<SidePanel {...mockProps} />);
    fireEvent.click(screen.getByAltText(LOGO_CONST.BRAND_LOGO_ALT_LABEL));

    await waitFor(() => {
      expect(BRAND_CONST.HEADER_BRAND).toBeDefined();
    });
  });

  test("should navigate to the model page on brand name click", async () => {
    const mockProps = { ...mockSidePanelProps };
    render(<SidePanel {...mockProps} />);
    fireEvent.click(screen.getByText(mockProps.brands[0].brandName));

    await waitFor(() => {
      expect(COMMON_CONST.HEADER_VIEW_MODELS).toBeDefined();
    });
  });
  test("should signOut", async () => {
    const mockProps = { ...mockSidePanelProps };
    render(<SidePanel {...mockProps} />);
    fireEvent.click(screen.getByText(COMMON_CONST.SIGN_OUT_LABEL));

    await waitFor(() => {
      expect(signOut).toHaveBeenCalled();
    });
  });
});
