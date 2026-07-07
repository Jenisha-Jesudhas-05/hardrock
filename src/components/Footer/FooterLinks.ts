import type { FooterLinkItem } from './Footer.types';

export const FOOTER_LINKS: FooterLinkItem[] = [
  { label: 'Do Not Sell or Share My Personal Information' },
  { label: 'CCPA' },
  { label: 'Privacy Policy' },
  { label: 'Terms of Use' },
  { label: 'Sitemap' },
  { label: 'Players Edge' },
  { label: 'Patron Claims' },
  { label: 'Accessibility' },
  { label: 'Cookie Policy' },
  { label: 'Cookie Settings' },
];

export interface SocialLinkItem {
  label: string;
  icon: 'facebook' | 'instagram' | 'youtube' | 'tiktok';
  href: string;
}

export const SOCIAL_LINKS: SocialLinkItem[] = [
  { label: 'Facebook', icon: 'facebook', href: 'https://facebook.com' },
  { label: 'Instagram', icon: 'instagram', href: 'https://instagram.com' },
  { label: 'YouTube', icon: 'youtube', href: 'https://youtube.com' },
  { label: 'TikTok', icon: 'tiktok', href: 'https://tiktok.com' },
];

export const HARD_ROCK_LINKS = [
  { label: 'Book a Room', href: '#' },
  { label: 'Donations', href: '#' },
  { label: 'Hotel Reservations', href: '#' },
  { label: 'Memorabilia Tour', href: '#' },
  { label: 'Lost & Found', href: '#' },
  { label: 'Property', href: '#' },
  { label: 'Transportation', href: '#' },
  { label: 'Patron Claims', href: '#' },
];

export const CONNECT_LINKS = [
  { label: 'FAQs', href: '#' },
  { label: 'Contact Us', href: '#' },
  { label: 'Careers', href: '#' },
  { label: 'Leasing Opportunities', href: '#' },
  { label: 'Unity Rewards Rules', href: '#' },
];

export const COMPANY_LINKS = [
  { label: 'Our Story', href: '#', external: true },
  { label: 'Gift Cards', href: '#', external: true },
  { label: 'Best Rate Guarantee', href: '#', external: true },
  { label: 'Investor Relations', href: '#', external: true },
  { label: 'Travel Advisors', href: '#', external: true },
  { label: 'Corporate Travel', href: '#', external: true },
  { label: 'Sustainability', href: '#', external: true },
  { label: 'Corporate Responsibility', href: '#', external: true },
];
