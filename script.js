const daysEl = document.getElementById('days')
const hoursEl = document.getElementById('hours')
const minsEl = document.getElementById ('minutes')
const secondsEl = document.getElementById ('seconds')

const timer = '1 Jan 2022';

function countdown() {
  const newYearDate = new Date(timer);
  const currentDate = new Date();

  const totalSeconds = (newYearDate - currentDate)/1000;
  
  //const days = Math.floor(totalSeconds / 3600 / 24);
  const hours = Math.floor(totalSeconds / 3600) % 24;
  const minutes = Math.floor(totalSeconds / 60)  % 60;
  const seconds = Math.floor(totalSeconds) % 60;



hoursEl.innerHTML= hours;
minsEl.innerHTML= minutes
secondsEl.innerHTML= seconds

}

function formatTime(time){
    return time < 10 ? `0${time}` : time;
}



countdown();

setInterval(countdown, 1000);

