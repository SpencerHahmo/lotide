const assertEqual = require('./assertEqual');

const eqArrays = (actual, expected) => {
  if (actual === undefined || expected === undefined) return undefined;
  if (actual.length !== expected.length) return false;
  for (let i = 0; i < actual.length; i++) {
    if (!(actual[i] === expected[i] && typeof actual[i] === typeof expected[i])) return false;
  }
  return true;
};

module.exports = eqArrays;