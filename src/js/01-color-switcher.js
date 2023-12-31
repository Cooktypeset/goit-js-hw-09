const bodyQwery = document.querySelector('body');
const startBtn = document.querySelector('button[data-start]');
const stopBtn = document.querySelector('button[data-stop]');

stopBtn.disabled = true;
bodyQwery.addEventListener('click', onClick);

let limitId = null;

function onClick(event) {
  if (event.target === startBtn) {
    startBtn.disabled = true;
    stopBtn.disabled = false;
    limitId = setInterval(() => {
      bodyQwery.style.backgroundColor = getRandomHexColor();
    }, 1000);
  } else if (event.target === stopBtn) {
    startBtn.disabled = false;
    stopBtn.disabled = true;
    clearInterval(limitId);
  }
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}