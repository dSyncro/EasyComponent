# Easy Components
Easy Components is a lightweight library that provides some resuable components that can integrate seamlessly in your website or web application. You don't need to write any script: every component is full featured! You can see a live sample of all the components at [this page](https://dsyncro.github.io/EasyComponents/sample).

## Table of Contents
* [Quick Start](#quick-start)
	+ [CSS](#css)
	+ [JS](#js)
* [Installation](#installation)
	+ [Files](#files)
	+ [Download](#download)
* [Usage](#usage)
* [Full Documentation](#full-documentation)

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

## Usage

After you included EasyComponents in your project you can start using its components. Easy components do not enforce you to use a specific tags to compose your components. This means that you can use tags you think are the most appropriate in your vary own situations.

### Components
You can initialize a component simply by adding two classes to it: the `easy-component` class and the class that identifies your component.
The `easy-component` class is the base class for any easy component therefore it is mandadory.

Each components is identified by one specific class as shown in the following table

| Component | Class |
|---|---|
| Dialog | `ec-dialog` |
| Dialog Opener | `ec-dialog-opener` |
| Dropdown | `ec-dropdown` |
| Listbox | `ec-listbox` |
| Toggle | `ec-toggle` |

For example if you want to create a toggle you can write
```html
<div class="easy-component ec-toggle"></div>
```

Please note that this is not always the case. Each component might need addition data or layout structure as described in the following sections.

#### Dialog

A Dialog is a small window that appear in front of your page (like a popup or a JS alert).

It can be created as follows:

```html
<div class="easy-component ec-dialog" data-name="my-dialog">
  <div class="heading">
    <div class="title">
      Title
    </div>
    <div class="actions">
      <span class="close-button">X</span>
    </div>
  </div>
  <div class="content">
    <p>
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius quod, at adipisci, officiis
      praesentium sit nihil quo ex laborum ea quis architecto deleniti impedit sapiente molestiae hic est
      itaque veniam.
    </p>
  </div>
  <div class="bottom-actions">
    <button class="close-button">Close</button>
  </div>
</div>
```

Each children of the dialog with the class `close-button` will be treated as a close button for the dialog.

An `ec-dialog` is made up of three parts, each identified by the corresponding class:

| Name | Class | Description |
| --- | --- | --- |
| Heading | `heading` | Contains the header of the dialog |
| Content | `content` | Contains the content of the dialog |
| Bottom Actions | `bottom-actions` | Contains the bottom part of the dialog |

Dialog has some data attributes:

| Attribute | Description | Is mandadory? |
| --- | --- | --- |
| `data-name` | The name of the dialog, necessary to be targeted by dialog openers. | Yes |
| `data-fullwidth` | When set the dialog uses all the available horizontal space. | No |
| `data-blocking` | When set the dialog blocks page scrolling. | No |
| `data-losefocus` | When set the dialog closes when a click is performed outside of it. | No |


## Full Documentation
You can find the full documentation in the project [Wiki](https://github.com/dSyncro/EasyComponents/Wiki). The Wiki will help you understand any aspect of this project.
