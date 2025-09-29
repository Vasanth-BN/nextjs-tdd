import SignInForm from "@/app/(auth)/signin/signInForm";
import { AUTH_CONST, SIGN_IN_CONST } from "@/constants/appConstants";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { mockSession } from "../../../__fixtures__/lib";
import { signIn, useSession } from "next-auth/react";
import { AUTH_ERROR } from "@/constants/apiError";
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
describe("Error on signing in", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });
  test("should authenticate and navigate to home page on click", async () => {
    (useSession as jest.Mock).mockReturnValue(mockSession);
    render(<SignInForm error={""} />);
    const emailField = screen.getByPlaceholderText(
      SIGN_IN_CONST.EMAIL_PLACEHOLDER
    );
    fireEvent.change(emailField, {
      target: { value: AUTH_CONST.VALID_MAIL },
    });
    const passwordField = screen.getByPlaceholderText(
      SIGN_IN_CONST.PASSWORD_PLACEHOLDER
    );
    fireEvent.change(passwordField, {
      target: { value: AUTH_CONST.VALID_PASSWORD },
    });
    fireEvent.click(screen.getByText(SIGN_IN_CONST.SUBMIT_BUTTON_LABEL));
    await waitFor(() => {
      expect(signIn).toHaveBeenCalled();
    });
  });
});
