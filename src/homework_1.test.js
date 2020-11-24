import {
  showProduct,
  checkCorrectData,
  showTotalStringLength,
  showSummInConsole,
} from "./homework_1";

describe("test 1st task", () => {
  test("it should show a multiply", () => {
    expect(showProduct(1, 2)).toEqual(2);
  });
  test("it should show a total length of strings", () => {
    expect(showTotalStringLength("три", "два")).toEqual(6);
  });

  test("it should validate user input as number", () => {
    expect(checkCorrectData("300")).toEqual(true);
    expect(checkCorrectData("20")).toEqual(false);
    expect(checkCorrectData("2000")).toEqual(false);
    expect(checkCorrectData("-300")).toEqual(false);
  });
  test("it should get summ of 3 numbers", () => {
    const values = ["300", "-200"];
    jest.spyOn(window, "prompt").mockImplementation(() => values.shift());
    jest.spyOn(window, "prompt");

    expect(showSummInConsole()).toEqual(3);
    expect(checkCorrectData()).toBe(false);
  });
});
