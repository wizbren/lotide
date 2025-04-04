const eqArrays = function(array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  }

  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return false;
    }
  }
  return true;
};

const assertArraysEqual = function(array1, array2) {
  if(eqArrays(array1, array2)) {
    console.log(`✅Assertion Passed: ${array1} === ${array2}`);
  } else {
    console.log(`🛑Assertion Failed: ${array1} !== ${array2}`);
  }
};

const takeUntil = function(array, callbackFn) {
  const result = [];
  for (let i = 0;i < array.length; i++) {
    if (callbackFn(array[i])) {
      return result;
    }
    result.push(array[i]);
  }
  return result;
};

// COMPASS TESTS
const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);
// assertArraysEqual TESTS
const numbers = [1, 2, 3, 4, 5, 6, 7, -1, 8, 9, 10];
const numResult = takeUntil(numbers, x => x < 0);
assertArraysEqual(numResult, [1, 2, 3, 4, 5, 6, 7]);

const words = ["I", "am", "so", "tired", ".", "When", "can", "I", "sleep?"];
const wordResult = takeUntil(words, x => x === '.');
assertArraysEqual(wordResult, ["I", "am", "so", "tired"]);