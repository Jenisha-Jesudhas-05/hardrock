import React from 'react';
import { twMerge } from 'tailwind-merge';
import type { CarouselCardProps } from './SCarousel.types';

const CarouselCard = React.forwardRef<HTMLDivElement, CarouselCardProps>(
  ({ image, title, subtitle, badge, badgeColor = 'green', classStyles = '' }, ref) => {
    return (
      <div
        ref={ref}
        className={twMerge(
          'relative h-full w-full rounded-lg overflow-hidden shadow-card',
          classStyles,
        )}
      >
        <img src={image} alt="" className="absolute inset-0 h-full w-full object-cover" />
        {badge && (
          <span
            className={twMerge(
              'absolute top-2 left-2 rounded-sm px-2 py-0.5 text-2xs font-bold text-background',
              badgeColor === 'blue' ? 'bg-blue' : 'bg-green',
            )}
          >
            {badge}
          </span>
        )}
        <div className="absolute inset-x-0 bottom-0 bg-linear-to-t from-black/70 to-transparent p-3">
          <p className="font-display text-xs font-semibold text-background">{title}</p>
          {subtitle && <p className="font-sans text-2xs text-background/85">{subtitle}</p>}
        </div>
      </div>
    );
  },
);

CarouselCard.displayName = 'CarouselCard';

export default CarouselCard;
