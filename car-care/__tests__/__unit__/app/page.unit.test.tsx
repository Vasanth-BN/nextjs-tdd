import { render, screen } from "@testing-library/react";
import HomePage from "../../../src/app/(main)/page";

describe("Home Page", () => {
  test("should render title properly", () => {
    render(<HomePage />);
    expect(screen.getByAltText("Home Background Image")).toBeDefined();
  });
});
