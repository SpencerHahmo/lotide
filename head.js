let header = undefined;

const head = function(array) {
  if (array.length !== undefined) {
    header = array[0];
  } else if (array[0] === undefined) {
    header = undefined;
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
assertEqual(head([]), "Labbing");