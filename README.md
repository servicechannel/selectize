# lazyselectize.js

[![NPM version](http://img.shields.io/npm/v/lazyselectize.svg?style=flat)](https://www.npmjs.org/package/lazyselectize)

Lazyselectize is an extensible [selectize](https://www.npmjs.com/package/selectize)-based custom &lt;select&gt; UI control. It allows to process scroll event in dropdown and download options if scroll is in bottom of the dropdown

### Features

- Features inherited from [selectize](https://www.npmjs.com/package/selectize)

### Dependencies

- [jquery](https://github.com/jquery/jquery) (1.7 and greater)
- [selectize](https://www.npmjs.com/package/selectize) (bundled in ["standalone" build](node_modules/selectize/dist/js/standalone))

### Files

All pre-built files needed to use Selectize can be found in the ["dist"](dist/) folder.

- [**js/**](dist/js)
	- [**standalone/**](node_modules/selectize/dist/js/standalone)
		- [selectize.js](node_modules/selectize/dist/js/standalone/selectize.js) — With dependencies, minus jquery
	- [lazyselectize.js](lazyselectize.js)
- [**less/**](dist/less)
	- [selectize.less](node_modules/selectize/dist/less/selectize.less) — Core styles
	- [selectize.default.less](node_modules/selectize/dist/less/selectize.default.less) — Default theme
	- [selectize.bootstrap2.less](node_modules/selectize/dist/less/selectize.bootstrap2.less) — Bootstrap 2 theme
	- [selectize.bootstrap3.less](node_modules/selectize/dist/less/selectize.bootstrap3.less) — Bootstrap 3 theme
	- [**plugins/**](node_modules/selectize/dist/less/plugins) — Individual plugin styles
- [**css/**](dist/css)
	- [selectize.css](node_modules/selectize/dist/css/selectize.css) — Core styles
	- [selectize.default.css](node_modules/selectize/dist/css/selectize.default.css) — Default theme (with core styles)
	- [selectize.bootstrap2.css](node_modules/selectize/dist/css/selectize.bootstrap2.css) - Bootstrap 2 theme
	- [selectize.bootstrap3.css](node_modules/selectize/dist/css/selectize.bootstrap3.css) - Bootstrap 3 theme

### Usage

```js
$('select').lazyselectize(options);
```

The available selectize options are [documented here](node_modules/selectize/docs/usage.md).  Options object may include both selectize and lazyselectize options.

### Lazyselectize Options

<table width="100%">
	<tr>
		<th valign="top" colspan="4" align="left"><a href="#general" name="general">General </a></th>
	</tr>
	<tr>
		<th valign="top" width="120px" align="left">Option</th>
		<th valign="top" align="left">Description</th>
		<th valign="top" width="60px" align="left">Type</th>
		<th valign="top" width="60px" align="left">Default</th>
	</tr>
	<tr>
		<td valign="top"><code>loadItemsUrl</code></td>
		<td valign="top">An url to download selectize dropdown options. Necessary url parameters:
<ul>
			<li>
				keyword - search string
			</li>
			<li>
				index - number of data portion(Start value: 0. Each time when scroll moves down it increases by 1)
			</li>
		 </ul>
		</td>
		<td valign="top"><code>url, required</code></td>
		<td valign="top"></td>
	</tr>
	<tr>
		<td valign="top"><code>disableScore</code></td>
		<td valign="top">If true, selectize score function will be disabled. Dropdown items order will be defined in your server method. 
		</td>
		<td valign="top"><code>bool</code></td>
		<td valign="top"><code>false</code></td>
	</tr>
	
	<tr>
		<th valign="top" colspan="4" align="left"><a href="#general" style="color: red" name="general">Non-configurable options </a></th>
	</tr>
	<tr>
		<th valign="top" width="120px" align="left">Option</th>
		<th valign="top" colspan="3" align="left">Description</th>
	</tr>
	<tr>
		<td valign="top"><code>load(callback, query)</code></td>
		<td  colspan="3">Invoked when new options should be loaded from the server. Defined in lazyselectize.js</td>
	</tr>
	<tr>
		<td valign="top"><code>onDropdownOpen($dropdown)</code></td>
		<td colspan="3">Invoked when the dropdown opens. Defined in lazyselectize.js</td>
	</tr>
</table>

### IE8 Support

To support Internet Explorer 8, [es5-shim](https://github.com/kriskowal/es5-shim/) must be added your page.

```html
<!--[if lt IE 9]><script src="http://cdnjs.cloudflare.com/ajax/libs/es5-shim/2.0.8/es5-shim.min.js"></script><![endif]-->
```

