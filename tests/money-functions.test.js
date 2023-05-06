const { getCoins, formatCurrency } = require("../src/js/money-functions.js");

describe("formatCurrency", () => {
  test(`Given the amount 0, it returns "$0.00"`, () => {
    const returnValue = formatCurrency(0);
    expect(returnValue).toBe("$0.00");
  });
  test(`Given the amount 1, it returns "$1.00"`, () => {
    const returnValue = formatCurrency(1);
    expect(returnValue).toBe("$1.00");
  });
  test(`Given the amount 1.5 it returns "$1.50".`, () => {
    const returnValue = formatCurrency(1.5);
    expect(returnValue).toBe("$1.50");
  });
  test(`Given the amount 0.01, it returns "$0.01"`, () => {
    const returnValue = formatCurrency(0.01);
    expect(returnValue).toBe("$0.01");
  });
  test(`Given the amount 527.6789, it returns "$527.68".`, () => {
    const returnValue = formatCurrency(527.6789);
    expect(returnValue).toBe("$527.68");
  });
  test(`Given the amount -1, it returns "-$1.00".`, () => {
    const returnValue = formatCurrency(-1);
    expect(returnValue).toBe("-$1.00");
  });
  test(`Given the amount -22.879, it returns "-$22.88"`, () => {
    const returnValue = formatCurrency(-22.879);
    expect(returnValue).toBe("-$22.88");
  });
  test(`Given the amount 1.999, it returns "$2.00"`, () => {
    const returnValue = formatCurrency(1.999);
    expect(returnValue).toBe("$2.00");
  });
});

describe("getCoins", () => {
  test(`32 cents produces: quarters: 1, dimes: 0, nickels: 1, pennies: 2`, () => {
    const result = getCoins(32);
    expect(result).toEqual({
      quarters: 1,
      dimes: 0,
      nickels: 1,
      pennies: 2,
    });
  });
});
