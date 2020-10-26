'use strict';
const path = require('path');
const BinWrapper = require('bin-wrapper');
const pkg = require('../package.json');

const url = `https://raw.githubusercontent.com/CT1994/ect-bin/v${pkg.version}/vendor/`;
debugger;
module.exports = new BinWrapper()
	.src(`${url}macos/ect`, 'darwin')
	.src(`${url}linux/ect`, 'linux')
	.src(`${url}win32/ect.exe`, 'win32')
	.dest(path.resolve(__dirname, '../vendor'))
	.use(process.platform === 'win32' ? 'ect.exe' : 'ect');
