const winston = require('winston');
const os = require('os');
const path = require('path');
const fs = require('fs');

// fetching application name from json
const appName = 'YT';

// create application specific dir for application log
if (!fs.existsSync(path.join(os.homedir(), 'YT', 'var', 'log'))) {
    fs.mkdirSync(path.join(os.homedir(), 'YT', 'var', 'log'))
}

// path of logger file dir
var logDir = path.join(os.homedir(), 'YT', 'var', 'log')
var now = new Date();
//console.log("date",now);
// creating winston logger
var logger = winston.loggers.add('logger',{
    transports: [
        new (require('winston-daily-rotate-file'))({
            filename: `${logDir}/${appName}/${appName}.log`,
            datePattern: 'YYYY-MM-DD',
            prepend: true,
            json: false,
            level: 'info'
        }),

        new winston.transports.Console({
            level: 'debug',
            handleExceptions: true,
            json: false,
            colorize: true,
            timestamp: true
        })
    ],
    exitOnError: false
})

module.exports = logger
module.exports.stream = {
    write: function (message, encoding) {
        logger.info(message)
    }
}
