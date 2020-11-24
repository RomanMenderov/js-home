import {
  showSumm,
  showMultiplyTable,
  checkCorrectData,
  getUsersData,
  showOddAverage,
} from "./homework_3";

describe("test 3st task", () => {
  test("it should show summ", () => {
    expect(showSumm(1, 2)).toEqual(3);
    expect(showSumm(2, 5)).toEqual(14);
  });

  test("it should show multiply table", () => {
    expect(showMultiplyTable(1)).toEqual(
      `1 X 1 = 1\n1 X 2 = 2\n1 X 3 = 3\n1 X 4 = 4\n1 X 5 = 5
1 X 6 = 6\n1 X 7 = 7\n1 X 8 = 8\n1 X 9 = 9\n1 X 10 = 10\n`
    );
  });

  test("it should show  number greater then 0", () => {
    expect(checkCorrectData("1")).toEqual(true);
    expect(checkCorrectData("13")).toEqual(true);
    expect(checkCorrectData("0")).toEqual(false);
  });

  test("it should show number or false", () => {
    const values = ["10", "-5"];
    jest.spyOn(window, "prompt").mockImplementation(() => values.shift());

    expect(getUsersData()).toEqual(10);
    expect(getUsersData()).toEqual(false);
  });

  test("it should show  odd average", () => {
    expect(showOddAverage(1)).toEqual(1);
    expect(showOddAverage(3)).toEqual(2);
    expect(showOddAverage(0)).toEqual(false);
  });
});
