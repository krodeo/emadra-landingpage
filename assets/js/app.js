let App = {
    /**
     * --------------------------------------------------
     * Landingpage configs
     * --------------------------------------------------
     */
    countdownDeadline: '2024-07-30 23:59:59',
    isNavbarSticky: true,
    whatsappLink:'',
    /**
     * --------------------------------------------------
     * App Variables
     * --------------------------------------------------
     */
    isScrolled: false,
    timer: { day: 0, hour: 0, minute: 0, second: 0 },
    /**
     * --------------------------------------------------
     * Init
     * --------------------------------------------------
     */
    init() {
        window.addEventListener('scroll', (e) => {
            this.isScrolled = window.scrollY > 10;
        });
    },
    /**
     * --------------------------------------------------
     * Countdown functions
     * --------------------------------------------------
     */
    startCountdown() {
        let deadline = new Date(this.countdownDeadline).getTime();
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