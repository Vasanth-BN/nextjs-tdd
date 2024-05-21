import Audi from "@/app/(main)/audi/components/audi";
import {
  COMMON_CONST,
  IMAGE_CONST,
  audiModels,
} from "@/constants/appConstants";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";

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
    render(<Audi />);
    expect(screen.getByAltText(IMAGE_CONST.AUDI_ALT_TEXT)).toBeDefined();
    expect(screen.getByText(COMMON_CONST.HEADER_VIEW_MODELS)).toBeDefined();
  });
});

describe("Audi page behaviors", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });
  test("should display the models on header click", () => {
    render(<Audi />);

    fireEvent.click(screen.getByText(COMMON_CONST.HEADER_VIEW_MODELS));
    audiModels.forEach((model) => {
      expect(screen.getByText(model)).toBeDefined();
    });
  });
  test("should push to the id page", async () => {
    render(<Audi />);
    fireEvent.click(screen.getByText(COMMON_CONST.HEADER_VIEW_MODELS));

    fireEvent.click(screen.getByText(audiModels[1]));
    await waitFor(() => {
      expect(COMMON_CONST.HEADER_SELECTED_MODEL).toBeDefined();
    });
  });
});
