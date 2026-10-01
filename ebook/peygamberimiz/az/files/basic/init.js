var FBPublication = FBPublication || {}; FBPublication["init"] =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

//     Underscore.js 1.8.3
//     http://underscorejs.org
//     (c) 2009-2016 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
//     Underscore may be freely distributed under the MIT license.


// Baseline setup
// --------------
// Establish the root object, `window` (`self`) in the browser, `global`
// on the server, or `this` in some virtual machines. We use `self`
// instead of `window` for `WebWorker` support.
var root = window;

// Save the previous value of the `_` variable.


// Save bytes in the minified (but not gzipped) version:
var ArrayProto = Array.prototype,
    ObjProto = Object.prototype;
var SymbolProto = typeof Symbol !== 'undefined' ? Symbol.prototype : null;

// Create quick reference variables for speed access to core prototypes.
var push = ArrayProto.push,
    slice = ArrayProto.slice,
    toString = ObjProto.toString,
    hasOwnProperty = ObjProto.hasOwnProperty;

// All **ECMAScript 5** native function implementations that we hope to use
// are declared here.
var nativeIsArray = Array.isArray,
    nativeKeys = Object.keys,
    nativeCreate = Object.create;

// Naked function reference for surrogate-prototype-swapping.
var Ctor = function Ctor() {};

// Create a safe reference to the Underscore object for use below.
var _ = function _(obj) {
    if (obj instanceof _) return obj;
    if (!(this instanceof _)) return new _(obj);
    this._wrapped = obj;
};

// Current version.
_.VERSION = '1.8.3';

// Internal function that returns an efficient (for current engines) version
// of the passed-in callback, to be repeatedly applied in other Underscore
// functions.
var optimizeCb = function optimizeCb(func, context, argCount) {
    if (context === void 0) return func;
    switch (argCount == null ? 3 : argCount) {
        case 1:
            return function (value) {
                return func.call(context, value);
            };
        // The 2-parameter case has been omitted only because no current consumers
        // made use of it.
        case 3:
            return function (value, index, collection) {
                return func.call(context, value, index, collection);
            };
        case 4:
            return function (accumulator, value, index, collection) {
                return func.call(context, accumulator, value, index, collection);
            };
    }
    return function () {
        return func.apply(context, arguments);
    };
};

var builtinIteratee;

// An internal function to generate callbacks that can be applied to each
// element in a collection, returning the desired result — either `identity`,
// an arbitrary callback, a property matcher, or a property accessor.
var cb = function cb(value, context, argCount) {
    if (_.iteratee !== builtinIteratee) return _.iteratee(value, context);
    if (value == null) return _.identity;
    if (_.isFunction(value)) return optimizeCb(value, context, argCount);
    if (_.isObject(value)) return _.matcher(value);
    return _.property(value);
};

// External wrapper for our callback generator. Users may customize
// `_.iteratee` if they want additional predicate/iteratee shorthand styles.
// This abstraction hides the internal-only argCount argument.
_.iteratee = builtinIteratee = function builtinIteratee(value, context) {
    return cb(value, context, Infinity);
};

// Similar to ES6's rest param (http://ariya.ofilabs.com/2013/03/es6-and-rest-parameter.html)
// This accumulates the arguments passed into an array, after a given index.
var restArgs = function restArgs(func, startIndex) {
    startIndex = startIndex == null ? func.length - 1 : +startIndex;
    return function () {
        var length = Math.max(arguments.length - startIndex, 0),
            rest = Array(length),
            index = 0;
        for (; index < length; index++) {
            rest[index] = arguments[index + startIndex];
        }
        switch (startIndex) {
            case 0:
                return func.call(this, rest);
            case 1:
                return func.call(this, arguments[0], rest);
            case 2:
                return func.call(this, arguments[0], arguments[1], rest);
        }
        var args = Array(startIndex + 1);
        for (index = 0; index < startIndex; index++) {
            args[index] = arguments[index];
        }
        args[startIndex] = rest;
        return func.apply(this, args);
    };
};

// An internal function for creating a new object that inherits from another.
var baseCreate = function baseCreate(prototype) {
    if (!_.isObject(prototype)) return {};
    if (nativeCreate) return nativeCreate(prototype);
    Ctor.prototype = prototype;
    var result = new Ctor();
    Ctor.prototype = null;
    return result;
};

var property = function property(key) {
    return function (obj) {
        return obj == null ? void 0 : obj[key];
    };
};

// Helper for collection methods to determine whether a collection
// should be iterated as an array or as an object.
// Related: http://people.mozilla.org/~jorendorff/es6-draft.html#sec-tolength
// Avoids a very nasty iOS 8 JIT bug on ARM-64. #2094
var MAX_ARRAY_INDEX = Math.pow(2, 53) - 1;
var getLength = property('length');
var isArrayLike = function isArrayLike(collection) {
    var length = getLength(collection);
    return typeof length == 'number' && length >= 0 && length <= MAX_ARRAY_INDEX;
};

// Collection Functions
// --------------------
// The cornerstone, an `each` implementation, aka `forEach`.
// Handles raw objects in addition to array-likes. Treats all
// sparse array-likes as if they were dense.
_.each = _.forEach = function (obj, iteratee, context) {
    iteratee = optimizeCb(iteratee, context);
    var i, length;
    if (isArrayLike(obj)) {
        for (i = 0, length = obj.length; i < length; i++) {
            iteratee(obj[i], i, obj);
        }
    } else {
        var keys = _.keys(obj);
        for (i = 0, length = keys.length; i < length; i++) {
            iteratee(obj[keys[i]], keys[i], obj);
        }
    }
    return obj;
};

// Return the results of applying the iteratee to each element.
_.map = _.collect = function (obj, iteratee, context) {
    iteratee = cb(iteratee, context);
    var keys = !isArrayLike(obj) && _.keys(obj),
        length = (keys || obj).length,
        results = Array(length);
    for (var index = 0; index < length; index++) {
        var currentKey = keys ? keys[index] : index;
        results[index] = iteratee(obj[currentKey], currentKey, obj);
    }
    return results;
};

// Create a reducing function iterating left or right.
var createReduce = function createReduce(dir) {
    // Wrap code that reassigns argument variables in a separate function than
    // the one that accesses `arguments.length` to avoid a perf hit. (#1991)
    var reducer = function reducer(obj, iteratee, memo, initial) {
        var keys = !isArrayLike(obj) && _.keys(obj),
            length = (keys || obj).length,
            index = dir > 0 ? 0 : length - 1;
        if (!initial) {
            memo = obj[keys ? keys[index] : index];
            index += dir;
        }
        for (; index >= 0 && index < length; index += dir) {
            var currentKey = keys ? keys[index] : index;
            memo = iteratee(memo, obj[currentKey], currentKey, obj);
        }
        return memo;
    };

    return function (obj, iteratee, memo, context) {
        var initial = arguments.length >= 3;
        return reducer(obj, optimizeCb(iteratee, context, 4), memo, initial);
    };
};

// **Reduce** builds up a single result from a list of values, aka `inject`,
// or `foldl`.
_.reduce = _.foldl = _.inject = createReduce(1);

// The right-associative version of reduce, also known as `foldr`.
_.reduceRight = _.foldr = createReduce(-1);

// Return the first value which passes a truth test. Aliased as `detect`.
_.find = _.detect = function (obj, predicate, context) {
    var keyFinder = isArrayLike(obj) ? _.findIndex : _.findKey;
    var key = keyFinder(obj, predicate, context);
    if (key !== void 0 && key !== -1) return obj[key];
};

// Return all the elements that pass a truth test.
// Aliased as `select`.
_.filter = _.select = function (obj, predicate, context) {
    var results = [];
    predicate = cb(predicate, context);
    _.each(obj, function (value, index, list) {
        if (predicate(value, index, list)) results.push(value);
    });
    return results;
};

// Return all the elements for which a truth test fails.
_.reject = function (obj, predicate, context) {
    return _.filter(obj, _.negate(cb(predicate)), context);
};

// Determine whether all of the elements match a truth test.
// Aliased as `all`.
_.every = _.all = function (obj, predicate, context) {
    predicate = cb(predicate, context);
    var keys = !isArrayLike(obj) && _.keys(obj),
        length = (keys || obj).length;
    for (var index = 0; index < length; index++) {
        var currentKey = keys ? keys[index] : index;
        if (!predicate(obj[currentKey], currentKey, obj)) return false;
    }
    return true;
};

// Determine if at least one element in the object matches a truth test.
// Aliased as `any`.
_.some = _.any = function (obj, predicate, context) {
    predicate = cb(predicate, context);
    var keys = !isArrayLike(obj) && _.keys(obj),
        length = (keys || obj).length;
    for (var index = 0; index < length; index++) {
        var currentKey = keys ? keys[index] : index;
        if (predicate(obj[currentKey], currentKey, obj)) return true;
    }
    return false;
};

// Determine if the array or object contains a given item (using `===`).
// Aliased as `includes` and `include`.
_.contains = _.includes = _.include = function (obj, item, fromIndex, guard) {
    if (!isArrayLike(obj)) obj = _.values(obj);
    if (typeof fromIndex != 'number' || guard) fromIndex = 0;
    return _.indexOf(obj, item, fromIndex) >= 0;
};

// Invoke a method (with arguments) on every item in a collection.
_.invoke = restArgs(function (obj, method, args) {
    var isFunc = _.isFunction(method);
    return _.map(obj, function (value) {
        var func = isFunc ? method : value[method];
        return func == null ? func : func.apply(value, args);
    });
});

// Convenience version of a common use case of `map`: fetching a property.
_.pluck = function (obj, key) {
    return _.map(obj, _.property(key));
};

// Convenience version of a common use case of `filter`: selecting only objects
// containing specific `key:value` pairs.
_.where = function (obj, attrs) {
    return _.filter(obj, _.matcher(attrs));
};

// Convenience version of a common use case of `find`: getting the first object
// containing specific `key:value` pairs.
_.findWhere = function (obj, attrs) {
    return _.find(obj, _.matcher(attrs));
};

// Return the maximum element (or element-based computation).
_.max = function (obj, iteratee, context) {
    var result = -Infinity,
        lastComputed = -Infinity,
        value,
        computed;
    if (iteratee == null || typeof iteratee == 'number' && _typeof(obj[0]) != 'object' && obj != null) {
        obj = isArrayLike(obj) ? obj : _.values(obj);
        for (var i = 0, length = obj.length; i < length; i++) {
            value = obj[i];
            if (value != null && value > result) {
                result = value;
            }
        }
    } else {
        iteratee = cb(iteratee, context);
        _.each(obj, function (v, index, list) {
            computed = iteratee(v, index, list);
            if (computed > lastComputed || computed === -Infinity && result === -Infinity) {
                result = v;
                lastComputed = computed;
            }
        });
    }
    return result;
};

// Return the minimum element (or element-based computation).
_.min = function (obj, iteratee, context) {
    var result = Infinity,
        lastComputed = Infinity,
        value,
        computed;
    if (iteratee == null || typeof iteratee == 'number' && _typeof(obj[0]) != 'object' && obj != null) {
        obj = isArrayLike(obj) ? obj : _.values(obj);
        for (var i = 0, length = obj.length; i < length; i++) {
            value = obj[i];
            if (value != null && value < result) {
                result = value;
            }
        }
    } else {
        iteratee = cb(iteratee, context);
        _.each(obj, function (v, index, list) {
            computed = iteratee(v, index, list);
            if (computed < lastComputed || computed === Infinity && result === Infinity) {
                result = v;
                lastComputed = computed;
            }
        });
    }
    return result;
};

// Shuffle a collection.
_.shuffle = function (obj) {
    return _.sample(obj, Infinity);
};

// Sample **n** random values from a collection using the modern version of the
// [Fisher-Yates shuffle](http://en.wikipedia.org/wiki/Fisher–Yates_shuffle).
// If **n** is not specified, returns a single random element.
// The internal `guard` argument allows it to work with `map`.
_.sample = function (obj, n, guard) {
    if (n == null || guard) {
        if (!isArrayLike(obj)) obj = _.values(obj);
        return obj[_.random(obj.length - 1)];
    }
    var sample = isArrayLike(obj) ? _.clone(obj) : _.values(obj);
    var length = getLength(sample);
    n = Math.max(Math.min(n, length), 0);
    var last = length - 1;
    for (var index = 0; index < n; index++) {
        var rand = _.random(index, last);
        var temp = sample[index];
        sample[index] = sample[rand];
        sample[rand] = temp;
    }
    return sample.slice(0, n);
};

// Sort the object's values by a criterion produced by an iteratee.
_.sortBy = function (obj, iteratee, context) {
    var index = 0;
    iteratee = cb(iteratee, context);
    return _.pluck(_.map(obj, function (value, key, list) {
        return {
            value: value,
            index: index++,
            criteria: iteratee(value, key, list)
        };
    }).sort(function (left, right) {
        var a = left.criteria;
        var b = right.criteria;
        if (a !== b) {
            if (a > b || a === void 0) return 1;
            if (a < b || b === void 0) return -1;
        }
        return left.index - right.index;
    }), 'value');
};

// An internal function used for aggregate "group by" operations.
var group = function group(behavior, partition) {
    return function (obj, iteratee, context) {
        var result = partition ? [[], []] : {};
        iteratee = cb(iteratee, context);
        _.each(obj, function (value, index) {
            var key = iteratee(value, index, obj);
            behavior(result, value, key);
        });
        return result;
    };
};

// Groups the object's values by a criterion. Pass either a string attribute
// to group by, or a function that returns the criterion.
_.groupBy = group(function (result, value, key) {
    if (_.has(result, key)) result[key].push(value);else result[key] = [value];
});

// Indexes the object's values by a criterion, similar to `groupBy`, but for
// when you know that your index values will be unique.
_.indexBy = group(function (result, value, key) {
    result[key] = value;
});

// Counts instances of an object that group by a certain criterion. Pass
// either a string attribute to count by, or a function that returns the
// criterion.
_.countBy = group(function (result, value, key) {
    if (_.has(result, key)) result[key]++;else result[key] = 1;
});

var reStrSymbol = /[^\ud800-\udfff]|[\ud800-\udbff][\udc00-\udfff]|[\ud800-\udfff]/g;
// Safely create a real, live array from anything iterable.
_.toArray = function (obj) {
    if (!obj) return [];
    if (_.isArray(obj)) return slice.call(obj);
    if (_.isString(obj)) {
        // Keep surrogate pair characters together
        return obj.match(reStrSymbol);
    }
    if (isArrayLike(obj)) return _.map(obj, _.identity);
    return _.values(obj);
};

// Return the number of elements in an object.
_.size = function (obj) {
    if (obj == null) return 0;
    return isArrayLike(obj) ? obj.length : _.keys(obj).length;
};

// Split a collection into two arrays: one whose elements all satisfy the given
// predicate, and one whose elements all do not satisfy the predicate.
_.partition = group(function (result, value, pass) {
    result[pass ? 0 : 1].push(value);
}, true);

// Array Functions
// ---------------
// Get the first element of an array. Passing **n** will return the first N
// values in the array. Aliased as `head` and `take`. The **guard** check
// allows it to work with `_.map`.
_.first = _.head = _.take = function (array, n, guard) {
    if (array == null || array.length < 1) return void 0;
    if (n == null || guard) return array[0];
    return _.initial(array, array.length - n);
};

// Returns everything but the last entry of the array. Especially useful on
// the arguments object. Passing **n** will return all the values in
// the array, excluding the last N.
_.initial = function (array, n, guard) {
    return slice.call(array, 0, Math.max(0, array.length - (n == null || guard ? 1 : n)));
};

// Get the last element of an array. Passing **n** will return the last N
// values in the array.
_.last = function (array, n, guard) {
    if (array == null || array.length < 1) return void 0;
    if (n == null || guard) return array[array.length - 1];
    return _.rest(array, Math.max(0, array.length - n));
};

// Returns everything but the first entry of the array. Aliased as `tail` and `drop`.
// Especially useful on the arguments object. Passing an **n** will return
// the rest N values in the array.
_.rest = _.tail = _.drop = function (array, n, guard) {
    return slice.call(array, n == null || guard ? 1 : n);
};

// Trim out all falsy values from an array.
_.compact = function (array) {
    return _.filter(array, Boolean);
};

// Internal implementation of a recursive `flatten` function.
var flatten = function flatten(input, shallow, strict, output) {
    output = output || [];
    var idx = output.length;
    for (var i = 0, length = getLength(input); i < length; i++) {
        var value = input[i];
        if (isArrayLike(value) && (_.isArray(value) || _.isArguments(value))) {
            // Flatten current level of array or arguments object.
            if (shallow) {
                var j = 0,
                    len = value.length;
                while (j < len) {
                    output[idx++] = value[j++];
                }
            } else {
                flatten(value, shallow, strict, output);
                idx = output.length;
            }
        } else if (!strict) {
            output[idx++] = value;
        }
    }
    return output;
};

// Flatten out an array, either recursively (by default), or just one level.
_.flatten = function (array, shallow) {
    return flatten(array, shallow, false);
};

// Return a version of the array that does not contain the specified value(s).
_.without = restArgs(function (array, otherArrays) {
    return _.difference(array, otherArrays);
});

// Produce a duplicate-free version of the array. If the array has already
// been sorted, you have the option of using a faster algorithm.
// Aliased as `unique`.
_.uniq = _.unique = function (array, isSorted, iteratee, context) {
    if (!_.isBoolean(isSorted)) {
        context = iteratee;
        iteratee = isSorted;
        isSorted = false;
    }
    if (iteratee != null) iteratee = cb(iteratee, context);
    var result = [];
    var seen = [];
    for (var i = 0, length = getLength(array); i < length; i++) {
        var value = array[i],
            computed = iteratee ? iteratee(value, i, array) : value;
        if (isSorted) {
            if (!i || seen !== computed) result.push(value);
            seen = computed;
        } else if (iteratee) {
            if (!_.contains(seen, computed)) {
                seen.push(computed);
                result.push(value);
            }
        } else if (!_.contains(result, value)) {
            result.push(value);
        }
    }
    return result;
};

// Produce an array that contains the union: each distinct element from all of
// the passed-in arrays.
_.union = restArgs(function (arrays) {
    return _.uniq(flatten(arrays, true, true));
});

// Produce an array that contains every item shared between all the
// passed-in arrays.
_.intersection = function (array) {
    var result = [];
    var argsLength = arguments.length;
    for (var i = 0, length = getLength(array); i < length; i++) {
        var item = array[i];
        if (_.contains(result, item)) continue;
        var j;
        for (j = 1; j < argsLength; j++) {
            if (!_.contains(arguments[j], item)) break;
        }
        if (j === argsLength) result.push(item);
    }
    return result;
};

// Take the difference between one array and a number of other arrays.
// Only the elements present in just the first array will remain.
_.difference = restArgs(function (array, rest) {
    rest = flatten(rest, true, true);
    return _.filter(array, function (value) {
        return !_.contains(rest, value);
    });
});

// Complement of _.zip. Unzip accepts an array of arrays and groups
// each array's elements on shared indices.
_.unzip = function (array) {
    var length = array && _.max(array, getLength).length || 0;
    var result = Array(length);

    for (var index = 0; index < length; index++) {
        result[index] = _.pluck(array, index);
    }
    return result;
};

// Zip together multiple lists into a single array -- elements that share
// an index go together.
_.zip = restArgs(_.unzip);

// Converts lists into objects. Pass either a single array of `[key, value]`
// pairs, or two parallel arrays of the same length -- one of keys, and one of
// the corresponding values.
_.object = function (list, values) {
    var result = {};
    for (var i = 0, length = getLength(list); i < length; i++) {
        if (values) {
            result[list[i]] = values[i];
        } else {
            result[list[i][0]] = list[i][1];
        }
    }
    return result;
};

// Generator function to create the findIndex and findLastIndex functions.
var createPredicateIndexFinder = function createPredicateIndexFinder(dir) {
    return function (array, predicate, context) {
        predicate = cb(predicate, context);
        var length = getLength(array);
        var index = dir > 0 ? 0 : length - 1;
        for (; index >= 0 && index < length; index += dir) {
            if (predicate(array[index], index, array)) return index;
        }
        return -1;
    };
};

// Returns the first index on an array-like that passes a predicate test.
_.findIndex = createPredicateIndexFinder(1);
_.findLastIndex = createPredicateIndexFinder(-1);

// Use a comparator function to figure out the smallest index at which
// an object should be inserted so as to maintain order. Uses binary search.
_.sortedIndex = function (array, obj, iteratee, context) {
    iteratee = cb(iteratee, context, 1);
    var value = iteratee(obj);
    var low = 0,
        high = getLength(array);
    while (low < high) {
        var mid = Math.floor((low + high) / 2);
        if (iteratee(array[mid]) < value) low = mid + 1;else high = mid;
    }
    return low;
};

// Generator function to create the indexOf and lastIndexOf functions.
var createIndexFinder = function createIndexFinder(dir, predicateFind, sortedIndex) {
    return function (array, item, idx) {
        var i = 0,
            length = getLength(array);
        if (typeof idx == 'number') {
            if (dir > 0) {
                i = idx >= 0 ? idx : Math.max(idx + length, i);
            } else {
                length = idx >= 0 ? Math.min(idx + 1, length) : idx + length + 1;
            }
        } else if (sortedIndex && idx && length) {
            idx = sortedIndex(array, item);
            return array[idx] === item ? idx : -1;
        }
        if (item !== item) {
            idx = predicateFind(slice.call(array, i, length), _.isNaN);
            return idx >= 0 ? idx + i : -1;
        }
        for (idx = dir > 0 ? i : length - 1; idx >= 0 && idx < length; idx += dir) {
            if (array[idx] === item) return idx;
        }
        return -1;
    };
};

// Return the position of the first occurrence of an item in an array,
// or -1 if the item is not included in the array.
// If the array is large and already in sort order, pass `true`
// for **isSorted** to use binary search.
_.indexOf = createIndexFinder(1, _.findIndex, _.sortedIndex);
_.lastIndexOf = createIndexFinder(-1, _.findLastIndex);

// Generate an integer Array containing an arithmetic progression. A port of
// the native Python `range()` function. See
// [the Python documentation](http://docs.python.org/library/functions.html#range).
_.range = function (start, stop, step) {
    if (stop == null) {
        stop = start || 0;
        start = 0;
    }
    if (!step) {
        step = stop < start ? -1 : 1;
    }

    var length = Math.max(Math.ceil((stop - start) / step), 0);
    var range = Array(length);

    for (var idx = 0; idx < length; idx++, start += step) {
        range[idx] = start;
    }

    return range;
};

// Split an **array** into several arrays containing **count** or less elements
// of initial array.
_.chunk = function (array, count) {
    if (count == null || count < 1) return [];

    var result = [];
    var i = 0,
        length = array.length;
    while (i < length) {
        result.push(slice.call(array, i, i += count));
    }
    return result;
};

// Function (ahem) Functions
// ------------------
// Determines whether to execute a function as a constructor
// or a normal function with the provided arguments.
var executeBound = function executeBound(sourceFunc, boundFunc, context, callingContext, args) {
    if (!(callingContext instanceof boundFunc)) return sourceFunc.apply(context, args);
    var self = baseCreate(sourceFunc.prototype);
    var result = sourceFunc.apply(self, args);
    if (_.isObject(result)) return result;
    return self;
};

// Create a function bound to a given object (assigning `this`, and arguments,
// optionally). Delegates to **ECMAScript 5**'s native `Function.bind` if
// available.
_.bind = restArgs(function (func, context, args) {
    if (!_.isFunction(func)) throw new TypeError('Bind must be called on a function');
    var bound = restArgs(function (callArgs) {
        return executeBound(func, bound, context, this, args.concat(callArgs));
    });
    return bound;
});

// Partially apply a function by creating a version that has had some of its
// arguments pre-filled, without changing its dynamic `this` context. _ acts
// as a placeholder by default, allowing any combination of arguments to be
// pre-filled. Set `_.partial.placeholder` for a custom placeholder argument.
_.partial = restArgs(function (func, boundArgs) {
    var placeholder = _.partial.placeholder;
    var bound = function bound() {
        var position = 0,
            length = boundArgs.length;
        var args = Array(length);
        for (var i = 0; i < length; i++) {
            args[i] = boundArgs[i] === placeholder ? arguments[position++] : boundArgs[i];
        }
        while (position < arguments.length) {
            args.push(arguments[position++]);
        }return executeBound(func, bound, this, this, args);
    };
    return bound;
});

_.partial.placeholder = _;

// Bind a number of an object's methods to that object. Remaining arguments
// are the method names to be bound. Useful for ensuring that all callbacks
// defined on an object belong to it.
_.bindAll = restArgs(function (obj, keys) {
    keys = flatten(keys, false, false);
    var index = keys.length;
    if (index < 1) throw new Error('bindAll must be passed function names');
    while (index--) {
        var key = keys[index];
        obj[key] = _.bind(obj[key], obj);
    }
});

// Memoize an expensive function by storing its results.
_.memoize = function (func, hasher) {
    var memoize = function memoize(key) {
        var cache = memoize.cache;
        var address = '' + (hasher ? hasher.apply(this, arguments) : key);
        if (!_.has(cache, address)) cache[address] = func.apply(this, arguments);
        return cache[address];
    };
    memoize.cache = {};
    return memoize;
};

// Delays a function for the given number of milliseconds, and then calls
// it with the arguments supplied.
_.delay = restArgs(function (func, wait, args) {
    return setTimeout(function () {
        return func.apply(null, args);
    }, wait);
});

// Defers a function, scheduling it to run after the current call stack has
// cleared.
_.defer = _.partial(_.delay, _, 1);

// Returns a function, that, when invoked, will only be triggered at most once
// during a given window of time. Normally, the throttled function will run
// as much as it can, without ever going more than once per `wait` duration;
// but if you'd like to disable the execution on the leading edge, pass
// `{leading: false}`. To disable execution on the trailing edge, ditto.
_.throttle = function (func, wait, options) {
    var timeout, context, args, result;
    var previous = 0;
    if (!options) options = {};

    var later = function later() {
        previous = options.leading === false ? 0 : _.now();
        timeout = null;
        result = func.apply(context, args);
        if (!timeout) context = args = null;
    };

    var throttled = function throttled() {
        var now = _.now();
        if (!previous && options.leading === false) previous = now;
        var remaining = wait - (now - previous);
        context = this;
        args = arguments;
        if (remaining <= 0 || remaining > wait) {
            if (timeout) {
                clearTimeout(timeout);
                timeout = null;
            }
            previous = now;
            result = func.apply(context, args);
            if (!timeout) context = args = null;
        } else if (!timeout && options.trailing !== false) {
            timeout = setTimeout(later, remaining);
        }
        return result;
    };

    throttled.cancel = function () {
        clearTimeout(timeout);
        previous = 0;
        timeout = context = args = null;
    };

    return throttled;
};

// Returns a function, that, as long as it continues to be invoked, will not
// be triggered. The function will be called after it stops being called for
// N milliseconds. If `immediate` is passed, trigger the function on the
// leading edge, instead of the trailing.
_.debounce = function (func, wait, immediate) {
    var timeout, result;

    var later = function later(context, args) {
        timeout = null;
        if (args) result = func.apply(context, args);
    };

    var debounced = restArgs(function (args) {
        if (timeout) clearTimeout(timeout);
        if (immediate) {
            var callNow = !timeout;
            timeout = setTimeout(later, wait);
            if (callNow) result = func.apply(this, args);
        } else {
            timeout = _.delay(later, wait, this, args);
        }

        return result;
    });

    debounced.cancel = function () {
        clearTimeout(timeout);
        timeout = null;
    };

    return debounced;
};

// Returns the first function passed as an argument to the second,
// allowing you to adjust arguments, run code before and after, and
// conditionally execute the original function.
_.wrap = function (func, wrapper) {
    return _.partial(wrapper, func);
};

// Returns a negated version of the passed-in predicate.
_.negate = function (predicate) {
    return function () {
        return !predicate.apply(this, arguments);
    };
};

// Returns a function that is the composition of a list of functions, each
// consuming the return value of the function that follows.
_.compose = function () {
    var args = arguments;
    var start = args.length - 1;
    return function () {
        var i = start;
        var result = args[start].apply(this, arguments);
        while (i--) {
            result = args[i].call(this, result);
        }return result;
    };
};

// Returns a function that will only be executed on and after the Nth call.
_.after = function (times, func) {
    return function () {
        if (--times < 1) {
            return func.apply(this, arguments);
        }
    };
};

// Returns a function that will only be executed up to (but not including) the Nth call.
_.before = function (times, func) {
    var memo;
    return function () {
        if (--times > 0) {
            memo = func.apply(this, arguments);
        }
        if (times <= 1) func = null;
        return memo;
    };
};

// Returns a function that will be executed at most one time, no matter how
// often you call it. Useful for lazy initialization.
_.once = _.partial(_.before, 2);

_.restArgs = restArgs;

// Object Functions
// ----------------
// Keys in IE < 9 that won't be iterated by `for key in ...` and thus missed.
var hasEnumBug = !{
    toString: null
}.propertyIsEnumerable('toString');
var nonEnumerableProps = ['valueOf', 'isPrototypeOf', 'toString', 'propertyIsEnumerable', 'hasOwnProperty', 'toLocaleString'];

var collectNonEnumProps = function collectNonEnumProps(obj, keys) {
    var nonEnumIdx = nonEnumerableProps.length;
    var constructor = obj.constructor;
    var proto = _.isFunction(constructor) && constructor.prototype || ObjProto;

    // Constructor is a special case.
    var prop = 'constructor';
    if (_.has(obj, prop) && !_.contains(keys, prop)) keys.push(prop);

    while (nonEnumIdx--) {
        prop = nonEnumerableProps[nonEnumIdx];
        if (prop in obj && obj[prop] !== proto[prop] && !_.contains(keys, prop)) {
            keys.push(prop);
        }
    }
};

// Retrieve the names of an object's own properties.
// Delegates to **ECMAScript 5**'s native `Object.keys`.
_.keys = function (obj) {
    if (!_.isObject(obj)) return [];
    if (nativeKeys) return nativeKeys(obj);
    var keys = [];
    for (var key in obj) {
        if (_.has(obj, key)) keys.push(key);
    } // Ahem, IE < 9.
    if (hasEnumBug) collectNonEnumProps(obj, keys);
    return keys;
};

// Retrieve all the property names of an object.
_.allKeys = function (obj) {
    if (!_.isObject(obj)) return [];
    var keys = [];
    for (var key in obj) {
        keys.push(key);
    } // Ahem, IE < 9.
    if (hasEnumBug) collectNonEnumProps(obj, keys);
    return keys;
};

// Retrieve the values of an object's properties.
_.values = function (obj) {
    var keys = _.keys(obj);
    var length = keys.length;
    var values = Array(length);
    for (var i = 0; i < length; i++) {
        values[i] = obj[keys[i]];
    }
    return values;
};

// Returns the results of applying the iteratee to each element of the object.
// In contrast to _.map it returns an object.
_.mapObject = function (obj, iteratee, context) {
    iteratee = cb(iteratee, context);
    var keys = _.keys(obj),
        length = keys.length,
        results = {};
    for (var index = 0; index < length; index++) {
        var currentKey = keys[index];
        results[currentKey] = iteratee(obj[currentKey], currentKey, obj);
    }
    return results;
};

// Convert an object into a list of `[key, value]` pairs.
_.pairs = function (obj) {
    var keys = _.keys(obj);
    var length = keys.length;
    var pairs = Array(length);
    for (var i = 0; i < length; i++) {
        pairs[i] = [keys[i], obj[keys[i]]];
    }
    return pairs;
};

// Invert the keys and values of an object. The values must be serializable.
_.invert = function (obj) {
    var result = {};
    var keys = _.keys(obj);
    for (var i = 0, length = keys.length; i < length; i++) {
        result[obj[keys[i]]] = keys[i];
    }
    return result;
};

// Return a sorted list of the function names available on the object.
// Aliased as `methods`.
_.functions = _.methods = function (obj) {
    var names = [];
    for (var key in obj) {
        if (_.isFunction(obj[key])) names.push(key);
    }
    return names.sort();
};

// An internal function for creating assigner functions.
var createAssigner = function createAssigner(keysFunc, defaults) {
    return function (obj) {
        var length = arguments.length;
        if (defaults) obj = Object(obj);
        if (length < 2 || obj == null) return obj;
        for (var index = 1; index < length; index++) {
            var source = arguments[index],
                keys = keysFunc(source),
                l = keys.length;
            for (var i = 0; i < l; i++) {
                var key = keys[i];
                if (!defaults || obj[key] === void 0) obj[key] = source[key];
            }
        }
        return obj;
    };
};

// Extend a given object with all the properties in passed-in object(s).
_.extend = createAssigner(_.allKeys);

// Assigns a given object with all the own properties in the passed-in object(s).
// (https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object/assign)
_.extendOwn = _.assign = createAssigner(_.keys);

// Returns the first key on an object that passes a predicate test.
_.findKey = function (obj, predicate, context) {
    predicate = cb(predicate, context);
    var keys = _.keys(obj),
        key;
    for (var i = 0, length = keys.length; i < length; i++) {
        key = keys[i];
        if (predicate(obj[key], key, obj)) return key;
    }
};

// Internal pick helper function to determine if `obj` has key `key`.
var keyInObj = function keyInObj(value, key, obj) {
    return key in obj;
};

// Return a copy of the object only containing the whitelisted properties.
_.pick = restArgs(function (obj, keys) {
    var result = {},
        iteratee = keys[0];
    if (obj == null) return result;
    if (_.isFunction(iteratee)) {
        if (keys.length > 1) iteratee = optimizeCb(iteratee, keys[1]);
        keys = _.allKeys(obj);
    } else {
        iteratee = keyInObj;
        keys = flatten(keys, false, false);
        obj = Object(obj);
    }
    for (var i = 0, length = keys.length; i < length; i++) {
        var key = keys[i];
        var value = obj[key];
        if (iteratee(value, key, obj)) result[key] = value;
    }
    return result;
});

// Return a copy of the object without the blacklisted properties.
_.omit = restArgs(function (obj, keys) {
    var iteratee = keys[0],
        context;
    if (_.isFunction(iteratee)) {
        iteratee = _.negate(iteratee);
        if (keys.length > 1) context = keys[1];
    } else {
        keys = _.map(flatten(keys, false, false), String);
        iteratee = function iteratee(value, key) {
            return !_.contains(keys, key);
        };
    }
    return _.pick(obj, iteratee, context);
});

// Fill in a given object with default properties.
_.defaults = createAssigner(_.allKeys, true);

// Creates an object that inherits from the given prototype object.
// If additional properties are provided then they will be added to the
// created object.
_.create = function (prototype, props) {
    var result = baseCreate(prototype);
    if (props) _.extendOwn(result, props);
    return result;
};

// Create a (shallow-cloned) duplicate of an object.
_.clone = function (obj) {
    if (!_.isObject(obj)) return obj;
    return _.isArray(obj) ? obj.slice() : _.extend({}, obj);
};

// Invokes interceptor with the obj, and then returns obj.
// The primary purpose of this method is to "tap into" a method chain, in
// order to perform operations on intermediate results within the chain.
_.tap = function (obj, interceptor) {
    interceptor(obj);
    return obj;
};

// Returns whether an object has a given set of `key:value` pairs.
_.isMatch = function (object, attrs) {
    var keys = _.keys(attrs),
        length = keys.length;
    if (object == null) return !length;
    var obj = Object(object);
    for (var i = 0; i < length; i++) {
        var key = keys[i];
        if (attrs[key] !== obj[key] || !(key in obj)) return false;
    }
    return true;
};

// Internal recursive comparison function for `isEqual`.
var eq, deepEq;
eq = function eq(a, b, aStack, bStack) {
    // Identical objects are equal. `0 === -0`, but they aren't identical.
    // See the [Harmony `egal` proposal](http://wiki.ecmascript.org/doku.php?id=harmony:egal).
    if (a === b) return a !== 0 || 1 / a === 1 / b;
    // A strict comparison is necessary because `null == undefined`.
    if (a == null || b == null) return a === b;
    // `NaN`s are equivalent, but non-reflexive.
    if (a !== a) return b !== b;
    // Exhaust primitive checks
    var type = typeof a === 'undefined' ? 'undefined' : _typeof(a);
    if (type !== 'function' && type !== 'object' && (typeof b === 'undefined' ? 'undefined' : _typeof(b)) != 'object') return false;
    return deepEq(a, b, aStack, bStack);
};

// Internal recursive comparison function for `isEqual`.
deepEq = function deepEq(a, b, aStack, bStack) {
    // Unwrap any wrapped objects.
    if (a instanceof _) a = a._wrapped;
    if (b instanceof _) b = b._wrapped;
    // Compare `[[Class]]` names.
    var className = toString.call(a);
    if (className !== toString.call(b)) return false;
    switch (className) {
        // Strings, numbers, regular expressions, dates, and booleans are compared by value.
        case '[object RegExp]':
        // RegExps are coerced to strings for comparison (Note: '' + /a/i === '/a/i')
        case '[object String]':
            // Primitives and their corresponding object wrappers are equivalent; thus, `"5"` is
            // equivalent to `new String("5")`.
            return '' + a === '' + b;
        case '[object Number]':
            // `NaN`s are equivalent, but non-reflexive.
            // Object(NaN) is equivalent to NaN.
            if (+a !== +a) return +b !== +b;
            // An `egal` comparison is performed for other numeric values.
            return +a === 0 ? 1 / +a === 1 / b : +a === +b;
        case '[object Date]':
        case '[object Boolean]':
            // Coerce dates and booleans to numeric primitive values. Dates are compared by their
            // millisecond representations. Note that invalid dates with millisecond representations
            // of `NaN` are not equivalent.
            return +a === +b;
        case '[object Symbol]':
            return SymbolProto.valueOf.call(a) === SymbolProto.valueOf.call(b);
    }

    var areArrays = className === '[object Array]';
    if (!areArrays) {
        if ((typeof a === 'undefined' ? 'undefined' : _typeof(a)) != 'object' || (typeof b === 'undefined' ? 'undefined' : _typeof(b)) != 'object') return false;

        // Objects with different constructors are not equivalent, but `Object`s or `Array`s
        // from different frames are.
        var aCtor = a.constructor,
            bCtor = b.constructor;
        if (aCtor !== bCtor && !(_.isFunction(aCtor) && aCtor instanceof aCtor && _.isFunction(bCtor) && bCtor instanceof bCtor) && 'constructor' in a && 'constructor' in b) {
            return false;
        }
    }
    // Assume equality for cyclic structures. The algorithm for detecting cyclic
    // structures is adapted from ES 5.1 section 15.12.3, abstract operation `JO`.
    // Initializing stack of traversed objects.
    // It's done here since we only need them for objects and arrays comparison.
    aStack = aStack || [];
    bStack = bStack || [];
    var length = aStack.length;
    while (length--) {
        // Linear search. Performance is inversely proportional to the number of
        // unique nested structures.
        if (aStack[length] === a) return bStack[length] === b;
    }

    // Add the first object to the stack of traversed objects.
    aStack.push(a);
    bStack.push(b);

    // Recursively compare objects and arrays.
    if (areArrays) {
        // Compare array lengths to determine if a deep comparison is necessary.
        length = a.length;
        if (length !== b.length) return false;
        // Deep compare the contents, ignoring non-numeric properties.
        while (length--) {
            if (!eq(a[length], b[length], aStack, bStack)) return false;
        }
    } else {
        // Deep compare objects.
        var keys = _.keys(a),
            key;
        length = keys.length;
        // Ensure that both objects contain the same number of properties before comparing deep equality.
        if (_.keys(b).length !== length) return false;
        while (length--) {
            // Deep compare each member
            key = keys[length];
            if (!(_.has(b, key) && eq(a[key], b[key], aStack, bStack))) return false;
        }
    }
    // Remove the first object from the stack of traversed objects.
    aStack.pop();
    bStack.pop();
    return true;
};

// Perform a deep comparison to check if two objects are equal.
_.isEqual = function (a, b) {
    return eq(a, b);
};

// Is a given array, string, or object empty?
// An "empty" object has no enumerable own-properties.
_.isEmpty = function (obj) {
    if (obj == null) return true;
    if (isArrayLike(obj) && (_.isArray(obj) || _.isString(obj) || _.isArguments(obj))) return obj.length === 0;
    return _.keys(obj).length === 0;
};

// Is a given value a DOM element?
_.isElement = function (obj) {
    return !!(obj && obj.nodeType === 1);
};

// Is a given value an array?
// Delegates to ECMA5's native Array.isArray
_.isArray = nativeIsArray || function (obj) {
    return toString.call(obj) === '[object Array]';
};

// Is a given variable an object?
_.isObject = function (obj) {
    var type = typeof obj === 'undefined' ? 'undefined' : _typeof(obj);
    return type === 'function' || type === 'object' && !!obj;
};

// Add some isType methods: isArguments, isFunction, isString, isNumber, isDate, isRegExp, isError, isMap, isWeakMap, isSet, isWeakSet.
_.each(['Arguments', 'Function', 'String', 'Number', 'Date', 'RegExp', 'Error', 'Symbol', 'Map', 'WeakMap', 'Set', 'WeakSet'], function (name) {
    _['is' + name] = function (obj) {
        return toString.call(obj) === '[object ' + name + ']';
    };
});

// Define a fallback version of the method in browsers (ahem, IE < 9), where
// there isn't any inspectable "Arguments" type.
if (!_.isArguments(arguments)) {
    _.isArguments = function (obj) {
        return _.has(obj, 'callee');
    };
}

// Optimize `isFunction` if appropriate. Work around some typeof bugs in old v8,
// IE 11 (#1621), Safari 8 (#1929), and PhantomJS (#2236).
var nodelist = root.document && root.document.childNodes;
if (typeof / . / != 'function' && (typeof Int8Array === 'undefined' ? 'undefined' : _typeof(Int8Array)) != 'object' && typeof nodelist != 'function') {
    _.isFunction = function (obj) {
        return typeof obj == 'function' || false;
    };
}

// Is a given object a finite number?
_.isFinite = function (obj) {
    return !_.isSymbol(obj) && isFinite(obj) && !isNaN(parseFloat(obj));
};

// Is the given value `NaN`?
_.isNaN = function (obj) {
    return _.isNumber(obj) && isNaN(obj);
};

// Is a given value a boolean?
_.isBoolean = function (obj) {
    return obj === true || obj === false || toString.call(obj) === '[object Boolean]';
};

// Is a given value equal to null?
_.isNull = function (obj) {
    return obj === null;
};

// Is a given variable undefined?
_.isUndefined = function (obj) {
    return obj === void 0;
};

// Shortcut function for checking if an object has a given property directly
// on itself (in other words, not on a prototype).
_.has = function (obj, key) {
    return obj != null && hasOwnProperty.call(obj, key);
};

// Keep the identity function around for default iteratees.
_.identity = function (value) {
    return value;
};

// Predicate-generating functions. Often useful outside of Underscore.
_.constant = function (value) {
    return function () {
        return value;
    };
};

_.noop = function () {};

_.property = property;

// Generates a function for a given object that returns a given property.
_.propertyOf = function (obj) {
    return obj == null ? function () {} : function (key) {
        return obj[key];
    };
};

// Returns a predicate for checking whether an object has a given set of
// `key:value` pairs.
_.matcher = _.matches = function (attrs) {
    attrs = _.extendOwn({}, attrs);
    return function (obj) {
        return _.isMatch(obj, attrs);
    };
};

// Run a function **n** times.
_.times = function (n, iteratee, context) {
    var accum = Array(Math.max(0, n));
    iteratee = optimizeCb(iteratee, context, 1);
    for (var i = 0; i < n; i++) {
        accum[i] = iteratee(i);
    }return accum;
};

// Return a random integer between min and max (inclusive).
_.random = function (min, max) {
    if (max == null) {
        max = min;
        min = 0;
    }
    return min + Math.floor(Math.random() * (max - min + 1));
};

// A (possibly faster) way to get the current timestamp as an integer.
_.now = Date.now || function () {
    return new Date().getTime();
};

// List of HTML entities for escaping.
var escapeMap = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#x27;',
    '`': '&#x60;'
};
var unescapeMap = _.invert(escapeMap);

// Functions for escaping and unescaping strings to/from HTML interpolation.
var createEscaper = function createEscaper(map) {
    var escaper = function escaper(match) {
        return map[match];
    };
    // Regexes for identifying a key that needs to be escaped.
    var source = '(?:' + _.keys(map).join('|') + ')';
    var testRegexp = RegExp(source);
    var replaceRegexp = RegExp(source, 'g');
    return function (string) {
        string = string == null ? '' : '' + string;
        return testRegexp.test(string) ? string.replace(replaceRegexp, escaper) : string;
    };
};
_.escape = createEscaper(escapeMap);
_.unescape = createEscaper(unescapeMap);

// If the value of the named `property` is a function then invoke it with the
// `object` as context; otherwise, return it.
_.result = function (object, prop, fallback) {
    var value = object == null ? void 0 : object[prop];
    if (value === void 0) {
        value = fallback;
    }
    return _.isFunction(value) ? value.call(object) : value;
};

// Generate a unique integer id (unique within the entire client session).
// Useful for temporary DOM ids.
var idCounter = 0;
_.uniqueId = function (prefix) {
    var id = ++idCounter + '';
    return prefix ? prefix + id : id;
};

// By default, Underscore uses ERB-style template delimiters, change the
// following template settings to use alternative delimiters.
_.templateSettings = {
    evaluate: /<%([\s\S]+?)%>/g,
    interpolate: /<%=([\s\S]+?)%>/g,
    escape: /<%-([\s\S]+?)%>/g
};

// When customizing `templateSettings`, if you don't want to define an
// interpolation, evaluation or escaping regex, we need one that is
// guaranteed not to match.
var noMatch = /(.)^/;

// Certain characters need to be escaped so that they can be put into a
// string literal.
var escapes = {
    "'": "'",
    '\\': '\\',
    '\r': 'r',
    '\n': 'n',
    '\u2028': 'u2028',
    '\u2029': 'u2029'
};

var escapeRegExp = /\\|'|\r|\n|\u2028|\u2029/g;

var escapeChar = function escapeChar(match) {
    return '\\' + escapes[match];
};

// JavaScript micro-templating, similar to John Resig's implementation.
// Underscore templating handles arbitrary delimiters, preserves whitespace,
// and correctly escapes quotes within interpolated code.
// NB: `oldSettings` only exists for backwards compatibility.
_.template = function (text, settings, oldSettings) {
    if (!settings && oldSettings) settings = oldSettings;
    settings = _.defaults({}, settings, _.templateSettings);

    // Combine delimiters into one regular expression via alternation.
    var matcher = RegExp([(settings.escape || noMatch).source, (settings.interpolate || noMatch).source, (settings.evaluate || noMatch).source].join('|') + '|$', 'g');

    // Compile the template source, escaping string literals appropriately.
    var index = 0;
    var source = "__p+='";
    text.replace(matcher, function (match, escape, interpolate, evaluate, offset) {
        source += text.slice(index, offset).replace(escapeRegExp, escapeChar);
        index = offset + match.length;

        if (escape) {
            source += "'+\n((__t=(" + escape + "))==null?'':_.escape(__t))+\n'";
        } else if (interpolate) {
            source += "'+\n((__t=(" + interpolate + "))==null?'':__t)+\n'";
        } else if (evaluate) {
            source += "';\n" + evaluate + "\n__p+='";
        }

        // Adobe VMs need the match returned to produce the correct offset.
        return match;
    });
    source += "';\n";

    // If a variable is not specified, place data values in local scope.
    if (!settings.variable) source = 'with(obj||{}){\n' + source + '}\n';

    source = "var __t,__p='',__j=Array.prototype.join," + "print=function(){__p+=__j.call(arguments,'');};\n" + source + 'return __p;\n';

    var render;
    try {
        render = new Function(settings.variable || 'obj', '_', source);
    } catch (e) {
        e.source = source;
        throw e;
    }

    var template = function template(data) {
        return render.call(this, data, _);
    };

    // Provide the compiled source as a convenience for precompilation.
    var argument = settings.variable || 'obj';
    template.source = 'function(' + argument + '){\n' + source + '}';

    return template;
};

// Add a "chain" function. Start chaining a wrapped Underscore object.
_.chain = function (obj) {
    var instance = _(obj);
    instance._chain = true;
    return instance;
};

// OOP
// ---------------
// If Underscore is called as a function, it returns a wrapped object that
// can be used OO-style. This wrapper holds altered versions of all the
// underscore functions. Wrapped objects may be chained.
// Helper function to continue chaining intermediate results.
var chainResult = function chainResult(instance, obj) {
    return instance._chain ? _(obj).chain() : obj;
};

// Add your own custom functions to the Underscore object.
_.mixin = function (obj) {
    _.each(_.functions(obj), function (name) {
        var func = _[name] = obj[name];
        _.prototype[name] = function () {
            var args = [this._wrapped];
            push.apply(args, arguments);
            return chainResult(this, func.apply(_, args));
        };
    });
    return _;
};

// Add all of the Underscore functions to the wrapper object.
_.mixin(_);

// Add all mutator Array functions to the wrapper.
_.each(['pop', 'push', 'reverse', 'shift', 'sort', 'splice', 'unshift'], function (name) {
    var method = ArrayProto[name];
    _.prototype[name] = function () {
        var obj = this._wrapped;
        method.apply(obj, arguments);
        if ((name === 'shift' || name === 'splice') && obj.length === 0) delete obj[0];
        return chainResult(this, obj);
    };
});

// Add all accessor Array functions to the wrapper.
_.each(['concat', 'join', 'slice'], function (name) {
    var method = ArrayProto[name];
    _.prototype[name] = function () {
        return chainResult(this, method.apply(this._wrapped, arguments));
    };
});

// Extracts the result from a wrapped and chained object.
_.prototype.value = function () {
    return this._wrapped;
};

// Provide unwrapping proxy for some methods used in engine operations
// such as arithmetic and JSON stringification.
_.prototype.valueOf = _.prototype.toJSON = _.prototype.value;

_.prototype.toString = function () {
    return String(this._wrapped);
};

// AMD registration happens at the end for compatibility with AMD loaders
// that may not enforce next-turn semantics on modules. Even though general
// practice for AMD registration is to be anonymous, underscore registers
// as a named module because, like jQuery, it is a base library that is
// popular enough to be bundled in a third party lib, but not be part of
// an AMD load request. Those cases could generate an error when an
// anonymous define() is called outside of a loader request.
if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function () {
        return _;
    }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
}

exports.default = _;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _underscore = __webpack_require__(0);

var _underscore2 = _interopRequireDefault(_underscore);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var fbUtils = {};
function getXmlHttp() {
    if (global.XDomainRequest && !/MSIE 1/.test(global.navigator.userAgent)) {
        return new global.XDomainRequest();
    }
    if (global.XMLHttpRequest) {
        return new global.XMLHttpRequest();
    }
}

fbUtils.SPLITTERS = [",", ";", ".", " ", "?", "!", "'", '"', '', String.fromCharCode(0x0A), String.fromCharCode(0x0D), String.fromCharCode(8211), String.fromCharCode(8212), String.fromCharCode(8722), String.fromCharCode(8209), String.fromCharCode(8208)];

fbUtils.getNum = function (pageID) {
    return ('000' + pageID).slice(-Math.max((pageID + '').length, 4));
};

fbUtils.mergeObjects = function (obj1, obj2) {
    var obj3 = {};
    for (var attrname in obj1) {
        if (obj1.hasOwnProperty(attrname)) {
            obj3[attrname] = obj1[attrname];
        }
    }
    for (var attrname in obj2) {
        if (obj2.hasOwnProperty(attrname)) {
            obj3[attrname] = obj2[attrname];
        }
    }
    return obj3;
};

fbUtils.extFormat = function (value) {
    if (_underscore2.default.isEmpty(value)) {
        return "";
    } else {
        return "." + value;
    }
};

fbUtils.getPixelRatio = function () {
    if (typeof global.devicePixelRatio === "undefined") {
        return 1;
    } else {
        return global.devicePixelRatio > 1.3 ? 2 : 1;
    }
};

fbUtils.split = function (string, minWord) {
    var sourceArray = string.split(' '),
        resultArray = [];
    for (var i = 0; i < sourceArray.length; i++) {
        if (sourceArray[i].length >= minWord) {
            resultArray.push(sourceArray[i]);
        }
    }
    return resultArray;
};

fbUtils.isSplitter = function (chr) {
    for (var i = 0; i < this.SPLITTERS.length; i++) {
        if (chr === this.SPLITTERS[i]) {
            return true;
        }
    }
    return false;
};

fbUtils.screening = function (text) {
    var screeningReg = /</ig;
    var screening = function screening() {
        return '&lt;';
    };
    return text.replace(screeningReg, screening);
};

fbUtils.chunk = function (str, n) {
    if (typeof n === 'undefined') {
        n = 2;
    }
    var result = str.match(new RegExp('.{1,' + n + '}', 'g'));
    return result || [];
};

/**
 * Функция достает из url переменные и возвращает их в качестве объекта
 * For Example:
 * {
     *      search:'query'
     * }
 */
fbUtils.parseQuery = function () {
    var result = {};
    if (!_underscore2.default.isUndefined(window) && !_underscore2.default.isUndefined(window.location) && !_underscore2.default.isUndefined(window.location.search)) {
        var search = window.location.search.replace('?', '');
        if (search.length) {
            var sSplit = search.split('&');
            for (var i = 0; i < sSplit.length; i++) {
                var kv = sSplit[i].split('=');
                result[decodeURIComponent(kv[0])] = kv.length > 1 ? decodeURIComponent(kv[1]) : null;
            }
        }
    }
    return result;
};
fbUtils.fitScreenSizes = function (origWidth, origHeight, parentWidth, parentHeight) {
    var screenWidth = parentWidth || global.innerWidth,
        screenHeight = parentHeight || global.innerHeight,
        screenRatio = screenWidth / screenHeight,
        origRatio = origWidth / origHeight,
        resultWidth = screenRatio > origRatio ? origWidth * screenHeight / origHeight : screenWidth,
        resultHeight = screenRatio > origRatio ? screenHeight : origHeight * screenWidth / origWidth;

    return {
        width: resultWidth,
        height: resultHeight,
        paddingTop: (screenHeight - resultHeight) / 2,
        paddingLeft: (screenWidth - resultWidth) / 2
    };
};

fbUtils.fillScreenSizes = function (origWidth, origHeight, parentWidth, parentHeight) {
    var screenWidth = parentWidth || global.innerWidth,
        screenHeight = parentHeight || global.innerHeight,
        screenRatio = screenWidth / screenHeight,
        origRatio = origWidth / origHeight,
        resultWidth = screenRatio > origRatio ? screenWidth : origWidth * screenHeight / origHeight,
        resultHeight = screenRatio > origRatio ? origHeight * screenWidth / origWidth : screenHeight;

    return {
        width: resultWidth,
        height: resultHeight,
        paddingTop: (screenHeight - resultHeight) / 2,
        paddingLeft: (screenWidth - resultWidth) / 2
    };
};

fbUtils._loadExternalUrl = function (url, callback, errback) {
    callback = callback || function () {};
    errback = errback || function () {};

    var xmlhttp = getXmlHttp();

    xmlhttp.open('GET', url, true);
    xmlhttp.onerror = function () {
        console.error("Error loading " + url);
        errback(xmlhttp.status);
    };
    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState === 4) {
            if (xmlhttp.status === 200) {
                callback(xmlhttp);
            } else {
                errback(xmlhttp.status);
            }
        }
    };
    xmlhttp.send(null);
};

fbUtils.loadText = function (url, callback, errback) {
    callback = callback || function () {};
    errback = errback || function () {};

    fbUtils._loadExternalUrl(url, function (xh) {
        callback(xh.responseText);
    }, function (status) {
        errback(status);
    });
};

fbUtils.loadJSON = function (url, callback, errback) {

    callback = callback || function () {};
    errback = errback || function () {};

    fbUtils.loadText(url, function (text) {
        callback(JSON.parse(text));
    }, function (status) {
        errback(status);
    });
};

fbUtils.loadXML = function (url, callback, errback) {
    callback = callback || function () {};
    errback = errback || function () {};

    fbUtils._loadExternalUrl(url, function (xh) {
        callback(xh.response);
    }, errback);
};

fbUtils.loadScript = function (url, callback) {
    callback = callback || function () {};
    var head = global.document.getElementsByTagName("head")[0];
    var script = global.document.createElement('script');
    script.type = 'text/javascript';
    script.src = url;
    head.appendChild(script);
    if (script.readyState) {
        script.onreadystatechange = function () {
            if (script.readyState === "loaded" || script.readyState === "complete") {
                script.onreadystatechange = null;
                callback();
            }
        };
    } else {
        script.onload = function () {
            callback();
        };
    }
};

fbUtils.isPointInsideRect = function (point, rect) {
    if (rect) {
        var x, y;
        if (point.hasOwnProperty('x')) {
            x = point.x;
        }
        if (point.hasOwnProperty('y')) {
            y = point.y;
        }
        if (_underscore2.default.isNumber(x) && _underscore2.default.isNumber(y)) {
            if (x >= rect.left && x <= rect.right && y >= rect.top && y <= rect.bottom) {
                return true;
            }
        }
    }
    return false;
};

fbUtils.localToGlobal = function (localSystem, element) {
    var newElement = {};
    if (localSystem && element.hasOwnProperty('x')) {
        newElement.x = Number(element.x) + Number(localSystem.left);
    }
    if (localSystem && element.hasOwnProperty('y')) {
        newElement.y = Number(element.y) + Number(localSystem.top);
    }
    if (localSystem && element.hasOwnProperty('left')) {
        newElement.left = Number(element.left) + Number(localSystem.left);
    }
    if (localSystem && element.hasOwnProperty('top')) {
        newElement.top = Number(element.top) + Number(localSystem.top);
    }
    return newElement;
};

fbUtils.globalToLocal = function (localSystem, element) {
    var newElement = {};
    if (localSystem && element.hasOwnProperty('x')) {
        newElement.x = Number(element.x) - Number(localSystem.left);
    }
    if (localSystem && element.hasOwnProperty('y')) {
        newElement.y = Number(element.y) - Number(localSystem.top);
    }
    if (localSystem && element.hasOwnProperty('left')) {
        newElement.left = Number(element.left) - Number(localSystem.left);
    }
    if (localSystem && element.hasOwnProperty('top')) {
        newElement.top = Number(element.top) - Number(localSystem.top);
    }
    return newElement;
};

fbUtils.downloadFile = function (url, callback) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.responseType = "arraybuffer";
    // xhr.setRequestHeader('Cache-Control', 'no-cache');
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
            if (callback) {
                callback(xhr.response);
            }
        }
    };
    xhr.send(null);
};

/**
 * Загружает css в document.stylesheet
 * @param url - путь к файлу стилей
 * @param callback - если задана функция, то она вызовется при загрузке
 */
fbUtils.loadCSS = function (url, callback, id) {
    var startOfLoads = global.document.styleSheets.length;
    var loadFileCSS = function loadFileCSS(url) {
        var head = global.document.getElementsByTagName("head")[0];
        var link = global.document.createElement("link");
        link.href = url;
        link.type = "text/css";
        link.rel = "stylesheet";
        if (_underscore2.default.isString(id)) {
            link.id = id;
        }
        if (id && document.getElementById(id)) {
            head.replaceChild(link, document.getElementById(id));
            startOfLoads--;
        } else {
            head.appendChild(link);
        }
    };
    var isOnSheet = function isOnSheet(url) {
        return _underscore2.default.filter(global.document.styleSheets, function (sheet) {
            return _underscore2.default.isString(sheet.href) && sheet.href.indexOf(url) >= 0;
        }).length > 0;
    };

    //Подписка тяжелая, поэтому лучше ей не злоупотреблять, работает, только если прямо указано в параметрах
    if (_underscore2.default.isFunction(callback)) {
        (function () {
            var timer = setInterval(function () {
                if (startOfLoads < global.document.styleSheets.length && isOnSheet(url)) {
                    callback.call();
                    clearInterval(timer);
                }
            }, 20);
        })();
    }
    loadFileCSS(url);
};

/**
 * Преобразует арабские цифры в 10ой системе в римские
 * @param number Арабское число в 10ой системе
 * @returns {*} Возвращает римское представление числа или undefined, если преобразование невозможно
 */
fbUtils.romanize = function (number) {
    var numeral = '';
    var lookup = {
        M: 1000,
        CM: 900,
        D: 500,
        CD: 400,
        C: 100,
        XC: 90,
        L: 50,
        XL: 40,
        X: 10,
        IX: 9,
        V: 5,
        IV: 4,
        I: 1
    };

    var num = parseInt(number, 10);
    if (_underscore2.default.isNaN(num)) {
        return undefined;
    }
    if (num <= 0) {
        return undefined;
    }

    var key;
    for (key in lookup) {
        if (!_underscore2.default.has(lookup, key)) {
            continue;
        }
        while (num >= lookup[key]) {
            numeral += key;
            num -= lookup[key];
        }
    }
    return numeral;
};

/**
 * Преобразует римские цифры в арабские в 10ой системе
 * @param {String} roman Римские число
 * @returns {*}  int представление или undefined, если преобразование невозможно
 */
fbUtils.deromanize = function (roman) {
    var roman = roman.toUpperCase(),
        validator = /^M*(?:D?C{0,3}|C[MD])(?:L?X{0,3}|X[CL])(?:V?I{0,3}|I[XV])$/,
        token = /[MDLV]|C[MD]?|X[CL]?|I[XV]?/g,
        key = { M: 1000, CM: 900, D: 500, CD: 400, C: 100, XC: 90, L: 50, XL: 40, X: 10, IX: 9, V: 5, IV: 4, I: 1 },
        num = 0,
        m;
    if (!(roman && validator.test(roman))) {
        return undefined;
    }
    m = token.exec(roman);
    while (m) {
        num += key[m[0]];
        m = token.exec(roman);
    }
    return num;
};
fbUtils.getBookSizes = function (bookSize, realRect, isZoomed, isWide, isRight) {
    var result = {
        bookSize: bookSize,
        realSize: realRect.hasOwnProperty('width') ? { width: realRect.width, height: realRect.height } : { width: realRect.right - realRect.left, height: realRect.bottom - realRect.top }
    };

    if (isZoomed) {
        result.offset = 0;
        if (isWide) {
            result.realSize.width = result.realSize.width / 2;
        }
    } else {
        result.offset = isWide && isRight ? result.bookSize.width : 0;
    }

    result.scales = { scaleX: result.realSize.width / result.bookSize.width, scaleY: result.realSize.height / result.bookSize.height };
    return result;
};
fbUtils.hasParentClass = function (element, className) {
    var i = element;
    while (i) {
        if (_underscore2.default.isString(i.className) && i.className.indexOf(className) >= 0) {
            return true;
        }
        i = i.parentNode;
    }
    return false;
};
/**
 * Де-экранирует html entities
 *
 * @param encodedString
 */
fbUtils.decodeEntities = function (encodedString) {
    var textArea = document.createElement('textarea');
    textArea.innerHTML = encodedString;
    return textArea.value;
};

/**
 * Удаляет теги script из строки
 *
 * @param string
 * @returns {void|*|XML}
 */
fbUtils.cleanString = function (string) {
    var div = global.document.createElement('div');
    div.appendChild(global.document.createTextNode(string));
    return div.innerHTML;
};

/**
 * Проверяет, является ли строка римским числом
 *
 * @param {String} str - строка на проверку
 * @returns {boolean}
 */
fbUtils.isRoman = function (str) {
    var string = str.toUpperCase(),
        validator = /^M*(?:D?C{0,3}|C[MD])(?:L?X{0,3}|X[CL])(?:V?I{0,3}|I[XV])$/;
    return string && validator.test(string);
};

/**
 * Рендер шаблонов
 * @param el - target
 * @param template - шаблон
 * @param data - данные для подстановки в шаблон
 * @param beforeEl - вставить перед данным элементом
 */
fbUtils.renderTemplate = function (el, template, data, beforeEl) {
    data = data || {};
    var newContent = global.document.createElement('div');
    newContent.innerHTML = template(data);

    while (newContent.firstChild) {
        if (!_underscore2.default.isUndefined(beforeEl)) {
            el.insertBefore(newContent.firstChild, beforeEl);
        } else {
            el.appendChild(newContent.firstChild);
        }
    }
};

fbUtils.onWheel = function (elem, onWheel) {
    if (elem.addEventListener) {
        if ('onwheel' in document) {
            // IE9+, FF17+, Ch31+
            elem.addEventListener("wheel", onWheel);
        } else if ('onmousewheel' in document) {
            // устаревший вариант события
            elem.addEventListener("mousewheel", onWheel);
        } else {
            // Firefox < 17
            elem.addEventListener("MozMousePixelScroll", onWheel);
        }
    } else {
        // IE8-
        elem.attachEvent("onmousewheel", onWheel);
    }
};

fbUtils.removeOnWheel = function (elem, onWheel) {
    if (elem.removeEventListener) {
        if ('onwheel' in document) {
            // IE9+, FF17+, Ch31+
            elem.removeEventListener("wheel", onWheel);
        } else if ('onmousewheel' in document) {
            // устаревший вариант события
            elem.removeEventListener("mousewheel", onWheel);
        } else {
            // Firefox < 17
            elem.removeEventListener("MozMousePixelScroll", onWheel);
        }
    } else {
        // IE8-
        elem.detachEvent("onmousewheel", onWheel);
    }
};

// Reasonable defaults
var PIXEL_STEP = 10;
var LINE_HEIGHT = 40;
var PAGE_HEIGHT = 800;

fbUtils.normalizeWheel = function ( /*object*/event) /*object*/{
    var sX = 0,
        sY = 0,
        // spinX, spinY
    pX = 0,
        pY = 0; // pixelX, pixelY

    // Legacy
    if ('detail' in event) {
        sY = event.detail;
    }
    if ('wheelDelta' in event) {
        sY = -event.wheelDelta / 120;
    }
    if ('wheelDeltaY' in event) {
        sY = -event.wheelDeltaY / 120;
    }
    if ('wheelDeltaX' in event) {
        sX = -event.wheelDeltaX / 120;
    }

    // side scrolling on FF with DOMMouseScroll
    if ('axis' in event && event.axis === event.HORIZONTAL_AXIS) {
        sX = sY;
        sY = 0;
    }

    pX = sX * PIXEL_STEP;
    pY = sY * PIXEL_STEP;

    if ('deltaY' in event) {
        pY = event.deltaY;
    }
    if ('deltaX' in event) {
        pX = event.deltaX;
    }

    if ((pX || pY) && event.deltaMode) {
        if (event.deltaMode === 1) {
            // delta in LINE units
            pX *= LINE_HEIGHT;
            pY *= LINE_HEIGHT;
        } else {
            // delta in PAGE units
            pX *= PAGE_HEIGHT;
            pY *= PAGE_HEIGHT;
        }
    }

    // Fall-back if spin cannot be determined
    if (pX && !sX) {
        sX = pX < 1 ? -1 : 1;
    }
    if (pY && !sY) {
        sY = pY < 1 ? -1 : 1;
    }

    return {
        spinX: sX,
        spinY: sY,
        pixelX: pX,
        pixelY: pY
    };
};

fbUtils.fitRectIntoBounds = function (rect, bounds) {
    var rectRatio = rect.width / rect.height;
    var boundsRatio = bounds.width / bounds.height;

    var newDimensions = {};

    // Rect is more landscape than bounds - fit to width
    if (rectRatio > boundsRatio) {
        newDimensions.width = bounds.width;
        newDimensions.height = rect.height * (bounds.width / rect.width);
    }
    // Rect is more portrait than bounds - fit to height
    else {
            newDimensions.width = rect.width * (bounds.height / rect.height);
            newDimensions.height = bounds.height;
        }

    return newDimensions;
};

/**
 * Составляет путь к ресурсу из нескольких частей
 *
 * На вход принимает неограниченное количество параметров
 *
 * @returns {string}
 */
fbUtils.combinePath = function () {
    var array = _underscore2.default.without(Array.prototype.slice.call(arguments), '');
    if (array.length === 1) {
        return array[0];
    }
    return _underscore2.default.map(array, function (v, i, a) {
        switch (i) {
            case 0:
                return v.replace(/(\/$)/, '');
            case a.length - 1:
                return v.replace(/(^\/)/, '');
            default:
                return v.replace(/(^\/|\/$)/, '');
        }
    }).join('/');
};

/**
 *
 * @param element
 * @param name
 * @param callback
 */
fbUtils.addListener = function (element, name, callback) {
    if (element.addEventListener) {
        element.addEventListener(name, callback);
    } else if (element.attachEvent) {
        //IE8
        element.attachEvent('on' + name, callback);
    }
};

/**
 * метод deepExtend, для глубокого объединения
 * взято отсюда: https://www.npmjs.com/package/deep-extend
 */

function isSpecificValue(val) {
    return val instanceof Date || val instanceof RegExp ? true : false;
}

function cloneSpecificValue(val) {
    if (val instanceof Date) {
        return new Date(val.getTime());
    } else if (val instanceof RegExp) {
        return new RegExp(val);
    } else {
        throw new Error('Unexpected situation');
    }
}

/**
 * Recursive cloning array.
 */
function deepCloneArray(arr) {
    var clone = [];
    arr.forEach(function (item, index) {
        if ((typeof item === "undefined" ? "undefined" : _typeof(item)) === 'object' && item !== null) {
            if (Array.isArray(item)) {
                clone[index] = deepCloneArray(item);
            } else if (isSpecificValue(item)) {
                clone[index] = cloneSpecificValue(item);
            } else {
                clone[index] = fbUtils.deepExtend({}, item);
            }
        } else {
            clone[index] = item;
        }
    });
    return clone;
}

/**
 * Extening object that entered in first argument.
 *
 * Returns extended object or false if have no target object or incorrect type.
 *
 * If you wish to clone source object (without modify it), just use empty new
 * object as first argument, like this:
 *   deepExtend({}, yourObj_1, [yourObj_N]);
 */
fbUtils.deepExtend = function () /*obj_1, [obj_2], [obj_N]*/{
    if (arguments.length < 1 || _typeof(arguments[0]) !== 'object') {
        return false;
    }

    if (arguments.length < 2) {
        return arguments[0];
    }

    var target = arguments[0];

    // convert arguments to array and cut off target object
    var args = Array.prototype.slice.call(arguments, 1);

    var val, src;

    args.forEach(function (obj) {
        // skip argument if it is array or isn't object
        if ((typeof obj === "undefined" ? "undefined" : _typeof(obj)) !== 'object' || Array.isArray(obj)) {
            return;
        }

        Object.keys(obj).forEach(function (key) {
            src = target[key]; // source value
            val = obj[key]; // new value

            // recursion prevention
            if (val === target) {
                return;

                /**
                 * if new value isn't object then just overwrite by new value
                 * instead of extending.
                 */
            } else if ((typeof val === "undefined" ? "undefined" : _typeof(val)) !== 'object' || val === null) {
                target[key] = val;
                return;

                // just clone arrays (and recursive clone objects inside)
            } else if (Array.isArray(val)) {
                target[key] = deepCloneArray(val);
                return;

                // custom cloning and overwrite for specific objects
            } else if (isSpecificValue(val)) {
                target[key] = cloneSpecificValue(val);
                return;

                // overwrite by new value if source isn't object or array
            } else if ((typeof src === "undefined" ? "undefined" : _typeof(src)) !== 'object' || src === null || Array.isArray(src)) {
                target[key] = fbUtils.deepExtend({}, val);
                return;

                // source value and new value is objects both, extending...
            } else {
                target[key] = fbUtils.deepExtend(src, val);
                return;
            }
        });
    });
    return target;
};

/**
 * Function to find free space for square node in rectangle with nodes.
 * @param width
 * @param height
 * @param nodeSize
 * @param occupiedArray - array of nodes [{left: xxx, top: yyy}, ...]
 * @returns {Object} - {left: xxx, top: yyy}
 */
fbUtils.findSpace = function (width, height, nodeSize, occupiedArray) {
    var xPosition = 0,
        yPosition = 0,
        nodeLeft = void 0,
        nodeTop = void 0,
        badPlace = void 0;

    //check array before loop
    for (var i = 0; i < occupiedArray.length; i++) {
        if (typeof occupiedArray[i].left !== 'number' || typeof occupiedArray[i].top !== 'number') {
            return { left: Math.round(width / 2), top: Math.round(nodeSize / 2) };
        }
    }

    do {
        nodeLeft = Math.round(width / 2);
        if (xPosition === 1) {
            nodeLeft = nodeLeft - nodeSize;
        }
        if (xPosition === 2) {
            nodeLeft = nodeLeft + nodeSize;
        }
        nodeTop = Math.round(nodeSize / 2) + nodeSize * yPosition;
        badPlace = false;
        for (var _i = 0; _i < occupiedArray.length; _i++) {
            if (!(nodeLeft >= occupiedArray[_i].left + nodeSize || nodeLeft + nodeSize <= occupiedArray[_i].left || nodeTop >= occupiedArray[_i].top + nodeSize || nodeTop + nodeSize <= occupiedArray[_i].top)) {
                badPlace = true;
                break;
            }
        }
        xPosition++;
        if (xPosition === 3) {
            xPosition = 0;
            yPosition++;
        }
        if (yPosition * nodeSize + nodeSize > height) {
            badPlace = false;
        }
    } while (badPlace);
    return { left: nodeLeft, top: nodeTop };
};

exports.default = fbUtils;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)))

/***/ }),
/* 2 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1,eval)("this");
} catch(e) {
	// This works if the window reference is available
	if(typeof window === "object")
		g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _underscore = __webpack_require__(0);

var _underscore2 = _interopRequireDefault(_underscore);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Роутер публикации. Реализует паттерн Singleton.
 * Проектонезависимая обертка для AbstractAdapter {@see AbstractAdapter}.
 *
 * Отвечает за:
 * 1) Проброс и получение из AbstractAdapter состояния адресной строки бразуера
 * 2) Преобразование относительных путей ресурсов публикации в пути, характерные соответствующему проекту. Это
 *    сделано для независимости кода публикации от реализации хранилища конкретного проекта.
 * 3) Получение специфичный для проекта ссылок: url вставки, шаринга итд
 *
 * Для все целей используется adapter {@see AbstractAdapter}, который реализуется под каждый конкретный проект.
 *
 * Adapter по умолчанию LocalHashAdapter {@see LocalHashAdapter}
 *
 * Примеры использования:
 * 1) Преобразования путей
 *      FBRouter().translatePath('assets/flash/pages/page0001.jpg');
 * 2) Изменения Адаптера по умолчанию
 *      FBRouter().setAdapter(new MyCustomServiceAdapter());
 * 3) Установление callback на изменение адресной строки:
 *      FBRouter().setCallback(function(info){ console.log(info);});
 *
 * @constructor
 */
var FBRouterConstructor = function () {
    var instance;

    function FBRouter() {
        if (instance) {
            return instance;
        }

        if (this instanceof FBRouter) {
            instance = this;
            this.setCallback(function () {});
        } else {
            return new FBRouter();
        }
    }

    /**
     * Устанавливает текущий адаптер
     *
     * @param adapter экземпляр {@see AbstractAdapter}
     */
    FBRouter.prototype.setAdapter = function (adapter) {
        var that = this;
        if (this.adapter) {
            this.adapter.setCallback(null);
            this.adapter = null;
        }

        this.adapter = adapter;
        this.adapter.setCallback(function (info) {
            that.callback(info);
        });
    };

    /**
     * Устанавливает callback на изменение адресной строки
     *
     * @param {function} callback - function(info), где info - экземпляр PathInfo {@see AbstractAdapter#getPathInfo}
     */
    FBRouter.prototype.setCallback = function (callback) {
        this.callback = callback;
    };

    /**
     * Возвращает PathInfo {@see AbstractAdapter#getPathInfo} для текущего состояния адресной строки
     *
     * @returns {null|object} PathInfo {@see AbstractAdapter#getPathInfo} в случае наличия корректных данных в адресной строке,
     *                        null в любом другом случае
     */
    FBRouter.prototype.getPathInfo = function () {
        return this.adapter.getPathInfo();
    };

    /**
     * Изменяет состояние адресной строки
     *
     * @param info Объект PathInfo {@see AbstractAdapter#getPathInfo}
     */
    FBRouter.prototype.setPath = function (info) {
        this.adapter.setPath(info);
    };

    /**
     * Получает url для шаринга публикации
     *
     * @param {boolean} withPages При true возвращается url с информацией о текущем состоянии из адресной строки,
     *                            при false - начальный url публикации (без указания состояния)
     * @returns {string}
     */
    FBRouter.prototype.getShareUrl = function (withPages, utm_source, forceHash) {
        return this.adapter.getShareUrl(withPages, utm_source, forceHash);
    };

    /**
     * Получает url для embed публикации
     *
     * @param {string} embedType Тип еmbed
     * @returns {string}
     */
    FBRouter.prototype.getEmbedUrl = function (embedType) {
        return this.adapter.getEmbedUrl(embedType);
    };

    /**
     * Преобразует относительные пути публикации в пути для кокретного проекта
     *
     * @param {Array|string} urls - Массив или один url для преобразования
     * @returns {Array|string}
     */
    FBRouter.prototype.translatePath = function (urls) {
        var that = this;
        if (_underscore2.default.isString(urls)) {
            urls = [urls];
        }

        var result = _underscore2.default.chain(urls).flatten().map(function (url) {
            return that.adapter.translatePath(url);
        }).value();

        if (result.length === 1) {
            return result[0];
        }
        return result;
    };

    FBRouter.prototype.getEmbedPrefix = function () {
        return this.adapter.getEmbedPrefix();
    };

    FBRouter.prototype.getCrossOrigin = function () {
        return this.adapter.getCrossOrigin();
    };

    return FBRouter;
}();

exports.default = FBRouterConstructor;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _fbUtils = __webpack_require__(1);

var _fbUtils2 = _interopRequireDefault(_fbUtils);

var _underscore = __webpack_require__(0);

var _underscore2 = _interopRequireDefault(_underscore);

var _pageTable = __webpack_require__(5);

var _pageTable2 = _interopRequireDefault(_pageTable);

var _property = __webpack_require__(7);

var _property2 = _interopRequireDefault(_property);

var _fbRouter = __webpack_require__(3);

var _fbRouter2 = _interopRequireDefault(_fbRouter);

var _dot = __webpack_require__(9);

var _dot2 = _interopRequireDefault(_dot);

var _pager = __webpack_require__(10);

var _pager2 = _interopRequireDefault(_pager);

var _workspace = __webpack_require__(11);

var _workspace2 = _interopRequireDefault(_workspace);

var _locale = __webpack_require__(12);

var _locale2 = _interopRequireDefault(_locale);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var LibraryManager = window.FBPublication.LibraryManager;
'use strict';

function FBPublicationVersion(options) {
    var FBInit = global.FBPublication.Initial = global.FBPublication.Initial || {};
    FBInit.detector = options.userAgentInfo;
    FBInit.config = FBInit.config || {};
    var extensions = options.extensions;

    var adapter = FBInit.config.adapter = options.adapter;
    //Добавляю / в конец если его нет
    adapter.baseUrl += adapter.baseUrl[adapter.baseUrl.length - 1] === '/' ? '' : '/';

    (0, _fbRouter2.default)().setAdapter(adapter);

    function BasicPage() {

        function getCookie(name) {
            var matches = global.document.cookie.match(new RegExp("(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"));
            return matches ? decodeURIComponent(matches[1]) : undefined;
        }

        this.publisher = {};
        this.publisher.isOn = typeof getCookie("publisher") !== 'undefined';

        if (typeof this.currentZoom === 'undefined') {
            this.currentZoom = 1;
        }

        this.pageContainer = document.getElementById('pageContainer');
        this.pageRect = this._getBoundingClientRect(this.pageContainer);

        this.mobileMenu = 'close';

        this.lastFontSize = 0;

        this.offset = {
            right: 0.05,
            left: 0.05,
            top: 0.05,
            bottom: 0.05
        };

        this.videoFrame = false;
        this.galleryFrame = false;

        this.currentWindowWidth = this._getWindowWidth();
        this.currentWindowHeight = this._getWindowHeight();

        this._setSizes();

        this._parseVideos();
        this._parseImages();
        var that = this;

        this._addEvent(global, 'resize', function () {

            if (FBInit.detector.device.desktop) {
                that._setSizes.call(that);
            } else {
                //аналог orientationChange
                //сделано для того что бы:
                //1. поддержать старые телефоны
                //2. в андроидах orientationChange изменения размеров, из-за чего невозможно проверить размеры окна по событию.

                if (that.currentWindowWidth < that.currentWindowHeight && that._getWindowWidth.call(that) > that._getWindowHeight.call(that) || that.currentWindowWidth > that.currentWindowHeight && that._getWindowWidth.call(that) < that._getWindowHeight.call(that)) {
                    that._setSizes.call(that);
                }

                that.currentWindowWidth = that._getWindowWidth.call(that);
                that.currentWindowHeight = that._getWindowHeight.call(that);
            }
        });

        this._zoomButtons();
        this._socialButtons();

        this._mobileMenu();

        if (FBInit.detector.os.mac && document.getElementById('downloadWindows')) {
            document.getElementById('downloadWindows').parentNode.removeChild(document.getElementById('downloadWindows'));
        } else if (FBInit.detector.os.win && document.getElementById('downloadMac')) {
            document.getElementById('downloadMac').parentNode.removeChild(document.getElementById('downloadMac'));
        } else if (FBInit.detector.os.linux) {
            if (document.getElementById('downloadWindows')) {
                document.getElementById('downloadWindows').parentNode.removeChild(document.getElementById('downloadWindows'));
            }
            if (document.getElementById('downloadMac')) {
                document.getElementById('downloadMac').parentNode.removeChild(document.getElementById('downloadMac'));
            }
        }
        this.queryString = function () {
            // This function is anonymous, is executed immediately and
            // the return value is assigned to QueryString!
            var query_string = {};
            var query = global.location.search.substring(1);
            if (query === "") return query_string;
            var vars = query.split("&");
            for (var i = 0; i < vars.length; i++) {
                if (vars[i] === "") continue;
                var pair = vars[i].split("=");
                // If first entry with this name
                if (typeof query_string[pair[0]] === "undefined") {
                    query_string[pair[0]] = pair[1];
                    // If second entry with this name
                } else if (typeof query_string[pair[0]] === "string") {
                    var arr = [query_string[pair[0]], pair[1]];
                    query_string[pair[0]] = arr;
                    // If third or later entry with this name
                } else {
                    query_string[pair[0]].push(pair[1]);
                }
            }
            return query_string;
        }();

        if (this.queryString.v === 'basic') {
            var urls = this._getElementsByClass('internalLink');

            for (var i = 0, l = urls.length; i < l; i++) {
                var currentUrl = urls[i];
                currentUrl.href = currentUrl.href + '?v=basic';
            }
        }
    }

    BasicPage.prototype._mobileMenu = function () {
        if (!document.getElementById('mobileMenuButton')) {
            return;
        }

        var that = this;

        if ('ontouchstart' in document.documentElement && !(FBInit.detector.os.android && !FBInit.detector.browser.chrome && !FBInit.detector.browser.opera && !FBInit.detector.browser.firefox)) {

            document.getElementById('mobileMenuButton').addEventListener('touchstart', function (event) {
                event.preventDefault();
                event.stopPropagation();
            });

            document.getElementById('mobileMenuButton').addEventListener('touchend', function (event) {
                event.stopPropagation();
                event.preventDefault();

                if (that.mobileMenu === 'close') {
                    that._mobileMenuOpen.call(that);
                } else {
                    that._mobileMenuClose.call(that);
                }
            });

            document.getElementById('mainFrame').addEventListener('touchend', function () {
                event.stopPropagation();

                //event.preventDefault();
                if (that.mobileMenu === 'close') {
                    return;
                }
                that._mobileMenuClose.call(that);
            });
        } else {

            this._addEvent(document.getElementById('mobileMenuButton'), 'click', function () {
                event.stopPropagation();
                event.preventDefault();

                if (that.mobileMenu === 'close') {
                    that._mobileMenuOpen.call(that);
                } else {
                    that._mobileMenuClose.call(that);
                }
            });

            this._addEvent(document.getElementById('mainFrame'), 'click', function () {

                if (that.mobileMenu === 'close') {
                    return;
                }
                that._mobileMenuClose.call(that);
            });
        }
    };

    BasicPage.prototype._mobileMenuOpen = function () {
        document.getElementById('mainFrame').className = 'mainFrame openMenu';
        this.mobileMenu = 'open';
    };

    BasicPage.prototype._mobileMenuClose = function () {
        document.getElementById('mainFrame').className = 'mainFrame closeMenu';
        this.mobileMenu = 'close';
    };

    BasicPage.prototype._socialButtons = function (url) {
        var filesFolder = global.FILES_FOLDER || "files";
        var mainPage = global.MAIN_PAGE || "index.html";

        if (!document.getElementById('facebookShare')) {
            return;
        }

        if (typeof url === 'undefined') {
            if (!new RegExp('\/javascript:|{|}|;|%7B|%7D|%3B\/', 'i').test(global.location.href)) {
                url = global.location.href;
                var rexp = new RegExp('\/' + filesFolder + '\/.*', 'i');
                url = url.replace(rexp, '/' + mainPage);
            }
        }

        url = encodeURIComponent(url);
        var publicationName = encodeURIComponent(FBInit.TITLE);

        document.getElementById('facebookShare').setAttribute('href', '//m.facebook.com/sharer.php?u=' + url);
        document.getElementById('twitterShare').setAttribute('href', '//twitter.com/intent/tweet?text=' + publicationName + '&url=' + url);
        document.getElementById('linkedinShare').setAttribute('href', '//www.linkedin.com/shareArticle?mini=true&url=' + url + '&title=' + publicationName + '&summary=' + publicationName + '&source=' + url);
        document.getElementById('tumblrShare').setAttribute('href', '//www.tumblr.com/share/link?url=' + url + '&name=' + publicationName);
        document.getElementById('googleShare').setAttribute('href', '//plus.google.com/share?url=' + url);
        document.getElementById('mailShare').setAttribute('href', 'mailto:?subject=' + publicationName + '&body=' + url);
        document.getElementById('vkShare').setAttribute('href', '//vk.com/share.php?url=' + url + '&title=' + publicationName);
    };

    BasicPage.prototype._zoomButtons = function () {
        if (!document.getElementById('zoomIn')) {
            return;
        }

        if ((global.PointerEvent || 'ontouchstart' in global) && !FBInit.detector.device.desktop) {
            document.getElementById('zoomContainer').parentNode.removeChild(document.getElementById('zoomContainer'));
            return;
        }

        var that = this,
            maxZoom = (this._getWindowWidth() - 100) / this._getFitScreenSizes(this.pageRect.width, this.pageRect.height).width;

        function setCookie(name, value, expires, domain, secure) {
            try {
                if (!name || !value) return false;
                var str = name + '=' + encodeURIComponent(value);
                str += '; path=/';
                if (expires) str += '; expires=' + expires.toGMTString();
                if (domain) str += '; domain=' + domain;
                if (secure) str += '; secure';

                document.cookie = str;
                return true;
            } catch (e) {
                console.log(e);
            }
        }
        var d = new Date();
        d.setMonth(d.getMonth() + 6);

        this._addEvent(document.getElementById('zoomIn'), 'click', function () {
            if (that.currentZoom + 0.2 > maxZoom) {
                return;
            }
            that.currentZoom = that.currentZoom + 0.2;
            that._setSizes.call(that);
        });

        this._addEvent(document.getElementById('zoomOut'), 'click', function () {
            if (that.currentZoom === 1) {
                return;
            }
            that.currentZoom = that.currentZoom - 0.2;
            that._setSizes.call(that);
            setCookie('zoom', that.currentZoom, d);
        });
    };

    BasicPage.prototype._getFitScreenSizes = function (origWidth, origHeight, offset) {

        offset = offset || this._getWindowWidth() * (this.offset.top * 2);

        offset = Math.round(offset);

        var screenWidth = this._getWindowWidth(),
            screenHeight = this._getWindowHeight(),
            screenRatio = screenWidth / screenHeight,
            origRatio = origHeight == 0 ? 0 : origWidth / origHeight,
            resultWidth = Math.round(screenRatio > origRatio ? origHeight == 0 ? 0 : origWidth * (screenHeight - offset) / origHeight : screenWidth - offset),
            resultHeight = Math.round(screenRatio > origRatio ? screenHeight - offset : origWidth == 0 ? 0 : origHeight * (screenWidth - offset) / origWidth);

        return {
            width: Math.round(resultWidth),
            height: Math.round(resultHeight)
        };
    };

    BasicPage.prototype._getFitWidthSizes = function (origWidth, origHeight, offset) {

        offset = offset || this._getBoundingClientRect(document.body).width * (this.offset.top * 2);

        offset = Math.round(offset);

        var screenWidth = this._getBoundingClientRect(document.body).width,
            resultWidth = Math.round(screenWidth - offset),
            resultHeight = Math.round(origHeight * (screenWidth - offset) / origWidth);

        return {
            width: Math.round(resultWidth),
            height: Math.round(resultHeight)
        };
    };

    BasicPage.prototype._setSizes = function () {

        var top = 0,
            left = 0;

        if (typeof FBInit.TOC_BOOK_HEIGHT !== 'undefined') {
            this.newRect = FBInit.detector.device.desktop ? this._getFitScreenSizes(this.pageRect.width, FBInit.TOC_BOOK_HEIGHT) : this._getFitWidthSizes(this.pageRect.width, FBInit.TOC_BOOK_HEIGHT);

            this.pageContainer.style['width'] = this.newRect.width * this.currentZoom + 'px';

            top = this._getWindowHeight() > this.pageRect.height * this.currentZoom ? (this._getWindowHeight() - this.pageRect.height * this.currentZoom) / 2 : this._getWindowHeight() * this.offset.top;
            left = this._getWindowWidth() - 100 > this.newRect.width * this.currentZoom ? (this._getWindowWidth() - this.newRect.width * this.currentZoom) / 2 + 'px' : this._getWindowWidth() * this.offset.left + 'px';
        } else {
            this.newRect = FBInit.detector.device.desktop && adapter.getCurrentPage() !== "toc" ? this._getFitScreenSizes(this.pageRect.width, this.pageRect.height) : this._getFitWidthSizes(this.pageRect.width, this.pageRect.height);

            this.pageContainer.style['width'] = this.newRect.width * this.currentZoom + 'px';
            this.pageContainer.style['height'] = this.newRect.height * this.currentZoom + 'px';

            top = this._getWindowHeight() > this.newRect.height * this.currentZoom ? (this._getWindowHeight() - this.newRect.height * this.currentZoom) / 2 : this._getWindowHeight() * this.offset.top;
            left = this._getWindowWidth() - 100 > this.newRect.width * this.currentZoom ? (this._getWindowWidth() - this.newRect.width * this.currentZoom) / 2 + 'px' : this._getWindowWidth() * this.offset.left + 'px';
        }

        this.pageContainer.style['left'] = '0';

        top = top - 45 > 10 ? top - 45 : 10;

        if (!FBInit.detector.device.desktop) {
            top = 20;
        }

        this.pageContainer.style['margin'] = top + 'px 0 0 ' + left;

        var w = this.pageRect.width == 0 ? 0 : this.newRect.width * this.currentZoom * 20 / this.pageRect.width;
    };

    BasicPage.prototype._parseVideos = function () {
        var videoArray = this._getElementsByClass('videoItem'),
            that = this;

        for (var i = 0, l = videoArray.length; i < l; i++) {
            var videoItem = videoArray[i],
                videoInfo = FBInit.videoGUIDs[videoItem.id],
                videoProvider = videoInfo.provider,
                videoID = videoInfo.id,
                autoplay = videoInfo.autoplay;

            (function (videoID, videoProvider) {
                that._addEvent(videoItem, 'click', function () {
                    that._showVideo.call(that, videoID, videoProvider, autoplay);
                });
            })(videoID, videoProvider);
        }
    };

    BasicPage.prototype._sizeVideoIcons = function () {
        var videoArray = this._getElementsByClass('videoItem');

        for (var i = 0, l = videoArray.length; i < l; i++) {
            this._sizeVideoIcon(videoArray[i]);
        }
    };

    BasicPage.prototype._sizeVideoIcon = function (videoItem) {
        var rect = this._getBoundingClientRect(videoItem);
        var icon = this._getElementsByClass("play", videoItem)[0];

        if (icon) {
            var playSize = rect.height > 50 ? rect.height * .35 : rect.height * .8;
            icon.style["width"] = playSize + 'px';
            icon.style["height"] = playSize + 'px';
            icon.style["margin"] = -playSize / 2 + 'px 0 0 ' + -playSize / 2 + 'px';
        }
    };

    BasicPage.prototype._showVideo = function (id, type, autoplay) {
        this.videoFrame = document.createElement('iframe');

        var blackout = document.createElement('div'),
            that = this,
            rect = this._getFitScreenSizes(1600, 900, this._getWindowHeight() / 10);

        blackout.className = 'blackoutVideo';
        document.body.appendChild(blackout);

        this._addEvent(blackout, 'click', function (event) {
            if (event.stopPropagation) {
                event.stopPropagation();
            } else {
                event.returnValue = false;
            }
            that._hideVideo.call(that);
        });

        if (type === 'youtube') {
            this.videoFrame.className = this.videoFrame.className + ' youtube-player';
            this.videoFrame.src = '//www.youtube.com/embed/' + id + '?' + (autoplay ? 'autoplay=1&' : '') + 'html5=1&rel=0';
        } else {
            this.videoFrame.src = "//player.vimeo.com/video/" + id + "?title=0&amp;byline=0&amp;portrait=0&amp;color=da4541";
        }
        if (this.publisher.isOn) {
            this.videoFrame.src += "&publisher=1";
        }

        document.body.appendChild(this.videoFrame);
        this._resizeVideo();

        this._addEvent(global.document, 'keyup', function (event) {
            if (event.stopPropagation) {
                event.stopPropagation();
            } else {
                event.returnValue = false;
            }
            var code = event.keyCode ? event.keyCode : event.which;
            if (code === 27) {
                that._hideVideo.call(that);
            }
        });

        this._addEvent(global, 'resize', function (event) {
            that._resizeVideo();
        });
    };

    BasicPage.prototype._resizeVideo = function () {
        if (!this.videoFrame) {
            return;
        }
        var rect = this._getFitScreenSizes(1600, 900, this._getWindowHeight() / 10);

        this.videoFrame.className = 'videoFrame';
        this.videoFrame.setAttribute('type', 'text/html');
        this.videoFrame.setAttribute('width', rect.width + 'px');
        this.videoFrame.setAttribute('height', rect.height + 'px');
        this.videoFrame.setAttribute('frameBorder', '0');
        this.videoFrame.style.top = '50%';
        this.videoFrame.style.left = '50%';
        this.videoFrame.style.margin = -rect.height / 2 + 'px 0 0 ' + -rect.width / 2 + 'px';
    };

    BasicPage.prototype._hideVideo = function () {
        var blackoutsArray = this._getElementsByClass('blackoutVideo');

        if (this.videoFrame) {
            this.videoFrame.parentNode.removeChild(this.videoFrame);
        }

        for (var i = 0, l = blackoutsArray.length; i < l; i++) {
            var blackoutEl = blackoutsArray[i];
            blackoutEl.parentNode.removeChild(blackoutEl);
        }
        this.videoFrame = false;
    };

    BasicPage.prototype._parseImages = function () {
        var imageArray = this._getElementsByClass('imageItem'),
            that = this;

        for (var i = 0, l = imageArray.length; i < l; i++) {
            var imageItem = imageArray[i],
                imageId = imageItem.id;

            (function (imageId) {
                that._addEvent(imageItem, 'click', function () {
                    if (FBInit.imagesGUIDs !== 'undefined' && FBInit.imagesGUIDs[imageId]) {
                        that._showGallery.call(that, FBInit.imagesGUIDs[imageId]);
                    }
                });
            })(imageId);
        }
    };

    BasicPage.prototype._showGallery = function (url) {
        options.api.trigger("image", {
            action: 'click',
            url: url
        });
        var blackout = document.createElement('div'),
            that = this;

        blackout.className = 'blackoutGallery';
        document.body.appendChild(blackout);

        this._addEvent(blackout, 'click', function (event) {
            if (event.stopPropagation) {
                event.stopPropagation();
            } else {
                event.returnValue = false;
            }
            that._hideGallery.call(that);
        });

        var preloader = document.createElement("img");
        preloader.className = 'galleryPreloader';
        preloader.setAttribute("src", adapter.translatePath("assets/basic-html/styles/preloader.gif"));
        document.body.appendChild(preloader);

        this.imageContainer = document.createElement('img');
        this.imageContainer.className = 'galleryImage';

        this._addEvent(this.imageContainer, 'load', function () {
            options.api.trigger("image", {
                action: 'loaded',
                url: url
            });
            if (preloader) preloader.parentNode.removeChild(preloader);

            that.imageContainerCloseButton = document.createElement('a');
            that.imageContainerCloseButton.className = 'galleryCloseButton';
            that.imageContainerCloseButton.setAttribute('href', '#');
            document.body.appendChild(that.imageContainerCloseButton);

            that.imageContainerWidth = that.imageContainer.width;
            that.imageContainerHeight = that.imageContainer.height;

            that._resizeImage();

            that._addEvent(that.imageContainerCloseButton, 'click', function (event) {
                if (event.stopPropagation) {
                    event.stopPropagation();
                } else {
                    event.returnValue = false;
                }
                that._hideGallery.call(that);
            });
        });
        this._addEvent(this.imageContainer, 'error', function () {
            if (preloader) preloader.parentNode.removeChild(preloader);
        });

        this.imageContainer.style.top = "-1000%";
        this.imageContainer.style.left = "-1000%";
        this.imageContainer.setAttribute("src", url);
        document.body.appendChild(this.imageContainer);

        this._addEvent(global.document, 'keyup', function (event) {
            if (event.stopPropagation) {
                event.stopPropagation();
            } else {
                event.returnValue = false;
            }

            var code = event.keyCode ? event.keyCode : event.which;
            if (code === 27) {
                that._hideGallery.call(that);
            }
        });

        this._addEvent(global, 'resize', function (event) {
            that._resizeImage();
        });
    };

    BasicPage.prototype._resizeImage = function () {
        if (!this.imageContainer || !this.imageContainerCloseButton) {
            return;
        }

        var borderSize = 6;
        var imgWidth = this.imageContainerWidth;
        var imgHeight = this.imageContainerHeight;

        var paddings = 30 + Math.max(this._getWindowWidth(), this._getWindowHeight()) * 0.1;
        var maxImageWidth = this._getWindowWidth() - paddings;
        var maxImageHeight = this._getWindowHeight() - paddings;

        this.imageContainer.style.backgroundColor = "#FFFFFF";
        if (this.imageContainerWidth > maxImageWidth - 2 * borderSize || this.imageContainerHeight > maxImageHeight - 2 * borderSize) {
            var rect = this._getFitScreenSizes(this.imageContainerWidth, this.imageContainerHeight, paddings);

            this.imageContainer.setAttribute('width', rect.width + 'px');
            this.imageContainer.setAttribute('height', rect.height + 'px');
            this.imageContainer.style.margin = -(rect.height / 2 + borderSize) + 'px 0 0 ' + (-rect.width / 2 - borderSize) + 'px';

            this.imageContainerCloseButton.style.margin = -(rect.height / 2 + borderSize + 15) + 'px 0 0 ' + (rect.width / 2 + borderSize - 15) + 'px';
        } else {

            this.imageContainer.setAttribute('width', imgWidth + 'px');
            this.imageContainer.setAttribute('height', imgHeight + 'px');
            this.imageContainer.style.margin = -(imgHeight / 2 + borderSize) + 'px 0 0 ' + (-imgWidth / 2 - borderSize) + 'px';

            this.imageContainerCloseButton.style.margin = -(imgHeight / 2 + borderSize + 15) + 'px 0 0 ' + (imgWidth / 2 + borderSize - 15) + 'px';
        }

        this.imageContainer.style.borderWidth = borderSize + "px";
        this.imageContainer.style.top = "50%";
        this.imageContainer.style.left = "50%";
    };

    BasicPage.prototype._hideGallery = function () {
        var blackoutsArray = this._getElementsByClass('blackoutGallery');
        var preloadersArray = this._getElementsByClass('galleryPreloader');

        if (this.imageContainer) {
            this.imageContainer.parentNode.removeChild(this.imageContainer);
        }
        if (this.imageContainerCloseButton) {
            this.imageContainerCloseButton.parentNode.removeChild(this.imageContainerCloseButton);
        }

        for (var i = 0, l = blackoutsArray.length; i < l; i++) {
            var blackoutEl = blackoutsArray[i];
            blackoutEl.parentNode.removeChild(blackoutEl);
        }

        for (i = 0, l = preloadersArray.length; i < l; i++) {
            var preloader = preloadersArray[i];
            preloader.parentNode.removeChild(preloader);
        }
        this.imageContainer = false;
        this.imageContainerCloseButton = false;
        this.imageContainerHeight = this.imageContainerWidth = 0;
    };

    BasicPage.prototype._getBoundingClientRect = function (el) {
        var rect = el.getBoundingClientRect();
        return {
            width: rect.width || rect.right - rect.left,
            height: rect.height || rect.bottom - rect.top,
            left: rect.left,
            right: rect.right,
            top: rect.top,
            bottom: rect.bottom
        };
    };

    BasicPage.prototype._getWindowWidth = function () {
        return global.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    };

    BasicPage.prototype._getWindowHeight = function () {
        return global.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
    };

    BasicPage.prototype._getElementsByClass = function (className, parent) {
        if (typeof parent === 'undefined') {
            parent = global.document;
        }
        if (typeof parent.getElementsByClassName === 'function') {
            return parent.getElementsByClassName(className);
        } else {
            var resultArray = [],
                arrayOfElements = parent.getElementsByTagName('*');

            for (var i in arrayOfElements) {
                if (Object.prototype.hasOwnProperty.call(arrayOfElements, i) && _typeof(arrayOfElements[i]) === 'object') {
                    var currClassName = Object.prototype.hasOwnProperty.call(arrayOfElements[i], 'className') ? arrayOfElements[i].className : arrayOfElements[i].getAttribute('className'),
                        arrayOfClasses = currClassName === null ? [] : currClassName.split(' ');

                    if (this._indexOf(arrayOfClasses, className) !== -1) {
                        resultArray.push(arrayOfElements[i]);
                    }
                }
            }
            return resultArray;
        }
    };

    BasicPage.prototype._addEvent = function (el, eveName, callback) {
        if (global.addEventListener) {
            el.addEventListener(eveName, callback, true);
        } else {
            el.attachEvent('on' + eveName, callback);
        }
    };

    BasicPage.prototype._indexOf = function (array, item) {
        if (array == null) return -1;
        var i, l;
        for (i = 0, l = array.length; i < l; i++) {
            if (i in array && array[i] === item) return i;
        }return -1;
    };

    BasicPage.prototype._setFrame = function () {
        if (navigator.userAgent.match(/iPad;.*CPU.*OS 7_\d/i)) {
            document.body.style['height'] = this._getWindowHeight() + 'px';
        }
        global.scrollTo(0, 0);
    };

    global.BasicPage = BasicPage;

    FBInit.loadCSS(adapter.translatePath('static/basic/css/style.css'), 'basic-css');
    if (FBInit.detector && FBInit.detector.device && FBInit.detector.device.mobile) {
        FBInit.loadCSS(adapter.translatePath('static/basic/css/mobile.css'), 'basic-mobile-css');
        global.document.getElementsByTagName("html")[0].setAttribute("class", "isMobile");
    }
    if (adapter.getCurrentPage() === "toc") {
        FBInit.loadCSS(adapter.translatePath('static/basic/css/toc.css'), 'toc-css');
    }
    if (typeof global.innerWidth !== 'undefined') {
        var msViewportStyle = document.createElement("style");
        msViewportStyle.appendChild(document.createTextNode("@-ms-viewport{width:" + (global.innerWidth < 640 ? 640 : global.innerWidth) + "px; zoom: 1;}" + "@-moz-viewport{width:" + (global.innerWidth < 640 ? 640 : global.innerWidth) + "px; zoom: 1;} " + " @-webkit-viewport{width:" + (global.innerWidth < 640 ? 640 : global.innerWidth) + "px; zoom: 1;} " + " @-o-viewport{width:" + (global.innerWidth < 640 ? 640 : global.innerWidth) + "px; zoom: 1;}" + " @viewport{width:" + (global.innerWidth < 640 ? 640 : global.innerWidth) + "px; zoom: 1;}"));
        document.getElementsByTagName("head")[0].appendChild(msViewportStyle);
    }
    var loaders = [{ url: adapter.translatePath('assets/html/workspace.json'), type: "json", name: "workspace" }, { url: adapter.translatePath('assets/common/pager.json'), type: "json", name: "pager" }, { url: adapter.translatePath('skins/current/config.json'), type: "json", name: "skin" }, { url: adapter.translatePath('static/basic/html/page.html'), type: "text", name: "template" }];
    LibraryManager.superLoad(loaders, function (result) {
        var it = {};
        it.initial = FBInit;
        var pagerProperty = _underscore2.default.isObject(extensions) && _underscore2.default.isObject(extensions.pagesProps) ? _fbUtils2.default.deepExtend(result.pager, extensions.pagesProps) : result.pager;
        it.pager = new _property2.default(pagerProperty, _pager2.default);
        var table = it.table = new _pageTable2.default(it.pager);

        var workspaceProperty = _underscore2.default.isObject(extensions) && _underscore2.default.isObject(extensions.workspaceProps) ? _fbUtils2.default.deepExtend(result.workspace, extensions.workspaceProps) : result.workspace;
        it.workspace = new _property2.default(workspaceProperty, _workspace2.default);

        var pagination = it.pagination = { current: {}, before: [], after: [] };
        var radius = 2;
        var currentIndex = -1;
        if (adapter.getCurrentPage() && adapter.getCurrentPage() !== 'toc') {
            var currentId = table.getPageIdByUrlHeader(adapter.getCurrentPage());
            currentIndex = table.getPageIndexById(currentId);
            if (currentIndex >= 0) //иначе это TOC
                {
                    pagination.current.name = table.getPageCaptionById(currentId).toString();
                    pagination.current.urlHeader = adapter.getCurrentPage();
                    var path = adapter.getPath({ page: adapter.getCurrentPage() });
                    pagination.current.url = (path.url ? path.url : adapter.baseUrl) + (path.hash ? "#" + path.hash : "");
                    pagination.current.index = currentIndex;
                    it.pageModel = table.getPageModel(table.getPageIdByIndex(pagination.current.index));
                }
        } else {
            pagination.current.index = -1;
        }
        var lastIndex = table.getPagesCount() - 1;
        var minIndex = Math.max(currentIndex - radius, 0);
        var maxIndex = Math.min(currentIndex + radius, lastIndex);

        function makeLink(index) {
            var link = { index: index };

            var id = table.getPageIdByIndex(index);
            var pageModel = table.getPageModel(id);
            if (pageModel.getProperty('stub')) {
                return;
            }
            var urlHeader = table.getUrlHeaderById(id).toString();
            var path = adapter.getPath({ page: urlHeader });
            link.url = (path.url ? path.url : adapter.baseUrl) + (path.hash ? "#" + path.hash : "");
            link.name = table.getPageCaptionById(id).toString();
            return { link: link, wide: pageModel.getProperty('wide') };
        }

        //предыдущая страница
        var prevDelta = 0;
        if (currentIndex > 0) {
            var link = makeLink(currentIndex - 1);
            if (!link && currentIndex - 1 > 0) {
                link = makeLink(currentIndex - 2);
                prevDelta++;
            }
            if (link.wide) {
                prevDelta++;
            }
            pagination.prev = link.link;
        }

        //следующая страница
        var nextDelta = 0;
        if (currentIndex < lastIndex) {
            var link = makeLink(currentIndex + 1);
            if ((!link || it.pageModel && it.pageModel.getProperty('wide')) && currentIndex + 1 < lastIndex) {
                link = makeLink(currentIndex + 2);
                nextDelta++;
            }
            if (link && link.wide) {
                nextDelta++;
            }
            if (link) {
                pagination.next = link.link;
            }
        }
        for (var i = minIndex; i < currentIndex - 1 - prevDelta; i++) // ссылки до текущей страницы (prev)
        {
            var link = makeLink(i);
            if (link) {
                pagination.before.push(link.link);
            }
        }
        for (var i = currentIndex + 2 + nextDelta; i <= maxIndex; i++) // ссылки после текущей страницы (next)
        {
            var link = makeLink(i);
            if (link) {
                pagination.after.push(link.link);
            }
        }
        pagination.first = makeLink(0).link;
        var link = makeLink(lastIndex);
        if (link) {
            pagination.last = link.link;
        }

        /*var bgImage = result.skin['background-image'];
        if(bgImage && result.skin['background-size'] !== 'auto'){
            var urlArray = /url\((?:'|")((?:\w|\/|\.|-|_)*)(?:'|")\)/g.exec(bgImage);
            if(FBPublication._.isArray(urlArray) && urlArray.length === 2){
                var url = adapter.translatePath(urlArray[1]);
                model.initial.bgImage = url;
            }
        }*/
        FBInit.textColor = "#404045" || FBInit.textColor || result.skin['second-text-color'];

        FBInit.LANGS = result.workspace.locales || _locale2.default.locales;

        if (it.pageModel) {
            var pageWidth = it.pageWidth = it.pageModel.getProperty('width');
            var pageHeight = it.pageHeight = it.pageModel.getProperty('height');
            it.content = [];
            var percentDimension = function percentDimension(currentSize, pageSize) {
                return (currentSize / pageSize * 100).toString(10) + "%";
            };
            var links = it.pageModel.getProperty('links');

            if (links && links.length > 0) {
                for (var i = 0; i < links.length; i++) {
                    var linkProperty = links[i];
                    var url = linkProperty.url,
                        id = linkProperty.id;
                    if (!url && id) {
                        var link = makeLink(table.getPageIndexById(id));
                        url = link.link.url;
                    }
                    var linkModel = {
                        type: "link",
                        url: url,
                        zIndex: linkProperty.zIndex,
                        width: percentDimension(linkProperty.rect[0], pageWidth),
                        height: percentDimension(linkProperty.rect[1], pageHeight),
                        left: percentDimension(linkProperty.rect[2], pageWidth),
                        top: percentDimension(linkProperty.rect[3], pageHeight)
                    };
                    it.content.push(linkModel);
                }
            }
            var images = it.pageModel.getProperty('images');
            FBInit.imagesGUIDs = {};
            if (images && images.length > 0) {
                for (var i = 0; i < images.length; i++) {
                    var imageProperty = images[i];
                    var imageModel = {
                        type: "image",

                        previewUrl: adapter.translatePath('assets/common/pages-content/' + imageProperty.previewUrl),
                        zIndex: imageProperty.zIndex,
                        width: percentDimension(imageProperty.width, pageWidth),
                        height: percentDimension(imageProperty.height, pageHeight),
                        left: percentDimension(imageProperty.x, pageWidth),
                        top: percentDimension(imageProperty.y, pageHeight),
                        guid: "image" + i
                    };
                    FBInit.imagesGUIDs["image" + i] = adapter.translatePath('assets/common/pages-content/' + imageProperty.urls[0]);
                    it.content.push(imageModel);
                }
            }
            var videos = it.pageModel.getProperty('videos');
            FBInit.videoGUIDs = {};
            if (videos && videos.length > 0) {
                var buttonSize = Math.min(pageWidth, pageHeight) / 10;
                for (var i = 0; i < videos.length; i++) {
                    var videoProperty = videos[i];
                    var videoModel = {
                        type: "video",
                        zIndex: videoProperty.zIndex,
                        width: percentDimension(videoProperty.width, pageWidth),
                        height: percentDimension(videoProperty.height, pageHeight),
                        left: percentDimension(videoProperty.x, pageWidth),
                        top: percentDimension(videoProperty.y, pageHeight),
                        guid: "video" + i
                    };
                    var currentButtonSize = Math.min(buttonSize, videoProperty.width / 1.44, videoProperty.height / 1.44);
                    videoModel.playWidth = percentDimension(currentButtonSize, videoProperty.width);
                    videoModel.playHeight = percentDimension(currentButtonSize, videoProperty.height);
                    if (videoProperty.height > videoProperty.width) {
                        videoModel['margin-left'] = percentDimension(currentButtonSize / 2, videoProperty.height);
                        videoModel['margin-top'] = percentDimension(currentButtonSize / 2, videoProperty.height);
                    } else {
                        videoModel['margin-left'] = percentDimension(currentButtonSize / 2, videoProperty.width);
                        videoModel['margin-top'] = percentDimension(currentButtonSize / 2, videoProperty.width);
                    }
                    if (videoProperty.showImage === true) {
                        videoModel.previewUrl = adapter.translatePath('assets/common/pages-content/' + videoProperty.image);
                    }
                    FBInit.videoGUIDs["video" + i] = {
                        id: videoProperty.id,
                        provider: videoProperty.provider,
                        autoplay: videoProperty.autoplay === true
                    };
                    it.content.push(videoModel);
                }
            }
        }
        var path = adapter.getPath({ page: 'toc' });

        it.tocUrl = (path.url ? path.url : adapter.baseUrl) + (path.hash ? "#" + path.hash : "");
        it.tocEnabled = it.workspace.toc && it.workspace.toc.enabled && it.workspace.toc.children && it.workspace.toc.children.length > 0;
        if (!it.pagination.current.url && it.tocEnabled) {
            it.toc = [];
            var parseToc = function parseToc(element, level) {
                if (element.title) {
                    it.toc.push({
                        title: element.title,
                        level: level++,
                        page: element.page
                    });
                }
                if (element.children) {
                    for (var i = 0; i < element.children.length; i++) {
                        var child = element.children[i];
                        parseToc(child, level);
                    }
                }
            };
            parseToc(it.workspace.toc, 0);
        }
        var template = _dot2.default.template(result.template);
        options.container.innerHTML = template(it);
        options.container.style.backgroundColor = "#ecf0f1";
        if (typeof global.BASIC_PAGE === 'undefined') {
            global.BASIC_PAGE = new BasicPage();
        }
        LibraryManager.loadScript(adapter.translatePath('static/basic/js/localizator.js'), function () {}, adapter.getCrossOrigin());
        var state = { version: "basic", locale: FBInit.LANGS[0], leftPageUrl: adapter.getCurrentPage(), rightPageUrl: adapter.getCurrentPage(), isZoomed: true };
        state.isWide = pagination.current.index >= 0 && table && table.model && table.model.pages && table.model.pages[currentId].wide === true;
        state.pageIndex = table.getPageIndexById(currentId);
        function clone(obj) {
            if (null == obj || "object" != (typeof obj === 'undefined' ? 'undefined' : _typeof(obj))) return obj;
            var copy = obj.constructor();
            for (var attr in obj) {
                if (obj.hasOwnProperty(attr)) copy[attr] = obj[attr];
            }
            return copy;
        }
        function getState() {
            return clone(state);
        }
        options.api.addMethod("getState", getState);
        options.api.addMethod("getProperty", function (name) {
            switch (name) {
                case 'pages':
                    return it.pager;
                case 'workspace':
                    return it.workspace;
                default:
                    throw new Error("Publication does not have this property: " + name);
            }
        });
        if (sessionStorage.getItem("fbinited")) {
            if (adapter.getCurrentPage() === "toc") {
                options.api.trigger("window", {
                    action: 'open',
                    component: 'toc'
                });
                sessionStorage.setItem("fbTOC", true);
            } else {
                if (sessionStorage.getItem("fbTOC") === "true") {
                    sessionStorage.setItem("fbTOC", false);
                    options.api.trigger("window", {
                        action: 'close',
                        component: 'toc'
                    });
                }
                options.api.trigger("turned", getState());
            }
        } else {
            sessionStorage.setItem("fbinited", true);
            options.api.trigger("init", getState());
        }
        options.api.trigger("bookStateChanged", getState());

        var downloadPageLink = document.getElementById("downloadPageLink");
        if (downloadPageLink) {
            global.BASIC_PAGE._addEvent(downloadPageLink, 'click', function (event) {
                if (event.stopPropagation) {
                    event.stopPropagation();
                } else {
                    event.returnValue = false;
                }
                options.api.trigger("download", {
                    url: it.workspace.downloads.url,
                    option: 'full'
                });
            });
        }
        var firstPage = document.getElementById("firstPage");
        if (firstPage) {
            global.BASIC_PAGE._addEvent(firstPage, 'click', function (event) {
                if (event.stopPropagation) {
                    event.stopPropagation();
                } else {
                    event.returnValue = false;
                }
                options.api.trigger("goToFirstPage", {
                    pageUrl: it.pagination.current.url
                });
            });
        }
        var lastPage = document.getElementById("lastPage");
        if (lastPage) {
            global.BASIC_PAGE._addEvent(lastPage, 'click', function (event) {
                if (event.stopPropagation) {
                    event.stopPropagation();
                } else {
                    event.returnValue = false;
                }
                options.api.trigger("goToLastPage", {
                    pageUrl: it.pagination.current.url
                });
            });
        }
        if (typeof options.onPublicationLoad === 'function') {
            options.onPublicationLoad(global.BASIC_PAGE);
        }
        if (typeof options.onInit === 'function') {
            options.onInit();
        }
    });
}
window.FBPublicationVersion = FBPublicationVersion;
exports.default = FBPublicationVersion;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)))

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _underscore = __webpack_require__(0);

var _underscore2 = _interopRequireDefault(_underscore);

var _pageModel = __webpack_require__(6);

var _pageModel2 = _interopRequireDefault(_pageModel);

var _fbUtils = __webpack_require__(1);

var _fbUtils2 = _interopRequireDefault(_fbUtils);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 *
 * @param model Данные для построения таблицы страниц
 * @constructor
 */
function PageTable(model) {
    this.model = model;

    /**
     * смещение для римских цифр @see {@link PageTable#getPageCaptionById}
     */
    this.numerationOffset = model.numerationOffset;
}

/**
 * Возвращает модель страницы @see {@link PageModel} по идентификатору
 * @param id - идентификатор страницы
 * @returns {*} Вернет {@link PageModel} Модель страницы. Если страницы, с таким id не существует, вернет undefined.
 *
 * Этот метод создает новый объект в памяти типа {@link PageModel} для последующей работы с ним.
 * Использовать этот метод следует только в том случае, если вам нужна полная информация о странице.
 */
PageTable.prototype.getPageModel = function (id) {
    // если только страница с таким id существует
    if (!this.hasPageWithId(id)) {
        return undefined;
    }
    if (_underscore2.default.isUndefined(this.pageModelsCache)) {
        var that = this;
        this.pageModelsCache = _underscore2.default.memoize(function (id) {
            that.model.cast('pages.' + id);
            return new _pageModel2.default(id, that.model.pages[id], that.model.pages.defaults, that.model.bookSize);
        });
    }
    return this.pageModelsCache(id);
};

/**
 * Получает id страницы, по ее порядковому номеру.
 * @param index - порядковый номер
 * @returns {*} Инденификатор страницы {String}, если по данному порядковому номеру нет страницы - вернет undefined.
 *
 * Undefined будет возвращено, если порядковый номер отрицательный или больше, чем количество страниц.
 * Этот метод может возвращать undefined, если в модели присутствуют широкие страницы.
 * Если страница, порядковый номер которой 4 будет широкой, то метод вернет undefined при вызове с параметром 5.
 */
PageTable.prototype.getPageIdByIndex = function (index) {
    if (index >= this.getPagesCount() || index < 0) {
        return undefined;
    }

    var result = this.getStructure()[index];
    //если в массиве по данному индексу null,
    //то значит перед текущим номеров стоит широкая(левая) страниц
    if (_underscore2.default.isNull(result)) {
        return this.getPageIdByIndex(index - 1);
    }
    return result;
};

/**
 * Возвращает структуру книги
 * @returns {Array}
 */
PageTable.prototype.getStructure = function () {
    return this.model.pages.structure;
};

/**
 * Возвращает смещение нумерации (numeration offset)
 * @see {@link PageTable#_calculateCaptionById}
 *
 * @returns {number}
 */
PageTable.prototype.getNumerationOffset = function () {
    return this.model.numerationOffset;
};

/**
 * Получает порядковый номер страницы по ее иденификатору
 * @param id Идентификатор страниц
 * @returns {number} Порядковый номер
 *
 * Вернет -1, если нету страницы с таким идентификтором
 */
PageTable.prototype.getPageIndexById = function (id) {
    var index = _underscore2.default.indexOf(this.getStructure(), id);
    return _underscore2.default.isUndefined(index) ? -1 : index;
};

/**
 * Возвращает строку для url страницы по ее id
 *
 * @param id - id страницы
 * @returns {string} urlHeader страницы или undefined, если высчитать его невозможно
 */
PageTable.prototype.getUrlHeaderById = function (id) {
    var pageModel = this.getPageModel(id);
    if (_underscore2.default.isUndefined(pageModel)) {
        return undefined;
    }

    var urlHeader = pageModel.getUrlHeader();

    // если задан urlHeader, то ее возвращаем в первую очередь
    if (!_underscore2.default.isUndefined(urlHeader)) {
        return urlHeader;
    }

    // если нет, слепим из номеров страниц
    return this._calculateCaptionById(id, '-');
};

/**
 * Получает заголовок страниц для пользовательского отображения для конкретной страницы
 *
 * @param id Идентификатор страницы
 * @returns {*} Заголовок страницы или undefined, если высчитать его невозможно
 */
PageTable.prototype.getPageCaptionById = function (id) {
    var pageModel = this.getPageModel(id);
    if (_underscore2.default.isUndefined(pageModel)) {
        return undefined;
    }

    var pageCaption = pageModel.getCaption();

    // если задана pageCaption, то ее возвращаем в первую очередь
    if (!_underscore2.default.isUndefined(pageCaption)) {
        return pageCaption;
    }

    // если нет, слепим из номеров страниц
    return this._calculateCaptionById(id, ' - ');
};

/**
 * Возвращает имя страницы с учетом ее широкости и numeration offset
 * @see {@link PageTable#getNumerationOffset}
 *
 * @param id - идентификатор страницы
 * @param divider - разделитель для широких страниц
 * @returns {string} - имя страницы
 * @private
 */
PageTable.prototype._calculateCaptionById = function (id, divider) {
    var that = this,
        pageModel = this.getPageModel(id),
        pageIndex = this.getPageIndexById(id),
        isWide = pageModel.getProperty('wide');

    // если задан numerationOffset
    if (!_underscore2.default.isUndefined(this.getNumerationOffset())) {
        // функция романизации
        var romanize = function romanize(pageNumber) {
            if (pageNumber < that.getNumerationOffset()) {
                return _fbUtils2.default.romanize(pageNumber + 1);
            } else {
                return pageNumber - that.getNumerationOffset() + 1;
            }
        };

        var result = romanize(pageIndex);
        // если страница широкая, то добавляем вторую часть
        if (!_underscore2.default.isUndefined(isWide) && isWide) {
            if (this.model.rightToLeft) {
                result = romanize(pageIndex + 1) + divider + result;
            } else {
                result += divider + romanize(pageIndex + 1);
            }
        }
        return '' + result;
    } else {
        // если широкая
        if (!_underscore2.default.isUndefined(isWide) && isWide) {
            if (this.model.rightToLeft) {
                return (pageIndex + 2).toString() + divider + (pageIndex + 1).toString();
            } else {
                return (pageIndex + 1).toString() + divider + (pageIndex + 2).toString();
            }
        }
    }

    // если ничего не задано, то возвращаем просто номер страницы + 1
    return (pageIndex + 1).toString();
};

/**
 * Возвращает id страницы по ее urlHeader или undefined
 *
 * @param urlHeader - строка из url страницы
 * @returns {*} id страницы
 */
PageTable.prototype.getPageIdByUrlHeader = function (urlHeader) {

    var pageNums = urlHeader.split('-'),
        id,
        index;

    if (!_underscore2.default.isUndefined(this.model.urlNames)) {
        id = this.model.urlNames[urlHeader];
        if (!_underscore2.default.isUndefined(id) && !_underscore2.default.isNull(id)) {
            return id;
        }
    }

    if (_fbUtils2.default.isRoman(pageNums[0])) {
        index = _fbUtils2.default.deromanize(pageNums[0]);
    } else if (!_underscore2.default.isUndefined(this.getNumerationOffset())) {
        index = Number(pageNums[0]) + this.getNumerationOffset();
    } else {
        index = pageNums[0];
    }

    return this.getPageIdByIndex(index - 1);
};

/**
 * Возвращает количество логических страниц в книге
 * @returns {Number} Количество страниц
 *
 * Разница между методами {@link PageTable#getPagesCount} и {@link PageTable#getPageResourcesCount}
 * начинает проявляться, когда в публикации появляются широкие страницы.
 * В логической структуре книжки широкая страница представляет собой две страницы (левую и правую), но с
 * точки зрения ресурсов используется одна страница, поэтому getPageResourcesCount будет больше,
 * чем getPagesCount на (количество широких страниц * 2).
 *
 */
PageTable.prototype.getPagesCount = function () {
    return this.getStructure().length;
};

/**
 * Возвращает количество фактических ресурсов в книге
 * @returns {Number} Количество страниц
 *
 * @see {@link PageTable#getPagesCount}
 */
PageTable.prototype.getPageResourcesCount = function () {
    return _underscore2.default.without(this.getStructure(), null).length;
};

/**
 * Существует ли страница с таким идентификатором
 * @param id Идентификатор страницы
 * @returns {boolean}
 */
PageTable.prototype.hasPageWithId = function (id) {
    return _underscore2.default.has(this.model.pages, id);
};

/**
 * Возвращает true, если страница - первая, и false - если нет.
 *
 * @param id - идентификатор страницы
 * @returns {boolean}
 */
PageTable.prototype.isFirstPage = function (id) {
    var index = this.getPageIndexById(id);
    return index === 0;
};

/**
 * Возвращает true, если страница - последняя, и false - если нет.
 *
 * @param id - идентификатор страницы
 * @returns {boolean}
 */
PageTable.prototype.isLastPage = function (id) {
    var index = this.getPageIndexById(id),
        model = this.getPageModel(id),
        lastNumber;

    if (_underscore2.default.isUndefined(model)) {
        return false;
    }

    //если последняя страница широкая, ее индекс будет как у левой (предпоследней) обычной страницы
    lastNumber = index + (model.getProperty('wide') ? 2 : 1);
    return lastNumber === this.getStructure().length;
};

exports.default = PageTable;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _underscore = __webpack_require__(0);

var _underscore2 = _interopRequireDefault(_underscore);

var _fbUtils = __webpack_require__(1);

var _fbUtils2 = _interopRequireDefault(_fbUtils);

var _fbRouter = __webpack_require__(3);

var _fbRouter2 = _interopRequireDefault(_fbRouter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Модель страницы
 * @param id Идентификатор страницы
 * @param model - Структура данных страницы
 * @param defaults - Значение по умолчанию для структуры страниц
 * @param bookSize - Размер книжки
 * @constructor
 */
function PageModel(id, model, defaults, bookSize) {
    this.id = id;
    this.model = model;
    this.defaults = defaults;
    this.bookSize = bookSize;
}

PageModel.prototype.getPropertyModel = function () {
    return this.model;
};

/**
 * Получает путь к thumbnails картинки
 * @returns {string}
 */
PageModel.prototype.getThumbnailUrl = function () {
    var id = this.id,
        imgStr = _fbUtils2.default.getNum(id),
        format = _fbUtils2.default.extFormat(this.getProperty('thFormat')),
        isStub = this.isStub();

    if (isStub) {
        return this._getStubPageUrl();
    }

    return (0, _fbRouter2.default)().translatePath('assets/common/pages/thumbnails/page' + imgStr + '_s' + format);
};

/**
 * Возвращает url к картинке текстового слоя страницы
 *
 * Если текстового слоя нет, то возвращается null
 * @param quality - true - url увеличенной картинки, false - url обычной картинки
 * @returns {*}
 */
PageModel.prototype.getTextLayerUrl = function (size) {
    var id = this.id,
        imgStr = _fbUtils2.default.getNum(id),
        isStub = this.isStub(),
        textLayer = this.getProperty('textLayer');

    if (isStub) {
        return null;
    }

    if (typeof size !== "undefined") {
        size = size ? '_' + size : '';
    } else {
        //Обратная совместимость для basic версии
        var sizes = this.getProperty('substrateSizes');
        if (sizes) {
            if (this.getProperty('vectorText')) {
                size = '_1';
            } else {
                size = '_' + Math.min(sizes.length, 3);
            }
        } else {
            size = '_c';
        }
    }
    return textLayer ? (0, _fbRouter2.default)().translatePath('assets/common/pages/text/page' + imgStr + size + '.png') : null;
};

/**
 * Возвращает url к SVG текстового слоя страницы
 *
 * Если текстового слоя нет, то возвращается null
 * @returns {*}
 */
PageModel.prototype.getSVGLayerUrl = function () {
    var id = this.id,
        imgStr = _fbUtils2.default.getNum(id),
        isStub = this.isStub(),
        vectorLayer = this.getProperty('vectorText');

    if (isStub) {
        return null;
    }

    return vectorLayer ? (0, _fbRouter2.default)().translatePath('assets/common/pages/vector/' + imgStr + '.svg') : null;
};

/**
 * Получает путь к подложке страницы
 *
 * @param large - true - url увеличенной картинки, false - url обычной картинки
 * @returns {string}
 */
PageModel.prototype.getSubstrateUrl = function (size) {
    var id = this.id,
        imgStr = _fbUtils2.default.getNum(id),
        substrateFormat = _fbUtils2.default.extFormat(this.getProperty('substrateFormat')),
        isStub = this.isStub();

    if (isStub) {
        return this._getStubPageUrl();
    }

    if (typeof size !== "undefined") {
        size = size ? '_' + size : '';
    } else {
        //Обратная совместимость для basic версии
        var sizes = this.getProperty('substrateSizes');
        if (sizes) {
            size = '_' + Math.min(sizes.length, 3);
        } else {
            size = '';
        }
    }

    return (0, _fbRouter2.default)().translatePath('assets/common/pages/substrates/page' + imgStr + size + substrateFormat);
};

/**
 * Путь к ресурсу stub страницы
 *
 * @returns {string}
 *
 * @private
 */
PageModel.prototype._getStubPageUrl = function () {
    return (0, _fbRouter2.default)().translatePath('assets/common/pages/pagestub.png');
};

/**
 * Получает путь к html данным страницы
 * @returns {string}
 */
PageModel.prototype.getHtmlUrl = function () {
    var id = this.id,
        imgStr = _fbUtils2.default.getNum(id);

    return (0, _fbRouter2.default)().translatePath('assets/common/pages/html/page' + imgStr + '.html');
};

/**
 * Получает путь к данным поиска
 * @returns {string}
 */
PageModel.prototype.getSearchInfoUrl = function () {
    return (0, _fbRouter2.default)().translatePath('assets/common/search/search' + _fbUtils2.default.getNum(this.id) + '.xml');
};

/**
 * Говорит, stub ли страница
 * @returns {boolean}
 */
PageModel.prototype.isStub = function () {
    return Boolean(this.getProperty('stub'));
};

/**
 * Получает любое свойство страницы
 *
 * Метод сначала проверяет scope данных страницы, а потом ищет свойство в defaults
 * @param name Имя свойства
 * @returns {*} Значение свойства или undefined, если свойство но не найдено
 */
PageModel.prototype.getProperty = function (name) {
    return _underscore2.default.isUndefined(this.model[name]) ? this.defaults[name] : this.model[name];
};

/**
 * Возвращает заголовок страницы, если он задан
 * @returns {*}
 */
PageModel.prototype.getCaption = function () {
    if (_underscore2.default.has(this.model, "displayName")) {
        return this.model.displayName;
    }
    return undefined;
};

/**
 * Возвращает url header, если он задан
 * @returns {*}
 */
PageModel.prototype.getUrlHeader = function () {
    if (_underscore2.default.has(this.model, "urlHeader")) {
        return this.model.urlHeader;
    }
    return undefined;
};

/**
 * Вписывает страницу в переданный Rect
 * @param wrapperRect Rect для вписывания
 * @returns {{}} хз что =)
 */
PageModel.prototype.getRect = function (wrapperRect) {

    var contentWidth = this.getProperty('width'),
        contentHeight = this.getProperty('height'),
        pageWidth = this.bookSize.width,
        pageHeight = this.bookSize.height;

    if (this.getProperty('wide')) {
        pageWidth *= 2;
    }

    var pageRect,
        contentRect,
        result = {};

    //вписываем страницу в wrapperRect
    pageRect = _fbUtils2.default.fitScreenSizes(pageWidth, pageHeight, wrapperRect.width, wrapperRect.height);

    //вписываем контент в страницу
    contentRect = _fbUtils2.default.fitScreenSizes(contentWidth, contentHeight, pageRect.width, pageRect.height);

    result.pageWidth = pageRect.width;
    result.pageHeight = pageRect.height;
    result.ratio = contentRect.width / contentWidth;
    result.contentWidth = contentRect.width;
    result.contentHeight = contentRect.height;

    result.pagePadding = [(wrapperRect.height - result.pageHeight) / 2, (wrapperRect.width - result.pageWidth) / 2];
    result.contentPadding = [(result.pageHeight - result.contentHeight) / 2, (result.pageWidth - result.contentWidth) / 2]; //отступы контента [верх,лево]

    return result;
};

exports.default = PageModel;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _underscore = __webpack_require__(0);

var _underscore2 = _interopRequireDefault(_underscore);

var _events = __webpack_require__(8);

var _events2 = _interopRequireDefault(_events);

var _fbUtils = __webpack_require__(1);

var _fbUtils2 = _interopRequireDefault(_fbUtils);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Тип Property отличается от типа Events тем, что можно создавать внутри продвинутые Objects, то есть полноценные Property,
 *                          Property
 *                       /      |      \
 *                  Object   Object   Object
 *                              |
 *                          Object
 *                              |
 *                           Object
 *                          /      \
 *                      Object  Object
 *                        |         |
 *                      Object   Object
 * это нужно чтобы можно было подписываться на изменения любого узла не передавая ссылку на корень?
 * Реализация такова, потому что вызов из интерфейса выглядит так:
 *      setter: property.set('object1.object2.object3.object4.object5',value);
 *      getter: property.object1.object2.object3.object4.object5
 * а подписываться хочется object4.on('change:object5',callback,context);
 * перед этим надо обязательно надо сделать property.cast('object1.object2.object3.object4');
 * @param object - объект мержится с этим классом - чтобы легко было Десериализовать себя из JSON
 * @constructor
 */
function Property(object, defaultObject) {
    this._defaultObject = defaultObject;
    this._construct(object);
}
Property.prototype = new _events2.default();
Property.prototype.constructor = Property;

/**
 * Метод преобразует любой Object внутри типа Property в тип Property
 *                          Property
 *                       /      |      \
 *                  Object   Object   Property
 *                              |
 *                          Property
 *                              |
 *                           Object
 *                          /      \
 *                      Object  Property
 *                        |         |
 *                      Object   Object
 * Это нужно чтобы можно было подписываться на изменения нового Property, не таская за собой корень дерева
 * @param name - имя будущего Property, разделенное точками
 * @returns {*} возвращает новое Property или Property которое было создано до этого
 * Если в дереве не было соответствующего объекта, достраивается дерево до этого объекта, чтобы можно было подписываться на его изменения
 */
Property.prototype.cast = function (name) {
    var property_names = name.split('.');

    function getValueByName(object, property_names, needConstruct, offset) {
        offset = offset || 0;
        if (offset > property_names.length) {
            return undefined;
        }
        for (var i = 0; i < property_names.length - offset; i++) {
            var name = property_names[i];
            if (!_underscore2.default.has(object, name)) {
                if (needConstruct) {
                    object[name] = {};
                } else {
                    return undefined;
                }
            }
            object = object[name];
        }
        return object;
    }

    /*var parent = this;
     //Поиск parent для объекта указанного в name
     for (var i = 0; i < property_names.length-1; i++){
     var name = property_names[i];
     if(!_.has(parent,name)){
     parent[name] = {};
     }
     parent = parent[name];
     }
     //Имя объекта относительно parent
     var name_1 = property_names[property_names.length-1];
     if(!_.has(parent,name_1)){
     parent[name_1] = {};
     }
     var prop = parent[name_1];*/
    var prop = getValueByName(this, property_names, true);
    var defaultValue = getValueByName(this._defaultObject, property_names, false);
    if (prop.constructor === Property) {
        return;
    }
    var ev = new Property(prop, defaultValue);
    var parentProp = getValueByName(this, property_names, true, 1);
    parentProp[property_names[property_names.length - 1]] = ev;
    this._updateInfoAboutCastedObjects(property_names);
    return ev;
};

/**
 * Данный метод позволяет устанавливать значения для внутренних Property
 * @param name - имя разделенное точками,
 * если оно undefined - throw new Error("You can't set the value of properties")
 * если по пути встречается преобразованное в Property свойство, то рекурсивно вызывается set у него,
 * напрямую присвоить значение скастованному свойству нельзя
 * Ключ не может начинаться с _ - зарезервировано для внутренних переменных
 * @param value - значение
 * @param async - установка значения и событие change будут в следующий раз, после того, как очистится текущий callstack
 */
Property.prototype.set = function (name, value, async) {
    if (_underscore2.default.isUndefined(name) && _underscore2.default.isObject(value)) {
        throw new Error("You can't set the value of properties");
    } else {
        var property_names = name.split('.');
        var casted = this._getCasted(property_names); //Ищем в пути Property
        if (casted) {
            if (casted.name) {
                //Обычное присвоение
                casted.value.set(casted.name, value, async);
            } else if (casted.value && _underscore2.default.isObject(value)) {
                //Целевой объект является Property
                casted.value.reset(value);
            } else {
                throw new Error("You can't set the value of properties");
            }
        } else {
            _events2.default.prototype.set.call(this, name, value, async);
        }
    }
};
/**
 * Метод позволяет подписаться на изменения и сразу отослать событие об изменении
 * @param name
 * @param callback
 * @param context
 */
Property.prototype.onAndChange = function (name, callback, context) {
    this.on(name, callback, context);
    this.trigger(name, this._get(name.split(':')[1]), undefined, context);
};

/**
 * Позволяет инициировать Property объектом
 * @param object
 */
Property.prototype._construct = function (object) {
    var o = this._defaultObject ? _fbUtils2.default.deepExtend({}, this._defaultObject, object) : object;
    for (var key in o) {
        if (o.hasOwnProperty(key) && key[0] !== '_') {
            this[key] = o[key];
        }
    }
};
/**
 * Сохраняет информацию о проапгрейженых Property
 * @param property_names - имя Property в массиве
 * @private
 */
Property.prototype._updateInfoAboutCastedObjects = function (property_names) {
    if (!_underscore2.default.isObject(this._infoAboutCastedObject)) {
        this._infoAboutCastedObject = {};
    }
    var prop = this._infoAboutCastedObject;
    for (var i = 0; i < property_names.length - 1; i++) {
        var name = property_names[i];
        if (!_underscore2.default.isObject(prop[name])) {
            prop[name] = {};
        }
        prop = prop[name];
    }
    prop[property_names[property_names.length - 1]] = true;
};
/**
 * Составляет новое имя члена
 * @param property_names - старое имя в массиве
 * @param from - начало в массиве от которого надо составлять новое имя
 * @returns {*} undefined - если имя нельзя получить, или имя разделенное точками
 * @private
 */
Property.prototype._makeNewName = function (property_names, from) {
    var newName = property_names[from];
    for (var j = from + 1; j < property_names.length; j++) {
        newName += '.' + property_names[j];
    }
    return newName;
};
/**
 * Возвращает дочернее Property к данному Property, если оно встречается в запрошенном пути
 *                          Property(a1)
 *                              |
 *                           Object (a2)
 *                              |
 *                          Property (a3)
 *                              |
 *                           Object (a4)
 *                              |
 *                          Property (a5)
 *                               |
 *                            Object (a6)
 *
 *             *ai - имя instance
 *  Например:
 *  a1._getCasted(['a2','a3']) такой вариант вызова не должен быть, потому что переопределять проапгрейженое Property неверно
 *  a1._getCasted(['a2','a3','a4']) вернет {value:a3, name:'a4'}
 *  a1._getCasted(['a2','a3','a4', 'a5']) вернет {value:a3, name:'a4.a5'}
 *  a1._getCasted(['a2','a3','a4', 'a5', 'a6']) вернет {value:a3, name:'a4.a5.a6'}
 *  a3._getCasted(['a4', 'a5', 'a6']) вернет {value:a5, name:'a6'}
 * @param property_names - путь до искомого объекта, в массиве
 * @returns {*} undefined, если Property в пути нет, {value: - Property встреченное на пути, name: новое имя относительно нового Property}
 * @private
 */
Property.prototype._getCasted = function (property_names) {
    var prop = this._infoAboutCastedObject;
    var parent = this;
    for (var i = 0; i < property_names.length; i++) {
        if (!_underscore2.default.isObject(prop)) {
            if (prop === true) {
                var newName = property_names[i];
                for (var j = i + 1; j < property_names.length; j++) {
                    newName += '.' + property_names[j];
                }
                return { value: parent, name: this._makeNewName(property_names, i) };
            } else {
                return undefined;
            }
        }
        var name = property_names[i];
        prop = prop[name];
        parent = parent[name];
    }
    if (prop === true) {
        return { value: parent, name: this._makeNewName(property_names, i) };
    } else {
        return undefined;
    }
};

/**
 * Приводит Property к первозданному виду, то есть очищает все члены Property
 */
Property.prototype.clear = function () {
    var that = this;
    Object.keys(this).forEach(function (key) {
        if (key[0] !== '_') {
            delete that[key];
        }
    });
};

Property.prototype._get = function (name) {
    var property_names = name.split('.');
    var target = this;
    for (var i = 0; i < property_names.length; i++) {
        target = target[property_names[i]];
        if (_underscore2.default.isUndefined(target)) {
            return undefined;
        }
    }
    return target;
};

/**
 * Перезаписывает все свойства и отправляет событие об изменении всем подписчикам
 * @param value
 */
Property.prototype.reset = function (value) {
    if (_underscore2.default.isObject(value)) {
        var valueObject = this._defaultObject ? _fbUtils2.default.deepExtend({}, this._defaultObject, value) : value;
        if (_underscore2.default.isEmpty(this._infoAboutCastedObject)) {

            var that = this;
            //Функция возвращает пару значений
            // {oldValue:,newValue:};
            // если значения нет или не стало,
            // то соответсвующей переменной в объекте не будет
            var getPairOfValues = function getPairOfValues(name) {
                var path = name.split('.');
                var oldObj = that;
                var newObj = valueObject;
                for (var i = 0; i < path.length - 1; i++) {
                    var p = path[i];
                    if (oldObj && oldObj.hasOwnProperty(p)) {
                        oldObj = oldObj[p];
                    } else {
                        oldObj = null;
                    }
                    if (newObj && newObj.hasOwnProperty(p)) {
                        newObj = newObj[p];
                    } else {
                        newObj = null;
                    }
                }
                var result = {};
                if (oldObj && oldObj.hasOwnProperty(path[path.length - 1])) {
                    result.oldValue = oldObj[path[path.length - 1]];
                }
                if (newObj && newObj.hasOwnProperty(path[path.length - 1])) {
                    result.newValue = newObj[path[path.length - 1]];
                }
                return result;
            };
            //Собираем подписки на события change:, вместе со старыми и новыми значениями
            var getChangeEventsArray = function getChangeEventsArray() {
                var result = [];
                if (!_underscore2.default.isEmpty(that._events)) {
                    Object.keys(that._events).forEach(function (key) {
                        if (key.startsWith('change:')) {
                            var events = that._events[key];
                            if (events) {
                                for (var i in events) {
                                    if (events.hasOwnProperty(i)) {
                                        var event = events[i];
                                        var pair = getPairOfValues(key.substr(7));
                                        result.push(_underscore2.default.extend(pair, { event: event }));
                                    }
                                }
                            }
                        }
                    });
                }
                return result;
            };
            var events = getChangeEventsArray();
            //Очистка всех ствойств
            this.clear();

            //Записываем новый объект
            Object.keys(valueObject).forEach(function (key) {
                if (key[0] !== '_') {
                    that[key] = valueObject[key];
                }
            });
            //Посылаем события об измененных свойствах
            Object.keys(events).forEach(function (key) {
                if (key[0] !== '_') {
                    that[key] = valueObject[key];
                }
                var eventObject = events[key];
                var event = eventObject.event;
                event.callback.apply(event.context, [eventObject.newValue, eventObject.oldValue, event]);
            });
        } else {
            //TODO:
            throw new Error("You can't reset complex property");
        }
    } else {
        throw new Error("The value for reset need to be an Object");
    }
};

/**
 * Вызывается рекурсивно для всех Property внутри Property
 * удаляет все свойства, информацию о структуре свойств
 * и вызывает деструктор у суперкласса
 */
Property.prototype.destructor = function () {
    //функция для рекурсивного обхода по структуре Properties
    function destructCasted(property, object) {
        for (var key in object) {
            if (object[key] === true) {
                var casted = property[key];
                if (_underscore2.default.isObject(casted) && casted.constructor === Property) {
                    casted.destructor();
                }
            } else {
                destructCasted(property[key], object[key]);
            }
        }
    }

    if (_underscore2.default.isObject(this._infoAboutCastedObject)) {
        destructCasted(this, this._infoAboutCastedObject);
    }
    for (var key in this) {
        if (_underscore2.default.has(this, key)) {
            delete this[key];
        }
    }
    _events2.default.prototype.destructor.call(this);
};

/**
 * Возвращает stringified JSON для Property
 * если агрумент object не задан, то текущего
 *
 * @param object - объект Property
 */
Property.prototype.getJSON = function (object) {
    var obj = object || this;

    var replacer = function replacer(key, value) {
        // убираем все приватные свойства
        if (key.substring(0, 1) === '_') {
            return undefined;
        }
        return value;
    };

    return JSON.stringify(obj, replacer);
};

exports.default = Property;

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _underscore = __webpack_require__(0);

var _underscore2 = _interopRequireDefault(_underscore);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var slice = Array.prototype.slice;
var eventsApi, triggerEvents;

function Events() {
    //готово к наследованию
}

Events.prototype.on = function (name, callback, context) {
    if (!eventsApi(this, 'on', name, [callback, context]) || !callback) {
        return this;
    }
    this._events = this._events || {};
    var events = this._events[name] || (this._events[name] = []);
    events.push({ callback: callback, context: context, ctx: context || this });
    return this;
};

Events.prototype.once = function (name, callback, context) {
    if (!eventsApi(this, 'once', name, [callback, context]) || !callback) {
        return this;
    }
    var self = this;
    var once = _underscore2.default.once(function () {
        self.off(name, once);
        callback.apply(this, arguments);
    });
    once._callback = callback;
    return this.on(name, once, context);
};

/**
 * Очистка ссылок на объекты в массиве _events
 */
Events.prototype.destructor = function () {
    var ev, events, names;
    names = _underscore2.default.keys(this._events);
    for (var i = 0, l = names.length; i < l; i++) {
        var name = names[i];
        events = this._events[name];
        if (events) {
            for (var j = 0, k = events.length; j < k; j++) {
                ev = events[j];
                delete ev.callback;
                delete ev.context;
            }
            delete this._events[name];
        }
    }
};
Events.prototype.off = function (name, callback, context) {
    var retain, ev, events, names;
    if (!this._events || !eventsApi(this, 'off', name, [callback, context])) {
        return this;
    }
    if (!name && !callback && !context) {
        this._events = {};
        return this;
    }

    names = name ? [name] : _underscore2.default.keys(this._events);
    for (var i = 0, l = names.length; i < l; i++) {
        name = names[i];
        events = this._events[name];
        if (events) {
            this._events[name] = retain = [];
            if (callback || context) {
                for (var j = 0, k = events.length; j < k; j++) {
                    ev = events[j];
                    if (callback && callback !== ev.callback && callback !== ev.callback._callback || context && context !== ev.context) {
                        retain.push(ev);
                    }
                }
            }
            if (!retain.length) {
                delete this._events[name];
            }
        }
    }

    return this;
};

Events.prototype.trigger = function (name) {
    if (!this._events) {
        return this;
    }

    var args = slice.call(arguments, 1);
    if (!eventsApi(this, 'trigger', name, args)) {
        return this;
    }

    var events = this._events[name];
    var allEvents = this._events.all;
    if (events) {
        triggerEvents(events, args);
    }
    if (allEvents) {
        triggerEvents(allEvents, arguments);
    }
    return this;
};

Events.prototype.stopListening = function (obj, name, callback) {
    var listeners = this._listeners;

    if (!listeners) {
        return this;
    }

    var deleteListener = !name && !callback;
    if ((typeof name === 'undefined' ? 'undefined' : _typeof(name)) === 'object') {
        callback = this;
    }

    if (obj) {
        (listeners = {})[obj._listenerId] = obj;
    }

    for (var id in listeners) {
        if (listeners.hasOwnProperty(id)) {
            listeners[id].off(name, callback, this);
            if (deleteListener) {
                delete this._listeners[id];
            }
        }
    }
    return this;
};

Events.prototype.set = function (name, value, async) {
    var target = this;
    var prop = name;

    var property_names = prop.split('.');

    if (property_names.length > 1) {

        for (var i = 0; i < property_names.length - 1; i++) {
            target = target[property_names[i]];
            if (_underscore2.default.isUndefined(target)) {
                console.error('Property does not have', property_names[i]);
                return this;
            }
        }
        prop = property_names[property_names.length - 1];
    }

    if (target[prop] === value) {
        return this;
    }
    var oldVal = target[prop];

    target[prop] = value;
    var triggerChange = function triggerChange(that) {
        that.trigger('change:' + name, value, oldVal, this);
    };

    if (!_underscore2.default.isUndefined(async)) {
        _underscore2.default.defer(_underscore2.default.bind(function () {
            triggerChange(this);
            oldVal = null;
        }, this));
    } else {
        triggerChange(this);
        oldVal = null;
    }

    if (property_names.length > 1) {

        var trigger_base_changed = function trigger_base_changed(that) {
            var base_prop = property_names[0];
            var value = that[property_names[0]];
            that.trigger('change:' + base_prop, value, null, this);
            for (var j = 1; j < property_names.length - 1; j++) {
                base_prop += '.' + property_names[j];
                value = value[property_names[j]];
                that.trigger('change:' + base_prop, value, null, this);
            }
        };

        if (!_underscore2.default.isUndefined(async)) {
            _underscore2.default.defer(_underscore2.default.bind(function () {
                trigger_base_changed(this);
            }, this));
        } else {
            trigger_base_changed(this);
        }
    }

    return this;
};

var eventSplitter = /\s+/;

eventsApi = function eventsApi(obj, action, name, rest) {
    if (!name) {
        return true;
    }

    if ((typeof name === 'undefined' ? 'undefined' : _typeof(name)) === 'object') {
        for (var key in name) {
            if (name.hasOwnProperty(key)) {
                obj[action].apply(obj, [key, name[key]].concat(rest));
            }
        }
        return false;
    }

    if (eventSplitter.test(name)) {
        var names = name.split(eventSplitter);
        for (var i = 0, l = names.length; i < l; i++) {
            obj[action].apply(obj, [names[i]].concat(rest));
        }
        return false;
    }

    return true;
};

triggerEvents = function triggerEvents(events, args) {
    var ev,
        i = -1,
        l = events.length,
        a1 = args[0],
        a2 = args[1],
        a3 = args[2];
    switch (args.length) {
        case 0:
            while (++i < l) {
                (ev = events[i]).callback.call(ev.ctx);
            }
            return;
        case 1:
            while (++i < l) {
                (ev = events[i]).callback.call(ev.ctx, a1);
            }
            return;
        case 2:
            while (++i < l) {
                (ev = events[i]).callback.call(ev.ctx, a1, a2);
            }
            return;
        case 3:
            while (++i < l) {
                (ev = events[i]).callback.call(ev.ctx, a1, a2, a3);
            }
            return;
        default:
            while (++i < l) {
                (ev = events[i]).callback.apply(ev.ctx, args);
            }
    }
};

var listenMethods = { listenTo: 'on', listenToOnce: 'once' };

_underscore2.default.each(listenMethods, function (implementation, method) {
    Events.prototype[method] = function (obj, name, callback) {
        var listeners = this._listeners || (this._listeners = {});
        var id = obj._listenerId || (obj._listenerId = _underscore2.default.uniqueId('l'));
        listeners[id] = obj;
        if ((typeof name === 'undefined' ? 'undefined' : _typeof(name)) === 'object') {
            callback = this;
        }
        obj[implementation](name, callback, this);
        return this;
    };
});

Events.prototype.bind = Events.prototype.on;
Events.prototype.unbind = Events.prototype.off;

exports.default = Events;

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var __WEBPACK_AMD_DEFINE_RESULT__;// doT.js
// 2011-2014, Laura Doktorova, https://github.com/olado/doT
// Licensed under the MIT license.
/* jshint ignore:start */


Object.defineProperty(exports, "__esModule", {
    value: true
});
var doT = {
    name: "doT",
    version: "1.1.1",
    templateSettings: {
        evaluate: /\{\{([\s\S]+?(\}?)+)\}\}/g,
        interpolate: /\{\{=([\s\S]+?)\}\}/g,
        encode: /\{\{!([\s\S]+?)\}\}/g,
        use: /\{\{#([\s\S]+?)\}\}/g,
        useParams: /(^|[^\w$])def(?:\.|\[[\'\"])([\w$\.]+)(?:[\'\"]\])?\s*\:\s*([\w$\.]+|\"[^\"]+\"|\'[^\']+\'|\{[^\}]+\})/g,
        define: /\{\{##\s*([\w\.$]+)\s*(\:|=)([\s\S]+?)#\}\}/g,
        defineParams: /^\s*([\w$]+):([\s\S]+)/,
        conditional: /\{\{\?(\?)?\s*([\s\S]*?)\s*\}\}/g,
        iterate: /\{\{~\s*(?:\}\}|([\s\S]+?)\s*\:\s*([\w$]+)\s*(?:\:\s*([\w$]+))?\s*\}\})/g,
        varname: "it",
        strip: true,
        append: true,
        selfcontained: false,
        doNotSkipEncoded: false
    },
    template: undefined, //fn, compile template
    compile: undefined, //fn, for express
    log: true
},
    _globals;

doT.encodeHTMLSource = function (doNotSkipEncoded) {
    var encodeHTMLRules = { "&": "&#38;", "<": "&#60;", ">": "&#62;", '"': "&#34;", "'": "&#39;", "/": "&#47;" },
        matchHTML = doNotSkipEncoded ? /[&<>"'\/]/g : /&(?!#?\w+;)|<|>|"|'|\//g;
    return function (code) {
        return code ? code.toString().replace(matchHTML, function (m) {
            return encodeHTMLRules[m] || m;
        }) : "";
    };
};

_globals = function () {
    return this || (0, eval)("this");
}();

/* istanbul ignore else */
if (typeof module !== "undefined" && module.exports) {
    module.exports = doT;
} else if (true) {
    !(__WEBPACK_AMD_DEFINE_RESULT__ = function () {
        return doT;
    }.call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
} else {
    _globals.doT = doT;
}

var startend = {
    append: { start: "'+(", end: ")+'", startencode: "'+encodeHTML(" },
    split: { start: "';out+=(", end: ");out+='", startencode: "';out+=encodeHTML(" }
},
    skip = /$^/;

function resolveDefs(c, block, def) {
    return (typeof block === "string" ? block : block.toString()).replace(c.define || skip, function (m, code, assign, value) {
        if (code.indexOf("def.") === 0) {
            code = code.substring(4);
        }
        if (!(code in def)) {
            if (assign === ":") {
                if (c.defineParams) value.replace(c.defineParams, function (m, param, v) {
                    def[code] = { arg: param, text: v };
                });
                if (!(code in def)) def[code] = value;
            } else {
                new Function("def", "def['" + code + "']=" + value)(def);
            }
        }
        return "";
    }).replace(c.use || skip, function (m, code) {
        if (c.useParams) code = code.replace(c.useParams, function (m, s, d, param) {
            if (def[d] && def[d].arg && param) {
                var rw = (d + ":" + param).replace(/'|\\/g, "_");
                def.__exp = def.__exp || {};
                def.__exp[rw] = def[d].text.replace(new RegExp("(^|[^\\w$])" + def[d].arg + "([^\\w$])", "g"), "$1" + param + "$2");
                return s + "def.__exp['" + rw + "']";
            }
        });
        var v = new Function("def", "return " + code)(def);
        return v ? resolveDefs(c, v, def) : v;
    });
}

function unescape(code) {
    return code.replace(/\\('|\\)/g, "$1").replace(/[\r\t\n]/g, " ");
}

doT.template = function (tmpl, c, def) {
    c = c || doT.templateSettings;
    var cse = c.append ? startend.append : startend.split,
        needhtmlencode,
        sid = 0,
        indv,
        str = c.use || c.define ? resolveDefs(c, tmpl, def || {}) : tmpl;

    str = ("var out='" + (c.strip ? str.replace(/(^|\r|\n)\t* +| +\t*(\r|\n|$)/g, " ").replace(/\r|\n|\t|\/\*[\s\S]*?\*\//g, "") : str).replace(/'|\\/g, "\\$&").replace(c.interpolate || skip, function (m, code) {
        return cse.start + unescape(code) + cse.end;
    }).replace(c.encode || skip, function (m, code) {
        needhtmlencode = true;
        return cse.startencode + unescape(code) + cse.end;
    }).replace(c.conditional || skip, function (m, elsecase, code) {
        return elsecase ? code ? "';}else if(" + unescape(code) + "){out+='" : "';}else{out+='" : code ? "';if(" + unescape(code) + "){out+='" : "';}out+='";
    }).replace(c.iterate || skip, function (m, iterate, vname, iname) {
        if (!iterate) return "';} } out+='";
        sid += 1;
        indv = iname || "i" + sid;
        iterate = unescape(iterate);
        return "';var arr" + sid + "=" + iterate + ";if(arr" + sid + "){var " + vname + "," + indv + "=-1,l" + sid + "=arr" + sid + ".length-1;while(" + indv + "<l" + sid + "){" + vname + "=arr" + sid + "[" + indv + "+=1];out+='";
    }).replace(c.evaluate || skip, function (m, code) {
        return "';" + unescape(code) + "out+='";
    }) + "';return out;").replace(/\n/g, "\\n").replace(/\t/g, '\\t').replace(/\r/g, "\\r").replace(/(\s|;|\}|^|\{)out\+='';/g, '$1').replace(/\+''/g, "");
    //.replace(/(\s|;|\}|^|\{)out\+=''\+/g,'$1out+=');

    if (needhtmlencode) {
        if (!c.selfcontained && _globals && !_globals._encodeHTML) _globals._encodeHTML = doT.encodeHTMLSource(c.doNotSkipEncoded);
        str = "var encodeHTML = typeof _encodeHTML !== 'undefined' ? _encodeHTML : (" + doT.encodeHTMLSource.toString() + "(" + (c.doNotSkipEncoded || '') + "));" + str;
    }
    try {
        return new Function(c.varname, str);
    } catch (e) {
        /* istanbul ignore else */
        if (typeof console !== "undefined") console.log("Could not create a template function: " + str);
        throw e;
    }
};

doT.compile = function (tmpl, def) {
    return doT.template(tmpl, null, def);
};
exports.default = doT;

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = {"links":{"color":"#40C6FF","target":"_blank","highlightOnFlip":true,"highlightOnHover":true},"search":{"color":"#FFE921"},"hardcover":false,"hardcoverColor":"#5a5f63","flipCorner":true,"rightToLeft":false,"numerationOffset":0,"pageFlippingDuration":0.8,"pages":{"defaults":{"width":0,"height":0,"thFormat":"","textLayer":true,"substrateFormat":"","substrateZoomFormat":"","stub":false,"slideDelay":2,"backgroundColor":"#FFFFFF","wide":false,"pageResize":"FIT","shadowDepth":2}}}

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = {"toc":{"enabled":true},"downloads":{"enabled":false,"allPagesVisible":true,"currentPagesVisible":false},"sound":{"background":{"loop":true,"volume":30},"flip":{"enabled":true,"volume":25,"hard":["blow.mp3"],"soft":["flip2.mp3","flip3.mp3","flip4.mp3"]},"enabled":true},"print":{"currentPagesVisible":true,"selectedPagesVisible":true},"search":{"path":"/searchtext.xml","exactMatch":false,"searchCharactersLimit":1,"enabled":false},"bookSize":95,"components":{"book":{"flip":true,"slide":true},"notes":true,"bottomBar":true,"zoom":true,"navigation":false,"topBar":true,"embed":false,"fullscreen":true,"print":true,"thumbnails":true,"share":true,"textSelection":false,"slideshow":{"enabled":false,"auto":false,"loop":false,"interval":3000},"paginator":{"enabled":true,"totalPagesVisible":true},"copyright":{"enabled":false,"url":"","target":"_blank","label":""}},"thumbType":"AUTO","cookieNotice":{"enabled":false}}

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = {"locales":["en","ar","de","es","fi","fr","he","it","ja","nl","no","pl","pt","ru","sv","tr","zh"],"substitutes":{"nb":"no","nn":"no","be":"ru"},"rtl":["ar","he"],"fonts":[{"locales":["de","en","es","fi","fr","it","nl","no","pl","pt","sv","tr"],"font-family":"Open Sans","subset":"latin-ext","font-weight-bold":"800","font-weight-normal":"600"},{"locales":["ar"],"font-family":"Cairo","subset":"arabic","font-weight-bold":"700","font-weight-normal":"600"},{"locales":["he"],"font-family":"Rubik","subset":"hebrew","font-weight-bold":"700","font-weight-normal":"500"},{"locales":["ru"],"font-family":"Open Sans","subset":"cyrillic,cyrillic-ext","font-weight-bold":"800","font-weight-normal":"600"}]}

/***/ })
/******/ ]);
//# sourceMappingURL=../../init.map