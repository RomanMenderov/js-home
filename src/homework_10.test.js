import {
  checkUserInput,
  isStringDate,
  isStringRuMobilePhone,
  isStringEmail,
} from "./homework_10";

describe("test 10th task", () => {
  beforeEach(() => {
    jest.spyOn(console, "log");
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  test("it should check if string is a date", () => {
    expect(isStringDate("01-12-1248")).toEqual(true);
    expect(isStringDate("48.15.50")).toEqual(false);
  });
  test("it should check if string is a mobyle", () => {
    expect(isStringRuMobilePhone("89012233222")).toEqual(true);
    expect(isStringRuMobilePhone("8-800-756-65-55")).toEqual(true);
  });
  test("it should check if string is a email", () => {
    expect(isStringEmail("test@test.me")).toEqual(true);
    expect(isStringEmail("rest.test.ru")).toEqual(false);
  });

  test("it should check if our function do analize", () => {
    const values = ["test@test.me", "89012233222", "rest.test.ru"];
    jest.spyOn(window, "prompt").mockImplementation(() => values.shift());

    checkUserInput();
    expect(console.log.mock.calls[0][0]).toEqual("Вы ввели Email");
    checkUserInput();
    expect(console.log.mock.calls[1][0]).toEqual("Вы ввели мобильный телефон");
    checkUserInput();
    expect(console.log.mock.calls[2][0]).toEqual("Я не знаю что это :(");
  });
});
