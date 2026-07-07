import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';

import { MobileFooter } from './MobileFooter';

vi.mock('@components/SLogo/Logo/HeaderLogo', () => ({
  default: () => <div data-testid="header-logo" />,
}));

vi.mock('./FooterAccordionColumn', () => ({
  default: ({ title }: { title: string }) => <div data-testid="accordion-column">{title}</div>,
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

describe('MobileFooter', () => {
  it('renders without crashing', () => {
    render(<MobileFooter />);
    expect(screen.getByRole('contentinfo')).toBeInTheDocument();
  });

  it('renders accordion columns for each link section', () => {
    render(<MobileFooter />);
    const accordions = screen.getAllByTestId('accordion-column');
    expect(accordions).toHaveLength(3);
    expect(accordions[0]).toHaveTextContent('Hard Rock Las Vegas');
    expect(accordions[1]).toHaveTextContent('Connect & Inquire');
    expect(accordions[2]).toHaveTextContent('Company Information');
  });

  it('renders the Hard Rock Las Vegas address', () => {
    render(<MobileFooter />);
    expect(screen.getByText('3400 S Las Vegas Blvd, Las Vegas, NV 89109')).toBeInTheDocument();
  });

  it('renders the contact phone number', () => {
    render(<MobileFooter />);
    expect(screen.getByText('+(866) 502-7529')).toBeInTheDocument();
  });

  it('renders the copyright text', () => {
    render(<MobileFooter />);
    expect(screen.getByText(/Copyright © 2026 Hard Rock International/)).toBeInTheDocument();
  });

  it('renders social links with correct href and aria-label', () => {
    render(<MobileFooter />);
    const facebookLink = screen.getByLabelText('Facebook');
    expect(facebookLink).toHaveAttribute('href', 'https://facebook.com');
  });

  it('renders footer bottom links', () => {
    render(<MobileFooter />);
    expect(screen.getByText('Privacy Policy')).toBeInTheDocument();
  });

  it('applies custom className passed as prop', () => {
    render(<MobileFooter className="custom-class" />);
    expect(screen.getByRole('contentinfo')).toHaveClass('custom-class');
  });
});
