function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const randomColor = getRandomHexColor();

const refs = {
  startBtn: document.querySelector('button[data-start]'),
  stopBtn: document.querySelector('button[data-stop]'),
};

refs.startBtn.addEventListener('click', onStartBtnClick);
refs.stoptBtn.addEventListener('click', onStopBtnClick);

function onStartBtnClick() {
  setInterval(() => {
    document.body.style.backgroundColor = randomColor;
  }, 1000);
}

function onStopBtnClick() {}
