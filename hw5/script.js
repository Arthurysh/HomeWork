class Clock {

    constructor(template) {

        let date = new Date();

        let hours = date.getHours();
        if (hours < 10) hours = '0' + hours;

        let mins = date.getMinutes();
        if (mins < 10) mins = '0' + mins;

        let secs = date.getSeconds();
        if (secs < 10) secs = '0' + secs;

        let output = template
            .replace('h', hours)
            .replace('m', mins)
            .replace('s', secs);
        console.log(output);
    }

    stop() {
        clearInterval(this.timer);
    };

    start() {
        new Clock('h:m:s')
    };

    sayTime() {
        let timer = setInterval(Clock.prototype.start, 1000)
        this.timer = timer;
    };

}

let clock = new Clock('h:m:s');
clock.sayTime()