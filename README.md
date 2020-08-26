# clocker.js
The simple way to add a clock to your site

This is a simple library to implement a clock in your page simply and quickly.

<h2>Use</h2>

<h3>HTML:</h3>
<pre>
  <code>
    &lt;div id="clock"&gt;&lt;/div&gt;
    &lt;script source="https://cdn.jsdelivr.net/gh/kenliten/clocker.js/clocker.js" crossorigin&gt;&lt;/script&gt;
    &lt;script source="yourCode.js"&gt;&lt;/script&gt;
  </code>
</pre>
<h3>Javascript</h3>
<pre>
  <code>
    var <var>clock</var> = new <var>Clocker</var>('#clock', ':', true);
    // Arguments: 1) Clock container's id. 2) Divider. 3) Auto start clock?
    -----------
    // <b>Or simplier</b>
    -----------
    var <var>clock</var> = new <var>Clocker</var>();
  </code>
</pre>
