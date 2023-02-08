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
      console.log("true");
    } else if (check === false) {
      console.log("false");
    }
  } else if (expectedResult !== undefined) {
    if (check === expectedResult) {
      console.log("true");
    } else if (check !== expectedResult) {
      console.log("false");
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