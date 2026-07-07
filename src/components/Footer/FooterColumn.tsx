import SText from '@components/SText/SText';
import SIcon from '@components/SIcons/SIcon';

export interface FooterColumnLink {
  label: string;
  href: string;
  external?: boolean;
}

interface FooterColumnProps {
  title: string;
  links: FooterColumnLink[];
}

const FooterColumn = ({ title, links }: FooterColumnProps) => {
  return (
    <div className="flex flex-col">
      <SText variant="bodyMd" classStyles="mb-4 text-[#FFFFFFBF] leading-normal">
        {title}
      </SText>

      <div className="space-y-4">
        {links.map((link) => (
          <a
            key={link.label}
            href={link.href}
            className="flex items-center gap-2 text-white transition hover:text-white/80"
          >
            <SText variant="bodySm" classStyles="text-white font-normal leading-normal">
              {link.label}
            </SText>

            {link.external && <SIcon name="externalLink" size={18} className="text-white" />}
          </a>
        ))}
      </div>
    </div>
  );
};

export default FooterColumn;
