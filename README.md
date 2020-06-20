# clocker.js
The simple way to add a clock to your site

This is a simple library to implement a clock in your page simply and quickly.

Just download or clone and copy the clocker.js file to your project, link it with a script tag and call clocker.init() and you're ready to go;

You can apply styles with #clock or use your own classes;

<h2>Methods</h2>

clocker.init() -> simple 12 hours format clock
clocker.init('clock', '24') -> simple 24 hours format clock
clocker.init('clock', '24' true) -> simple 24 hours + seconds format clock
clocker.stop() -> stop the clock
clocker.start() -> start the clock
clocker.toggle() -> toggle the clock activity

<h2>Properties</h2>

clocker.status -> stopped or running depending the clock status
clocker.clock -> DOM element which is used to write on
clocker.divider -> hour, minutes and seconds string divider
clocker.format -> string with one of two values, 12 or 24, to format the hour
clocker.showSeconds -> boolean to choose between show or hide seconds in the clock
clocker.animation -> holder for the window.requestAnimationFrame caller
