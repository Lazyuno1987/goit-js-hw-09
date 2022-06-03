const startBtn = document.querySelector('button[data-start]');
const stopBtn = document.querySelector('button[data-stop]');
const body = document.querySelector("body");

let timerId = null;

stopBtn.setAttribute("disabled", true);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};
startBtn.addEventListener('click', () => {
    startBtn.setAttribute("disabled", true);
    stopBtn.removeAttribute("disabled");
//     if (timerId) {
//     return
//    }
  timerId = setInterval(() => {
      body.style.backgroundColor = getRandomHexColor();
       console.log( timerId)
  }, 1000);
   
});

stopBtn.addEventListener("click", onStopChangeColor);


function onStopChangeColor(event) {
    clearInterval(timerId);
     stopBtn.setAttribute("disabled", true);
    startBtn.removeAttribute("disabled");
}



// function onChangeColore(event) {
//     timerId = setInterval(() => {
//         body.style.backgroundColor = getRandomHexColor()
//     }, 1000);
    
// }
// const timerId = setTimeout(callback, delay, arg1, arg2, ...);


