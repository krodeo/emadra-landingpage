let App = {
    timer: { day: 0, hour: 0, minute: 0, second: 0 },

    startCountdown(date) {
        let deadline = new Date(date).getTime();
        let x = setInterval(() => {
            let now = new Date().getTime();
            let distance = deadline - now;

            this.timer.day = this.zerofy(Math.floor(distance / (1000 * 60 * 60 * 24)));
            this.timer.hour = this.zerofy(Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
            this.timer.minute = this.zerofy(Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)));
            this.timer.second = this.zerofy(Math.floor((distance % (1000 * 60)) / 1000));

            if (distance < 0)
                clearInterval(x);
        }, 1000);
    },

    zerofy(num) {
        return num < 10 ? `0${num}` : num;
    }
}