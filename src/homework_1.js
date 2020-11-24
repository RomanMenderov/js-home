/**
 * 1.В переменных a и b хранятся числа. Написать
программу, которая выводит в консоль произведение
и сумму этих чисел.
 * 
 */

const x = 5;
const y = 12;

export function showProduct(a, b) {
  if (typeof a === "number" && typeof b === "number") {
    return a * b;
  }
  return "Проверьте что переменные - числа";
}
console.log(showProduct(x, y));

/**
 * 
 * 2.В двух переменных хранятся строки символов.
Написать программу, которая выведет в консоль
суммарное количество символов в обоих строках
 *  
 */

const firstStr = "long String";
const secondStr = "shortString";

export function showTotalStringLength(firstString, secondString) {
  if (typeof firstString === "string" && typeof secondString === "string") {
    return firstString.length + secondString.length;
  }
  return "Проверьте что переменные - строки";
}
console.log(showTotalStringLength(firstStr, secondStr));

/**
 * 
 * 3.*Написать программу, которая запрашивает у
пользователя ввод трёхзначного числа, а потом
выводит в консоль сумму цифр введённого числа.
 *
 */

export function checkCorrectData(myString) {
  if (
    /^\d{3}$/.test(myString) &&
    +myString >= 100 /* не уверен в этой проверке */
  ) {
    return true;
  }
  return false;
}
/*
export function getUsersData() {
  let usersInput = "";
  do {
    usersInput = prompt("Введите трехзначное число");
  } while (!checkCorrectData(usersInput));
  return usersInput;
} */

export function showSummInConsole() {
  const usersNumber = prompt("Введите трехзначное число");
  if (!checkCorrectData(usersNumber)) {
    return "Это не трехзначное число";
  }
  let usersSum;
  const numberArr = usersNumber.split("");
  for (let i = 0; i < numberArr.length; i++) {
    if (i === 0) {
      usersSum = +numberArr[i];
    } else {
      usersSum += +numberArr[i];
    }
  }
  return usersSum;
}

console.log(showSummInConsole());
