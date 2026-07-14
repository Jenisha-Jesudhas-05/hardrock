import heroBanner from '@assets/heroBanner.png';
import BookingForm from './BookingForm';

const SBanner = () => {
  return (
    <section className="relative overflow-hidden">
      <img
        src={heroBanner}
        alt="Hero Banner"
        className="h-105 w-full object-cover md:h-140 xl:h-175 2xl:h-190"
      />

      <div className="absolute inset-0 bg-black/20" />

      <div className="absolute bottom-6 left-1/2 z-10 w-[92%] max-w-7xl -translate-x-1/2 md:bottom-8">
        <BookingForm />
      </div>
    </section>
  );
};

export default SBanner;
