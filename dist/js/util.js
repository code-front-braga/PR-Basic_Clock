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
export function getTimeOfDayPeriod(currentHour) {
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
export function getSeasonOfYear(currentMonth) {
    const isFall = currentMonth >= 3 && currentMonth <= 6;
    const isSummer = currentMonth >= 12 && currentMonth <= 3;
    const isSpring = currentMonth >= 9 && currentMonth <= 11;
    return {
        isFall,
        isSummer,
        isSpring,
    };
}
export function formatTimeComponent({ currentHour, currentMinute, currentSecond }) {
    return `${String(currentHour).padStart(2, '0')} : ${String(currentMinute).padStart(2, '0')} : ${String(currentSecond).padStart(2, '0')}`;
}
export function formatSeasonMessage(currentSeason) {
    return currentSeason !== 'Primavera' ? `Estamos no ${currentSeason}` : `Estamos na ${currentSeason}`;
}
