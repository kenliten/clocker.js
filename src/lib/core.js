class Hour{
  constructor(hour = 0, format = '12'){
    if (hour >= 0 && hour =< 23){
      this.hour = hour;
    }else{
      throw new Error('Invalid hour provided');
    }
    if (format == '12' || format == '24'){
      this.format = format;
    }else{
      throw new Error('Invalid hour format provided');
    }
  }

  getFormat(){
    return this.format;
  }

  getHour(){
    return this.hour;
  }

  getNextHour(){
    this.next();
    return this.hour;
  }

  getPrevHour(){
    this.prev();
    return this.hour;
  }

  prev(){
    if (this.hour == 0){
      this.hour = 23;
    }else{
      this.hour -= 1;
    }
  }

  next(){
    if (this.hour == 23){
      this.hour = 0;
    }else{
      this.hour += 1;
    }
  }

  setHour(hour){
    if (hour >= 0 && hour =< 23){
      this.hour = hour;
    }else{
      throw new Error('Invalid hour provided');
    }
  }

  setFormat(format){
    if (format == '12' || format == '24'){
      this.format = format;
    }else{
      throw new Error('Invalid hour format provided');
    }
  }
}

class Minutes {
  constructor(minutes = 0) {
    if (minutes <= 59 && minutes >= 0){
      this.minutes = minutes;
    }
  }

  getMinutes(){
    return this.minutes;
  }

  getNextMinutes(){
    this.next();
    return this.minutes;
  }

  getPrevMinutes(){
    this.prev();
    return this.minutes;
  }

  prev(){
    if (this.minutes == 0){
      this.minutes = 59;
    }else{
      this.minutes -= 1;
    }
  }

  next(){
    if (this.minutes == 59){
      this.minutes = 0;
    }else{
      this.minutes += 1;
    }
  }

  setMinutes(minutes){
    if (minutes <= 59 && minutes >= 0){
      this.minutes = minutes;
    }else{
      throw new Error('Invalid minutes provided');
    }
  }
}

class Seconds {
  constructor(seconds = 0) {
    if (seconds <= 59 && seconds >= 0){
      this.seconds = seconds;
    }
  }

  getSeconds(){
    return this.seconds;
  }

  getNextSeconds(){
    this.next();
    return this.seconds;
  }

  getPrevSeconds(){
    this.prev();
    return this.seconds;
  }

  next(){
    if (this.seconds == 59){
      this.seconds = 0;
    }else{
      this.seconds += 1;
    }
  }

  prev(){
    if(this.seconds == 0){
      this.seconds = 59;
    }else{
      this.seconds += 1;
    }
  }

  setSeconds(seconds){
    if (seconds <= 59 && seconds >= 0){
      this.seconds = seconds;
    }else{
      throw new Error('Invalid seconds provided');
    }
  }
}

class Clock {
  constructor(time = {hour: 0, minutes: 0, seconds: 0}, format = '12', digits = 2) {
    if (typeof(time) === 'object'){
      this.hour = new Hour(time.hour, format);
      this.minutes = new Minutes(time.minutes);
      this.seconds = new Seconds(time.seconds);
      this.digits = digits;
    }else{
      let date = new Date();
      this.hour = new Hour(date.getHours(), format);
      this.minutes = new Minutes(date.getMinutes());
      this.seconds = new Seconds(date.getSeconds());
      this.digits = digits;
    }
  }

  getTime(){
    return {
      hour: this.hour.getHour(),
      minutes: this.minutes.getMinutes(),
      seconds: this.seconds.getSeconds()
    }
  }

  run(){
    this.seconds.next();
    if(this.seconds.getSeconds() == 0){
      this.minutes.next();
      if(this.minutes.getMinutes() == 0){
        this.hour.next();
      }
    }
  }

  setDigits(digits){
    if (digits <= 2 && digits >= 1){
      this.digits = digits;
    }
  }

  setFormat(format){
    this.hour.setFormat(format);
  }

  setTime(time = {hour: 0, minutes: 0, seconds: 0}){
    if (typeof(time === 'object')){
      this.hour = this.hour.setHour(time.hour);
      this.minutes = this.minutes.setMinutes(time.minutes);
      this.seconds = this.seconds.setSeconds(time.seconds);
    }
  }

  start(){
    this.control = setInterval(this.run, 1000);
  }

  stop(){
    clearInterval(this.control);
  }
}

module.exports = {
  Hour,
  Minutes,
  Seconds,
  Clock
}
