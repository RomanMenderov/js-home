import {
  checkCorrectDataAge,
  getUsersDataAge,
  createNewUserAdmin,
} from "./homework_4";

describe("test 4st task", () => {
  test("it should check if age is true", () => {
    expect(checkCorrectDataAge("1")).toEqual(true);
    expect(checkCorrectDataAge("-100")).toEqual(false);
  });
  test("it should check if age is true", () => {
    const values = ["10"];
    jest.spyOn(window, "prompt").mockImplementation(() => values.shift());

    expect(getUsersDataAge()).toEqual(10);
  });
  test("it should check if age is add tu object", () => {
    const user = { age: 10 };
    const admin = createNewUserAdmin(user);

    expect(admin.role).toEqual("admin");
  });
});
