import {
  showMaxNumber,
  checkCorrectData,
  getUsersData,
  showMonthInConsole,
  isCircleInSquare,
} from "./homework_2";

describe("test 2st task", () => {
  test("it should show max number", () => {
    expect(showMaxNumber(1, 2)).toEqual(2);
    expect(showMaxNumber(2, -2)).toEqual(2);
    expect(showMaxNumber(2, 2)).toEqual("Числа равны 2");
  });

  test("it should show that number is from 1 to 12", () => {
    expect(checkCorrectData("1")).toEqual(true);
    expect(checkCorrectData("13")).toEqual(false);
    expect(checkCorrectData("-12")).toEqual(false);
  });

  test("it should show name of month", () => {
    expect(showMonthInConsole(1)).toEqual("февраль");
    expect(showMonthInConsole(13)).toEqual(undefined);
  });

  test("it should show number or false", () => {
    const values = ["10", "25"];
    jest.spyOn(window, "prompt").mockImplementation(() => values.shift());

    expect(getUsersData()).toEqual(9);
    expect(getUsersData()).toEqual(false);
  });

  test("it should show if circle in square", () => {
    expect(isCircleInSquare(10, 25)).toEqual("Круг поместится в квадрат");
    expect(isCircleInSquare(25, 10)).toEqual("Круг не поместится в квадрат");
  });
});
