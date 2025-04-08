const head   = require('./head');
const tail   = require('./tail');
const middle = require('./middle');
const countOnly = require('./countOnly');
const countLetters = require('./countLetters');
const letterPositions = require('./letterPositions');
const findKey = require('./findKey');
const findKeyByValue = require('./findKeyByValue');
const map = require('./map');
const takeUntil = require('./takeUntil');
const without = require('./without');
const assertEqual = require('./assertEqual');
const assertArraysEqual = require('./assertArraysEqual');
const assertObjectsEqual = require('./assertObjectsEqual');
const eqArrays = require('./eqArrays');
const eqObjects = require('./eqObjects');

module.exports = {
  head:   head,
  tail:   tail,
  middle: middle,
  countOnly: countOnly,
  countLetters: countLetters,
  letterPositions: letterPositions,
  findKey: findKey,
  findKeyByValue: findKeyByValue,
  map: map,
  takeUntil: takeUntil,
  without: without,
  assertEqual: assertEqual,
  assertArraysEqual: assertArraysEqual,
  assertObjectsEqual: assertObjectsEqual,
  eqArrays: eqArrays,
  eqObjects: eqObjects
};