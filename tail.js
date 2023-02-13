const tail = (array) => {
  if (array.length > 1) return array.slice(1);
  else if (array.length === 1 || array.length === 0) return undefined;
};

const assertEqual = (actual, expected) => {
  let checker = false;
  if (actual === undefined) console.log(`❌❌❌ Assertion Failed: ${actual} !== ${expected}`);
  else {
    for (let i = 0; i < actual.length; i++) {
      if (actual[i] === expected[i]) checker = true;
      else if (actual[i] !== expected[i]) {
        checker = false;
        break;
      }
    }
    if (checker === true) console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
    else console.log(`❌❌❌ Assertion Failed: ${actual} !== ${expected}`);
  }
};

assertEqual(tail([5, 6, 7]), [6, 7]);
assertEqual(tail([1]), 1);
assertEqual(tail([]), 0);
assertEqual(tail(["Hello", "Lighthouse", "Labs"]), ["Lighthouse", "Labs"]);
assertEqual(tail(["Hello", "Lighthouse", "Labs"]), ["Lighthouse"]);
assertEqual(tail([1, 2, 3, 4, 5]), [2, 3, 4]);
assertEqual(tail([1, 2, 3, 4, 5]), [2, 3, 4, 5]);