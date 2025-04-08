# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs.

## Usage

**Install it:**

`npm install @b-wizard/lotide`

**Require it:**

`const _ = require('@b-wizard/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

- `head(...)`: Returns the first element of an array.
- `tail(...)`: Cuts out the first element of an array, before returning the other elements.
- `middle(...)`: Returns the middle element of an array (or middle two elements, in case of even number of elements).
- `countOnly(...)`: Counts the number of times specific items occur in an array, and returns an object with the counts of each item.
- `countLetters(...)`: Counts the number of times each letter appears in a given string, and returns an object with the letter counts as properties.
- `letterPositions(...)`: Returns an object that has mapped each letter of a sentence, into an array of indices corrosponding to where each letter appears, while ignoring spaces.
- `findKey(...)`: Taking an object and a callback function as arguments, it iterates through each key and applies the function to the values. It returns the key's value if it is truthy, or returns undefined if no key is found.
- `findKeyByValue(...)`: Taking an object and a value as arguments, it iterates through an object, comparing each of the key's values to a given value. The corresponding key is returned if it is a match to the given value, or returns undefined if it is not.
- `map(...)`: Taking an array and a callback function as arguments, it iterates over the array and applies the callback function to each element, collecting the results and returning a new array with the transformed elements.
- `takeUntil(...)`: Iterates over an array, adding each element to a result array until the callback returns true, and then it stops. It returns the entire array if no element triggers the callback.
- `without(...)`: Takes in a source array as well as an array of items to remove, compares them, and removes matching elements. It then returns a filtered array.
- `assertEqual(...)`: Compares an actual value with an expected one, and logs a pass or fail based on whether they are equal (or not).
- `assertArraysEqual(...)`: Using the eqArrays function, it compares two arrays and logs a pass or fail based on whether they're equal (or not).
- `assertObjectsEqual(...)`: Using eqObjects function, it compares two objects and logs a pass or fail based on whether they're equal (or not).
- `eqArrays(...)`: Compares two arrays element by element, and length to length. It returns true if they are identical, and false if not.
- `eqObjects(...)`: Compares two objects, checking if they have the same corresponding keys and values, as well as comparing nested arrays, and returns true if they are identical, and false if not.