const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌❌❌ Assertion Failed: ${actual} !== ${expected}`);
  }
};

const eqArrays = function(actual, expected) {
  let check = false;
  for (let i = 0; i < actual.length; i++) {
    if (actual[i] === expected[i] && typeof actual[i] === typeof expected[i]) {
      check = true;
    } else {
      check = false;
      break;
    }
  }
  if (check === true) {
    console.log("true");
    return true;
  } else {
    console.log("false");
    return false;
  }
};

eqArrays([1, 2, 3], [1, 2, 3]); // => true
eqArrays([1, 2, 3], [3, 2, 1]); // => false

eqArrays(["1", "2", "3"], ["1", "2", "3"]); // => true
eqArrays(["1", "2", "3"], ["1", "2", 3]); // => false

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS
assertEqual(eqArrays([1, 2, 3], [1, 2, 2]), true); // => should FAIL

assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), false); // => should FAIL
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false); // => should PASS