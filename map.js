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

const words = ["ground", "control", "to", "major", "tom"];

const map = (array, callbackFn) => {
  const results = [];
  for (let word of array) {
    results.push(callbackFn(word));
  }
  return results;
};

// TEST #1
const foods = ["apple", "orange", "fig"];
const foodLength = map(foods, food => food.length);
assertArraysEqual(foodLength, [5, 6, 3]);

// TEST #2
const monsters = ["dragon", "goblin", "kobold"];
const monsterName = map(monsters, monster => `scary ${monster}`);
assertArraysEqual(monsterName, ["scary dragon", "scary goblin", "scary kobold"]);

// TEST #3
const animals = ["cat", "rat", "bat"];
const capsAnimal = map(animals, animal => animal.toUpperCase());
assertArraysEqual(capsAnimal, ["CAT", "RAT", "BAT"]);