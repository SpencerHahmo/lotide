const eqArrays = (actual, expected) => {
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

const assertEqual = (actual, expected) => {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    console.log(`❌❌❌ Assertion Failed: ${actual} !== ${expected}`);
  }
};

const eqObjects = (object1, object2) => {
  const object1Keys = Object.keys(object1);
  const object2Keys = Object.keys(object2);
  let checker = true;
  for (let key1 of object1Keys) {
    for (let key2 of object2Keys) {
      if (Array.isArray(object1Keys[key1] !== object2Keys[key2])) {
        checker = false;
      } else {
        checker = true;
      }
    }
  }
  if (object1Keys.length !== object2Keys.length) {
    checker = false;
  }
  return checker;
};

const shirtObject = { color: "red", size: "medium" };
const anotherShirtObject = { size: "medium", color: "red" };
eqObjects(shirtObject, anotherShirtObject); // => true
assertEqual(eqObjects(shirtObject, anotherShirtObject), true); // => true
assertEqual(eqObjects(shirtObject, anotherShirtObject), false); // => false

const longSleeveShirtObject = { size: "medium", color: "red", sleeveLength: "long" };
eqObjects(shirtObject , longSleeveShirtObject); // => false
assertEqual(eqObjects(shirtObject, longSleeveShirtObject), true); // => false
assertEqual(eqObjects(shirtObject, longSleeveShirtObject), false); // => true

const multiColorShirtObject = { colors: ["red", "blue"], size: "medium" };
const anotherMultiColorShirtObject = { size: "medium", colors: ["red", "blue"] };
eqObjects(multiColorShirtObject, anotherMultiColorShirtObject); // => true
assertEqual(eqObjects(multiColorShirtObject, anotherMultiColorShirtObject), true); // => true
assertEqual(eqObjects(multiColorShirtObject, anotherMultiColorShirtObject), false); // => false)

const longSleeveMultiColorShirtObject = { size: "medium", colors: ["red", "blue"], sleeveLength: "long" };
eqObjects(multiColorShirtObject, longSleeveMultiColorShirtObject); // => false
assertEqual(eqObjects(multiColorShirtObject, longSleeveMultiColorShirtObject), false); // => true
assertEqual(eqObjects(multiColorShirtObject, longSleeveMultiColorShirtObject), true); // => false