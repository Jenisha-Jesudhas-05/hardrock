import { useState } from 'react';
import { twMerge } from 'tailwind-merge';
import SIcon from '@components/SIcons/SIcon';
import SText from '@components/SText/SText';
import type { SAccordionProps } from './SAccordian.types';

const SAccordion = ({ title, children, defaultOpen = false }: SAccordionProps) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

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

      {isOpen && <div className="pb-4">{children}</div>}
    </div>
  );
};

export default SAccordion;
