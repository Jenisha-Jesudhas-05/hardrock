import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { describe, it, expect } from 'vitest';

import { MobileHeader } from './mobile-header';
import { MOBILE_NAV_LINKS } from './nav-links';

const renderWithRouter = (ui: React.ReactElement) => render(<MemoryRouter>{ui}</MemoryRouter>);

describe('MobileHeader', () => {
  it('renders the location text', () => {
    renderWithRouter(<MobileHeader />);
    expect(screen.getByText('LAS VEGAS, NV')).toBeInTheDocument();
  });

  it('renders all nav links with correct labels', () => {
    renderWithRouter(<MobileHeader />);

    MOBILE_NAV_LINKS.forEach(({ label }) => {
      expect(screen.getByText(label)).toBeInTheDocument();
    });
  });

  it('renders all nav links with correct hrefs', () => {
    renderWithRouter(<MobileHeader />);

    MOBILE_NAV_LINKS.forEach(({ label, path }) => {
      expect(screen.getByText(label).closest('a')).toHaveAttribute('href', path);
    });
  });

  it('renders the primary navigation landmark', () => {
    renderWithRouter(<MobileHeader />);
    expect(screen.getByRole('navigation', { name: 'Primary' })).toBeInTheDocument();
  });

  it('applies custom className via twMerge', () => {
    const { container } = renderWithRouter(<MobileHeader className="block lg:hidden" />);
    expect(container.firstChild).toHaveClass('block', 'lg:hidden');
  });

  it('matches the number of rendered nav items to MOBILE_NAV_LINKS', () => {
    renderWithRouter(<MobileHeader />);
    const listItems = screen.getAllByRole('listitem');
    expect(listItems).toHaveLength(MOBILE_NAV_LINKS.length);
  });
});
