const assertEqual = require('./assertEqual');

const head = (array) => {
  if (array.length === undefined || array[0] === undefined) return undefined;
  return (array[0]);
  
  /* if (array.length !== undefined) return array[0];
  else return undefined; */

  // let header = undefined;
  // if (array.length !== undefined) {
  //   header = array[0];
  // } else if (array[0] === undefined) {
  //   header = undefined;
  // }
  // return header;
};

module.exports = head;