import { Link } from 'react-router-dom';
import { twMerge } from 'tailwind-merge';

import SText from '@components/SText/SText';
import Icon from '@components/SIcons/SIcon';
import Logo from '@components/SLogo/Logo/HeaderLogo';

import { DESKTOP_NAV_LINKS } from './nav-links';
import type { DesktopHeaderProps } from './header.types';

export const DesktopHeader = ({ className }: DesktopHeaderProps) => {
  return (
    <header
      className={twMerge(
        'flex h-20 w-full items-center justify-between bg-black px-4 text-white',
        className,
      )}
    >
      <div className="flex items-center gap-6">
        <Logo />

        <div className="flex items-center gap-2">
          <Icon name="locationPin" size={16} className="text-[#F9B200]" />

          <SText variant="bodySm" classStyles="text-white">
            LAS VEGAS, NV
          </SText>
        </div>
      </div>

      <nav>
        <ul className="flex items-center gap-4">
          {DESKTOP_NAV_LINKS.map((item) => (
            <li key={item.path}>
              <Link to={item.path}>{item.label}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};
