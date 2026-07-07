import type { NavLinkItem, MobileNavLinkItem } from './header.types';

export const DESKTOP_NAV_LINKS: NavLinkItem[] = [
  { label: 'Offers', path: '/offers' },
  { label: 'Casino', path: '/casino' },
  { label: 'Rooms', path: '/rooms' },
  { label: 'Shows', path: '/shows' },
  { label: 'Dining', path: '/dining' },
  { label: 'Signature Experiences', path: '/signatureExperiences' },
  { label: 'Meetings & Weddings', path: '/meetingsWeddings' },
  { label: 'Gallery', path: '/gallery' },
];

export const MOBILE_NAV_LINKS: MobileNavLinkItem[] = [
  { label: 'Offers', path: '/offers', icon: 'giftFront' },
  { label: 'Rooms', path: '/rooms', icon: 'bed' },
  { label: 'Shows', path: '/shows', icon: 'ticket' },
  { label: 'Dining', path: '/dining', icon: 'diningFront' },
  { label: 'Casino', path: '/casino', icon: 'casinoChip' },
  { label: 'Meet', path: '/meetingsWeddings', icon: 'calendarDays' },
];
