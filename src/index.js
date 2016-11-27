const Bot = require('./bot');
const process = require('process');
const token = process.env.TOKEN;
const ip = process.env.IP;

new Bot(token, {polling: true}, ip);
