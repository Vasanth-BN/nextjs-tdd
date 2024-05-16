import LoginModal from "@/app/(main)/login/page";
import SignInModal from "@/app/(main)/signIn/page";
import NavBar from "@/components/sidePanel/navBar";
import {
  COMMON_CONST,
  NAV_BAR_CONST,
  SIGN_IN_MODAL_CONST,
} from "@/constants/appConstants";
import { fireEvent, render, screen } from "@testing-library/react";

describe("Nav bar", () => {
  test("should render logo properly", () => {
    render(<NavBar />);
    expect(
      screen.getByAltText(NAV_BAR_CONST.BRAND_LOGO_ALT_LABEL)
    ).toBeDefined();
  });
  test("should render Sign In modal properly", () => {
    render(<SignInModal />);

    fireEvent.click(screen.getByText(COMMON_CONST.SIGN_IN_LABEL));
    expect(
      screen.getByAltText(SIGN_IN_MODAL_CONST.FIRST_NAME_LABEL)
    ).toBeDefined();
    expect(
      screen.getByAltText(SIGN_IN_MODAL_CONST.LAST_NAME_LABEL)
    ).toBeDefined();
    expect(screen.getByAltText(COMMON_CONST.USER_NAME_LABEL)).toBeDefined();
    expect(screen.getByAltText(SIGN_IN_MODAL_CONST.PHONE_LABEL)).toBeDefined();
    expect(
      screen.getByAltText(SIGN_IN_MODAL_CONST.ADDRESS_LABEL)
    ).toBeDefined();
    expect(
      screen.getByAltText(SIGN_IN_MODAL_CONST.MAIL_ID_LABEL)
    ).toBeDefined();
  });

  test("should render Login modal properly", () => {
    render(<LoginModal />);
    expect(screen.getByAltText(COMMON_CONST.USER_NAME_LABEL)).toBeDefined();
    expect(screen.getByAltText(COMMON_CONST.PASSWORD_LABEL)).toBeDefined();
  });
});
