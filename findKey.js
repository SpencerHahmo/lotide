const assertEqual = (actual, expected) => {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    console.log(`❌❌❌ Assertion Failed: ${actual} !== ${expected}`);
  }
};

const findKey = (object, callback) => {
  const keys = Object.keys(object);
  for (const key of keys) {
    const item = object[key];
    const result = callback(item);
    if (result) {
      return key;
    }
  }
  return undefined;
};

assertEqual(findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2), "noma"); // => "noma"


assertEqual(findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 4), undefined); // => "undefined"

assertEqual(findKey({
  "Sonic": { rating: 94 },
  "Mario": { rating: 87 },
  "Avatar": { rating: 75 },
  "Top Gun Maverick": { rating: 98 }
}, x => x.rating < 70), undefined);

assertEqual(findKey({
  "Sonic": { rating: 94 },
  "Mario": { rating: 87 },
  "Avatar": { rating: 75 },
  "Top Gun Maverick": { rating: 98 }
}, x => x.rating > 95), "Top Gun Maverick");