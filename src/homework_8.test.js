import {
  checkCorrectData,
  getUsersData,
  getTypeOfDay,
  showMinutesFromMidnigt,
  showWhoIsYonger,
} from "./homework_8";

describe("test 8th task", () => {
  beforeEach(() => {
    jest.spyOn(console, "log");
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

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
    getTypeOfDay("26.11.2020");
    expect(console.log.mock.calls[0][0]).toEqual("Четверг");
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
    showWhoIsYonger("01.10.2020", "01.01.2000");
    expect(console.log.mock.calls[0][0]).toEqual("01.10.2020");
  });
});
