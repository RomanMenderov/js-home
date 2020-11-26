import {
  checkCorrectData,
  getUsersData,
  getTypeOfDay,
  showMinutesFromMidnigt,
  showWhoIsYonger,
} from "./homework_8";

describe("test 8th task", () => {
  test("it should check if data is correct", () => {
    expect(checkCorrectData("01.02.2019")).toEqual(true);
    expect(checkCorrectData("41.02.2019")).toEqual(false);
  });

  test("it should check if func show correct day", () => {
    const values = ["26.11.2020"];
    jest.spyOn(window, "prompt").mockImplementation(() => values.shift());

    expect(getUsersData()).toEqual("26.11.2020");
  });

  test("it should check if func show correct day", () => {
    expect(getTypeOfDay("26.11.2020")).toEqual("Четверг");
  });

  test("it should show minutes from 00:00", () => {
    const thisDateZero = Date.parse(
      [
        new Date().getFullYear(),
        new Date().getMonth() + 1,
        new Date().getDate(),
      ].join("-")
    );
    const now = new Date().valueOf();
    expect(showMinutesFromMidnigt()).toEqual(
      console.log((now - thisDateZero) / 60000)
    );
  });

  test("it should show who is older", () => {
    expect(showWhoIsYonger("01.10.2020", "01.01.2000")).toEqual("01.10.2020");
  });
});
