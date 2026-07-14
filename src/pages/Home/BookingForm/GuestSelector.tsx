import type { GuestSelectorProps } from './BookingForm.types';
import CounterRow from './CounterRow';

const GuestSelector = ({
  guests,
  panelClasses,
  updateCount,
  addChild,
  removeChild,
  setChildAge,
}: GuestSelectorProps) => {
  return (
    <div
      className={`${panelClasses} w-full max-w-full space-y-1 p-4 sm:max-w-sm sm:p-5 md:max-w-md md:p-6`}
    >
      <CounterRow
        label="Rooms"
        value={guests.rooms}
        onIncrement={() => updateCount('rooms', 1)}
        onDecrement={() => updateCount('rooms', -1)}
        disableDecrement={guests.rooms <= 1}
      />

      <CounterRow
        label="Adults"
        value={guests.adults}
        onIncrement={() => updateCount('adults', 1)}
        onDecrement={() => updateCount('adults', -1)}
        disableDecrement={guests.adults <= 1}
      />

      <CounterRow
        label="Children"
        sublabel="0-17 yrs."
        value={guests.childAges.length}
        onIncrement={addChild}
        onDecrement={removeChild}
        disableDecrement={guests.childAges.length === 0}
      />

      {guests.childAges.map((age, index) => (
        <div key={index} className="py-2">
          <label className="mb-1 block text-xs font-medium sm:text-sm">Child {index + 1} Age</label>

          <select
            value={age}
            onChange={(e) => setChildAge(index, Number(e.target.value))}
            className="w-full rounded-lg border px-3 py-2 text-sm sm:text-base"
          >
            {Array.from({ length: 18 }, (_, value) => (
              <option key={value} value={value}>
                {value === 0 ? 'Under 1 year old' : `${value} year${value > 1 ? 's' : ''} old`}
              </option>
            ))}
          </select>
        </div>
      ))}

      <CounterRow
        label="Pets"
        value={guests.pets}
        onIncrement={() => updateCount('pets', 1)}
        onDecrement={() => updateCount('pets', -1)}
        disableDecrement={guests.pets <= 0}
      />
    </div>
  );
};

export default GuestSelector;
