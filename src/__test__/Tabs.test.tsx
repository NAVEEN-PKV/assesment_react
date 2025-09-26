import { render, screen, fireEvent } from "@testing-library/react";
import Tabs from "../components/Tabs/Tabs";
import { describe, it, expect } from "vitest";
import { tabsData } from "../data/TabsData";

describe("Tabs", () => {
  it("should click the button ", () => {
    render(<Tabs tabsData={tabsData} />);
    expect(screen.getByText("Introduction to React")).toBeInTheDocument();
  });
  it("updates buttonId when a button is clicked", () => {
    render(<Tabs tabsData={tabsData} />);
    const secondButton = screen.getByText(tabsData[1].label);
    fireEvent.click(secondButton);
    expect(screen.getByText(tabsData[1].heading)).toBeInTheDocument();
  });
});
