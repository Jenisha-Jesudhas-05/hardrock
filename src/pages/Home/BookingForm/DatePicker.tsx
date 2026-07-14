import SText from '@components/SText';
import type { DatePickerProps } from './BookingForm.types';
import { formatShortDate, getMonthDays, isDateInRange, isSameDay } from './BookingForm.utils';

const DatePicker = ({
  checkIn,
  checkOut,
  visibleMonth,
  monthLabel,
  today,
  panelClasses,
  onPrevMonth,
  onNextMonth,
  onDayClick,
}: DatePickerProps) => {
  return (
    <div className={`${panelClasses} w-full max-w-full p-4 sm:max-w-sm sm:p-5 md:max-w-md md:p-6`}>
      <div className="mb-4 flex gap-2 rounded-xl bg-gray-50 p-1 sm:gap-3">
        <div className="flex flex-1 items-center gap-2 rounded-lg px-2 py-2 sm:px-3">
          <div>
            <SText variant="bodyXs" className="leading-normal text-[#646366]">
              Check-In
            </SText>
            <SText variant="bodyXs" className="leading-normal text-[#646366] sm:text-sm">
              {checkIn ? formatShortDate(checkIn) : '—'}
            </SText>
          </div>
        </div>

        <div className="w-px bg-gray-200" />

        <div className="flex flex-1 items-center gap-2 rounded-lg px-2 py-2 sm:px-3">
          <div>
            <SText variant="bodyXs" className="leading-normal text-[#646366]">
              Check-Out
            </SText>
            <SText variant="bodyXs" className="leading-normal text-[#646366] sm:text-sm">
              {checkOut ? formatShortDate(checkOut) : '—'}
            </SText>
          </div>
        </div>
      </div>

      <div className="mb-4 flex items-center justify-between">
        <button
          type="button"
          onClick={onPrevMonth}
          className="flex h-8 w-8 items-center justify-center rounded-full border border-gray-200 hover:bg-gray-50 sm:h-9 sm:w-9"
        >
          ←
        </button>

        <SText variant="bodyMd" className="leading-snug font-bold">
          {monthLabel}
        </SText>

        <button
          type="button"
          onClick={onNextMonth}
          className="flex h-8 w-8 items-center justify-center rounded-full border border-gray-200 hover:bg-gray-50 sm:h-9 sm:w-9"
        >
          →
        </button>
      </div>

      <div className="grid grid-cols-7 bg-[#0000000A] text-center text-xs font-medium text-black sm:text-sm">
        {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map((day, index) => (
          <span key={`${day}-${index}`} className="py-1.5 sm:py-2">
            {day}
          </span>
        ))}
      </div>

      <div className="grid grid-cols-7">
        {getMonthDays(visibleMonth).map((day, index) => {
          if (!day) return <div key={index} />;

          const disabled = day < today;
          const selected =
            (checkIn && isSameDay(day, checkIn)) || (checkOut && isSameDay(day, checkOut));
          const inRange = isDateInRange(day, checkIn, checkOut);

          const dayOfWeek = day.getDay();
          const isRowStart = dayOfWeek === 0 || (checkIn && isSameDay(day, checkIn));
          const isRowEnd = dayOfWeek === 6 || (checkOut && isSameDay(day, checkOut));

          return (
            <div
              key={day.toISOString()}
              className={`relative h-10 sm:h-11 md:h-12 ${
                inRange && !selected
                  ? `bg-amber-100 ${isRowStart ? 'rounded-l-full' : ''} ${
                      isRowEnd ? 'rounded-r-full' : ''
                    }`
                  : ''
              }`}
            >
              <button
                type="button"
                disabled={disabled}
                onClick={() => onDayClick(day)}
                className={`flex h-full w-full items-center justify-center rounded-full text-sm disabled:cursor-not-allowed disabled:text-gray-300 sm:text-base ${
                  selected
                    ? 'bg-[#F9B200] font-semibold text-white'
                    : inRange
                      ? 'font-medium text-gray-900'
                      : 'text-gray-900 hover:bg-gray-100'
                }`}
              >
                {day.getDate()}
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default DatePicker;
