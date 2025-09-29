import SignInPage from "@/app/(auth)/signin/page";
import { SIGN_IN_CONST } from "@/constants/appConstants";
import { render, screen } from "@testing-library/react";
jest.mock("next/navigation", () => ({
  useRouter: jest.fn(() => ({
    redirect: jest.fn(),
  })),
  usePathname: jest.fn(() => ""),
}));

jest.mock("next-auth/react", () => ({
  signIn: jest.fn(),
  useSession: jest.fn(),
}));

describe("Sign-in Page", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });
  test("should render title properly", () => {
    render(<SignInPage />);
    expect(screen.getByText(SIGN_IN_CONST.EMAIL_LABEL)).toBeDefined();
    expect(screen.getByText(SIGN_IN_CONST.PASSWORD_LABEL)).toBeDefined();
    expect(screen.getByText(SIGN_IN_CONST.SUBMIT_BUTTON_LABEL)).toBeDefined();
  });
});
