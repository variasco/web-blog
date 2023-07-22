import { fireEvent, screen } from "@testing-library/react";
import { componentRender } from "shared/lib/tests/componentRender";
import { Sidebar } from "./Sidebar";
import { Suspense } from "react";

describe("Sidebar widget", () => {
  test("render", () => {
    componentRender(
      <Suspense fallback="loading...">
        <Sidebar />
      </Suspense>
    );
    expect(screen.getByTestId("sidebar")).toBeInTheDocument();
  });
  test("toggle", () => {
    componentRender(
      <Suspense fallback="loading...">
        <Sidebar />
      </Suspense>
    );
    const toggleButton = screen.getByTestId("sidebar-toggle");
    fireEvent.click(toggleButton);
    expect(screen.getByTestId("sidebar")).toHaveClass("collapsed");
    fireEvent.click(toggleButton);
    expect(screen.getByTestId("sidebar")).not.toHaveClass("collapsed");
  });
});
