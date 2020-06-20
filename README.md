# clocker.js
The simple way to add a clock to your site

This is a simple library to implement a clock in your page simply and quickly.

Just download or clone and copy the clocker.js file to your project, link it with a script tag and call clocker.init() and you're ready to go;

You can apply styles with #clock or use your own classes;

<h2>Methods</h2>

<p>clocker.init(?element: string)</p>
<p>clocker.init(?element: string, format: string['12'/'24'])</p>
<p>clocker.init(?element: string, format: string['12'/'24'], showSeconds: boolean)</p>
<p>clocker.stop() -> stop the clock</p>
<p>clocker.start() -> start the clock</p>
<p>clocker.toggle() -> toggle the clock activity</p>

<h2>Properties</h2>

<p>clocker.status -> stopped or running depending the clock status</p>
<p>clocker.clock -> DOM element which is used to write on</p>
<p>clocker.divider -> hour, minutes and seconds string divider</p>
<p>clocker.format -> string with one of two values, 12 or 24, to format the hour</p>
<p>clocker.showSeconds -> boolean to choose between show or hide seconds in the clock</p>
<p>clocker.animation -> holder for the window.requestAnimationFrame caller</p>
