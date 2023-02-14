const assert = require('chai').assert;
const tail = require('../tail');
const assertEqual = require('../assertEqual');
const eqArrays = require('../eqArrays');

describe("#tail", () => {
  it("return undefined if the array is empty or has a length of one", () => {
    assert.deepEqual(eqArrays(tail([]), undefined));
    //assert.deepEqual(assertEqual(eqArrays(tail([]), undefined), true));
  });
  
  it("return undefined if the array is empty or has a length of one", () => {
    assert.deepEqual(eqArrays(tail(["test"]), undefined));
    //assert.deepEqual(assertEqual(eqArrays(tail(["test"]), undefined), true));
  });

  it("return true for [6, 7] being the tail end of [5, 6, 7]", () => {
    assert.deepEqual(eqArrays(tail([5, 6, 7]), [6, 7]), true);
    //assert.deepEqual(assertEqual(eqArrays(tail([5, 6, 7]), [6, 7]), true));
  });
  
  it("return false for ['test', 'case'] being the tail end of ['yet', 'another', 'test', 'case']", () => {
    assert.deepEqual(eqArrays(tail(['yet', 'another', 'test', 'case']), ['test', 'case']), false);
    //assert.deepEqual(assertEqual(eqArrays(tail(['yet', 'another', 'test', 'case']), ['test', 'case']), false));
  });

  it('return true for ["Lighthouse", "Labs"] being the tail end of  ["Hello", "Lighthouse", "Labs"]', () => {
    assert.deepEqual(eqArrays(tail(["Hello", "Lighthouse", "Labs"]), ["Lighthouse", "Labs"]), true);
    //assert.deepEqual(assertEqual(eqArrays(tail(["Hello", "Lighthouse", "Labs"]), ["Lighthouse", "Labs"]), true));
  });
  
  it("return false on [2, 3, 4] being the tail end of [1, 2, 3, 4, 5]", () => {
    assert.deepEqual(eqArrays(tail([1, 2, 3, 4, 5]), [2, 3, 4]), false);
    //assert.deepEqual(assertEqual(eqArrays(tail([1, 2, 3, 4, 5]), [2, 3, 4]), false));
  });
  
  it("return true on [2, 3, 4] being the tail end of [1, 2, 3, 4, 5]", () => {
    assert.deepEqual(eqArrays(tail([1, 2, 3, 4, 5]), [2, 3, 4, 5]), true);
    //assert.deepEqual(assertEqual(eqArrays(tail([1, 2, 3, 4, 5]), [2, 3, 4, 5]), true));
  });
});