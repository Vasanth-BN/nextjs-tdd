import HomePage from "../../../src/app/(main)/page";
import { render, screen } from "@testing-library/react";

describe("Home Page", () => {
  test("should render title properly", () => {
    render(<HomePage />);
    expect(screen.getByAltText("Home Background Image")).toBeDefined();
  });
});
