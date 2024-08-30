import { dayPeriodImages, seasonImages } from './data.js';
import {
  formatSeasonMessage,
  formatTimeComponent,
  getSeasonOfYear,
  getTimeDetails,
  getTimeOfDayPeriod,
} from './util.js';

export function updateClockDisplay() {
  const { currentHour, currentMinute, currentSecond } = getTimeDetails();

  const clockTimeElement = document.querySelector('.time-display') as HTMLElement;
  clockTimeElement.textContent = formatTimeComponent({
    currentHour,
    currentMinute,
    currentSecond,
  });
}

export function updatePeriodImage() {
  const periodImageElement = document.querySelector('.bg-image') as HTMLImageElement;

  const { currentHour } = getTimeDetails();
  const currentPeriod = getTimeOfDayPeriod(currentHour);

  const { nightImg, afternoonImg, noonImg, middleDayImg, lateMorningImg, morningImg, midnightImg } = dayPeriodImages;

  switch (true) {
    case currentPeriod.isNight:
      periodImageElement.src = nightImg;
      break;

    case currentPeriod.isAfternoon:
      periodImageElement.src = afternoonImg;
      break;

    case currentPeriod.isNoon:
      periodImageElement.src = noonImg;
      break;

    case currentPeriod.isMiddleDay:
      periodImageElement.src = middleDayImg;
      break;

    case currentPeriod.isLateMorning:
      periodImageElement.src = lateMorningImg;
      break;

    case currentPeriod.isMorning:
      periodImageElement.src = morningImg;
      break;

    default:
      periodImageElement.src = midnightImg;
      break;
  }
}

export function updateDateInfo() {
  const dateInfoElement = document.querySelector('.date-info') as HTMLElement;

  const { dayIndex, now } = getTimeDetails();
  const weekDays = ['Domingo', 'Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado'];
  const currentDay = weekDays[dayIndex];

  const longDateFormat = now.toLocaleDateString('pt-br', {
    dateStyle: 'long',
  });

  dateInfoElement.textContent = `Olá! Hoje é ${currentDay}, ${longDateFormat}`;
}

export function updateSeasonInfo() {
  const seasonInfoElement = document.querySelector('.season-info-content span') as HTMLElement;
  const seasonImgElement = document.querySelector('.img-season') as HTMLImageElement;

  const { currentMonth } = getTimeDetails();
  const currentSeason = getSeasonOfYear(currentMonth);

  switch (true) {
    case currentSeason.isSpring:
      seasonInfoElement.textContent = formatSeasonMessage('Primavera');
      seasonImgElement.src = seasonImages.springImg;
      break;

    case currentSeason.isSummer:
      seasonInfoElement.textContent = formatSeasonMessage('Verão');
      seasonImgElement.src = seasonImages.summerImg;
      break;

    case currentSeason.isFall:
      seasonInfoElement.textContent = formatSeasonMessage('Outono');
      seasonImgElement.src = seasonImages.fallImg;
      break;

    default:
      seasonImgElement.textContent = formatSeasonMessage('Inverno');
      seasonImgElement.src = seasonImages.winterImg;
      break;
  }
}
