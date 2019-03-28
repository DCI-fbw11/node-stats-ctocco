//making first change
class Calc {
  constructor(num) {
    this.num = num;
  }

  // adding

  add(numToAdd) {
    this.throwOnBadDatatype(numToAdd);
    this.num = this.num + numToAdd;
    return this;
  }

  plus(num) {
    return this.add(num);
  }

  //subtracting

  subtract(numToMinus) {
    this.throwOnBadDatatype(numToMinus);
    this.num = this.num - numToMinus;
    return this;
  }

  minus(num) {
    return this.subtract(num);
  }

  //multiply

  multiply(numToMultiply) {
    this.num = this.num * numToMultiply;
    return this;
  }

  times(num) {
    return this.multiply(num);
  }

  // divide

  divide(numToDivide) {
    this.num = this.num / numToDivide;
    return this;
  }

  fraction(num) {
    return this.divide(num);
  }

  result() {
    let output = this.num.toFixed(2);
    console.log(output);
  }

  throwOnBadDatatype(numToAdd) {
    if (typeof numToAdd === "string") {
      throw new Error("No strings allowed");
    }

    if (typeof numToAdd === "object") {
      throw new Error("No object allowed");
    }
  }

  throwOnBadDatatype(numToSubtract) {
    if (typeof numToSubtract === "string") {
      throw new Error("No strings allowed");
    }

    if (typeof numToSubtract === "object") {
      throw new Error("No object allowed");
    }
  }
}

new Calc(1)
  .add(3)
  .plus(2)
  .fraction(4)
  .subtract(3)
  .multiply(2)
  .divide(3)
  .result();

module.exports = Calc;
