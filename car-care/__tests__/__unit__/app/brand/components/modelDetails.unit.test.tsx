import ModelDetailsPage from "@/app/(main)/brand/[id]/[modelId]/page";
import { faker } from "@faker-js/faker";
import { render, screen } from "@testing-library/react";

describe("Brand details components", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });
  test("should render titles properly", () => {
    const id = faker.number.int(5).toString();
    render(<ModelDetailsPage params={{ id }} />);
    expect(screen.getByText(id)).toBeDefined();
  });
});
