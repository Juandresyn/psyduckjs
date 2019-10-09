# psyduckjs

## Description

Js lib for event handlers, makes easy to use/trigger js  actions like: 'Hide, Show, Toggle, Remove'

### Dependences

Depends on [jQuery](http://jquery.com/download/)

### Using psyduckjs

Get a copy of psyduck.js

Add the atribute `psyduck-event` to the trigger element and choose between `click` or `change` depending on what you need.

```html
<div psyduck-event="click"></div>
```
Add the `duck` action to the trigger element and pass in the duck-attribute value, the selector element where the actions is going to be applied options: `'duck-hide', 'duck-show', 'duck-toggle', 'duck-remove'`
```html
<div psyduck-event="click" duck-hide=".js-link"></div>
<div psyduck-event="click" duck-show=".js-link"></div>
<div psyduck-event="click" duck-toggle=".js-link"></div>
<div psyduck-event="click" duck-remove=".js-link"></div>
```

## Include psyduckjs in your project

I'm only allowing download and include psyduckjs, soon cdn will be available

```html
<script src="jquery.js"></script>
<script src="YOUR_PATH/psyduck.js"></script>
```

## Demo

[Live Demo](http://juandresyn.com/apps/psyduck/)

## License

GNU GENERAL PUBLIC LICENSE
