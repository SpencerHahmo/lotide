const eqArrays = function(actual, expected, expectedResult) {
  let check = false;
  for (let i = 0; i < actual.length; i++) {
    if (actual[i] === expected[i] && typeof actual[i] === typeof expected[i]) {
      check = true;
    } else {
      check = false;
      break;
    }
  }
  if (expectedResult === undefined) {
    if (check === true) {
      console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}\n`);
    } else if (check === false) {
      console.log(`❌❌❌ Assertion Failed: ${actual} !== ${expected}\n`);
    }
  } else if (expectedResult !== undefined) {
    if (check === expectedResult) {
      if (expectedResult === true) {
        console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}\n`);
      } else {
        console.log(`✅✅✅ Assertion Passed: ${actual} !== ${expected}\n`);
      }
    } else if (check !== expectedResult) {
      console.log(`❌❌❌ Assertion Failed: ${actual} !== ${expected}\n`);
    }
  }
};

eqArrays([1, 2, 3], [1, 2, 3]); // => true
eqArrays([1, 2, 3], [3, 2, 1]); // => false

eqArrays(["1", "2", "3"], ["1", "2", "3"]); // => true
eqArrays(["1", "2", "3"], ["1", "2", 3]); // => false

eqArrays([1, 2, 3], [1, 2, 3], true); // => should PASS
eqArrays(["1", "2", 3], ["1", "2", 3], false); // => should FAIL
eqArrays([1, 2, 3], [1, 3, 3], false); // => should PASS