const assertArraysEqual = (actual, expected) => {
  let letterAmount = 0;
  for (let i = 0; i < actual.length; i++) {
    letterAmount++;
  }
  if (letterAmount === Number(expected)) console.log(`✅✅✅ Assertion Passed: ${letterAmount} === ${expected}`);
  else console.log(`❌❌❌ Assertion Failed: ${letterAmount} !== ${expected}`);
  // if (letterAmount === Number(expected)) console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  // else console.log(`❌❌❌ Assertion Failed: ${actual} !== ${expected}`);
};

const letterPositions = (sentence) => {
  const results = {};
  for (let i = 0; i < sentence.length; i++) {
    if (sentence[i] !== " ") {
      if (results[sentence[i]]) results[sentence[i]].push(i);
      else results[sentence[i]] = [i];
    }
  }
  return results;
};

assertArraysEqual(letterPositions("test").t, [2]); // Should return true
assertArraysEqual(letterPositions("hello").e, [1]); // Should return true
// console.log(letterPositions("Woohoo"));
// console.log(letterPositions("lighthouse in the house"));
assertArraysEqual(letterPositions("Woohoo").o, [3]); // Should retrun false
assertArraysEqual(letterPositions("Woohoo").W, [1]); // Should retrun true
assertArraysEqual(letterPositions("lighthouse in the house").i, [1]); // Should return false
assertArraysEqual(letterPositions("lighthouse in the house").h, [4]); // Should return false

module.exports = letterPositions;