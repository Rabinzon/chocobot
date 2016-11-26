const fetch = require('isomorphic-fetch');
const constants = require('./constants');
const timeRgx = /\d+:\d+/g;
const nameRgx = /h>['аA-яЯ]+/g;
const filterRgx = />|h|\\/;

module.exports = (key) =>
	fetch(constants.PRAYER_GET)
		.then(res => res.text())
		.then(res => {
			const times = res.match(timeRgx);
			const names = res.match(nameRgx).map(t => t.split(filterRgx).join(''));
			
			const json = times.map((e, i) => ({n: names[i], t: e}));
			const string = json.reduce((acc, t) => acc+= `${t.n} - ${t.t}\n` ,'🙏\n');
			
			const results = {
				json,
				string
			};
			return results[key];
		});
