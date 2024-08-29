document.addEventListener('DOMContentLoaded', () => {
  let timer;
  let isRunning = false;
  let isSession = true;

  const timeLeft = document.getElementById('time-left');
  const breakLength = document.getElementById('break-length');
  const sessionLength = document.getElementById('session-length');
  const timerLabel = document.getElementById('timer-label');
  const startStopButton = document.getElementById('start-stop');
  const resetButton = document.getElementById('reset');

  let breakTime = parseInt(breakLength.textContent) * 60;
  let sessionTime = parseInt(sessionLength.textContent) * 60;
  let timeRemaining = sessionTime;

  function updateDisplay() {
    const minutes = Math.floor(timeRemaining / 60);
    const seconds = timeRemaining % 60;
    timeLeft.textContent = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
  }

  function startTimer() {
    timer = setInterval(() => {
      timeRemaining -= 1;
      if (timeRemaining < 0) {
        if (isSession) {
          timeRemaining = breakTime;
          timerLabel.textContent = 'Break';
        } else {
          timeRemaining = sessionTime;
          timerLabel.textContent = 'Session';
        }
        isSession = !isSession;
      }
      updateDisplay();
    }, 1000);
  }

  function stopTimer() {
    clearInterval(timer);
  }

  function resetTimer() {
    stopTimer();
    isSession = true;
    timerLabel.textContent = 'Session';
    timeRemaining = sessionTime;
    updateDisplay();
    startStopButton.textContent = 'Start';
    isRunning = false;
  }

  document.getElementById('break-increment').addEventListener('click', () => {
    breakTime += 60;
    breakLength.textContent = breakTime / 60;
    if (!isSession) {
      timeRemaining = breakTime;
      updateDisplay();
    }
  });

  document.getElementById('break-decrement').addEventListener('click', () => {
    if (breakTime > 60) {
      breakTime -= 60;
      breakLength.textContent = breakTime / 60;
      if (!isSession) {
        timeRemaining = breakTime;
        updateDisplay();
      }
    }
  });

  document.getElementById('session-increment').addEventListener('click', () => {
    sessionTime += 60;
    sessionLength.textContent = sessionTime / 60;
    if (isSession) {
      timeRemaining = sessionTime;
      updateDisplay();
    }
  });

  document.getElementById('session-decrement').addEventListener('click', () => {
    if (sessionTime > 60) {
      sessionTime -= 60;
      sessionLength.textContent = sessionTime / 60;
      if (isSession) {
        timeRemaining = sessionTime;
        updateDisplay();
      }
    }
  });

  startStopButton.addEventListener('click', () => {
    if (isRunning) {
      stopTimer();
      startStopButton.textContent = 'Start';
    } else {
      startTimer();
      startStopButton.textContent = 'Stop';
    }
    isRunning = !isRunning;
  });

  resetButton.addEventListener('click', resetTimer);

  updateDisplay();
});
