import {
  isTriangleRectangular,
  checkCorrectData,
  getUsersData,
  showCircleParams,
} from "./homework_9";

describe("test 9th task", () => {
  beforeEach(() => {
    jest.spyOn(console, "log");
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  test("it should check if obj is rect triangle", () => {
    let triangle = { a: 3, b: 4, c: 5 };
    expect(isTriangleRectangular(triangle)).toEqual(true);
    triangle = { a: 3, b: 3, c: 3 };
    expect(isTriangleRectangular(triangle)).toEqual(false);
  });

  test("it should check if str is number > 0", () => {
    expect(checkCorrectData("6")).toEqual(true);

    expect(checkCorrectData("triangle")).toEqual(false);
  });

  test("it should check if func show correct day", () => {
    const values = ["26", "15", "zero", "2"];
    jest.spyOn(window, "prompt").mockImplementation(() => values.shift());

    expect(getUsersData()).toEqual("26");
    expect(getUsersData()).toEqual("15");
    expect(getUsersData()).toEqual("2");
  });

  test("it should show circle params", () => {
    const values = ["1", "15", "zero", "2"];
    jest.spyOn(window, "prompt").mockImplementation(() => values.shift());
    showCircleParams();

    expect(console.log.mock.calls[0][0]).toEqual(
      `Параметры круга с R = 1 , S = 3.141592653589793, L = 6.283185307179586`
    );
  });
});
