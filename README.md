# clocker.js
The simple way to add a clock to your site

This is a simple library to implement a clock in your page simply and quickly.

You can apply styles with #clock or use your own classes;

<h2>Use</h2>

<ol>
  <li>Clone the project or <a href='#'>download</a> the library</li>
  <li>link it with a &lt;script src=&quot;clocker.js&quot;&gt;&lt;&frasl;script&gt; like tag</li>
  <li>Use it! with a simple <code lang="js">clocker.init();</code> you'll ready to go.</li>
</ol>

<h2>Examples</h2>

<h3>Simple clock</h3>

<pre>
  <code>
    &lt;!doctype html&gt;
    &lt;html&gt;
      &lt;head&gt;
        &lt;title&gt;&lt;/title&gt;
      &lt;/head&gt;
      &lt;body&gt;
      
        &lt;script type=&quot;text/javascript&quot; src=&quot;https://cdn.jsdelivr.net/gh/kenliten/clicker.js@0.0.1/clicker.js&quot; &gt;&lt;/script&gt;
        &lt;script&gt;
          <var>clocker</var>.init();
        &lt;/script&gt;
        
      &lt;/body&gt;
    &lt;/html&gt;
  </code>
</pre>

<h3>24 hours clock</h3>

<pre>
  <code>
    &lt;!doctype html&gt;
    &lt;html&gt;
      &lt;head&gt;
        &lt;title&gt;&lt;/title&gt;
      &lt;/head&gt;
      &lt;body&gt;
      
        &lt;script type=&quot;text/javascript&quot; src=&quot;https://cdn.jsdelivr.net/gh/kenliten/clicker.js@0.0.1/clicker.js&quot; &gt;&lt;/script&gt;
        &lt;script&gt;
          <var>clocker</var>.init('clock', '24');
        &lt;/script&gt;
        
      &lt;/body&gt;
    &lt;/html&gt;
  </code>
</pre>

<h3>Hours, minutes and seconds</h3>

<pre>
  <code>
    &lt;!doctype html&gt;
    &lt;html&gt;
      &lt;head&gt;
        &lt;title&gt;&lt;/title&gt;
      &lt;/head&gt;
      &lt;body&gt;
      
        &lt;script type=&quot;text/javascript&quot; src=&quot;https://cdn.jsdelivr.net/gh/kenliten/clicker.js@0.0.1/clicker.js&quot; &gt;&lt;/script&gt;
        &lt;script&gt;
          <var>clocker</var>.init('clock', '24', true);
        &lt;/script&gt;
        
      &lt;/body&gt;
    &lt;/html&gt;
  </code>
</pre>

<h2>Methods</h2>

<pre>
  <code>
    <var>clocker</var>.init() // create and start a simple clock with the default values
    <var>clocker</var>.init('clocker') // create the clock inside an element with 'clocker' id, even if it doesn't exists
    <var>clocker</var>.init('clock', '24') // create a simple clock with 24 hours format
    <var>clocker</var>.init('clock', '12', true) // create a simple clock with 12 hours format and show seconds
    <var>clocker</var>.stop() // stop the clock
    <var>clocker</var>.start() // start the clock
    <var>clocker</var>.toggle() // toggle the clock activity
  </code>
</pre>

<h2>Properties</h2>

<pre>
<code>
  <var>clocker</var>.status // stopped or running depending the clock status, defaults to 'stopped'
  <var>clocker</var>.clock // DOM element which is used to write on, defaults to null
  <var>clocker</var>.divider // hour, minutes and seconds string divider, defaults to ':'
  <var>clocker</var>.format // string with one of two values, 12 or 24, to format the hour, defaults to '12'
  <var>clocker</var>.showSeconds // boolean to choose between show or hide seconds in the clock, defaults to false
  <var>clocker</var>.animation // holder for the window.requestAnimationFrame caller, defaults to null
</code>
</pre>
