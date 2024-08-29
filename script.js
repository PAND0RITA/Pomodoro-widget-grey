let timer;
let isRunning = false;
let mode = "pomodoro";
let timeRemaining = 1500; // 25 minutos en segundos

const startStopButton = document.getElementById("start-stop");
const resetButton = document.getElementById("reset");
const minutesDisplay = document.getElementById("minutes");
const secondsDisplay = document.getElementById("seconds");
const alarmSound = document.getElementById("alarm-sound");

const modeButtons = document.querySelectorAll(".mode-button");

modeButtons.forEach(button => {
    button.addEventListener("click", () => {
        modeButtons.forEach(btn => btn.classList.remove("active"));
        button.classList.add("active");
        mode = button.id;

        switch (mode) {
            case "pomodoro":
                timeRemaining = 1500; // 25 minutos
                break;
            case "short-break":
                timeRemaining = 300; // 5 minutos
                break;
            case "long-break":
                timeRemaining = 900; // 15 minutos
                break;
        }

        updateDisplay();
        stopTimer();
    });
});

startStopButton.addEventListener("click", () => {
    if (isRunning) {
        stopTimer();
    } else {
        startTimer();
    }
});

resetButton.addEventListener("click", resetTimer);

function startTimer() {
    isRunning = true;
    startStopButton.textContent = "Stop";
    timer = setInterval(() => {
        timeRemaining--;
        if (timeRemaining <= 0) {
            clearInterval(timer);
            alarmSound.play();
            timeRemaining = 0;
            isRunning = false;
            startStopButton.textContent = "Start";
        }
        updateDisplay();
    }, 1000);
}

function stopTimer() {
    isRunning = false;
    clearInterval(timer);
    startStopButton.textContent = "Start";
}

function resetTimer() {
    switch (mode) {
        case "pomodoro":
            timeRemaining = 1500; // 25 minutos
            break;
        case "short-break":
            timeRemaining = 300; // 5 minutos
            break;
        case "long-break":
            timeRemaining = 900; // 15 minutos
            break;
    }
    stopTimer();
    updateDisplay();
}

function updateDisplay() {
    const minutes = Math.floor(timeRemaining / 60);
    const seconds = timeRemaining % 60;
    minutesDisplay.textContent = minutes.toString().padStart(2, "0");
    secondsDisplay.textContent = seconds.toString().padStart(2, "0");
}
