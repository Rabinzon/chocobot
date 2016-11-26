const TelegramBot = require('node-telegram-bot-api');
const getRates = require('./modules/getRates');
const prayerTime = require('./modules/prayerTime');

class Bot extends TelegramBot {
	constructor(token, params) {
		super(token, params);
		this.setListeners();
	}
	setListeners() {
		this.onText(/^echo.?/, m => this.handler(m));
		this.onText(/\$/, m => this.sendRates(m));
		this.onText(/^🙏$/, m => this.sendPrayerTime(m));
	}
	getChatId(msg) {
		return msg.chat.id;
	}
	handler(msg) {
		this.sendMessage(this.getChatId(msg), 'I\'m alive! Whats up ? 🙈');
	}
	sendPrayerTime(msg) {
		prayerTime('string').then(res => {
			this.sendMessage(this.getChatId(msg), res);
		});
	}
	sendRates(msg) {
		getRates('string').then(res => {
			this.sendMessage(this.getChatId(msg), res);
		});
	}
}

module.exports = Bot;
