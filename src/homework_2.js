/**
 * 1.В переменных a и b хранятся числа. Вывести в
консоль наибольшее из них.
 * 
 */

const x = 15;
const y = 25;

export function showMaxNumber(a, b) {
  if (a > b) {
    return a;
  }
  if (a < b) {
    return b;
  }
  return `Числа равны ${a}`;
}
console.log(showMaxNumber(x, y));

/**
 * 2.Запросить у пользователя ввод числа от 1 до 12.
Вывести в консоль название месяца, соответствующее
этому числу (1 — январь, 2 — февраль и т.д.).
 * 
 */

export function checkCorrectData(myString) {
  if (
    /^\d{1,2}$/.test(myString) &&
    Number(myString) <= 12 &&
    Number(myString) > 0
  ) {
    return true;
  }
  return false;
}

/* export function getUsersData() {
  let usersInput = "";
  do {
    usersInput = prompt("Введите число от 1 до 12");
  } while (!checkCorrectData(usersInput));
  return +usersInput - 1;
} */
export function getUsersData() {
  const usersInput = prompt("Введите число от 1 до 12");
  if (checkCorrectData(usersInput)) {
    return Number(usersInput) - 1;
  }
  return false;
}

export function showMonthInConsole(usersNumber) {
  const months = [
    "январь",
    "февраль",
    "март",
    "апрель",
    "май",
    "июнь",
    "июль",
    "август",
    "сентябрь",
    "октябрь",
    "ноябрь",
    "декабрь",
  ];
  if (usersNumber) {
    return months[usersNumber];
  } 
    return false;
  
}

console.log(showMonthInConsole(getUsersData()));

/**
 *3*В переменных circle и square хранятся площади круга
и квадрата соответственно. Написать программу,
которая определяет, поместится ли круг в квадрат.
 * 
 */

const myCircle = 25;
const mySquare = 25;

export function isCircleInSquare(circle, square) {
  const circleParams = {
    area: circle,
    diameter: Math.sqrt((4 * circle) / Math.PI),
  };

  const squareParams = {
    area: square,
    side: Math.sqrt(square),
  };

  if (
    circleParams.area < squareParams.area &&
    circleParams.diameter <= squareParams.side
  ) {
    return "Круг поместится в квадрат";
  }
  return "Круг не поместится в квадрат";
}
console.log(isCircleInSquare(myCircle, mySquare));
