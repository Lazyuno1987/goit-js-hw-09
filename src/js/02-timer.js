import flatpickr from "flatpickr";
// Додатковий імпорт стилів
import "flatpickr/dist/flatpickr.min.css";
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const startBtn = document.querySelector("button[data-start]");
startBtn.setAttribute('disabled', true);
startBtn.addEventListener("click", onStartTimer);
const dataDays = document.querySelector("span[data-days]");
const dataHours = document.querySelector("span[data-hours]");
const dataMinutes = document.querySelector("span[data-minutes]");
const dataSeconds = document.querySelector("span[ data-seconds]");


let dateInput = null;
const dateY = Date.now();

console.log(dateY)

const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
        dateInput = selectedDates[0];
      console.log(selectedDates[0]);
      console.log(dateInput.getTime());
          if (dateInput <  dateY) {
      Notify.failure('Please choose a date in the future');
    } else {
            startBtn.removeAttribute("disabled");
};
    },
};

 flatpickr('#datetime-picker', options );

function onStartTimer() {
  startBtn.setAttribute("disabled", true)
  console.log(dateInput)
   
  const timerID = setInterval(() => {
    // console.log(dateInput.getTime());
    // console.log(date.getTime())
    const difrentTime = dateInput - dateY;
     console.log(difrentTime)
    const { days, hours, minutes, seconds } = convertMs(difrentTime);
    dataDays.textContent = days;
    dataHours.textContent = hours;
    dataMinutes.textContent = minutes;
    dataSeconds.textContent = seconds;
    if (difrentTime < 0) {
      clearInterval(timerID);
    }
    }, 1000);
  console.log(timerID)
}
function addLeadingZero(value) {
  return String(value).padStart(2, '0');
}
function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days =  addLeadingZero(Math.floor(ms / day));
  // Remaining hours
  const hours =  addLeadingZero(Math.floor((ms % day) / hour));
  // Remaining minutes
  const minutes =  addLeadingZero(Math.floor(((ms % day) % hour) / minute));
  // Remaining seconds
  const seconds =  addLeadingZero(Math.floor((((ms % day) % hour) % minute) / second));

  return { days, hours, minutes, seconds };
}

console.log(convertMs(2000)); // {days: 0, hours: 0, minutes: 0, seconds: 2}
console.log(convertMs(140000)); // {days: 0, hours: 0, minutes: 2, seconds: 20}
console.log(convertMs(86390311)); // {days: 0, hours: 6 minutes: 42, seconds: 20}


// const startBtn = document.querySelector('button[data-start]');
// const daysTimer = document.querySelector('span[data-days]');
// const hoursTimer = document.querySelector('span[data-hours]');
// const minutesTimer = document.querySelector('span[data-minutes]');
// const secondsTimer = document.querySelector('span[data-seconds]');
// let inputDates = null;
// startBtn.addEventListener('click', onClickStartBnt);
// startBtn.setAttribute('disabled', true);

// const options = {
//   enableTime: true,
//   time_24hr: true,
//   defaultDate: new Date(),
//   minuteIncrement: 1,
//   onClose(selectedDates) {
//     console.log(selectedDates[0]);
//     inputDates = selectedDates[0];
//     if (inputDates >= Date.now()) {
//       startBtn.removeAttribute('disabled');
//     } else {
//       Notify.failure('Please choose a date in the future');
//     }
//   },
// };
// flatpickr('#datetime-picker', options);
// function addLeadingZero(value) {
//   return String(value).padStart(2, '0');
// }
// function convertMs(ms) {
//   // Number of milliseconds per unit of time
//   const second = 1000;
//   const minute = second * 60;
//   const hour = minute * 60;
//   const day = hour * 24;
//   // Remaining days
//   const days = addLeadingZero(Math.floor(ms / day));
//   // Remaining hours
//   const hours = addLeadingZero(Math.floor((ms % day) / hour));
//   // Remaining minutes
//   const minutes = addLeadingZero(Math.floor(((ms % day) % hour) / minute));
//   // Remaining seconds
//   const seconds = addLeadingZero(
//     Math.floor((((ms % day) % hour) % minute) / second)
//   );
//   return { days, hours, minutes, seconds };
// }
// function onClickStartBnt() {
//   startBtn.setAttribute('disabled', true);
//   const timerID = setInterval(() => {
//     const deltaTime = inputDates - Date.now();
//     const { days, hours, minutes, seconds } = convertMs(deltaTime);
//     daysTimer.textContent = days;
//     hoursTimer.textContent = hours;
//     minutesTimer.textContent = minutes;
//     secondsTimer.textContent = seconds;
//     if (deltaTime < 1000) {
//       clearInterval(timerID);
//     }
//   }, 1000);
// }











