import Bmw from "@/app/(main)/bmw/page";
import { COMMON_CONST, IMAGE_CONST, bmwModels } from "@/constants/appConstants";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
const pushMock = jest.fn();
jest.mock("next/navigation", () => ({
  useRouter: jest.fn(() => ({
    push: jest.fn(),
  })),
  usePathname: jest.fn(() => ""),
}));
describe("Bmw Page components", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });
  test("should render title properly", () => {
    render(<Bmw />);
    expect(screen.getByAltText(IMAGE_CONST.BMW_ALT_TEXT)).toBeDefined();
    expect(screen.getByText(COMMON_CONST.HEADER_VIEW_MODELS)).toBeDefined();
  });
});

describe("Bmw page behaviors", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });
  test("should display the models on header click", () => {
    render(<Bmw />);

    fireEvent.click(screen.getByText(COMMON_CONST.HEADER_VIEW_MODELS));
    bmwModels.forEach((model) => {
      expect(screen.getByText(model)).toBeDefined();
    });
  });
  test("should push to the id page", async () => {
    render(<Bmw />);
    fireEvent.click(screen.getByText(COMMON_CONST.HEADER_VIEW_MODELS));

    fireEvent.click(screen.getByText(bmwModels[1]));
    await waitFor(() => {
      expect(COMMON_CONST.HEADER_SELECTED_MODEL).toBeDefined();
    });
  });
});
