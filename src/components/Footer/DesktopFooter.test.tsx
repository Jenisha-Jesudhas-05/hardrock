import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';

import { DesktopFooter } from './DesktopFooter';

// Mock child components/data that aren't the focus of this test
vi.mock('@components/SLogo/Logo/HeaderLogo', () => ({
  default: () => <div data-testid="header-logo" />,
}));

vi.mock('./FooterLinks', () => ({
  HARD_ROCK_LINKS: [{ label: 'About Us', href: '/about' }],
  CONNECT_LINKS: [{ label: 'Contact', href: '/contact' }],
  COMPANY_LINKS: [{ label: 'Careers', href: '/careers' }],
  FOOTER_LINKS: [{ label: 'Privacy Policy', href: '/privacy' }],
  SOCIAL_LINKS: [
    { label: 'Facebook', icon: 'facebook', href: 'https://facebook.com' },
    { label: 'Instagram', icon: 'instagram', href: 'https://instagram.com' },
  ],
}));

describe('DesktopFooter', () => {
  it('renders without crashing', () => {
    render(<DesktopFooter />);
    expect(screen.getByRole('contentinfo')).toBeInTheDocument();
  });

  it('renders the Hard Rock Las Vegas address', () => {
    render(<DesktopFooter />);
    expect(screen.getByText('3400 S Las Vegas Blvd, Las Vegas, NV 89109')).toBeInTheDocument();
  });

  it('renders the contact phone number', () => {
    render(<DesktopFooter />);
    expect(screen.getByText('+(866) 502-7529')).toBeInTheDocument();
  });

  it('renders the copyright text', () => {
    render(<DesktopFooter />);
    expect(screen.getByText(/Copyright © 2026 Hard Rock International/)).toBeInTheDocument();
  });

  it('renders social links with correct href and aria-label', () => {
    render(<DesktopFooter />);
    const facebookLink = screen.getByLabelText('Facebook');
    expect(facebookLink).toHaveAttribute('href', 'https://facebook.com');
  });

  it('renders footer bottom links', () => {
    render(<DesktopFooter />);
    expect(screen.getByText('Privacy Policy')).toBeInTheDocument();
  });

  it('applies custom className passed as prop', () => {
    render(<DesktopFooter className="custom-class" />);
    expect(screen.getByRole('contentinfo')).toHaveClass('custom-class');
  });
});
