const FindModulesSize = require("./findModulesFolder");

describe("Module Folder Test", () => {
  test("should be able to add 1 + 1", () => {
    expect(new FindModulesSize(1).add(1)).toEqual({ num: 2 });
  });

  test("should expect node modules folder", () => {
    expect(new FindModulesSize(1, "./testDirectory").readDir()).toBe("16728");
  });
});
