class Clocker{
  constructor(container = '#clock', divider = ':', auto = true){
    if (typeof(container) === 'string' && container.startsWith('#')){

      this.container = document.querySelector(container);

      this.clock = document.createElement('div');
      this.clock.id = 'clocker-clock';
      this.clock.style.textAlign = 'center';
      this.clock.style.fontSize = '3em';

      this.hour = document.createElement('div');
      this.hour.id = 'clocker-hour';
      this.hour.style.display = 'inline-block';

      this.minutes = document.createElement('div');
      this.minutes.id = 'clocker-minutes';
      this.minutes.style.display = 'inline-block';

      this.seconds = document.createElement('div');
      this.seconds.id = 'clocker-seconds';
      this.seconds.style.display = 'inline-block';

      this.dividers = [
        document.createElement('span'),
        document.createElement('span')
      ];
      this.dividers[0].id = 'clocker-first-divider';
      this.dividers[0].style.display = 'inline-block';
      this.dividers[1].id = 'clocker-second-divider';
      this.dividers[1].style.display = 'inline-block';

      this.clock.appendChild(this.hour);
      this.clock.appendChild(this.dividers[0]);
      this.clock.appendChild(this.minutes);
      this.clock.appendChild(this.dividers[1]);
      this.clock.appendChild(this.seconds);

      this.container.appendChild(this.clock);

      this.dividers[0].innerHTML = divider;
      this.dividers[1].innerHTML = divider;

      this.running = true;

      if (auto){
        this.start();
      }else{
        this.update();
        this.draw();
      }

    }else{
      throw new Error('Error: invalid container string!');
    }
  }

  draw(){
    this.hour.innerHTML = this.date.getHours();
    this.minutes.innerHTML = this.date.getMinutes();
    this.seconds.innerHTML = this.date.getSeconds();
  }

  update(){
    this.date = new Date();
  }

  start = ()=>{
    this.update();
    this.draw();
    if (this.running){
      this.runner = window.requestAnimationFrame(this.start);
    }
  }

  stop(){
    window.cancelAnimationFrame(this.runner);
    this.running = false;
  }
}
