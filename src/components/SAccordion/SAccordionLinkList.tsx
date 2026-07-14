import SIcon from '@components/SIcons/SIcon';
import SText from '@components/SText/SText';
import type { SAccordionLinkListProps } from './SAccordionLinkList.types';

const SAccordionLinkList = ({ links }: SAccordionLinkListProps) => (
  <div className="flex flex-col gap-3">
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
);

export default SAccordionLinkList;
