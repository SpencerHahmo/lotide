const assert = require('chai').assert;
const assertEqual = require('../assertEqual');

describe("#assertEqual", () => {
  it('return false for "Lighthouse Labs", "Bootcamp', () => {
    assert.strictEqual(assertEqual("Lighthouse Labs", "Bootcamp"));
  });

  it ("return true for 1, 1", () => {
    assert.strictEqual(assertEqual(1, 1));
  });

  it("return false for 3.14, Math.PI", () => {
    assert.strictEqual(assertEqual(3.14, Math.PI));
  });
  
  it('return true for "Summer", "Summer"', () => {
    assert.strictEqual(assertEqual("Summer", "Summer"));
  });
  
  it("return false for 'test', 4", () => {
    assert.strictEqual(assertEqual('test', 4));
  });
});