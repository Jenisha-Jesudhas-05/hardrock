import type { ReactNode } from 'react';

export type CarouselProps<T> = {
  title?: string;
  subtitle?: string;
  items: T[];
  renderCard: (item: T) => ReactNode;
  onSeeAll?: () => void;
  classStyles?: string;
};

export type CarouselCardProps = {
  image: string;
  title: string;
  subtitle?: string;
  badge?: string;
  badgeColor?: 'green' | 'blue';
  classStyles?: string;
};
