## LazySelectize – Usage

```html
<script type="text/javascript" src="selectize.js"></script>
<script type="text/javascript" src="lazyselectize.js"></script>
<link rel="stylesheet" type="text/css" href="selectize.css" />
<script>
$(function() {
	$('select').lazyselectize(options);
});
</script>
```

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
