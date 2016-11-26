const Bot = require('./bot');
const conf = require('./config.json');
const token = conf.token;

new Bot(token, {polling: true});
