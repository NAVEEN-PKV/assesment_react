import { render, screen,fireEvent } from '@testing-library/react'
import Navigation from '../components/Navigation/Navigation'
import { describe, it,expect } from 'vitest'
import { NavigationData } from '../data/NavigationData'

describe('Button', () => {
  it('should click the button ', () => {
    render(<Navigation  />)
    expect(screen.getByText("Introduction to React")).toBeInTheDocument();
  })
  it("updates buttonId when a button is clicked", () => {
    render(<Navigation />);
    const secondButton = screen.getByText(NavigationData[1].label);
    fireEvent.click(secondButton);
    expect(screen.getByText(NavigationData[1].heading)).toBeInTheDocument();
  });
 
})