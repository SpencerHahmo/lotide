const tail = require('../tail');
const assertEqual = require('../assertEqual');
const eqArrays = require('../eqArrays');

// assertEqual(tail([5, 6, 7]), [6, 7]);
// assertEqual(tail([]), undefined);
// assertEqual(tail(["Hello", "Lighthouse", "Labs"]), ["Lighthouse", "Labs"]);
// assertEqual(tail(["Hello", "Lighthouse", "Labs"]), ["Lighthouse"]);
// assertEqual(tail([1, 2, 3, 4, 5]), [2, 3, 4]);
// assertEqual(tail([1, 2, 3, 4, 5]), [2, 3, 4, 5]);

assertEqual(eqArrays(tail([5, 6, 7]), [6, 7]), true);
assertEqual(eqArrays(tail([]), undefined), true);
assertEqual(eqArrays(tail(["Hello", "Lighthouse", "Labs"]), ["Lighthouse", "Labs"]), true);
assertEqual(eqArrays(tail(["Hello", "Lighthouse", "Labs"]), ["Lighthouse"]), false);
assertEqual(eqArrays(tail([1, 2, 3, 4, 5]), [2, 3, 4]), false);
assertEqual(eqArrays(tail([1, 2, 3, 4, 5]), [2, 3, 4, 5]), true);