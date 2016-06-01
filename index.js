'use strict';

class Cache {
	constructor() {
		throw new Error('Cache does not do anything. Do not use it directly with donot. ' +
		                'It\'s an abstract class all cache plugins inherit from. If you are ' +
		                'developing a cache plugin, do not call the super constructor as it ' +
		                'only throws this error.');
	}
	get(filename) {
		return new Promise((resolved) => {
			resolved();
		});
	}
	set(filename, data) {
		return new Promise((resolved) => {
			resolved();
		});
	}
	invalidate(filename) {
		return new Promise((resolved) => {
			resolved();
		});
	}
}

module.exports = exports = Cache;
