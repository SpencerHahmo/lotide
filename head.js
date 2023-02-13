const head = (array) => {
  if (array.length === undefined || array[0] === undefined) return undefined;
  return (array[0]);
  
  // let header = undefined;
  // if (array.length !== undefined) {
  //   header = array[0];
  // } else if (array[0] === undefined) {
  //   header = undefined;
  // }
  // return header;
};

const assertEqual = (actual, expected) => {
  if (actual === expected) console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  else console.log(`❌❌❌ Assertion Failed: ${actual} !== ${expected}`);
};

assertEqual(head([5,6,7]), 5);
assertEqual(head([1,2,3,4]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
assertEqual(head([]), "Labbing");
assertEqual(head([undefined, NaN, 1, true, "test"]), undefined);