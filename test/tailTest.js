const assert = require("chai").assert;
const tail = require("../tail");


describe("#tail", () => {
  it("returns an array with the elements after the first index for ['Hello', 'Lighthouse', 'Labs']", () => {
    const result = tail(["Hello", "Lighthouse", "Labs"]);
    assert.strictEqual(result.length, 2);
    assert.strictEqual(result[0], "Lighthouse");
    assert.strictEqual(result[1], "Labs");
  });

  it("doesn't modify the original array", () => {
    const words = ["Yo Yo", "Lighthouse", "Labs"];
    tail(words);
    assert.strictEqual(words.length, 3);
  });

  it("returns an empty array for single element arrays", () => {
    const result = tail(["test"]);
    assert.strictEqual(result.length, 0);
  });

  it("returns an empty array when passed an empty array", () => {
    const result = tail([]);
    assert.strictEqual(result.length, 0);
  });
});