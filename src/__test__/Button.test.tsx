



import { render, screen } from '@testing-library/react'
import Button from '../components/UI/Button/Button'
import { describe, it,expect, vi } from 'vitest'

describe('Button', () => {
  it('renders the Button component', () => {
    render(<Button label="Test" id={1} handleClick={() => {}} />)
    expect(screen.getByText("Test")).toBeInTheDocument();
  })
  it('should click the button ', () => {
    const mockFn = vi.fn()
    render(<Button label="Test" id={1} handleClick={mockFn} />)
    const button = screen.getByText("Test");
    button.click()
    expect(mockFn).toHaveBeenCalledTimes(1);
  })
})