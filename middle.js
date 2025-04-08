const middle = function(array) {
  if (array.length <= 2) {
    return [];
  }
  let middleIndex = Math.floor(array.length / 2);

  if (array.length % 2 === 1) {
    return [array[middleIndex]];
  } else {
    return [array[middleIndex - 1], array[middleIndex]];
  }
};

module.exports = middle;