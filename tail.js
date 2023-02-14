const tail = (array) => {
  if (array.length === 1 || array.length === 0) return [];
  else if (array.length > 1) return array.slice(1);
};

// const assertEqual = (actual, expected) => {
//   if (actual === undefined) {
//     console.log(`❌❌❌ Tail Assertion Failed: ${actual} !== ${expected}`);
//   } else {
//     for (let i = 0; i < actual.length; i++) {
//       if (actual[i] === expected[i]) {
//         checker = true;
//       } else if (actual[i] !== expected[i]) {
//         checker = false;
//         break;
//       }
//     }
//     if (checker === true) {
//       console.log(`✅✅✅ Tail Assertion Passed: ${actual} === ${expected}`);
//     } else if (checker === false) {
//       console.log(`❌❌❌ Tail Assertion Failed: ${actual} !== ${expected}`);
//     }
//   }
// };

module.exports = tail;