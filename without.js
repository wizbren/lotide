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
}

const assertArraysEqual = function(array1, array2) {
  if(eqArrays(array1, array2)) {
    console.log(`✅Assertion Passed: ${array1} === ${array2}`);
  } else {
    console.log(`🛑Assertion Failed: ${array1} !== ${array2}`);
  }
}

const without = function(source, itemsToRemove) {
  const result = [];
  
  for (let i = 0; i < source.length; i++) {
    let item = source[i];
    
    let shouldRemove = false;
    for (let y = 0; y < itemsToRemove.length; y++) {
      if (item === itemsToRemove[y]) {
        shouldRemove = true;   
      }
    }
    
    if (!shouldRemove) {
      result.push(item);
    }
  }
  return result;
};

const result1 = without([1, 2, 3, 4], [2, 3]);
assertArraysEqual(result1, [1, 4]);