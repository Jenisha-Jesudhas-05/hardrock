import { twMerge } from 'tailwind-merge';

import SText from '@components/SText/SText';
import SButton from '@components/SButton/SButton';
import SIcon from '@components/SIcons/SIcon';
import Logo from '@components/SLogo/Logo/HeaderLogo';

import FooterOfferBlock from './FooterOfferBlock';
import FooterAccordionColumn from './FooterAccordionColumn';
import {
  COMPANY_LINKS,
  CONNECT_LINKS,
  HARD_ROCK_LINKS,
  FOOTER_LINKS,
  SOCIAL_LINKS,
} from './FooterLinks';
import type { MobileFooterProps } from './Footer.types';

export const MobileFooter = ({ className }: MobileFooterProps) => {
  return (
    <footer className={twMerge('w-full bg-black text-white', className)}>
      {/* Top section — offer block + accordions */}
      <div className="w-full max-w-7xl xl:max-w-360 mx-auto px-4 xl:px-4 py-6">
        <FooterOfferBlock />

        <div className="mt-6 border-t border-white/15" />

        <FooterAccordionColumn title="Hard Rock Las Vegas" links={HARD_ROCK_LINKS} />
        <FooterAccordionColumn title="Connect & Inquire" links={CONNECT_LINKS} />
        <FooterAccordionColumn title="Company Information" links={COMPANY_LINKS} />
      </div>

      <div className="w-full max-w-7xl xl:max-w-360 mx-auto px-4 xl:px-4 py-6">
        <div className="flex items-center gap-2">
          <Logo />
          <SText variant="bodySm" classStyles="text-white uppercase tracking-wide">
            LAS VEGAS, NV
          </SText>
        </div>

        <div className="mt-6 flex items-center gap-6">
          {SOCIAL_LINKS.map(({ label, icon, href }) => {
            const hasWhiteBg = icon === 'youtube' || icon === 'facebook';

            return (
              <a
                key={label}
                href={href}
                aria-label={label}
                target="_blank"
                rel="noreferrer"
                className={twMerge(
                  'flex h-6 w-6 items-center justify-center',
                  hasWhiteBg && 'rounded-full bg-white',
                )}
              >
                <SIcon
                  name={icon}
                  size={20}
                  className={twMerge('shrink-0', hasWhiteBg ? 'text-black' : 'text-white')}
                />
              </a>
            );
          })}
        </div>

        <div className="mt-6 flex items-start gap-2">
          <SIcon name="locationPin" size={18} className="mt-0.5 shrink-0 text-white/70" />
          <SText variant="bodySm" classStyles="text-white/70">
            3400 S Las Vegas Blvd, Las Vegas, NV 89109
          </SText>
        </div>

        <div className="mt-3 flex items-center gap-2">
          <SIcon name="phone" size={18} className="shrink-0 text-white/70" />
          <SText variant="bodySm" classStyles="text-white/70">
            +(866) 502-7529
          </SText>
        </div>

        <div className="mt-6 border-t border-white/15" />

        <div className="mt-6">
          <SText variant="bodyXs" classStyles="font-normal leading-5 text-[#FFFFFFBF]">
            Copyright © 2026 Hard Rock International (USA), Inc. All rights reserved. Gambling
            problem? Please call <u>1-888-ADMIT-IT</u>.
          </SText>
        </div>

        <div className="mt-4 flex flex-wrap gap-x-4 gap-y-2">
          {FOOTER_LINKS.map(({ label }) => (
            <SButton
              key={label}
              variant="ghost"
              size="sm"
              classStyles="cursor-pointer h-auto px-0 text-xs font-normal whitespace-nowrap text-[#FFFFFFBF]"
            >
              {label}
            </SButton>
          ))}
        </div>
      </div>
    </footer>
  );
};
