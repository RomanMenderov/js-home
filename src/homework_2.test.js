import {
  showMaxNumber,
  checkCorrectData,
  getUsersData,
  showMonthInConsole,
  isCircleInSquare,
} from "./homework_2";

describe("test 2st task", () => {
  beforeEach(() => {
    jest.spyOn(console, "log");
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  test("it should show max number", () => {
    showMaxNumber(1, 2);
    expect(console.log.mock.calls[0][0]).toEqual(2);
    showMaxNumber(3, -2);
    expect(console.log.mock.calls[1][0]).toEqual(3);
    showMaxNumber(2, 2);
    expect(console.log.mock.calls[2][0]).toEqual("Числа равны 2");
  });

  test("it should show that number is from 1 to 12", () => {
    expect(checkCorrectData("1")).toEqual(true);
    expect(checkCorrectData("13")).toEqual(false);
    expect(checkCorrectData("-12")).toEqual(false);
  });

  test("it should show name of month", () => {
    const values = ["2", "5"];
    jest.spyOn(window, "prompt").mockImplementation(() => values.shift());

    showMonthInConsole();
    expect(console.log.mock.calls[0][0]).toEqual("февраль");
    showMonthInConsole();
    expect(console.log.mock.calls[1][0]).toEqual("май");
  });

  test("it should show number or false", () => {
    const values = ["10", "25"];
    jest.spyOn(window, "prompt").mockImplementation(() => values.shift());

    expect(getUsersData()).toEqual(9);
    expect(getUsersData()).toEqual(false);
  });

  test("it should show if circle in square", () => {
    isCircleInSquare(10, 25);
    expect(console.log.mock.calls[0][0]).toEqual("Круг поместится в квадрат");
    isCircleInSquare(25, 10);
    expect(console.log.mock.calls[1][0]).toEqual(
      "Круг не поместится в квадрат"
    );
  });
});
