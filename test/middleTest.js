const assertArraysEqual = require("../assertArraysEqual");
const middle = require("../middle");


assertArraysEqual(middle([3, 6]), []);
assertArraysEqual(middle([]), []);
assertArraysEqual(middle([3, 6, 9, 12, 15]), [9]);
assertArraysEqual(middle([5, 10, 15, 20, 25, 30]), [15, 20]);