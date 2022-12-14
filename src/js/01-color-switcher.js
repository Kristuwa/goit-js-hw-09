function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const DELAY = 1000;
let timeId = null;

const refs = {
  startBtn: document.querySelector('button[data-start]'),
  stopBtn: document.querySelector('button[data-stop]'),
};

refs.startBtn.addEventListener('click', onStartBtnClick);
refs.stopBtn.addEventListener('click', onStopBtnClick);

function onStartBtnClick() {
  timeId = setInterval(() => {
    document.body.style.backgroundColor = getRandomHexColor();
    //  console.log('Меняю цвет');
  }, DELAY);

  refs.startBtn.disabled = timeId;
}

function onStopBtnClick() {
  clearInterval(timeId);
  //   console.log('таймер снят');
  refs.startBtn.disabled = !timeId;
}
