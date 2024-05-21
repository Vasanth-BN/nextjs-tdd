import Porsche from "@/app/(main)/porsche/components/porsche";
import {
  COMMON_CONST,
  IMAGE_CONST,
  porscheModels,
} from "@/constants/appConstants";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";

jest.mock("next/navigation", () => ({
  useRouter: jest.fn(() => ({
    push: jest.fn(),
  })),
  usePathname: jest.fn(() => ""),
}));
describe("Porsche Page components", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });
  test("should render title properly", () => {
    render(<Porsche />);
    expect(screen.getByAltText(IMAGE_CONST.PORSCHE_ALT_TEXT)).toBeDefined();
    expect(screen.getByText(COMMON_CONST.HEADER_VIEW_MODELS)).toBeDefined();
  });
});

describe("Porsche page behaviors", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });
  test("should display the models on header click", () => {
    render(<Porsche />);

    fireEvent.click(screen.getByText(COMMON_CONST.HEADER_VIEW_MODELS));
    porscheModels.forEach((model) => {
      expect(screen.getByText(model)).toBeDefined();
    });
  });
  test("should push to the id page", async () => {
    render(<Porsche />);
    fireEvent.click(screen.getByText(COMMON_CONST.HEADER_VIEW_MODELS));

    fireEvent.click(screen.getByText(porscheModels[1]));
    await waitFor(() => {
      expect(COMMON_CONST.HEADER_SELECTED_MODEL).toBeDefined();
    });
  });
});
