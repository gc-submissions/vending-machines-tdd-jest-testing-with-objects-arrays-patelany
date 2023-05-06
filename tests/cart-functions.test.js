const {
  calculateChange,
  isSufficientPayment,
  calculateTotal,
  addItem,
  removeItem,
} = require("../src/js/cart-functions.js");

describe("calculateChange", () => {
  test("Given total 5 and payment 6, it returns 1", () => {
    const change = calculateChange(5, 6);
    expect(change).toBe(1);
  });
  test("Given total 12.30 and payment 13.03, it returns 0.73.", () => {
    const change = calculateChange(12.3, 13.03);
    expect(change).toBeCloseTo(0.73, 2);
  });
  test("Given total 300 and payment 299, it returns `You still owe -$1`.", () => {
    const change = calculateChange(300, 299);
    expect(change).toBe("You still owe $-1");
  });
});

describe("isSufficientPayment", () => {
  test(`Given total 5 and payment 6, it returns true.`, () => {
    const returnValue = isSufficientPayment(5, 6);
    expect(returnValue).toBe(true);
  });
  test(`Given total 10 and payment 7, it returns false.`, () => {
    const returnValue = isSufficientPayment(10, 7);
    expect(returnValue).toBe(false);
  });
  test(`Given total 3 and payment 3, it returns true.`, () => {
    const returnValue = isSufficientPayment(3, 3);
    expect(returnValue).toBe(true);
  });
  test(`Given total 4.75 and payment 4.50, it returns false.`, () => {
    const returnValue = isSufficientPayment(4.75, 4.5);
    expect(returnValue).toBe(false);
  });
});

describe("calculateTotal", () => {
  test("Given an itemsArray of one item with price 4.99, it returns 4.99.", () => {
    // arrange
    const dummyArray = [{ name: "Candy", price: 4.99 }];
    // act
    const sum = calculateTotal(dummyArray);
    // assert
    expect(sum).toBe(4.99);
  });
  test("Given an itemsArray of three items with prices 3.50, 12.99, and 0.03, it returns 16.52.", () => {
    // arrange
    const dummyArray = [
      { name: "Candy", price: 3.5 },
      { name: "Pasta", price: 12.99 },
      { name: "Gatorade", price: 0.03 },
    ];
    // act
    const sum = calculateTotal(dummyArray);
    // assert
    expect(sum).toBeCloseTo(16.52);
  });
  test("Given an empty itemsArray, it returns 0", () => {
    // arrange
    const dummyArray = [];
    // act
    const sum = calculateTotal(dummyArray);
    // assert
    expect(sum).toBe(0);
  });
  test("Given an itemsArray of three items with prices 3.50, 12.99 it returns 16.49.", () => {
    // arrange
    const dummyArray = [
      { name: "Candy", price: 3.5 },
      { name: "Pasta", price: 12.99 },
    ];
    // act
    const sum = calculateTotal(dummyArray);
    // assert
    expect(sum).toBeCloseTo(16.49);
  });
});

describe("addItem", () => {
  test(`Call addItem with an empty itemsArray, name "Beans" and price 3. Then check that itemsArray has one item in it: { name: "Beans", price: 3 }.`, () => {
    const dummyArray = [];
    addItem(dummyArray, "Beans", 3);
    expect(dummyArray).toEqual([
      {
        name: "Beans",
        price: 3,
      },
    ]);
  });

  test(`Create an itemsArray with one item in it: { name: "Beans", price: 3 }. Call addItem with itemsArray, name "Sugar" and price 2. Then check that itemsArray has two items in it: { name: "Beans", price: 3 } and { name: "Sugar", price: 2 }.`, () => {
    const dummyArray = [{ name: "Beans", price: 3 }];
    addItem(dummyArray, "Sugar", 2);
    expect(dummyArray).toEqual([
      {
        name: "Beans",
        price: 3,
      },
      {
        name: "Sugar",
        price: 2,
      },
    ]);
  });

  test(`Create an itemsArray with three items in it: { name: "Beans", price: 3 }, { name: "Sugar", price: 2 }, { name: "Candy", price: 4 }. Call addItem with itemsArray, name "Popcorn" and price 5. Then check that itemsArray has four items in it: { name: "Beans", price: 3 },{ name: "Sugar", price: 2 }, { name: "Sugar", price: 2 }, { name: "Candy", price: 4 }, { name: "Popcorn", price: 5 }.`, () => {
    const dummyArray = [
      { name: "Beans", price: 3 },
      { name: "Sugar", price: 2 },
      { name: "Candy", price: 4 },
    ];
    addItem(dummyArray, "Popcorn", 5);
    expect(dummyArray).toEqual([
      {
        name: "Beans",
        price: 3,
      },
      {
        name: "Sugar",
        price: 2,
      },
      { name: "Candy", price: 4 },
      { name: "Popcorn", price: 5 },
    ]);
  });
});

describe("removeItem", () => {
  test(`Remove the first element from an array of three items`, () => {
    const dummyArray = [
      { name: "Beans", price: 3 },
      { name: "Sugar", price: 2 },
      { name: "Candy", price: 4 },
    ];
    removeItem(dummyArray, 0);
    expect(dummyArray).toEqual([
      { name: "Sugar", price: 2 },
      { name: "Candy", price: 4 },
    ]);
  });
  test(`Remove the last element from an array of three items`, () => {
    const dummyArray = [
      { name: "Beans", price: 3 },
      { name: "Sugar", price: 2 },
      { name: "Candy", price: 4 },
    ];
    removeItem(dummyArray, dummyArray.length - 1);
    expect(dummyArray).toEqual([
      { name: "Beans", price: 3 },
      { name: "Sugar", price: 2 },
    ]);
  });
  test(`Remove the middle element from an array of three items`, () => {
    const dummyArray = [
      { name: "Beans", price: 3 },
      { name: "Sugar", price: 2 },
      { name: "Candy", price: 4 },
    ];
    removeItem(dummyArray, Math.floor(dummyArray.length - 1) / 2);
    expect(dummyArray).toEqual([
      { name: "Beans", price: 3 },
      { name: "Candy", price: 4 },
    ]);
  });
  test(`Remove the only element from an array of one item`, () => {
    const dummyArray = [{ name: "Beans", price: 3 }];
    removeItem(dummyArray, 0);
    expect(dummyArray).toEqual([]);
  });
});
