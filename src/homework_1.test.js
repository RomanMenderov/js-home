import {
  showProduct,
  checkCorrectData,
  showTotalStringLength,
  showSummInConsole,
} from "./homework_1";

describe("test 1st task", () => {
  beforeEach(() => {
    jest.spyOn(console, "log");
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  test("it should show a multiply", () => {
    showProduct(1, 2);
    expect(console.log.mock.calls[0][0]).toEqual(2);
  });
  test("it should show a total length of strings", () => {
    showTotalStringLength("три", "два");
    expect(console.log.mock.calls[0][0]).toEqual(6);
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

    showSummInConsole();
    expect(console.log.mock.calls[0][0]).toEqual(3);
    expect(checkCorrectData()).toBe(false);
  });
});
