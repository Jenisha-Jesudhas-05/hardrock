export type Stay = {
  id: string;
  image: string;
  title: string;
  price: string;
  badge?: string;
};

export type Offer = {
  id: string;
  image: string;
  title: string;
  daysLeft?: number;
};

export type Promotion = {
  id: string;
  image: string;
  title: string;
  daysLeft?: number;
};
