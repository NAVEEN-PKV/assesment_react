import { render, screen } from '@testing-library/react'
import Navigation from '../components/Navigation/Navigation'
import { describe, it,expect } from 'vitest'

describe('Button', () => {
  it('should click the button ', () => {
    render(<Navigation  />)
    expect(screen.getByText("Introduction to React")).toBeInTheDocument();
  })
 
})