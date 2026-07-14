import type { ReactNode } from 'react';

export type SAccordionProps = {
  title: string;
  children: ReactNode;
  defaultOpen?: boolean;
};
