let App = {
    /**
     * --------------------------------------------------
     * Landingpage configs
     * --------------------------------------------------
     */
    countdownDeadline: '2024-07-10 00:00:00', // Format YYYY-MM-DD HH:MM:SS
    isNavbarSticky: true,
    whatsappLink: '',
    /**
     * --------------------------------------------------
     * App Variables
     * --------------------------------------------------
     */
    isScrolled: false,
    timer: { day: '00', hour: '00', minute: '00', second: '00' },
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
        num = num < 0 ? 0 : num;
        return num < 10 ? `0${num}` : num;
    },

    backToTop() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }
}