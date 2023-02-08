/*
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

const assertArraysEqual = function(actual, expected, expectedResult) {
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
Previous code brought in
*/

const middle = function(array) {
  if (array.length <= 2) {
    console.log([]);
  } else if (array.length % 2 === 0) {
    console.log(array.slice(array.length / 2 - 1, array.length / 2 + 1));
  } else {
    console.log(array.slice(array.length / 2, array.length / 2 + 1));
  }
};

middle([1]) // => []
middle([1, 2]) // => []
middle([1, 2, 3]) // => [2]
middle([1, 2, 3, 4, 5]) // => [3]
middle([1, 2, 3, 4]) // => [2, 3]
middle([1, 2, 3, 4, 5, 6]) // => [3, 4]