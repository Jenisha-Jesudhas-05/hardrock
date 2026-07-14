import SAccordion from '@components/SAccordion';
import SAccordionLinkList from '@components/SAccordion/SAccordionLinkList';
import type { FooterColumnLink } from './FooterColumn';

type FooterAccordionColumnProps = {
  title: string;
  links: FooterColumnLink[];
};

const FooterAccordionColumn = ({ title, links }: FooterAccordionColumnProps) => (
  <SAccordion title={title}>
    <SAccordionLinkList links={links} />
  </SAccordion>
);

export default FooterAccordionColumn;
