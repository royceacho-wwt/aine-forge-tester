// aine-forge-rule: reviewed
import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Footer } from './Footer'

describe('Footer', () => {
  it('renders with default props', () => {
    render(<Footer />)
    expect(screen.getByText(/Aine Forge Tester/)).toBeInTheDocument()
    expect(screen.getByText(/All rights reserved/)).toBeInTheDocument()
  })

  it('renders with custom company name', () => {
    render(<Footer companyName="Custom Company" />)
    expect(screen.getByText(/Custom Company/)).toBeInTheDocument()
  })

  it('renders with custom year', () => {
    render(<Footer year={2023} />)
    expect(screen.getByText(/2023/)).toBeInTheDocument()
  })

  it('renders all footer links', () => {
    render(<Footer />)
    expect(screen.getByText('About')).toBeInTheDocument()
    expect(screen.getByText('Contact')).toBeInTheDocument()
    expect(screen.getByText('Privacy')).toBeInTheDocument()
  })

  it('footer links have correct href attributes', () => {
    render(<Footer />)
    const aboutLink = screen.getByText('About').closest('a')
    const contactLink = screen.getByText('Contact').closest('a')
    const privacyLink = screen.getByText('Privacy').closest('a')
    
    expect(aboutLink).toHaveAttribute('href', '/about')
    expect(contactLink).toHaveAttribute('href', '/contact')
    expect(privacyLink).toHaveAttribute('href', '/privacy')
  })
})
