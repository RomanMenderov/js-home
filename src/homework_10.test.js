import {
  checkUserInput,
  isStringDate,
  isStringRuMobilePhone,
  isStringEmail,
} from "./homework_10";

describe("test 10th task", () => {
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
    expect(checkUserInput("test@test.me")).toEqual("Вы ввели Email");
    expect(checkUserInput("89012233222")).toEqual("Вы ввели мобильный телефон");
    expect(checkUserInput("rest.test.ru")).toEqual("Я не знаю что это :(");
  });
});
