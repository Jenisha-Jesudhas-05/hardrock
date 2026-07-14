export interface SRoomCardProps {
  image: string;
  imageAlt: string;
  badge: string;
  title: string;
  price: number;
  bedType: string;
  sqFt: number;
  sleeps: number;
  hasBalcony: boolean;
  onViewRoom?: () => void;
  onCheckRates?: () => void;
  classStyles?: string;
}
