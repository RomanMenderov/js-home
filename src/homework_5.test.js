import {
  createNewArrayOfNumbers,
  sumOfArray,
  creaneNewDoubleArray,
  showMinMaxElement,
} from "./homework_5";

describe("test 5th task", () => {
  test("it should check if array length is 10", () => {
    expect(typeof createNewArrayOfNumbers()).toEqual("object");
    expect(createNewArrayOfNumbers().length).toEqual(10);
  });
  test("it should check ithe summ of array", () => {
    const myArray = [1, 2, 5];
    expect(sumOfArray(myArray)).toEqual(8);
  });
  test("it should check if function make new array with double values", () => {
    const oldArray = [1, 2, 3];
    const newArray = creaneNewDoubleArray(oldArray);

    expect(newArray).toEqual([2, 4, 6]);
  });
  test("it should check if function sort array ", () => {
    const oldArray = [4, 2, 3];
    const sortedArray = showMinMaxElement(oldArray);

    expect(sortedArray[0] <= sortedArray[sortedArray.length - 1]).toEqual(true);
  });
});
