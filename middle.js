const middle = (array) => {
  if (array.length <= 2) console.log([]);
  else if (array.length % 2 === 0) console.log(array.slice(Math.floor(array.length / 2 - 1), Math.floor(array.length / 2 + 1)));
  else console.log(array.slice(Math.floor(array.length / 2), Math.floor(array.length / 2 + 1)));
};

middle([1]); // => []
middle([1, 2]); // => []
middle([1, 2, 3]); // => [2]
middle([1, 2, 3, 4, 5]); // => [3]
middle([1, 2, 3, 4]); // => [2, 3]
middle([1, 2, 3, 4, 5, 6]); // => [3, 4]