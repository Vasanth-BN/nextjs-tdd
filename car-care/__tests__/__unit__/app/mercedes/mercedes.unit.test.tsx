import Mercedes from "@/app/(main)/mercedes/page";
import {
  COMMON_CONST,
  IMAGE_CONST,
  mercedesModels,
} from "@/constants/appConstants";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";

jest.mock("next/navigation", () => ({
  useRouter: jest.fn(() => ({
    push: jest.fn(),
  })),
  usePathname: jest.fn(() => ""),
}));
describe("Mercedes Page components", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });
  test("should render title properly", () => {
    render(<Mercedes />);
    expect(screen.getByAltText(IMAGE_CONST.MERCEDES_ALT_TEXT)).toBeDefined();
    expect(screen.getByText(COMMON_CONST.HEADER_VIEW_MODELS)).toBeDefined();
  });
});

describe("Mercedes page behaviors", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });
  test("should display the models on header click", () => {
    render(<Mercedes />);

    fireEvent.click(screen.getByText(COMMON_CONST.HEADER_VIEW_MODELS));
    mercedesModels.forEach((model) => {
      expect(screen.getByText(model)).toBeDefined();
    });
  });
  test("should push to the id page", async () => {
    render(<Mercedes />);
    fireEvent.click(screen.getByText(COMMON_CONST.HEADER_VIEW_MODELS));

    fireEvent.click(screen.getByText(mercedesModels[1]));
    await waitFor(() => {
      expect(COMMON_CONST.HEADER_SELECTED_MODEL).toBeDefined();
    });
  });
});
