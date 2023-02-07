let header = undefined;

const head = function(array) {
  if (array.length > 0) {
    header = array[0];
  }
};

const assertEqual = function(array, expectedValue) {
  if (header === expectedValue) {
    console.log(`✅✅✅ Header Assertion Passed: ${header} === ${expectedValue}`);
  } else if (header !== expectedValue) {
    console.log(`❌❌❌ Header Assertion Failed: ${header} !== ${expectedValue}`);
  }
};

assertEqual(head([5,6,7]), 5);
assertEqual(head([1,2,3,4]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Lighthouse");