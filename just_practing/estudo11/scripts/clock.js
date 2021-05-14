
const getHours = () => {

    let clock = new Date()
    let hour = clock.getHours()
    let minutes = clock.getMinutes()
    let seconds = clock.getSeconds()

    window.document.querySelector('h1.hours').innerText = hour + ' : ' + minutes + ' : ' + seconds

}

let interval =  setInterval(getHours, 1000)

const stopClock = () => {

    clearInterval(interval)
    window.document.querySelector('button#btnClock').setAttribute('onclick', 'playClock()')

}

const playClock = () => {

    setInterval(getHours, 1000)
    window.document.querySelector('button#btnClock').setAttribute('onclick', 'stopClock()')

}