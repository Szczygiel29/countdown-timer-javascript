const daysEl = document.getElementById('days')
const hoursEl = document.getElementById('hours')
const minEL = document.getElementById('minutes')
const secondsEL = document.getElementById('seconds')

const newYears = '1 Jan 2024'


function countdown() {
    const newYearsDate = new Date(newYears)
    const currentDate = new Date();

    const secondsTotal = (newYearsDate - currentDate) / 1000

    const seconds = Math.floor(secondsTotal) % 60
    const minuts = Math.floor(secondsTotal / 60) % 60
    const hours = Math.floor(secondsTotal / 3600) % 24
    const days = Math.floor(secondsTotal / 3600 / 24)

    daysEl.innerHTML = days;
    hoursEl.innerHTML = formatTime(hours);
    minEL.innerHTML = formatTime(minuts);
    secondsEL.innerHTML = formatTime(seconds)
}

function formatTime(time) {
    return time < 10 ? (`0${time}`) : time
}

countdown()

setInterval(countdown, 1000)