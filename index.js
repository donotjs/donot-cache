'use strict';

class Cache {
	get(filename) {
		return Promise.resolve();
	}
	set(filename, data) {
		return Promise.resolve();
	}
	invalidate(filename) {
		return Promise.resolve();
	}
}

module.exports = exports = Cache;
