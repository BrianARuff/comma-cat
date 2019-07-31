const commaCat = require("./comma-cat");

describe("commaCat", () => {
  
  test("['1', '2', '3'] returns as 1, 2, 3", () => {
    expect(commaCat(["1", "2", "3"])).toBe("1, 2, 3");
  });

  test("['1'] returns as 1", () => {
    expect(commaCat(["1"])).toBe("1");
  });

  test("['1', '2', '3'] returns as 1, 2, 3", () => {
    expect(commaCat(["1", "2", 3])).not.toBe("1, 2, 3");
  });

  test("['1', '2', '3'] returns as 1, 2, 3", () => {
    expect(commaCat(["1", "2", false])).not.toBe("1, 2, false");
  });

  test("['1', '2', '3'] returns as 1, 2, 3", () => {
    expect(commaCat(["1", "2", undefined])).not.toBe("1, 2, undefined");
  });

  test("['1', '2', '3'] returns as 1, 2, 3", () => {
    expect(commaCat(["1", "2", null])).not.toBe("1, 2, null");
  });

});