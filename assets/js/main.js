const second = 1000,
    minute = second * 60,
    hour = minute * 60,
    day = hour * 24;

let countDown = new Date('December 16, 2021 23:59:59').getTime(),
    x = setInterval(function() {

        let now = new Date().getTime(),
            distance = countDown - now;
        let days, hours, minutes, seconds;
        days = Math.floor(distance / (day));
        hours = Math.floor((distance % (day)) / (hour));
        minutes = Math.floor((distance % (hour)) / (minute));
        seconds = Math.floor((distance % (minute)) / second);

        if ((days + "").length === 1) {
            days = "0" + days;
        }
        if ((hours + "").length === 1) {
            hours = "0" + hours;
        }
        if ((minutes + "").length === 1) {
            minutes = "0" + minutes;
        }
        if ((seconds + "").length === 1) {
            seconds = "0" + seconds;
        }

        document.getElementById('days').innerText = days,
            document.getElementById('hours').innerText = hours,
            document.getElementById('minutes').innerText = minutes,
            document.getElementById('seconds').innerText = seconds;

        //do something later when date is reached
        if (distance < 0) {
            document.getElementById('days').innerText = "00",
                document.getElementById('hours').innerText = "00",
                document.getElementById('minutes').innerText = "00",
                document.getElementById('seconds').innerText = "00";
        }
    }, second);