const assertArraysEqual = function(actual, expected) {
  let letterAmount = 0;
  for (let i = 0; i < actual.length; i++) {
    letterAmount++;
  }
  if (letterAmount === Number(expected)) {
    console.log("✅✅✅ Assertion Passed");
  } else {
    console.log("❌❌❌ Assertion Failed");
  }
  /*
  More in depth
  if (letterAmount === Number(expected)) {
    if (letterAmount === 0) {
      console.log("✅✅✅ The letter in question didn't show up at all which matches how often it should have shown up")
    } else if (letterAmount === 1) {
      console.log(`✅✅✅ The letter in question shows up once which matches the ${expected} time it should have shown up.`)
    } else if (letterAmount >= 2) {
      console.log(`✅✅✅ The letter in question shows up ${letterAmount} times which matches the ${expected} times it should have shown up.`)
    }
  } else {
    if (letterAmount === 0) {
      console.log("❌❌❌ The letter in question didn't show up at all which doesn't match how often it should have shown up.")
    } else if (letterAmount === 1) {
      console.log(`❌❌❌ The letter in question only showed up once which doesn't which doesn't match how often it should have shown up.`)
    } else if (letterAmount >= 2) {
      console.log(`❌❌❌ The letter in question shows up ${letterAmount} times which doesn't match how often it should have shown up.`)
    }
  }
  */
};

const letterPositions = function(sentence) {
  const results = {};
  for (let i = 0; i < sentence.length; i++) {
    if (sentence[i] !== " ") {
      if (results[sentence[i]]) {
        results[sentence[i]].push(i);
      } else {
        results[sentence[i]] = [i];
      }
    }
  }
  return results;
};

console.log(letterPositions("Woohoo"));
console.log(letterPositions("lighthouse in the house"));
console.log(letterPositions("The FitnessGram™ Pacer Test"));
assertArraysEqual(letterPositions("test").t, [2]); // Should return true
assertArraysEqual(letterPositions("hello").e, [1]); // Should return true
assertArraysEqual(letterPositions("The FitnessGram™ Pacer Test").T, [1]); // Should return false