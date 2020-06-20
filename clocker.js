var clocker = {
    animation: null,
    clock: null,
    divider: ':',
    format: '12',
    showSeconds: false,
    style: 'classic',
    status: 'stopped',

    init: function(holder = 'clock'){
        // attempt to find the clock holder or create it if doesn't exists
        this.clock = document.getElementById(holder);
        // if there is not an element with that id
        if (this.clock === null){
            // create a div element
            this.clock = document.createElement('div');
            this.clock.id = holder;
            // add the element to the body
            document.getElementsByTagName('body')[0].appendChild(this.clock);
        }
        // start the clock
        this.start();
    },

    init: function(holder = 'clock', format){
        // attempt to find the clock holder or create it if doesn't exists
        this.clock = document.getElementById(holder);
        // if there is not an element with that id
        if (this.clock === null){
            // create a div element
            this.clock = document.createElement('div');
            this.clock.id = holder;
            // add the element to the body
            document.getElementsByTagName('body')[0].appendChild(this.clock);
        }
        this.format = format;
        // start the clock
        this.start();
    },

    init: function(holder = 'clock', format, seconds){
        // attempt to find the clock holder or create it if doesn't exists
        this.clock = document.getElementById(holder);
        // if there is not an element with that id
        if (this.clock === null){
            // create a div element
            this.clock = document.createElement('div');
            this.clock.id = holder;
            // add the element to the body
            document.getElementsByTagName('body')[0].appendChild(this.clock);
        }
        this.format = format;
        this.showSeconds = seconds;
        // start the clock
        this.start();
    },

    start: function(){
        clocker.animation = requestAnimationFrame(clocker.start);
        // get the actual hour, minutes and seconds
        let hour = new Date().getHours();
        let minutes = new Date().getMinutes();
        let seconds = new Date().getSeconds();
        
        // format the hour
        hour = clocker.format == '12' && hour > 12 ? hour -= 12 : hour;
        hour = hour == 0 ? hour = 12 : hour;
        hour = hour < 10 ? hour = `0${hour}` : hour;
        minutes = minutes < 10 ? minutes = `0${minutes}` : minutes;
        seconds = seconds < 10 ? seconds = `0${seconds}` : seconds;

        // write the clock in the holder
        clocker.clock.innerHTML = clocker.showSeconds ? `${hour}${clocker.divider}${minutes}:${seconds}` : `${hour}${clocker.divider}${minutes}`;

        if (clocker.format == '12'){
            clocker.clock.innerHTML += new Date().getHours() < 12 ? ' AM' : ' PM';
        }

        clocker.status = 'running';
    },

    stop: function(){
        // Stop the animation frame request
        cancelAnimationFrame(this.animation);
        // Set the animation to null
        this.animation = null;

        this.status = 'stopped';
    },

    toggle: function(){
        if (this.animation == null){
            this.start();
        }else{
            this.stop();
        }
    }
}