const startBtn = document.querySelector("#start");
const screens = document.querySelectorAll(".screen");
const timeList = document.querySelector("#time-list");
const timeEl = document.querySelector("#time");
const board = document.querySelector("#board");
let time = 0;
console.log(screens);

startBtn.addEventListener("click", (e) => {
  e.preventDefault();
  screens[0].classList.add("up");
});

timeList.addEventListener("click", (e) => {
  if (e.target.classList.contains("time-btn")) {
    time = parseInt(e.target.getAttribute("data-time"));
    screens[1].classList.add("up");
    startGame();
  }
});

const startGame = () => {
  setInterval(decreaseTime, 1000);
  createRandomCircle();
  setTime(time);
};

const decreaseTime = () => {
  if (time === 0) {
    finishGame();
  } else {
    let current = --time;
    current < 10 ? (current = `0${current}`) : null;
    setTime(current);
  }
};

const setTime = (value) => {
  timeEl.innerHTML = `00:${value}`;
};

const finishGame = () => {};

const createRandomCircle = () => {
  const circle = document.createElement("div");
  circle.classList.add("circle");
  circle.style.width = "15px";
  circle.style.height = "15px";
  board.append(circle);
};

const getRandomNumber = (min, max) => {
  return Math.round(Math.random() * (max - min) + min);
};
