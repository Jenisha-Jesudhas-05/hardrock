import ArrowRight from './Icons/arrow-right';
import Bed from './Icons/bed';
import CalenderDays from './Icons/calendarDays';
import CasinoChip from './Icons/casino-chip';
import DiningFork from './Icons/dining-fork';
import Facebook from './Icons/facebook';
import GiftFront from './Icons/gift-front';
import Instagram from './Icons/instagram';
import LocationPin from './Icons/location-pin';
import Phone from './Icons/phone';
import Ticket from './Icons/ticket';
import Youtube from './Icons/youtube';
import Tiktok from './Icons/tiktok';
import ExternalLink from './Icons/external-link';
import ChevronDown from './Icons/chevronDown';
import Unity from './Icons/unity';
import Resort from './Icons/resort';
import Balcony from './Icons/balcony';
import Ruler from './Icons/ruler';
import Users from './Icons/users';

export const icons = {
  locationPin: LocationPin,
  arrowRight: ArrowRight,
  giftFront: GiftFront,
  casinoChip: CasinoChip,
  bed: Bed,
  ticket: Ticket,
  diningFront: DiningFork,
  calendarDays: CalenderDays,
  facebook: Facebook,
  instagram: Instagram,
  youtube: Youtube,
  tiktok: Tiktok,
  phone: Phone,
  externalLink: ExternalLink,
  chevronDown: ChevronDown,
  unity: Unity,
  resort: Resort,
  balcony: Balcony,
  ruler: Ruler,
  users: Users,
};

export type IconName = keyof typeof icons;
