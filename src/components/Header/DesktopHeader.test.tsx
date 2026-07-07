import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { describe, it, expect } from 'vitest';

import { DesktopHeader } from './DesktopHeader';
import { DESKTOP_NAV_LINKS } from './NavLinks';

const renderWithRouter = (ui: React.ReactElement) => render(<MemoryRouter>{ui}</MemoryRouter>);

describe('DesktopHeader', () => {
  it('renders the location text', () => {
    renderWithRouter(<DesktopHeader />);
    expect(screen.getByText('LAS VEGAS, NV')).toBeInTheDocument();
  });

  it('renders all nav links with correct labels', () => {
    renderWithRouter(<DesktopHeader />);

    DESKTOP_NAV_LINKS.forEach(({ label }) => {
      expect(screen.getByText(label)).toBeInTheDocument();
    });
  });

  it('renders all nav links with correct hrefs', () => {
    renderWithRouter(<DesktopHeader />);

    DESKTOP_NAV_LINKS.forEach(({ label, path }) => {
      expect(screen.getByText(label).closest('a')).toHaveAttribute('href', path);
    });
  });

  it('applies custom className via twMerge', () => {
    const { container } = renderWithRouter(<DesktopHeader className="hidden lg:flex" />);
    expect(container.firstChild).toHaveClass('hidden', 'lg:flex');
  });

  it('matches the number of rendered nav items to DESKTOP_NAV_LINKS', () => {
    renderWithRouter(<DesktopHeader />);
    const listItems = screen.getAllByRole('listitem');
    expect(listItems).toHaveLength(DESKTOP_NAV_LINKS.length);
  });
});
