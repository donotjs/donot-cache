donot-cache
===========

This only contains an abstract class that all cache plugins inherit from. It cannot be used as a cache directly with *donot*.

# Implementing a cache plugin

Implement your cache plugins as the example below.

    const Cache = require('donor-cache');
    
    class MyCache extends Cache {
        construct() {
            // Do your constructor work.
        }
        // Gets a cached file
        get(filename) {
        	return new Promise((resolved, rejected) => {
        		// Get file content from filename and call `resolved` with its data
        		// or `rejected` with an error.
        	});
        }
        // Caches a file.
        set(filename, data) {
        	return new Promise((resolved, rejected) => {
        		// Save data to the cache.
        	});
        }
        // Invalidates a file (optional).
        invalidate(filename) {
        	return new Promise((resolved, rejected) => {
        		// Invalidate cache for filename.
        	});
        }
    }
    
    module.exports = exports = MyCache;

> Notice: Do not call the super constructor as it only throws an error telling, that the class cannot be directly used as a cache plugin.
    
# License

MIT
