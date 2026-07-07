import { Link } from 'react-router-dom';
import { twMerge } from 'tailwind-merge';

import SText from '@components/SText/SText';
import Logo from '@components/SLogo/Logo/HeaderLogo';
import SIcon from '@components/SIcons/SIcon';

import { DESKTOP_NAV_LINKS } from './NavLinks';
import type { DesktopHeaderProps } from './header.types';

export const DesktopHeader = ({ className }: DesktopHeaderProps) => {
  return (
    <header className={twMerge('w-full bg-black px-4 py-3 text-white flex flex-col', className)}>
      {/* Row 1 */}
      <div className="flex w-full items-center justify-between">
        <button className="inline-flex items-center gap-2">
          <SText variant="bodyXs" classStyles="text-white leading-midloose">
            Explore Hard Rock
          </SText>

          <SIcon name="chevronDown" size={18} className="text-white" />
        </button>

        <button className="flex items-center gap-2">
          <SIcon name="unity" size={16} className="text-[#D6B151]" />

          <SText variant="bodyXs" classStyles="text-[#D6B151] leading-midloose">
            Unlock Membership Rewards
          </SText>
        </button>
      </div>

      {/* Row 2 */}
      <div className="mt-4 flex w-full items-center justify-between">
        <div className="flex items-center gap-6">
          <Logo />

          <div className="flex items-center gap-2">
            <SIcon name="locationPin" size={16} className="text-[#F9B200]" />

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
      </div>
    </header>
  );
};
