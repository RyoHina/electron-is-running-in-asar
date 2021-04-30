electron-is-running-in-asar2
===========================

> Check if the application is running from inside an asar package

Install
-------

```sh
$ npm install --save electron-is-running-in-asar2
```

Usage
-----

```js
const isRunningInAsar = require('electron-is-running-in-asar2');

if (isRunningInAsar()) {
	console.log('Running the app from inside an asar package!');
}
```

License
-------

MIT
