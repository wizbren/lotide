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
  if (eqArrays(array1, array2)) {
    console.log(`✅Assertion Passed: ${array1} === ${array2}`);
  } else {
    console.log(`🛑Assertion Failed: ${array1} !== ${array2}`);
  }
};

const middle = function(array) {
  if (array.length <= 2) {
    return [];
  }
  let middleIndex = Math.floor(array.length / 2);

  if (array.length % 2 === 1) {
    return [array[middleIndex]];
  } else {
    let middle1 = array[middleIndex - 1];
    let middle2 = array[middleIndex];
    return [middle1, middle2];
  }
};

assertArraysEqual(middle([3, 6]), []);
assertArraysEqual(middle([]), []);
assertArraysEqual(middle([3, 6, 9, 12, 15]), [9]);
assertArraysEqual(middle([5, 10, 15, 20, 25, 30]), [15, 20]);