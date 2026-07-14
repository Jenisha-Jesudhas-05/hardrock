import guitarHotel from '../../assets/guitarHotel.jpg';
import resortTower from '../../assets/resortTower.png';
import mountainView from '../../assets/mountain.jpg';
import offer1 from '../../assets/offer1.jpg';
import offer2 from '../../assets/offer2.jpg';
import offer3 from '../../assets/offer3.jpg';
import promotion1 from '../../assets/promotion1.jpg';
import promotion2 from '../../assets/promotion2.jpg';
import promotion3 from '../../assets/promotion3.png';
import type { Stay, Offer, Promotion } from '@pages/Home/Home.types';
import Banner from '@pages/Home/Banner';
import Carousel from '@components/SCarousel/SCarousel';
import { CarouselCard } from '@components/SCarousel';

const stays: Stay[] = [
  {
    id: 'guitar-hotel',
    image: guitarHotel,
    title: 'The Guitar Hotel',
    price: 'From $400/night',
  },
  {
    id: 'resort-tower',
    image: resortTower,
    title: 'Resort Tower',
    price: 'From $340/night',
  },
  {
    id: 'mountain-view',
    image: mountainView,
    title: 'Mountain View Rooms',
    price: 'From $480/night',
    badge: '50% Off',
  },
  {
    id: 'guitar-hotel',
    image: guitarHotel,
    title: 'The Guitar Hotel',
    price: 'From $400/night',
  },
  {
    id: 'resort-tower',
    image: resortTower,
    title: 'Resort Tower',
    price: 'From $340/night',
  },
  {
    id: 'mountain-view',
    image: mountainView,
    title: 'Mountain View Rooms',
    price: 'From $480/night',
    badge: '50% Off',
  },
];

const offers: Offer[] = [
  { id: 'stays-discount', image: offer1, title: 'Up To 55% Off All Stays!', daysLeft: 24 },
  { id: 'book-early', image: offer2, title: 'Book Early & Save 40%' },
  { id: 'stay-3-get-1', image: offer3, title: 'Stay 3 Nights & Get 1 Free', daysLeft: 12 },
  { id: 'stays-discount', image: offer1, title: 'Up To 55% Off All Stays!', daysLeft: 24 },
  { id: 'book-early', image: offer2, title: 'Book Early & Save 40%' },
  { id: 'stay-3-get-1', image: offer3, title: 'Stay 3 Nights & Get 1 Free', daysLeft: 12 },
];

const promotions: Promotion[] = [
  { id: 'giveaway', image: promotion1, title: '$1,620,000 Maserati Giveaway', daysLeft: 24 },
  { id: 'spin', image: promotion2, title: '$5,000,000 Summer Spin-to-Win' },
  { id: 'play-credit', image: promotion3, title: '$10 Play Credit', daysLeft: 24 },
  { id: 'giveaway', image: promotion1, title: '$1,620,000 Maserati Giveaway', daysLeft: 24 },
  { id: 'spin', image: promotion2, title: '$5,000,000 Summer Spin-to-Win' },
  { id: 'play-credit', image: promotion3, title: '$10 Play Credit', daysLeft: 24 },
];

const Home = () => {
  return (
    <div>
      <Banner />

      <div className="w-full max-w-7xl xl:max-w-360 mx-auto px-6 xl:px-10 py-8 space-y-12">
        <Carousel<Stay>
          title="Find Your Next Stay"
          subtitle="Two towers, one destination."
          items={stays}
          renderCard={(stay) => (
            <CarouselCard
              image={stay.image}
              title={stay.title}
              subtitle={stay.price}
              badge={stay.badge}
            />
          )}
        />

        <Carousel<Offer>
          title="Offers You Can't Miss"
          items={offers}
          renderCard={(offer) => (
            <CarouselCard
              image={offer.image}
              title={offer.title}
              badge={offer.daysLeft ? `${offer.daysLeft} Days Left` : undefined}
              badgeColor="blue"
            />
          )}
        />

        <Carousel<Promotion>
          title="Casino Promotions"
          items={promotions}
          renderCard={(promotions) => (
            <CarouselCard
              image={promotions.image}
              title={promotions.title}
              badge={promotions.daysLeft ? `${promotions.daysLeft} Days Left` : undefined}
              badgeColor="blue"
            />
          )}
        />
      </div>
    </div>
  );
};

export default Home;
