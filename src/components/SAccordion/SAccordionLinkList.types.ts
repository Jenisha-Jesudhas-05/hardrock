export type SAccordionLink = {
  label: string;
  href: string;
  external?: boolean;
};

export type SAccordionLinkListProps = {
  links: SAccordionLink[];
};
