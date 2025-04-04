const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑Assertion Failed: ${actual} !== ${expected}`);
  }
};

const findKey = function(object, callbackFn) {
  for (let key in object) {
    if (callbackFn(object[key])) {
      return key;
    }
  }
  return undefined;
};

const videogames = {
  "Elden Ring": 11,
  "Hollow Knight": 11,
  "Baldur's Gate 3": 11,
  "Valheim": 9,
  "UO Outlands": 10,
  "All EA Games": 1,
  "All Activision Games": 1,
  "WC3 Reforged": 0
};

const test1 = findKey(videogames, rating => rating <= 5);
assertEqual(test1, "All EA Games");

const test2 = findKey(videogames, rating => rating >= 10);
assertEqual(test2, "Elden Ring");