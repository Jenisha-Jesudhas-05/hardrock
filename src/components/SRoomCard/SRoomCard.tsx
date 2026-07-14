import SText from '@components/SText';
import SButton from '@components/SButton';
import { twMerge } from 'tailwind-merge';
import type { SRoomCardProps } from './SRoomCard.types';
import SIcon from '@components/SIcons/SIcon';

const buttonStyles = 'h-11 flex-1 rounded-full';

const SRoomCard = ({
  image,
  imageAlt,
  badge,
  title,
  price,
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
      <div className="relative h-64 w-full">
        <img src={image} alt={imageAlt} className="h-full w-full object-cover" />
        <span className="absolute bottom-4 left-4 flex items-center gap-1.5 rounded bg-white px-2.5 py-1.5">
          <SIcon name="resort" className="h-4 w-4" />
          <SText variant="bodyXs" classStyles="font-normal leading-relaxed">
            {badge}
          </SText>
        </span>
      </div>

      <div className="flex flex-1 flex-col gap-3 p-4">
        <SText variant="bodyMd" classStyles="font-bold leading-normal">
          {title}
        </SText>
        <SText variant="bodySm" classStyles="font-normal leading-normal">
          From <span className="text-lg font-bold leading-snug">${price}</span> /night
        </SText>

        <div className="grid grid-cols-2 gap-y-2">
          <div className="flex items-center gap-2">
            <SIcon name="bed" className="h-4 w-4" />
            <SText variant="bodySm" className="font-normal leading-normal">
              {bedType}
            </SText>
          </div>
          <div className="flex items-center gap-2">
            <SIcon name="users" className="h-4 w-4" />
            <SText variant="bodySm" className="font-normal leading-normal">
              Sleeps {sleeps}
            </SText>
          </div>
          <div className="flex items-center gap-2">
            <SIcon name="ruler" className="h-4 w-4" />
            <SText variant="bodySm" className="font-normal leading-normal">
              {sqFt} Sq. Ft.
            </SText>
          </div>
          {hasBalcony && (
            <div className="flex items-center gap-2">
              <SIcon name="balcony" className="h-4 w-4" />
              <SText variant="bodySm" className="font-normal leading-normal">
                Balcony
              </SText>
            </div>
          )}
        </div>

        <div className="mt-2 flex gap-3">
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
