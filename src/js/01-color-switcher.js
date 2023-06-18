const clickStartBtn = document.querySelector('data-start');
const clickStopBtn = document.querySelector('data-stop');
 clickStartBtn = document.addEventListener('click', handleStartClick);
clickStopBtn = document.addEventListener('click', handleStopClick);
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}