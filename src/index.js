const Bot = require('./bot');
const process = require('process');
const express = require('express');
const cors = require('cors');
const token = process.env.TOKEN;
const chatID = process.env.CHAT;
const ip = process.env.IP;
const server = express();

server.use(cors());

const bot = new Bot(token, {polling: true}, ip, chatID);

server.get('/', (req, res) => {
	bot.sendToRootChat('bot updated 🚀');
	res.send('OK');
});

server.listen(3091);


