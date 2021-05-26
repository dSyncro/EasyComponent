# EasyComponents
Easy Components is a lightweight library that provides some resuable components that can integrate seamlessly in your website or web application. You don't need to write any script: every component is full featured! You can see a live sample of all the components at [this page](https://dsyncro.github.io/EasyComponents/sample).

## Quick Start
To get started just include the compiled script and style files in your page. You can use jsDeliver, a free open source CDN. Note that both the CSS and the JS file must be included in order for the library to work as intended.

### CSS
Include in your page the following `<link>` (it is recommanded to include it in the `<head>` of your page).
It is also suggested to put it before any of your stylesheets.
```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/dSyncro/EasyComponents@main/dist/easy-components.min.css" crossorigin="anonymous">
```

### JS
Include in your page the following `<script>` (it is recommanded to include it at the end of your page, before the closing `</body>` tag).
```html
<script src="https://cdn.jsdelivr.net/gh/dSyncro/EasyComponents@main/dist/easy-components.min.js" crossorigin="anonymous"></script>
```

## Installation
If you do not want to include the library using jsDelivr here are described some alternatives.

### Files
You really need to include 2 file: the `.css` file and the `.js` file. However in order for the library to work well it is highly recommanded to include in your project the entire `/dist` folder or at least all of its content. You are free to use a custom name for your local folder.

### Download
You might need to install the library locally in your project as a dependency. To do so follow these steps:
- Clone this repository (you can do it using the command `git clone https://github.com/dSyncro/EasyComponents.git`)
- Put everything you need in the folder you like the most
- Include the files in your page

Please note that you need to include the `.css` and `.js` files according to your installation:

```html
<link rel="stylesheet" href="path-to-your-installation/easy-components.min.css">
...
<script src="path-to-your-installation/easy-components.min.js"></script>
```

## Full Documentation
You can find the full documentation in the project [Wiki](https://github.com/dSyncro/EasyComponents/Wiki). The Wiki will help you understand any aspect of this project.
