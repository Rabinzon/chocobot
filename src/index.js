const Bot = require('./bot');
const process = require('process');
const token = process.env.TOKEN;

new Bot(token, {polling: true});
