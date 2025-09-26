import { fireEvent, render, screen } from "@testing-library/react";
import Button from "../components/UI/Button/Button";
import { describe, it, expect, vi } from "vitest";

describe("Button", () => {
  it("renders the Button component", () => {
    render(<Button buttonId={1} label="Test" id={1} handleClick={() => {}} />);
    expect(screen.getByTestId("tab-button-1")).toBeInTheDocument();
  });
  it("should click the button ", () => {
    const mockFn = vi.fn();
    render(<Button buttonId={1} label="Test" id={1} handleClick={mockFn} />);
    const button = screen.getByTestId("tab-button-1");
    fireEvent.click(button);
    expect(mockFn).toHaveBeenCalledTimes(1);
  });
  it("applies active-button class when active", () => {
    render(<Button buttonId={1} label="Test" id={1} handleClick={() => {}} />);
    const button = screen.getByTestId("tab-button-1");
    expect(button).toHaveClass("active-button");
  });
  it("does not apply active-button class when inactive", () => {
    render(<Button buttonId={2} label="Test" id={1} handleClick={() => {}} />);
    const button = screen.getByTestId("tab-button-1");
    expect(button).not.toHaveClass("active-button");
  });
});
