import Audi from "@/app/(main)/audi/components/audi";
import Ferrari from "@/app/(main)/ferrari/components/ferrari";
import {
  COMMON_CONST,
  IMAGE_CONST,
  ferrariModels,
} from "@/constants/appConstants";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";

jest.mock("next/navigation", () => ({
  useRouter: jest.fn(() => ({
    push: jest.fn(),
  })),
  usePathname: jest.fn(() => ""),
}));
describe("Ferrari Page components", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });
  test("should render title properly", () => {
    render(<Ferrari />);
    expect(screen.getByAltText(IMAGE_CONST.FERRARI_ALT_TEXT)).toBeDefined();
    expect(screen.getByText(COMMON_CONST.HEADER_VIEW_MODELS)).toBeDefined();
  });
});

describe("Ferrari page behaviors", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });
  test("should display the models on header click", () => {
    render(<Ferrari />);

    fireEvent.click(screen.getByText(COMMON_CONST.HEADER_VIEW_MODELS));
    ferrariModels.forEach((model) => {
      expect(screen.getByText(model)).toBeDefined();
    });
  });
  test("should push to the id page", async () => {
    render(<Ferrari />);
    fireEvent.click(screen.getByText(COMMON_CONST.HEADER_VIEW_MODELS));

    fireEvent.click(screen.getByText(ferrariModels[1]));
    await waitFor(() => {
      expect(COMMON_CONST.HEADER_SELECTED_MODEL).toBeDefined();
    });
  });
});
