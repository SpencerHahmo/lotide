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

const takeUntil = (array, callback) => {
  let results = [];
  for (let i = 0; i < array.length; i++) {
    if (callback(array[i])) {
      results = array.slice(0, i);
    }
  }
  return results;
};

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);

console.log('---');

const data3 = ["another", "test", "example", ".", "to", "do"];
const results3 = takeUntil(data3, x => x === ".");
console.log(results3);

console.log('---');

const data4 = [11, 5, 9, 15, 27, 86, 97, 31];
const results4 = takeUntil(data4, x => x % 2 === 0);
console.log(results4);

assertArraysEqual(results1, data1.slice(0, 5));
assertArraysEqual(results2, data2.slice(0, 4));
assertArraysEqual(results3, ["another", "test", "example"]);
assertArraysEqual(results4, ["11", "5", "9", "15", "27"]);
assertArraysEqual(results4, data4.slice(0, 5));
assertArraysEqual(results4, [11, 5, 9, 15, 27]);