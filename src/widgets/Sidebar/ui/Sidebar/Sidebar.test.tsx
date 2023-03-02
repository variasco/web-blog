import { fireEvent, screen } from "@testing-library/react";
import { componentRender } from "shared/lib/tests/componentRender";
import { Sidebar } from "./Sidebar";

describe("Sidebar widget", () => {
  test("render", () => {
    componentRender(<Sidebar />);
    expect(screen.getByTestId("sidebar")).toBeInTheDocument();
  });
  test("toggle", () => {
    componentRender(<Sidebar />);
    const toggleButton = screen.getByTestId("sidebar-toggle");
    fireEvent.click(toggleButton);
    expect(screen.getByTestId("sidebar")).toHaveClass("collapsed");
    fireEvent.click(toggleButton);
    expect(screen.getByTestId("sidebar")).not.toHaveClass("collapsed");
  });
});
