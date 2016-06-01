'use strict';

class Cache {
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
