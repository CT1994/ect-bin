'use strict';
const path = require('path');
const binBuild = require('bin-build');
const log = require('logalot');
const bin = require('.');

bin.run(['--version']).then(() => {
	log.success('ect pre-build test passed successfully');
}).catch(async error => {
	try {
		log.warn(error.message);
		log.warn('ect pre-build test failed');
		log.info('compiling from source');
		await binBuild.file(path.resolve(__dirname, '../vendor/source/Efficient-Compression-Tool.tar.gz'), [
			`cd src/ && make BINPREFIX="${bin.dest()}"`
		]);

		log.success('ect built successfully');
	} catch (error) {
		log.error(error.stack);

		process.exit(1);
	}
});
