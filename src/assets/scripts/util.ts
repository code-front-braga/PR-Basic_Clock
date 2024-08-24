export function getTimeDetails() {
  const now = new Date();
  return {
    now,
    dayIndex: now.getDay(),
    currentHour: now.getHours(),
    currentMinute: now.getMinutes(),
    currentSecond: now.getSeconds(),
    currentMonth: now.getMonth(),
  };
}
export function getTimeOfDayPeriod(currentHour: number) {
  const isNight = currentHour >= 21;
  const isAfternoon = currentHour >= 18;
  const isNoon = currentHour >= 15;
  const isMiddleDay = currentHour >= 12;
  const isLateMorning = currentHour >= 8;
  const isMorning = currentHour >= 5;

  return {
    isNight,
    isAfternoon,
    isNoon,
    isMiddleDay,
    isLateMorning,
    isMorning,
  };
}

export function getSeasonOfYear(currentMonth: number) {
  const isSpring = currentMonth >= 2 && currentMonth < 5;
  const isSummer = currentMonth >= 5 && currentMonth < 8;
  const isFall = currentMonth >= 8 && currentMonth < 11;

  return {
    isSpring,
    isSummer,
    isFall,
  };
}

export function formatTimeComponent(currentUnitOfTime: number) {
  return String(currentUnitOfTime).padStart(2, '0');
}

export function formatSeasonMessage(currentSeason: string) {
  return currentSeason !== 'Primavera' ? `Estamos no ${currentSeason}` : `Estamos na ${currentSeason}`;
}
