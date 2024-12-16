let timer;
let running = false;
let elapsedTime = 0;
let lapTime = 0;

const display = document.getElementById('stopwatch');
const laps = document.getElementById('laps');

document.getElementById('start').addEventListener('click', () => {
    if (!running) {
        running = true;
        timer = setInterval(updateTime, 1000);
    }
});

document.getElementById('pause').addEventListener('click', () => {
    if (running) {
        running = false;
        clearInterval(timer);
    }
});

document.getElementById('reset').addEventListener('click', () => {
    running = false;
    clearInterval(timer);
    elapsedTime = 0;
    lapTime = 0;
    display.textContent = '00:00:00';
    laps.innerHTML = '';
});

document.getElementById('lap').addEventListener('click', () => {
    if (running) {
        const lap = document.createElement('li');
        lap.textContent = formatTime(lapTime);
        lap.className = 'list-group-item';
        laps.appendChild(lap);
        lapTime = 0;
    }
});

function updateTime() {
    elapsedTime++;
    lapTime++;
    display.textContent = formatTime(elapsedTime);
}

function formatTime(seconds) {
    const h = String(Math.floor(seconds / 3600)).padStart(2, '0');
    const m = String(Math.floor((seconds % 3600) / 60)).padStart(2, '0');
    const s = String(seconds % 60).padStart(2, '0');
    return `${h}:${m}:${s}`;
}
