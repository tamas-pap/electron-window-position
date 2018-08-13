# Electron Window Positioner [![Build Status](https://travis-ci.org/tamas-pap/electron-window-positioner.svg?branch=master)](https://travis-ci.org/tamas-pap/electron-window-positioner)

> Easily manage the position of electron window.

## Install

```
npm install --save electron-window-positioner
```

## Usage

### Calculate window position

```Javascript
const { BrowserWindow } = require('electron');
const { calculateWindowPosition } = require('electron-window-positioner');

cons windowSize = { width: 800, height: 600 };
const windowPosition = calculateWindowPosition({ width: 800, height: 600 }, { x: 'center', y: 'top' }); // {x: Number, y: Number}
const browserWindow = new BrowserWindow({ ...windowSize,  ...windowPosition});
```

### Move a window

```Javascript
const { BrowserWindow } = require('electron');
const { setWindowPosition } = require('electron-window-positioner');

const browserWindow = new BrowserWindow({ width: 800, height: 600 });
setWindowPosition(browserWindow, { x: 'left', y: 'top', offsetY: 10 }, true);
```

## Docs

### `calculateWindowPosition(window, position)`

* `window` instance of `BrowserWindow` or object with format `{width: Number, height: Number}`
* `position` object with format: `{x: left|center|right|Number, y: top|center|bottom|Number, offsetX: Number, offsetY: Number}`

### `setWindowPosition(window, position, animate)`

* `window` instance of `BrowserWindow` or object with format `{width: Number, height: Number}`
* `position` object with format: `{x: left|center|right|Number, y: top|center|bottom|Number, offsetX: Number, offsetY: Number}`
* `animate` Boolean

## License

MIT
