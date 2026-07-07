import { useState } from 'react';
import { twMerge } from 'tailwind-merge';
import SIcon from '@components/SIcons/SIcon';
import SText from '@components/SText/SText';
import type { FooterColumnLink } from './FooterColumn';

type FooterAccordionColumnProps = {
  title: string;
  links: FooterColumnLink[];
};

const FooterAccordionColumn = ({ title, links }: FooterAccordionColumnProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        aria-expanded={isOpen}
        className="flex w-full items-center justify-between py-4"
      >
        <SText variant="bodyMd" classStyles="leading-snug text-white">
          {title}
        </SText>
        <SIcon
          name="chevronDown"
          size={18}
          className={twMerge('text-white transition-transform', isOpen && 'rotate-180')}
        />
      </button>

      {isOpen && (
        <div className="flex flex-col gap-3 pb-4">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="flex items-center gap-2 text-white/80 transition hover:text-white"
            >
              <SText variant="bodySm" classStyles="font-normal text-white leading-normal">
                {link.label}
              </SText>

              {link.external && <SIcon name="externalLink" size={16} className="text-white/80" />}
            </a>
          ))}
        </div>
      )}
    </div>
  );
};

export default FooterAccordionColumn;
