let hours = 0;
let minutes = 0;
let seconds = 0;
let milliseconds = 0;

let timer = null;
let isRunning = false;

let lapCount = 1;

const display = document.getElementById("display");
const laps = document.getElementById("laps");

const startBtn = document.getElementById("startBtn");
const pauseBtn = document.getElementById("pauseBtn");
const resumeBtn = document.getElementById("resumeBtn");
const resetBtn = document.getElementById("resetBtn");
const lapBtn = document.getElementById("lapBtn");


// Update Stopwatch Time
function updateTime() {

    milliseconds++;

    // 100 milliseconds = 1 second
    if (milliseconds === 100) {
        milliseconds = 0;
        seconds++;
    }

    // 60 seconds = 1 minute
    if (seconds === 60) {
        seconds = 0;
        minutes++;
    }

    // 60 minutes = 1 hour
    if (minutes === 60) {
        minutes = 0;
        hours++;
    }

    let h = hours < 10 ? "0" + hours : hours;
    let m = minutes < 10 ? "0" + minutes : minutes;
    let s = seconds < 10 ? "0" + seconds : seconds;
    let ms = milliseconds < 10 ? "0" + milliseconds : milliseconds;

    display.innerText = `${h} : ${m} : ${s} : ${ms}`;
}


// Start Stopwatch
startBtn.addEventListener("click", () => {

    if (!isRunning) {
        timer = setInterval(updateTime, 10);
        isRunning = true;
    }

});


// Pause Stopwatch
pauseBtn.addEventListener("click", () => {

    clearInterval(timer);
    isRunning = false;

});


// Resume Stopwatch
resumeBtn.addEventListener("click", () => {

    if (!isRunning) {
        timer = setInterval(updateTime, 10);
        isRunning = true;
    }

});


// Reset Stopwatch
resetBtn.addEventListener("click", () => {

    clearInterval(timer);

    hours = 0;
    minutes = 0;
    seconds = 0;
    milliseconds = 0;

    isRunning = false;

    display.innerText = "00 : 00 : 00 : 00";

    laps.innerHTML = "";

    lapCount = 1;

});


// Save Lap Time
lapBtn.addEventListener("click", () => {

    if (isRunning) {

        let h = hours < 10 ? "0" + hours : hours;
        let m = minutes < 10 ? "0" + minutes : minutes;
        let s = seconds < 10 ? "0" + seconds : seconds;
        let ms = milliseconds < 10 ? "0" + milliseconds : milliseconds;

        let lapTime = `${h} : ${m} : ${s} : ${ms}`;

        let li = document.createElement("li");

        li.innerText = `Lap ${lapCount} - ${lapTime}`;

        laps.appendChild(li);

        lapCount++;
    }

});