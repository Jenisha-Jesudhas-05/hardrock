import { twMerge } from 'tailwind-merge';
import SButton from '../SButton/SButton';
import ChevronLeft from '../SIcons/Icons/chevronLeft';
import ChevronRight from '../SIcons/Icons/chevronRight';
import ArrowRight from '@components/SIcons/Icons/arrow-right';
import { useCarouselScroll } from './useCarouselScroll';
import type { CarouselProps } from './SCarousel.types';

function Carousel<T>({
  title,
  subtitle,
  items,
  renderCard,
  onSeeAll,
  classStyles = '',
}: CarouselProps<T>) {
  const { trackRef, canScrollPrev, canScrollNext, scrollByCard } = useCarouselScroll();

  return (
    <section className={twMerge('w-full', classStyles)}>
      <div className="mb-4 flex items-start justify-between">
        <div>
          <button
            type="button"
            onClick={onSeeAll}
            className="flex items-center gap-2 cursor-pointer font-display text-lg font-bold text-text-black"
          >
            {title}
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-border">
              <ArrowRight className="h-6 w-6" />
            </span>
          </button>
          {subtitle && (
            <p className="mt-1 font-sans text-sm font-normal text-text-grey">{subtitle}</p>
          )}
        </div>

        <div className="flex gap-2">
          <SButton
            variant="outline"
            size="sm"
            aria-label="Previous"
            disabled={!canScrollPrev}
            onClick={() => scrollByCard('prev')}
            classStyles="rounded-full bg-background w-9 h-9 px-0 cursor-pointer disabled:cursor-not-allowed"
          >
            <ChevronLeft />
          </SButton>
          <SButton
            variant="outline"
            size="sm"
            aria-label="Next"
            disabled={!canScrollNext}
            onClick={() => scrollByCard('next')}
            classStyles="rounded-full bg-background w-9 h-9 px-0 cursor-pointer disabled:cursor-not-allowed"
          >
            <ChevronRight />
          </SButton>
        </div>
      </div>

      <div
        ref={trackRef}
        className="scrollbar-hide flex items-stretch gap-4 overflow-x-auto scroll-smooth pb-2 [scroll-snap-type:x_mandatory]"
      >
        {items.map((item, i) => (
          <div
            key={i}
            className="w-[85%] flex-none scroll-snap-align:start sm:w-[46%] lg:w-[calc((100%-2rem)/3)]"
          >
            {renderCard(item)}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Carousel;
