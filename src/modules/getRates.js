const fetch = require('isomorphic-fetch');
const constants = require('./constants');

const getResult = res => {
	const rub = res.rates.RUB.toFixed(2);
	const usd = (rub / res.rates.USD).toFixed(2);
	const results = {
		json: {usd, rub},
		string: `USD: ${usd},  EUR: ${rub} 📈`
	};
	return results[key];
};

module.exports = key =>
	fetch(constants.RATES_API)
		.then(res => res.json())
		.then(getResult);
