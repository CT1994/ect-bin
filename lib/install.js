const bin = require('.')
const chalk = require('chalk');
const chalkError = chalk.bold.red;
const chalkSuccessfully = chalk.bold.green;

bin.run(err => {
    if (err)
    {
        console.log(chalkError('There is no binary for you OS'));

        return;
    }

    console.log(chalkSuccessfully('ect pre-build test passed successfully'));
})
