const btnStart = document.querySelector('.main');
const btnReset = document.querySelector('.reset');
const counter = document.querySelector('.time div');
let number = 0;
let active = false;
let startCounter;

const start = () => {
    if (!active) {
        active = !active;
        btnStart.textContent = "Pauza";
        const startInterval = () => {
            number++;
            counter.textContent = (number / 10).toFixed(2);
        }
        startCounter = setInterval(startInterval, 10);

    } else {
        active = !active;
        btnStart.textContent = "Start";
        clearInterval(startCounter);
    }

}

const reset = () => {
    active = !active;
    btnStart.textContent = "Start";
    counter.textContent = "---";
    number = 0;
    clearInterval(startCounter);
}

btnStart.addEventListener('click', start);
btnReset.addEventListener('click', reset)