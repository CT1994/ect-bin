'use strict';
const path = require('path');
const BinWrapper = require('bin-wrapper');
const pkg = require('../package.json');

const url = `https://raw.githubusercontent.com/CT1994/ect-bin/v${pkg.version}/vendor/win/x64/ect.exe`;

module.exports = new BinWrapper()
	// .src(`${url}/macos/ect`, 'darwin') // I need to compile this version still
	// .src(`${url}/linux/x86/ect`, 'linux', 'x86') // need to check if this can run on x86
	.src(`${url}/linux/x64/ect`, 'linux', 'x64')
	.src(`${url}/win/x64/ect.exe`, 'win32', 'x64') // I need to update this compiled version
	.dest(path.resolve(__dirname, '../vendor'))
	.use(process.platform === 'win32' ? 'ect.exe' : 'ect');
