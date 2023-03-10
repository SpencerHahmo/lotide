const words = ["hello", "world", "lighthouse"];

const without = (source, itemsToRemove) => {
  let formattedValues = [];

  for (let element of source) {
    if (!itemsToRemove.includes(element)) formattedValues.push(element);
  }
  
  console.log(formattedValues);
};

without([1, 2, 3], [1]); // Should be [2, 3]
without(["1", "2", "3"], [1, 2, "3"]); // Should be ["1", "2"]
without(["Testing", "with", "nothing", "to", "remove"],[]);
without([1, "2", '3', false, true, "jackpot"], ["1", '2', '3', false, undefined, NaN]);
without(["its", "over", "9000", false, 9001, "!", true], ["9000", false, true, undefined, NaN]);
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
without(words, ["hello", "world", "lighthouse"]);
without(["hello", "lighthouse", "outstanding", "world", "job"], words);

module.exports = without;