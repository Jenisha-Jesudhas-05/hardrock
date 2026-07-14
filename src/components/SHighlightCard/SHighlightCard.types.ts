export interface SHighlightCardProps {
  image: string;
  imageAlt: string;
  title: string;
  description: string;
  reverse?: boolean;
  onViewDetails?: () => void;
  onSeeRoomsAndRates?: () => void;
  classStyles?: string;
}
