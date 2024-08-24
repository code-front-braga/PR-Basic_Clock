import { updateClockDisplay, updateDateInfo, updatePeriodImage, updateSeasonInfo } from './screen.js';
function refreshDisplay() {
    updatePeriodImage();
    updateDateInfo();
    updateSeasonInfo();
}
setInterval(updateClockDisplay, 1000);
refreshDisplay();
