# clocker.js
The simple way to add a clock to your site

This is a simple library to implement a clock in your page simply and quickly.

## Use

### HTML:

```html
<div id="clock"></div>
<script source="https://cdn.jsdelivr.net/gh/kenliten/clocker.js/clocker.js" crossorigin></script>
<script source="yourCode.js"></script>
```

### Javascript

```js
// Arguments: 1) Clock container's id. 2) Divider. 3) Auto start clock?
var clock = new Clocker('#clock', ':', true);

// Or simplier
var clock = new Clocker();
```
