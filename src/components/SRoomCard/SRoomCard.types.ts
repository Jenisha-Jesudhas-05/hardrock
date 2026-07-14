export interface SRoomCardProps {
  image: string;
  imageAlt: string;
  badge: string;
  discountBadge?: string;
  title: string;
  price: number;
  originalPrice?: number;
  bedType: string;
  sqFt: number;
  sleeps: number;
  hasBalcony: boolean;
  onViewRoom?: () => void;
  onCheckRates?: () => void;
  classStyles?: string;
}
