let timerElement = document.getElementById("timer");
let timeLeft = 1500; // 25 minutos en segundos
let timerInterval;
let mode = 'pomodoro'; // Modo inicial

function updateTimer() {
    let minutes = Math.floor(timeLeft / 60);
    let seconds = timeLeft % 60;
    timerElement.textContent = `${minutes < 10 ? '0' : ''}${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    timeLeft--;

    if (timeLeft < 0) {
        clearInterval(timerInterval);
        alert("¡Tiempo terminado!");
    }
}

function startTimer() {
    clearInterval(timerInterval);
    timerInterval = setInterval(updateTimer, 1000);
}

function resetTimer() {
    clearInterval(timerInterval);
    if (mode === 'pomodoro') timeLeft = 1500; // 25 min
    else if (mode === 'shortBreak') timeLeft = 300; // 5 min
    else if (mode === 'longBreak') timeLeft = 900; // 15 min
    updateTimer();
}

function setMode(newMode) {
    mode = newMode;
    resetTimer();
    document.querySelectorAll('.mode-button').forEach(button => {
        button.classList.remove('active');
    });
    document.querySelector(`.mode-button[onclick="setMode('${newMode}')"]`).classList.add('active');
}
