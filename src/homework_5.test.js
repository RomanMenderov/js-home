import {
  createNewArrayOfNumbers,
  sumOfArray,
  creaneNewDoubleArray,
  showMinMaxElement,
} from "./homework_5";

describe("test 5th task", () => {
  beforeEach(() => {
    jest.spyOn(console, "log");
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  test("it should check if array length is 10", () => {
    expect(typeof createNewArrayOfNumbers()).toEqual("object");
    expect(createNewArrayOfNumbers().length).toEqual(10);
  });
  test("it should check ithe summ of array", () => {
    const myArray = [1, 2, 5];
    sumOfArray(myArray);
    expect(console.log.mock.calls[0][0]).toEqual(8);
  });
  test("it should check if function make new array with double values", () => {
    const oldArray = [1, 2, 3];
    const newArray = creaneNewDoubleArray(oldArray);

    expect(newArray).toEqual([2, 4, 6]);
  });
  test("it should check if function sort array ", () => {
    const oldArray = [4, 2, 3];
    showMinMaxElement(oldArray);

    expect(console.log.mock.calls[0][0]).toEqual("Min = 2, Max = 4");
  });
});
