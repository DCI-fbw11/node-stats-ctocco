const Calc = require("./index");

describe("Calculator tests", () => {
  // Testing the add function

  test("should be able to add 1 + 1", () => {
    expect(new Calc(1).add(1)).toEqual({ num: 2 });
  });

  test("should be able to add multiple numbers", () => {
    expect(new Calc(1).add(1).add(1)).toEqual({ num: 3 });
  });

  test("Dont accept strings", () => {
    expect(() => new Calc(100).add("onehundret")).toThrow("No strings allowed");
  });

  test("Dont accept object", () => {
    expect(() => new Calc(100).add({ num: "onehundret" })).toThrow(
      "No object allowed"
    );
  });

  //Testing the Minus function

  test("should be able to minus 1 - 1", () => {
    expect(new Calc(1).subtract(1)).toEqual({ num: 0 });
  });

  test("should be able to minus several numbers", () => {
    expect(new Calc(2).subtract(1).subtract(1)).toEqual({ num: 0 });
  });

  //Testing the times function

  test("should be able to times 2 times 2", () => {
    expect(new Calc(2).multiply(2)).toEqual({ num: 4 });
  });

  test("should be able to times several numbers", () => {
    expect(new Calc(2).multiply(2).multiply(2)).toEqual({ num: 8 });
  });

  //Testing the divide function

  test("should be able to divide 2 divide 2", () => {
    expect(new Calc(2).divide(2)).toEqual({ num: 1 });
  });

  test("should be able to divide several numbers", () => {
    expect(new Calc(2).divide(2).divide(2)).toEqual({ num: 0.5 });
  });

  //Testing the result function

  test("testing the result function", () => {
    expect(
      new Calc(3)
        .add(3)
        .subtract(0)
        .multiply(4)
        .divide(4)
    ).toEqual({ num: 6 });
  });
});
