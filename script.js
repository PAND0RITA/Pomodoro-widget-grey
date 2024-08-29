document.addEventListener('DOMContentLoaded', () => {
    const timerDisplay = document.querySelector('.timer-display');
    const startBtn = document.getElementById('startBtn');
    const resetBtn = document.getElementById('resetBtn');
    const modeButtons = document.querySelectorAll('.mode-btn');

    let timer;
    let timeLeft = 25 * 60; // 25 minutes in seconds
    let isRunning = false;

    function updateDisplay() {
        const minutes = Math.floor(timeLeft / 60);
        const seconds = timeLeft % 60;
        timerDisplay.textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    }

    function startTimer() {
        if (!isRunning) {
            isRunning = true;
            startBtn.textContent = 'Pause';
            timer = setInterval(() => {
                if (timeLeft > 0) {
                    timeLeft--;
                    updateDisplay();
                } else {
                    clearInterval(timer);
                    isRunning = false;
                    startBtn.textContent = 'Start';
                }
            }, 1000);
        } else {
            clearInterval(timer);
            isRunning = false;
            startBtn.textContent = 'Start';
        }
    }

    function resetTimer() {
        clearInterval(timer);
        isRunning = false;
        startBtn.textContent = 'Start';
        timeLeft = 25 * 60;
        updateDisplay();
    }

    function setTimerMode(mode) {
        clearInterval(timer);
        isRunning = false;
        startBtn.textContent = 'Start';
        switch (mode) {
            case 'pomodoro':
                timeLeft = 25 * 60;
                break;
            case 'shortBreak':
                timeLeft = 5 * 60;
                break;
            case 'longBreak':
                timeLeft = 15 * 60;
                break;
        }
        updateDisplay();
    }

    startBtn.addEventListener('click', startTimer);
    resetBtn.addEventListener('click', resetTimer);

    modeButtons.forEach(button => {
        button.addEventListener('click', () => {
            modeButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            setTimerMode(button.id);
        });
    });

    updateDisplay();
});
