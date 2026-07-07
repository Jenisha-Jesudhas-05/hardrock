import { twMerge } from 'tailwind-merge';

import SText from '@components/SText/SText';
import SButton from '@components/SButton/SButton';
import SIcon from '@components/SIcons/SIcon';
import Logo from '@components/SLogo/Logo/HeaderLogo';

import FooterColumn from './FooterColumn';
import FooterOfferBlock from './FooterOfferBlock';
import {
  COMPANY_LINKS,
  CONNECT_LINKS,
  HARD_ROCK_LINKS,
  FOOTER_LINKS,
  SOCIAL_LINKS,
} from './FooterLinks';
import type { DesktopFooterProps } from './Footer.types';

export const DesktopFooter = ({ className }: DesktopFooterProps) => {
  return (
    <footer className={twMerge('w-full bg-black text-white', className)}>
      <div className="mx-auto max-w-7xl px-8 pt-14 pb-6">
        <div className="grid grid-cols-4 gap-20">
          <div>
            <FooterOfferBlock />
          </div>

          <FooterColumn title="Hard Rock Las Vegas" links={HARD_ROCK_LINKS} />
          <FooterColumn title="Connect & Inquire" links={CONNECT_LINKS} />
          <FooterColumn title="Company Information" links={COMPANY_LINKS} />
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-8 py-8">
        <div className="border-t border-white/15" />

        <div className="mt-7 flex items-center">
          <Logo />

          <SText variant="bodySm" classStyles="ml-5 text-white leading-normal">
            LAS VEGAS, NV
          </SText>

          <div className="ml-12 flex items-center gap-6">
            {SOCIAL_LINKS.map(({ label, icon, href }) => {
              const hasWhiteBg = icon === 'youtube' || icon === 'facebook';

              return (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={label}
                  className={twMerge(
                    'flex h-6 w-6 items-center justify-center',
                    hasWhiteBg && 'rounded-full bg-white',
                  )}
                >
                  <SIcon
                    name={icon}
                    size={20}
                    className={twMerge(hasWhiteBg ? 'text-black' : 'text-white')}
                  />
                </a>
              );
            })}
          </div>
        </div>

        <div className="mt-8 flex items-center gap-3">
          <SIcon name="locationPin" size={24} className="text-[#FFFFFFBF]" />

          <SText variant="bodySm" classStyles="text-[#FFFFFF] font-normal leading-normal">
            3400 S Las Vegas Blvd, Las Vegas, NV 89109
          </SText>
        </div>

        <div className="mt-4 flex items-center gap-3">
          <SIcon name="phone" size={18} className="text-[#FFFFFFBF]" />

          <SText variant="bodySm" classStyles="text-[#FFFFFF] font-normal leading-normal">
            +(866) 502-7529
          </SText>
        </div>

        <div className="mt-8 border-t border-white/15" />

        <div className="mt-6">
          <SText variant="bodyXs" classStyles="text-[#FFFFFFBF] font-normal leading-relaxed">
            Copyright © 2026 Hard Rock International (USA), Inc. All rights reserved. Gambling
            problem? Please call <u>1-888-ADMIT-IT</u>.
          </SText>
        </div>

        <div className="mt-4 flex flex-wrap gap-x-6 gap-y-2">
          {FOOTER_LINKS.map(({ label }) => (
            <SButton
              key={label}
              variant="ghost"
              size="sm"
              classStyles="h-auto px-0 text-xs font-normal whitespace-nowrap text-[#FFFFFFBF]"
            >
              {label}
            </SButton>
          ))}
        </div>
      </div>
    </footer>
  );
};
