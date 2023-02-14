const assert = require('chai').assert;
const assertArraysEqual = require('../assertArraysEqual');
const eqArrays = require('../eqArrays');

describe("#assertArraysEqual", () => {
  it("returns true for [1, 2, 3], [1, 2, 3]", () => {
    assert.strictEqual(assertArraysEqual([1, 2, 3], [1, 2, 3]));
  });

  it("returns false for [1, 2, 3], [3, 2, 1]", () => {
    assert.strictEqual(assertArraysEqual([1, 2, 3], [3, 2, 1]));
  });

  it('returns true for ["1", "2", "3"], ["1", "2", "3"]', () => {
    assert.strictEqual(assertArraysEqual(["1", "2", "3"], ["1", "2", "3"]));
  });

  it('returns false for [1, 2, 3], [1, 2, "3"]', () => {
    assert.strictEqual(assertArraysEqual([1, 2, 3], [1, 2, '3']));
  });

  it ("returns false for [3, 2, 1, 0], [3, 2, 1]", () => {
    assert.strictEqual(assertArraysEqual([3, 2, 1, 0], [3, 2, 1]));
  });

  it ("returns true for [3, 2, 1, 0], [3, 2, 1]", () => {
    assert.strictEqual(assertArraysEqual(eqArrays([3, 2, 1, 0], [3, 2, 1]), false));
  });
});