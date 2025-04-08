const assert = require("chai").assert;
const middle = require("../middle");


describe("#middle", () => {
  it("returns an empty array when passed [3, 6]", () =>{
    assert.deepEqual(middle([3, 6]), []);
  });

  it("returns an empty array when passed an empty array", () => {
    assert.deepEqual(middle([]), []);
  });

  it("returns [9] when passed [3, 6, 9, 12, 15]", () => {
    assert.deepEqual(middle([3, 6, 9, 12, 15]), [9]);
  });

  it("returns [15, 20] when passed [5, 10, 15, 20, 25, 30", () => {
    assert.deepEqual(middle([5, 10, 15, 20, 25, 30]), [15, 20]);
  });
});