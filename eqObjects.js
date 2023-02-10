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
    return true;
  } else {
    return false;
  }
};

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    console.log(`❌❌❌ Assertion Failed: ${actual} !== ${expected}`);
  }
};

// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function(object1, object2) {
  if (Object.keys(object1).length !== Object.keys(object2).length) {
    return false;
  }
  for (let key in object1) {
    if (Array.isArray(object1[key])) {
      return eqArrays(object1[key], object2[key]);
    } else if (typeof object1[key] === "object") {
      if (eqObjects(object1[key], object2[key]) === false) {
        return false;
      }
    } else {
      if (object1[key] !== object2[key]) {
        return false;
      }
    }
  }
  return true;
};

const shirtObject = { color: "red", size: "medium" };
const anotherShirtObject = { size: "medium", color: "red" };
eqObjects(shirtObject, anotherShirtObject); // => true
//We need to use that return value in combination with assertEqual to test if the function is working correctly.
console.log("batch 1");
assertEqual(eqObjects(shirtObject, anotherShirtObject), true); // should return assertion passed
assertEqual(eqObjects(shirtObject, anotherShirtObject), false); // should return assertion failed

const longSleeveShirtObject = { size: "medium", color: "red", sleeveLength: "long" };
eqObjects(shirtObject, longSleeveShirtObject); // => false
console.log("batch 2");
assertEqual(eqObjects(shirtObject, longSleeveShirtObject), true); // should return assertion failed
assertEqual(eqObjects(shirtObject, longSleeveShirtObject), false); // should return assertion passed

const multiColorShirtObject = { colors: ["red", "blue"], size: "medium" };
const anotherMultiColorShirtObject = { size: "medium", colors: ["red", "blue"] };
eqObjects(multiColorShirtObject, anotherMultiColorShirtObject); // => true
console.log("batch 3");
assertEqual(eqObjects(multiColorShirtObject, anotherMultiColorShirtObject), true); // should return assertion passed
assertEqual(eqObjects(multiColorShirtObject, anotherMultiColorShirtObject), false); // should return assertion failed

const longSleeveMultiColorShirtObject = { size: "medium", colors: ["red", "blue"], sleeveLength: "long" };
eqObjects(multiColorShirtObject, longSleeveMultiColorShirtObject); // => false
console.log("batch 4");
assertEqual(eqObjects(multiColorShirtObject, longSleeveMultiColorShirtObject), true); // should return assertion failed
assertEqual(eqObjects(multiColorShirtObject, longSleeveMultiColorShirtObject), false); // should return assertion passed