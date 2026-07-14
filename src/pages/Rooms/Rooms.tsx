import SText from '@components/SText';
import SCarousel from '@components/SCarousel';
import SHighlightCard from '@components/SHighlightCard';
import SRoomCard from '@components/SRoomCard';
import guitarHotel from '@assets/guitarHotel.jpg';
import resortTower from '@assets/resortTower.png';
import roomsCard1 from '@assets/roomsCard1.jpg';
import roomsCard2 from '@assets/roomsCard2.jpg';
import roomsCard3 from '@assets/roomsCard3.jpg';
import type { SHighlightCardProps } from '@components/SHighlightCard/SHighlightCard.types';
import type { SRoomCardProps } from '@components/SRoomCard';

const rooms: SHighlightCardProps[] = [
  {
    image: guitarHotel,
    imageAlt: 'The Guitar Hotel',
    title: 'The Guitar Hotel',
    description:
      'Designed to resemble back-to-back guitars, this iconic engineering masterpiece rises 450 feet into the sky and houses 638 luxury guest rooms and suites.',
  },
  {
    image: resortTower,
    imageAlt: 'Tower #2',
    title: 'Tower #2',
    description:
      'The seven story Tower 2 offers guests 168 guest rooms and exclusive swim-up suites overlooking the magnificent lagoon and private pool area.',
    reverse: true,
  },
];

const topPicks: SRoomCardProps[] = [
  {
    image: roomsCard1,
    imageAlt: 'Deluxe Queen',
    badge: 'Resort',
    title: 'Deluxe Queen',
    price: 300,
    bedType: '2 Queens',
    sqFt: 520,
    sleeps: 4,
    hasBalcony: true,
  },
  {
    image: roomsCard2,
    imageAlt: 'Luxury King Suite',
    badge: 'Resort',
    title: 'Luxury King Suite',
    price: 300,
    bedType: '2 Queens',
    sqFt: 520,
    sleeps: 4,
    hasBalcony: true,
  },
  {
    image: roomsCard3,
    imageAlt: 'Junior King Suite',
    badge: 'Resort',
    title: 'Junior King Suite',
    price: 300,
    bedType: '2 Queens',
    sqFt: 520,
    sleeps: 4,
    hasBalcony: true,
  },
  {
    image: roomsCard1,
    imageAlt: 'Deluxe Queen',
    badge: 'Resort',
    title: 'Deluxe Queen',
    price: 300,
    bedType: '2 Queens',
    sqFt: 520,
    sleeps: 4,
    hasBalcony: true,
  },
  {
    image: roomsCard2,
    imageAlt: 'Luxury King Suite',
    badge: 'Resort',
    title: 'Luxury King Suite',
    price: 300,
    bedType: '2 Queens',
    sqFt: 520,
    sleeps: 4,
    hasBalcony: true,
  },
  {
    image: roomsCard3,
    imageAlt: 'Junior King Suite',
    badge: 'Resort',
    title: 'Junior King Suite',
    price: 300,
    bedType: '2 Queens',
    sqFt: 520,
    sleeps: 4,
    hasBalcony: true,
  },
];

const Room = () => {
  return (
    <>
      <div className="mx-auto w-full max-w-7xl space-y-12 px-6 py-8 xl:max-w-360 xl:px-10">
        <div>
          <SText variant="displaymd" classStyles="leading-display">
            Stay Your Way in Las Vegas
          </SText>
          <SText variant="h2" classStyles="font-normal leading-relaxed">
            Find the right room for your trip, from quick stays to signature suites across our
            towers.
          </SText>
        </div>

        <div className="space-y-8">
          {rooms.map((room) => (
            <SHighlightCard key={room.title} {...room} />
          ))}
        </div>
      </div>

      <section className="w-full bg-[#F5F5F5] py-16">
        <div className="mx-auto w-full max-w-7xl px-6 xl:max-w-360 xl:px-10">
          <SCarousel<SRoomCardProps>
            title="Top Picks For Your Stay"
            subtitle="Start with our most popular room choices."
            items={topPicks}
            aspectRatio="416/454"
            renderCard={(room) => <SRoomCard {...room} classStyles="h-full" />}
          />
        </div>
      </section>
    </>
  );
};

export default Room;
