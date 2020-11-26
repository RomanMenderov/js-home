/**
 * 
 1.Даны длины трёх сторон треугольника. Определить,
является ли треугольник прямоугольным.


 */

const myTriangle = { a: 10, b: 20, c: 30 };

export function isTriangleRectangular(triangle) {
  if (
    triangle.a ** 2 === triangle.b ** 2 + triangle.c ** 2 ||
    triangle.b ** 2 === triangle.a ** 2 + triangle.c ** 2 ||
    triangle.c ** 2 === triangle.a ** 2 + triangle.b ** 2
  ) {
    return true;
  }
  return false;
}

isTriangleRectangular(myTriangle);
/**
 * 
 * 2.Пользователь вводит число R. Написать программу,
которая выведет в консоль длину окружности и
площадь круга с радиусом R.
 * 
 */

export function checkCorrectData(myString) {
  if (/^\d+$/.test(myString) && +myString > 0 /* не уверен в этой проверке */) {
    return true;
  }
  return false;
}

export function getUsersData() {
  let usersInput = "";
  do {
    usersInput = prompt("Введите радиус круга R");
  } while (!checkCorrectData(usersInput));
  return usersInput;
}

export function showCircleParams() {
  const R = getUsersData();
  const circleLength = 2 * Math.PI * R;
  const circleArea = Math.PI * R ** 2;
  return `Параметры круга с R = ${R} , S = ${circleArea}, L = ${circleLength}`;
}

/**
 * 
*Пользователь вводит числа a, b и c. Написать
программу, выводящую корни квадратного
уравнения с коэффициентами a, b и c. 
 * 
 */
