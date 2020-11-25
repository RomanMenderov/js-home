import { diff, isWord, pow } from "./homework_6";

describe("test 6th task", () => {
  test("it should check if func returns number", () => {
    expect(diff(2, 3)).toEqual(1);
    expect(diff(2, -3)).toEqual(5);
  });
  test("it should check if strin has 1 or 2 words", () => {
    expect(isWord("myArray")).toEqual(true);
    expect(isWord("я и ты")).toEqual(false);
    expect(isWord("   ")).toEqual(null);
  });
  test("it should check if function do x^y", () => {
    expect(pow(2, 3)).toEqual(8);
  });
});
