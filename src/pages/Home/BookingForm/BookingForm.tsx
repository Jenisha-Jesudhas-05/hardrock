import { useEffect, useRef, useState } from 'react';

import DatePicker from './DatePicker';
import GuestSelector from './GuestSelector';
import type { ActivePanel, GuestCounts } from './BookingForm.types';
import { getDateSummary, getGuestSummary } from './BookingForm.utils';
import SButton from '@components/SButton';

const BookingForm = () => {
  const [checkIn, setCheckIn] = useState<Date | null>(null);
  const [checkOut, setCheckOut] = useState<Date | null>(null);

  const [visibleMonth, setVisibleMonth] = useState(new Date());

  const [guests, setGuests] = useState<GuestCounts>({
    rooms: 1,
    adults: 2,
    childAges: [17],
    pets: 0,
  });

  const [activePanel, setActivePanel] = useState<ActivePanel>(null);

  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setActivePanel(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = activePanel ? 'hidden' : '';

    return () => {
      document.body.style.overflow = '';
    };
  }, [activePanel]);

  const dateSummary = getDateSummary(checkIn, checkOut);

  const guestSummary = getGuestSummary(guests.rooms, guests.adults, guests.childAges.length);

  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const monthLabel = visibleMonth.toLocaleDateString('en-US', {
    month: 'long',
    year: 'numeric',
  });

  const handleDayClick = (day: Date) => {
    if (!checkIn || checkOut) {
      setCheckIn(day);
      setCheckOut(null);
      return;
    }

    if (day < checkIn) {
      setCheckIn(day);
      setCheckOut(null);
      return;
    }

    setCheckOut(day);
  };

  const updateCount = (key: 'rooms' | 'adults' | 'pets', delta: number) => {
    setGuests((previous) => {
      const minimum = key === 'pets' ? 0 : 1;

      return {
        ...previous,
        [key]: Math.max(minimum, previous[key] + delta),
      };
    });
  };

  const addChild = () => {
    setGuests((previous) => ({
      ...previous,
      childAges: [...previous.childAges, 17],
    }));
  };

  const removeChild = () => {
    setGuests((previous) => ({
      ...previous,
      childAges: previous.childAges.slice(0, -1),
    }));
  };

  const setChildAge = (index: number, age: number) => {
    setGuests((previous) => ({
      ...previous,
      childAges: previous.childAges.map((childAge, childIndex) =>
        childIndex === index ? age : childAge,
      ),
    }));
  };

  const handleViewRates = () => {
    console.log({
      checkIn,
      checkOut,
      guests,
    });
  };

  const panelClasses =
    'fixed inset-x-3 bottom-3 z-50 max-h-[75vh] overflow-y-auto rounded-2xl border border-gray-200 bg-white p-4 shadow-2xl ' +
    'sm:inset-x-6 ' +
    'md:absolute md:bottom-full md:left-0 md:z-20 md:mb-2 md:w-full md:min-w-70 md:rounded-xl md:p-4 lg:w-80';

  return (
    <div
      ref={containerRef}
      className="relative flex flex-col overflow-visible rounded-2xl bg-white shadow-2xl md:flex-row"
    >
      <div className="relative flex-1 border-b border-gray-200 md:border-r md:border-b-0">
        <button
          type="button"
          onClick={() => setActivePanel(activePanel === 'dates' ? null : 'dates')}
          className="flex w-full items-center gap-3 px-4 py-3 text-left sm:px-5 sm:py-4"
        >
          <div className="min-w-0">
            <p className="text-xs text-gray-500">Dates</p>

            <p className="truncate text-sm font-semibold text-gray-900">{dateSummary}</p>
          </div>
        </button>

        {activePanel === 'dates' && (
          <>
            <div
              className="fixed inset-0 z-40 bg-black/40 md:hidden"
              onClick={() => setActivePanel(null)}
            />

            <DatePicker
              checkIn={checkIn}
              checkOut={checkOut}
              visibleMonth={visibleMonth}
              monthLabel={monthLabel}
              today={today}
              panelClasses={panelClasses}
              onClose={() => setActivePanel(null)}
              onPrevMonth={() =>
                setVisibleMonth(
                  new Date(visibleMonth.getFullYear(), visibleMonth.getMonth() - 1, 1),
                )
              }
              onNextMonth={() =>
                setVisibleMonth(
                  new Date(visibleMonth.getFullYear(), visibleMonth.getMonth() + 1, 1),
                )
              }
              onDayClick={handleDayClick}
            />
          </>
        )}
      </div>

      <div className="relative flex-1 border-b border-gray-200 md:border-r md:border-b-0">
        <button
          type="button"
          onClick={() => setActivePanel(activePanel === 'guests' ? null : 'guests')}
          className="flex w-full items-center gap-3 px-4 py-3 text-left sm:px-5 sm:py-4"
        >
          <div className="min-w-0">
            <p className="text-xs text-gray-500">Rooms & Guests</p>

            <p className="truncate text-sm font-semibold text-gray-900">{guestSummary}</p>
          </div>
        </button>{' '}
        {activePanel === 'guests' && (
          <>
            <div
              className="fixed inset-0 z-40 bg-black/40 md:hidden"
              onClick={() => setActivePanel(null)}
            />

            <GuestSelector
              guests={guests}
              panelClasses={panelClasses}
              updateCount={updateCount}
              addChild={addChild}
              removeChild={removeChild}
              setChildAge={setChildAge}
              onClose={() => setActivePanel(null)}
            />
          </>
        )}
      </div>

      <div className="flex items-center p-3 ">
        <SButton variant="primary" onClick={handleViewRates}>
          View Rates
        </SButton>
      </div>
    </div>
  );
};

export default BookingForm;
