[Efficient-Compression-Tool](https://github.com/fhanau/Efficient-Compression-Tool) is a compressor for image files, PNG without losing any information.

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
