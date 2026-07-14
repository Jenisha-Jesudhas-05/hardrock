export const MILLISECONDS_PER_DAY = 1000 * 60 * 60 * 24;

export const formatShortDate = (date: Date | null) => {
  if (!date) return '';

  return date.toLocaleDateString('en-US', {
    weekday: 'short',
    month: 'short',
    day: 'numeric',
  });
};

export const calculateNights = (checkIn: Date | null, checkOut: Date | null) => {
  if (!checkIn || !checkOut) {
    return 0;
  }

  return Math.round((checkOut.getTime() - checkIn.getTime()) / MILLISECONDS_PER_DAY);
};

export const getDateSummary = (checkIn: Date | null, checkOut: Date | null) => {
  if (!checkIn || !checkOut) {
    return 'Select dates';
  }

  const nights = calculateNights(checkIn, checkOut);

  return `${formatShortDate(checkIn)} - ${formatShortDate(checkOut)} · ${nights} night${
    nights === 1 ? '' : 's'
  }`;
};

export const getGuestSummary = (rooms: number, adults: number, children: number) => {
  const childText = children > 0 ? `, ${children} child${children > 1 ? 'ren' : ''}` : '';

  return `${rooms} room${rooms > 1 ? 's' : ''}, ${adults} adult${
    adults > 1 ? 's' : ''
  }${childText}`;
};

export const isSameDay = (first: Date, second: Date) =>
  first.toDateString() === second.toDateString();

export const isDateInRange = (day: Date, checkIn: Date | null, checkOut: Date | null) =>
  Boolean(checkIn && checkOut && day > checkIn && day < checkOut);

export const getMonthDays = (monthDate: Date) => {
  const year = monthDate.getFullYear();
  const month = monthDate.getMonth();

  const firstDay = new Date(year, month, 1);
  const startOffset = firstDay.getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  const days: (Date | null)[] = [];

  for (let index = 0; index < startOffset; index++) {
    days.push(null);
  }

  for (let day = 1; day <= daysInMonth; day++) {
    days.push(new Date(year, month, day));
  }

  return days;
};
