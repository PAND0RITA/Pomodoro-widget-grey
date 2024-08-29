@import url('https://fonts.googleapis.com/css2?family=Lora:wght@400;700&display=swap');

/* General */

body {
  font-family: 'Lora', serif;
  background-color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  margin: 0;
}

#root {
  display: flex;
  align-items: center;
  justify-content: center;
}

button {
  background-color: #e0e0e0;
  border: none;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  text-align: center;
  font-size: 16px;
  box-shadow: 0.1em 0.1em rgba(0, 0, 0, 0.2);
  cursor: pointer;
  transition: background-color 0.3s, box-shadow 0.3s;
}

button:active {
  background-color: #d0d0d0;
}

button:focus {
  outline: none;
  box-shadow: 0.1em 0.1em rgba(0, 0, 0, 0.3) inset;
}

/* Clock Body */

.clock-container {
  background-color: #f9f9f9;
  width: 250px;
  border-radius: 15px;
  padding: 20px;
  box-shadow: 5px 5px rgba(0, 0, 0, 0.2);
  text-align: center;
}

#time-left {
  font-size: 48px;
  background-color: #ffffff;
  padding: 15px;
  border-radius: 15px;
  box-shadow: 2px 2px rgba(0, 0, 0, 0.1) inset;
}

#display-controls {
  margin: 15px 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
}

#timer-label {
  font-size: 20px;
  background-color: #ffffff;
  border-radius: 10px;
  height: 30px;
  line-height: 30px;
  padding-top: 5px;
  box-shadow: 1px 1px rgba(0, 0, 0, 0.1) inset;
}

#timer-ssr {
  display: flex;
  justify-content: space-between;
}

.length-container {
  display: flex;
  justify-content: space-between;
  margin-top: 15px;
}

.break-container, 
.session-container {
  text-align: center;
  border: 1px solid #d0d0d0;
  padding: 10px;
  border-radius: 10px;
  width: 45%;
}

.length-controls {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.length-controls button {
  width: 28px;
  height: 28px;
  font-size: 14px;
}

.length-controls span {
  font-size: 20px;
}

#break-label,
#session-label {
  font-size: 14px;
}

#break-length,
#session-length {
  font-size: 24px;
}
