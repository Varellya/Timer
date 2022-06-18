const minuteItem = document.querySelector('.minute');
const secondItem = document.querySelector('.second');

const startBtn = document.querySelector('.start');
const waitBtn = document.querySelector('.wait');
const resetBtn = document.querySelector('.reset');

const icoPlay = document.querySelector('.ico__play');
const icoStop = document.querySelector('.ico__stop');

startBtn.addEventListener('click', () => {
    clearInterval(interval)
    if (startBtn.classList.contains('stop') === false) {
        interval = setInterval(start, 1000)
        startBtn.classList.add('stop')
        icoStop.classList.remove('ico-no__active')
        icoPlay.classList.add('ico-no__active')
    } else if (waitBtn.classList.contains('noActive') === true) {
        interval = setInterval(start, 1000)
        waitBtn.classList.remove('noActive');
        icoStop.classList.remove('ico-no__active')
        icoPlay.classList.add('ico-no__active')
    } else {
        clearTime()
        startBtn.classList.remove('stop')
        icoStop.classList.add('ico-no__active')
        icoPlay.classList.remove('ico-no__active')
    }
});

waitBtn.addEventListener('dblclick', () => {
    clearInterval(interval)
    waitBtn.classList.add('noActive');
    icoStop.classList.add('ico-no__active')
    icoPlay.classList.remove('ico-no__active')
});

resetBtn.addEventListener('click', () => {
    clearTime()
});


let minute = 00,
    second = 00,
    interval


function start() {
    second++

    if (second <= 9) {
        secondItem.innerHTML = "0" + second
    }
    if (second > 9) {
        secondItem.innerHTML = second
    }
    if (second > 59) {
        minute++
        minuteItem.innerHTML = "0" + minute
        second = 0
        secondItem.innerHTML = "0" + second
    }

    if (minute > 9) {
        minuteItem.innerHTML = minute
    }
}

function clearTime() {
    minute = 00
    second = 00
    secondItem.innerHTML = "00"
    minuteItem.innerHTML = "00"
}

