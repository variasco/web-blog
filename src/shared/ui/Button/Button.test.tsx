import { render, screen } from "@testing-library/react";
import { Button, ThemeButton } from "./Button";

describe("Button component", () => {
  test("render", () => {
    render(<Button>Test</Button>);
    expect(screen.getByText("Test")).toBeInTheDocument();
  });
  test("test clear theme in class", () => {
    render(<Button theme={ThemeButton.CLEAR}>Test</Button>);
    expect(screen.getByText("Test")).toHaveClass("clear");
  });
});
