const fetch = require('isomorphic-fetch');
const timeRgx = /\d+:\d+/g;
const nameRgx = /h>['аA-яЯ]+/g;
const filterRgx = />|h|\\/;

module.exports = (key) =>
	fetch('http://www.vremyanamaza.ru/widget/prayersTodayJs?location_id=19685')
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
