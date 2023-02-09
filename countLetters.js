const countLetters = function(string) {
  const results = {};
  for (const letter of string) {
    if (letter !== " ") {
      if (results[letter]) {
        results[letter] += 1;
      } else {
        results[letter] = 1;
      }
    }
  }
  return results;
  //console.log(results);
};

console.log(countLetters("LHL"));
console.log(countLetters("The FitnessGram™ Pacer Test"));
console.log(countLetters("lighthouse in the house"));
// countLetters("LHL");
// countLetters("The FitnessGram™ Pacer Test");
// countLetters("lighthouse in the house");
// commented out lines can work in place of the lines above them