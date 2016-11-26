const TelegramBot = require('node-telegram-bot-api');
const getRates = require('./modules/getRates');

class Bot extends TelegramBot {
	constructor(token, params) {
		super(token, params);
		this.setListeners();
	}
	setListeners() {
		this.onText(/^echo.?/, m => this.handler(m));
		this.onText(/\$/, m => this.sendRates(m));
	}
	getChatId(msg) {
		return msg.chat.id;
	}
	handler(msg) {
		this.sendMessage(this.getChatId(msg), 'I\'m alive! Whats up ? 🙈');
	}
	sendRates(msg) {
		getRates('string').then(res => {
			this.sendMessage(this.getChatId(msg), res);
		});
	}
}

module.exports = Bot;
