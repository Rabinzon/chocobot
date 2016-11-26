const fetch = require('isomorphic-fetch');

module.exports = key =>
	fetch('http://api.fixer.io/latest')
		.then(res => res.json())
		.then(res => {
			const rub = res.rates.RUB.toFixed(2);
			const usd = (rub / res.rates.USD).toFixed(2);
			const results = {
				json: {usd, rub},
				string: `USD: ${usd},  EUR: ${rub} 📈`
			};
			return results[key];
		});
