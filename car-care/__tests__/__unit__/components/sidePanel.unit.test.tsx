import { NAV_LINKS } from "@/components/sidePanel/navBar";
import { SidePanel } from "@/components/sidePanel/sidePanel";
import { render, screen } from "@testing-library/react";

describe("Side Panel", () => {
  test("render side panel list", () => {
    render(<SidePanel />);

    NAV_LINKS.forEach((model) => {
      expect(screen.getByText(model.label)).toBeDefined();
    });
  });
});
