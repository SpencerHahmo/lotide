const tail = (array) => {
  if (array.length === 1 || array.length === 0) return [];
  else if (array.length > 1) return array.slice(1);
};

module.exports = tail;