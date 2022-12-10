const hourE1 = document.getElementById("hour");
const minuteE1 = document.getElementById("minute");
const secondE1 = document.getElementById("second");
const AMPME1 = document.getElementById("ampm");

function updateClock() {
    let h = new Date().getHours()
    let m = new Date().getMinutes()
    let s = new Date().getSeconds()
    let ampm = "AM"

    if(h > 12){
        h = h - 12
        ampm = "AM"
    }

    hourE1.innerText = h
    minuteE1.innerText = m
    secondE1.innerText = s
}

updateClock()