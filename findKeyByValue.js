const bestTVShowsByGenre = {
  sciFi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

const assertEqual = (actual, expected) => {
  if (actual === expected) console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  else console.log(`❌❌❌ Assertion Failed: ${actual} !== ${expected}`);
};

const findKeyByValue = (object, value) => {
  for (const key in object) {
    if (object[key] === value) return key;
  }
};

console.log(findKeyByValue(bestTVShowsByGenre, "The Expanse"));
console.log(findKeyByValue(bestTVShowsByGenre, "Brooklyn Nine-Nine"));
console.log(findKeyByValue(bestTVShowsByGenre, "The Wire"));
console.log(findKeyByValue(bestTVShowsByGenre, "Home Improvement"));

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama"); // should assert true
assertEqual(findKeyByValue(bestTVShowsByGenre, "Brooklyn Nine-Nine"), "drama"); // should assert false
assertEqual(findKeyByValue(bestTVShowsByGenre, "The Expanse"), "sciFi"); // should assert true
assertEqual(findKeyByValue(bestTVShowsByGenre, "Home Improvement"), undefined); // should assert true

module.exports = findKeyByValue;