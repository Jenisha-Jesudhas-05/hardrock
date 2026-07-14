export interface GuestCounts {
  rooms: number;
  adults: number;
  childAges: number[];
  pets: number;
}

export type ActivePanel = 'dates' | 'guests' | null;

export interface CounterRowProps {
  label: string;
  sublabel?: string;
  value: number;
  onDecrement: () => void;
  onIncrement: () => void;
  disableDecrement: boolean;
}

export interface DatePickerProps {
  checkIn: Date | null;
  checkOut: Date | null;
  visibleMonth: Date;
  monthLabel: string;
  today: Date;
  panelClasses: string;
  onClose: () => void;
  onPrevMonth: () => void;
  onNextMonth: () => void;
  onDayClick: (day: Date) => void;
}

export interface GuestSelectorProps {
  guests: GuestCounts;
  panelClasses: string;
  updateCount: (key: 'rooms' | 'adults' | 'pets', delta: number) => void;
  addChild: () => void;
  removeChild: () => void;
  setChildAge: (index: number, age: number) => void;
  onClose: () => void;
}
