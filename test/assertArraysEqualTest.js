const eqArrays = require('../eqArrays');
const assertArraysEqual = require('../assertArraysEqual');

eqArrays([1, 2, 3], [1, 2, 3]); // => true
eqArrays([1, 2, 3], [3, 2, 1]); // => false

eqArrays(["1", "2", "3"], ["1", "2", "3"]); // => true
eqArrays(["1", "2", "3"], ["1", "2", 3]); // => false

assertArraysEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS
assertArraysEqual(eqArrays([1, 2, 3], [1, 2, 2]), true); // => should FAIL

assertArraysEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), false); // => should FAIL
assertArraysEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false); // => should PASS