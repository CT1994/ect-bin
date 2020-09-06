![Node.js Package](https://github.com/CT1994/ect-bin/workflows/Node.js%20Package/badge.svg)

[Efficient-Compression-Tool](https://github.com/fhanau/Efficient-Compression-Tool) is a compressor for image files, PNG without losing any information.

> currently only supports Windows, Linux, Mac OS

## Install

```
$ npm install -save ect-bin
```

## Usage

```js
const {execFile} = require('child_process');
const ect = require('ect-bin');

execFile(ect, ['input.png'], err => {
    console.log('Image minified!');
});
```
