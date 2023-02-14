const assert = require('chai').assert;
const assertArraysEqual = require('../assertArraysEqual');
const eqArrays = require('../eqArrays');
const middle = require('../middle');

describe("#middle", () => {
  it("return [] when entering [1]", () => {
    assert.deepEqual(middle([1]), []);
  });
  
  it("return [] when entering [1, 2]", () => {
    assert.deepEqual(assertArraysEqual(eqArrays(middle([1, 2]), []), true));
  });
  
  it("return [2] when entering [1, 2, 3]", () => {
    assert.deepEqual(assertArraysEqual(eqArrays(middle([1, 2, 3]), [2]), true));
  });
  
  it("return [3] when entering [1, 2, 3, 4, 5]", () => {
    assert.deepEqual(assertArraysEqual(eqArrays(middle([1, 2, 3, 4, 5]), [3]), true));
  });
  
  it("return [2, 3] when entering [1, 2, 3, 4]", () => {
    assert.deepEqual(assertArraysEqual(eqArrays(middle([1, 2, 3, 4]), [2, 3]), true));
  });
  
  it("return [3, 4] when entering [1, 2, 3, 4, 5, 6]", () => {
    assert.deepEqual(assertArraysEqual(eqArrays(middle([1, 2, 3, 4, 5, 6]), [3, 4]), true));
  });
});