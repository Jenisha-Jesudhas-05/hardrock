import SText from '@components/SText';
import SButton from '@components/SButton';
import { twMerge } from 'tailwind-merge';
import type { SRoomCardProps } from './SRoomCard.types';
import SIcon from '@components/SIcons/SIcon';

const buttonStyles = 'h-12 sm:h-20 md:h-12 flex-1 rounded-full text-sm md:text-base font-semibold';

const SRoomCard = ({
  image,
  imageAlt,
  badge,
  discountBadge,
  title,
  price,
  originalPrice,
  bedType,
  sqFt,
  sleeps,
  hasBalcony,
  onViewRoom,
  onCheckRates,
  classStyles,
}: SRoomCardProps) => {
  return (
    <div
      className={twMerge(
        'flex w-full h-full flex-col overflow-hidden rounded-lg border border-gray-200 bg-white',
        classStyles,
      )}
    >
      <div className="relative aspect-[16/9] w-full sm:aspect-[16/10] md:h-64 md:aspect-auto">
        <img src={image} alt={imageAlt} className="h-full w-full object-cover" />
        <span className="absolute bottom-2 left-2 flex items-center gap-1.5 sm:bottom-3 sm:left-3 md:bottom-4 md:left-4">
          <span className="flex items-center gap-1 rounded bg-white px-2 py-1 sm:gap-1.5 sm:px-2.5 sm:py-1.5">
            <SIcon name="resort" className="h-3 w-3 shrink-0 sm:h-3.5 sm:w-3.5 md:h-4 md:w-4" />
            <SText variant="bodyXs" classStyles="font-normal leading-relaxed">
              {badge}
            </SText>
          </span>

          {discountBadge && (
            <span className="rounded bg-green-600 px-2 py-1 sm:px-2.5 sm:py-1.5">
              <SText variant="bodyXs" classStyles="font-semibold leading-relaxed text-white">
                {discountBadge}
              </SText>
            </span>
          )}
        </span>
      </div>

      <div className="flex flex-1 flex-col gap-2 p-3 sm:gap-3 sm:p-4">
        <SText variant="bodyMd" classStyles="font-bold leading-normal">
          {title}
        </SText>

        <SText variant="bodySm" classStyles="font-normal leading-normal">
          From <span className="text-base font-bold leading-snug sm:text-lg">${price}</span>
          {originalPrice && (
            <span className="ml-1.5 text-sm text-gray-400 line-through">${originalPrice}</span>
          )}{' '}
          /night
        </SText>

        <div className="grid grid-cols-2 gap-x-2 gap-y-1.5 sm:gap-y-2">
          <div className="flex min-w-0 items-center gap-1.5 sm:gap-2">
            <SIcon name="bed" className="h-3.5 w-3.5 shrink-0 sm:h-4 sm:w-4" />
            <SText variant="bodySm" className="truncate font-normal leading-normal">
              {bedType}
            </SText>
          </div>
          <div className="flex min-w-0 items-center gap-1.5 sm:gap-2">
            <SIcon name="users" className="h-3.5 w-3.5 shrink-0 sm:h-4 sm:w-4" />
            <SText variant="bodySm" className="truncate font-normal leading-normal">
              Sleeps {sleeps}
            </SText>
          </div>
          <div className="flex min-w-0 items-center gap-1.5 sm:gap-2">
            <SIcon name="ruler" className="h-3.5 w-3.5 shrink-0 sm:h-4 sm:w-4" />
            <SText variant="bodySm" className="truncate font-normal leading-normal">
              {sqFt} Sq. Ft.
            </SText>
          </div>
          {hasBalcony && (
            <div className="flex min-w-0 items-center gap-1.5 sm:gap-2">
              <SIcon name="balcony" className="h-3.5 w-3.5 shrink-0 sm:h-4 sm:w-4" />
              <SText variant="bodySm" className="truncate font-normal leading-normal">
                Balcony
              </SText>
            </div>
          )}
        </div>

        <div className="mt-auto flex flex-col gap-3 pt-2 sm:flex-row sm:gap-3">
          <SButton variant="outline" onClick={onViewRoom} classStyles={buttonStyles}>
            View Room
          </SButton>
          <SButton variant="primary" onClick={onCheckRates} classStyles={buttonStyles}>
            Check Rates
          </SButton>
        </div>
      </div>
    </div>
  );
};

export default SRoomCard;
