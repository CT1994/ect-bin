'use strict';
const path = require('path');
const BinWrapper = require('bin-wrapper');
const pkg = require('../package.json');

const url = 'https://github.com/CT1994/ect-bin/tree/master/vendor';

module.exports = new BinWrapper()
	.src(`${url}/macos/ect`, 'darwin')
	.src(`${url}/linux/x64/ect`, 'linux', 'x64')
	.src(`${url}/win/x64/ect.exe`, 'win32', 'x64')
	.dest(path.resolve(__dirname, '../vendor'))
	.use(process.platform === 'win32' ? 'ect.exe' : 'ect');
