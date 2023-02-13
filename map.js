const words = ["ground", "control", "to", "major", "tom"];

const assertArraysEqual = (actual, expected) => {
  if (eqArrays(actual, expected) === true) console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  else console.log(`❌❌❌ Assertion Failed: ${actual} !== ${expected}`);
};

const eqArrays = (actual, expected) => {
  if (actual.length !== expected.length) return false;
  for (let i = 0; i < actual.length; i++) {
    if (Array.isArray(actual[i]) && (eqArrays(actual[i], expected[i]) === false)) return false;
    else if (!(Array.isArray(actual[i])) && actual[i] !== expected[i]) return false;
  }
  return true;
};

const map = (array, callback) => {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

const results1 = map(words, word => word[0]);
const results2 = map(words, word => word);
const resultsLength = map(words, word => word.length);

assertArraysEqual(results1, ["h", "e", "l", "l", "o"]);
assertArraysEqual(results1, ['g', 'c', 't', 'm', 't']);
assertArraysEqual(results2, ["ground", "control", "to", "major", "tom"]);
assertArraysEqual(resultsLength, [6, 7, 2, 5, 3]);