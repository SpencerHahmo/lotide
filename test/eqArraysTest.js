const assert = require('chai').assert;
const eqArrays = require('../eqArrays');

describe("#eqArrays", () => {
  it("return true for [1, 2, 3], [1, 2, 3]", () => {
    assert.strictEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
  });

  it("return false for [1, 2, 3], [1, 2, 2]", () => {
    assert.strictEqual(eqArrays([1, 2, 3], [1, 2, 2]), false);
  });
  
  it("return true for ['1', '2', '3'], ['1', '2', '3']", () => {
    assert.strictEqual(eqArrays(['1', '2', '3'], ['1', '2', '3']), true);
  });
  
  it ("return false for ['1', '2', '3'], ['1', '2', 3]", () => {
    assert.strictEqual(eqArrays(['1', '2', '3'], ['1', '2', 3]), false);
  });
})