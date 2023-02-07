let arrayTail = undefined;
let checker = false;

const tail = function(array) {
  if (array.length > 1) {
    arrayTail = array.slice(1);
  } else if (array.length === 1 || array.length === 0) {
    arrayTail = undefined;
  }
};

const assertEqual = function(values, expectedValues) {
  if (arrayTail === undefined) {
    console.log(`❌❌❌ Tail Assertion Failed: ${arrayTail} !== ${expectedValues}`);
  } else {
    for (let i = 0; i < arrayTail.length; i++) {
      if (arrayTail[i] === expectedValues[i]) {
        checker = true;
      } else if (arrayTail[i] !== expectedValues[i]) {
        checker = false;
        break;
      }
    }
    if (checker === true) {
      console.log(`✅✅✅ Tail Assertion Passed: ${arrayTail} === ${expectedValues}`);
    } else if (checker === false) {
      console.log(`❌❌❌ Tail Assertion Failed: ${arrayTail} !== ${expectedValues}`);
    }
  }
};

assertEqual(tail([5, 6, 7]), [6, 7]);
assertEqual(tail([1]), 1);
assertEqual(tail([]), 0);
assertEqual(tail(["Hello", "Lighthouse", "Labs"]), ["Lighthouse", "Labs"]);
assertEqual(tail(["Hello", "Lighthouse", "Labs"]), ["Lighthouse"]);
assertEqual(tail([1, 2, 3, 4, 5]), [2, 3, 4]);
assertEqual(tail([1, 2, 3, 4, 5]), [2, 3, 4, 5]);