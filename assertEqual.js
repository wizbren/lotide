const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log('✅Assertion Passed: ${actual} === ${expected}');
  } else {
    console.log('🛑Assertion Failed: ${actual} !== ${expected}');
  }
};

assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);
assertEqual(4, (2 + 2));
assertEqual(3, (-3 + 6));
assertEqual("I'm Dumb", "Hopefully not too dumb");