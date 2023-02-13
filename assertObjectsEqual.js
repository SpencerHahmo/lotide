const eqArrays = (actual, expected) => {
  let check = false;
  for (let i = 0; i < actual.length; i++) {
    if (actual[i] === expected[i] && typeof actual[i] === typeof expected[i]) check = true;
    else {
      check = false;
      break;
    }
  }
  if (check === true) return true;
  else return false;
};

const eqObjects = (object1, object2) => {
  if (Object.keys(object1).length !== Object.keys(object2).length) return false;
  for (let key in object1) {
    if (Array.isArray(object1[key])) return eqArrays(object1[key], object2[key]);
    else if (typeof object1[key] === "object") {
      if (eqObjects(object1[key], object2[key]) === false) return false;
    } else {
      if (object1[key] !== object2[key]) return false;
    }
  }
  return true;
};

// FUNCTION IMPLEMENTATION
const assertObjectsEqual = (actual, expected) => {
  const inspect = require('util').inspect; // <= add this line
  if (eqObjects(actual, expected)) console.log(`✅✅✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  else console.log(`❌❌❌ Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
};

const letterExample1 = {a: '1', b: 2};
const letterExample2 = {b: 2, a: '1'};
const letterExample3 = {a: 1, b: 2, c: 3};
const letterExample4 = {b: 2, c: 3, a: 1};
assertObjectsEqual(letterExample1, letterExample2);
assertObjectsEqual(letterExample1, letterExample3);
assertObjectsEqual(letterExample4, letterExample2);
assertObjectsEqual(letterExample3, letterExample4);

/* Additional test cases
const shirtObject = { color: "red", size: "medium" };
const anotherShirtObject = { size: "medium", color: "red" };
const longSleeveShirtObject = { size: "medium", color: "red", sleeveLength: "long" };
const anotherLongSleeveShirtObject = {sleeveLength: "long", color: "red", size: "medium"};
const multiColorShirtObject = { colors: ["red", "blue"], size: "medium" };
const anotherMultiColorShirtObject = { size: "medium", colors: ["red", "blue"] };
const longSleeveMultiColorShirtObject = { size: "medium", colors: ["red", "blue"], sleeveLength: "long" };
assertObjectsEqual(shirtObject, anotherShirtObject);
assertObjectsEqual(shirtObject, longSleeveShirtObject);
assertObjectsEqual(anotherShirtObject, anotherLongSleeveShirtObject);
assertObjectsEqual(longSleeveShirtObject, anotherLongSleeveShirtObject);
assertObjectsEqual(multiColorShirtObject, anotherMultiColorShirtObject);
assertObjectsEqual(multiColorShirtObject, longSleeveMultiColorShirtObject);
assertObjectsEqual(anotherMultiColorShirtObject, longSleeveMultiColorShirtObject);*/