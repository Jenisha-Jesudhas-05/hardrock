import type { CounterRowProps } from './BookingForm.types';

const CounterRow = ({
  label,
  sublabel,
  value,
  onDecrement,
  onIncrement,
  disableDecrement,
}: CounterRowProps) => {
  return (
    <div className="flex items-center justify-between py-2">
      <div>
        <p className="text-sm text-gray-900">{label}</p>

        {sublabel && <p className="text-xs text-gray-400">{sublabel}</p>}
      </div>

      <div className="flex items-center gap-3">
        <button
          type="button"
          onClick={onDecrement}
          disabled={disableDecrement}
          className="flex h-9 w-9 items-center justify-center rounded-full text-white transition-colors disabled:cursor-not-allowed disabled:bg-gray-200 disabled:text-gray-400 enabled:bg-[#F9B200] enabled:hover:bg-amber-500 sm:h-8 sm:w-8"
        >
          −
        </button>

        <span className="w-4 text-center text-sm font-medium">{value}</span>

        <button
          type="button"
          onClick={onIncrement}
          className="flex h-9 w-9 items-center justify-center rounded-full bg-[#F9B200] text-white transition-colors hover:bg-amber-500 sm:h-8 sm:w-8"
        >
          +
        </button>
      </div>
    </div>
  );
};

export default CounterRow;
