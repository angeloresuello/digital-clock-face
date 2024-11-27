const secondHand = document.querySelector('.second-hand');
const minuteHand = document.querySelector('.minute-hand');
const hourHand = document.querySelector('.hour-hand');
const digitalClockFace = document.querySelector('.time');

function setClockFace() {
    const now = new Date();

    const seconds = now.getSeconds();
    const secondsDegrees = ((seconds / 60) * 360) + 90;
    if (secondHand) {
        secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
    }
    const minutes = now.getMinutes();
    const minutesDegrees = ((minutes / 60) * 360) + ((seconds / 60) * 6) + 90;
    if (minuteHand) {
        minuteHand.style.transform = `rotate(${minutesDegrees}deg)`;
    }


    const hours = now.getHours();
    const hoursDegrees = ((hours % 12 / 12) * 360) + ((minutes / 60) * 30) + 90;
    if (hourHand) {
        hourHand.style.transform = `rotate(${hoursDegrees}deg)`;
    }

    
    if (digitalClockFace) {
        const time = `${padTwo(hours)}:${padTwo(minutes)}:${padTwo(seconds)}`;
        digitalClockFace.textContent = time;
    }
}

function padTwo(number) {
    return (number < 10 ? '0' : '') + number;
}


setInterval(setClockFace, 1000);

setClockFace();
