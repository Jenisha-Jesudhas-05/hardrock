import { Link } from 'react-router-dom';
import { twMerge } from 'tailwind-merge';

import SText from '@components/SText/SText';
import Logo from '@components/SLogo/Logo/HeaderLogo';
import SIcon from '@components/SIcons/SIcon';
import { MOBILE_NAV_LINKS } from './nav-links';
import type { MobileHeaderProps } from './header.types';

export const MobileHeader = ({ className }: MobileHeaderProps) => {
  return (
    <header className={twMerge('w-full bg-black text-white', className)}>
      <div className="flex items-center justify-between px-4 py-3">
        <Logo />

        <div className="flex items-center gap-1.5">
          <SIcon name="locationPin" size={16} className="text-[#F9B200]" />
          <SText variant="bodyXs" classStyles="text-2xs text-white">
            LAS VEGAS, NV
          </SText>
        </div>
      </div>

      <nav aria-label="Primary" className="border-t border-white/10 px-2 py-3">
        <ul className="flex items-center justify-between md:gap-6">
          {MOBILE_NAV_LINKS.map((item) => (
            <li key={item.path}>
              <Link
                to={item.path}
                className="flex flex-col items-center gap-1 md:flex-row md:gap-2"
              >
                <SIcon name={item.icon} size={22} className="text-[#FFFFFFBF]" />
                <SText variant="bodySm" classStyles="text-xs leading-normal text-[#FFFFFFBF]">
                  {item.label}
                </SText>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};
