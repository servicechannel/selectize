# lazyselectize.js

[![NPM version](http://img.shields.io/npm/v/lazyselectize.svg?style=flat)](https://www.npmjs.org/package/lazyselectize)

Lazyselectize is an extensible [selectize](https://www.npmjs.com/package/selectize)-based custom &lt;select&gt; UI control. It allows to process scroll event in dropdown and download options if scroll is in bottom of the dropdown

### Features

- Features inherited from [selectize](https://www.npmjs.com/package/selectize)

### Dependencies

- [jquery](https://github.com/jquery/jquery) (1.7 and greater)
- [selectize](https://www.npmjs.com/package/selectize)

### Files

All pre-built files needed to use Selectize can be found in the ["dist"](dist/js) folder.

- [**js/**](dist/js)
	- [selectize.js](dist/js/selectize.js) — With dependencies, minus jquery
	- [lazyselectize.js](dist/js/lazyselectize.js)
- [**css/**](dist/css)
	- [selectize styles](https://www.npmjs.com/package/selectize)
	
### Usage

```js
$('select').lazySelectize(options);
```

The available selectize options are [documented here](https://github.com/brianreavis/selectize.js/blob/master/docs/usage.md).  Options object may include both selectize and lazyselectize options.

The available lazyselectize options are [documented here](docs/usage.md)

### IE8 Support

To support Internet Explorer 8, [es5-shim](https://github.com/kriskowal/es5-shim/) must be added your page.

```html
<!--[if lt IE 9]><script src="http://cdnjs.cloudflare.com/ajax/libs/es5-shim/2.0.8/es5-shim.min.js"></script><![endif]-->
```

