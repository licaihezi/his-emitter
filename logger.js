"use strict";

var log4js = require('log4js');

log4js.configure({
  appenders: [
    { type: 'console' }, //控制台输出
  ]
});

module.exports = (name) => {
    var log = log4js.getLogger(name); 
    log.setLevel('TRACE');
    return log;	
}
