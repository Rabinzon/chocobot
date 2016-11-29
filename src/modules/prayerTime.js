const fetch = require('isomorphic-fetch');
const constants = require('./constants');
const timeRgx = /\d+:\d+/g;
const nameRgx = /h>['аA-яЯ]+/g;
const filterRgx = />|h|\\/;

const getMap = names =>
	(time, i) => ({n: names[i], t: time});

const getString = (acc, el) => acc += `${el.n} - ${el.t}\n`;

const filterName = name => name.split(filterRgx).join('');

const getResult = res =>  {
	const times = res.match(timeRgx);
	const names = res.match(nameRgx).map(filterName);
	const json = times.map(getMap(names));
	const string = json.reduce(getString, '🙏\n');
	const results = {
		json,
		string
	};
	return results[key];
};

module.exports = key =>
	fetch(constants.PRAYER_GET)
		.then(res => res.text())
		.then(getResult);
