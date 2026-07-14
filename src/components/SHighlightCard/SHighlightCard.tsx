import SText from '@components/SText';
import SButton from '@components/SButton';
import { twMerge } from 'tailwind-merge';
import type { SHighlightCardProps } from './SHighlightCard.types';

const buttonStyles = 'h-11 w-full rounded-full sm:h-[43px] sm:w-[274px]';

const SHightlightCard = ({
  image,
  imageAlt,
  title,
  description,
  reverse = false,
  onViewDetails,
  onSeeRoomsAndRates,
  classStyles,
}: SHighlightCardProps) => {
  return (
    <div
      className={twMerge(
        'grid w-full grid-cols-1 overflow-hidden rounded-lg border border-gray-200 md:grid-cols-2 md:h-110',
        classStyles,
      )}
    >
      <div className={twMerge('relative h-48 w-full sm:h-56 md:h-full', reverse && 'md:order-2')}>
        <img src={image} alt={imageAlt} className="absolute inset-0 h-full w-full object-cover" />
      </div>

      <div
        className={twMerge(
          'flex w-full flex-col justify-center gap-3 p-5 sm:gap-4 sm:p-6 md:p-8',
          reverse && 'md:order-1',
        )}
      >
        <SText
          variant="h2"
          classStyles="text-xl font-bold leading-snug sm:text-2xl md:text-3xl md:leading-relaxed"
        >
          {title}
        </SText>
        <SText variant="bodyMd" classStyles="text-sm font-normal leading-normal sm:text-base">
          {description}
        </SText>
        <div className="flex flex-col gap-3 sm:flex-row sm:gap-4">
          <SButton variant="outline" onClick={onViewDetails} classStyles={buttonStyles}>
            View details
          </SButton>
          <SButton variant="primary" onClick={onSeeRoomsAndRates} classStyles={buttonStyles}>
            See rooms & rates
          </SButton>
        </div>
      </div>
    </div>
  );
};

export default SHightlightCard;
