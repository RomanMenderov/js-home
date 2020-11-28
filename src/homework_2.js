/**
 * 1.В переменных a и b хранятся числа. Вывести в
консоль наибольшее из них.
 * 
 */

export function showMaxNumber(a, b) {
  if (a > b) {
    return console.log(a);
  }
  if (a < b) {
    return console.log(b);
  }
  return console.log(`Числа равны ${a}`);
}

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

export function showMonthInConsole(usersNumber = getUsersData()) {
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
    return console.log(months[usersNumber]);
  }
  return false;
}

// console.log(showMonthInConsole(getUsersData()));

/**
 *3*В переменных circle и square хранятся площади круга
и квадрата соответственно. Написать программу,
которая определяет, поместится ли круг в квадрат.
 * 
 */

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
    return console.log("Круг поместится в квадрат");
  }
  return console.log("Круг не поместится в квадрат");
}
// console.log(isCircleInSquare(myCircle, mySquare));
