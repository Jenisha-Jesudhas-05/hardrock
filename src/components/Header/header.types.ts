import type { IconName } from '@components/SIcons';

export interface NavLinkItem {
  label: string;
  path: string;
}

export interface MobileNavLinkItem extends NavLinkItem {
  icon: IconName;
}

export interface DesktopHeaderProps {
  className?: string;
}

export interface MobileHeaderProps {
  className?: string;
}
