/* 
1.Напишите функцию diff, которая получает в качестве
параметров 2 числа и возвращает разницу между
наибольшим и наименьшим.
 */

export function diff(number, anotherNumber) {
  if (number > anotherNumber) {
    return number - anotherNumber;
  }
  if (number < anotherNumber) {
    return anotherNumber - number;
  }
  return 0;
}

/* 
2.Напишите функцию isWord, которая принимает на
вход текстовую строку. Функция возвращает true, если
строка состоит из одного слова и false, если из
нескольких.
 */

export function isWord(string) {
  if (string.search(/[^0-9\s]+\s+[^0-9\s]+/) !== -1) {
    return false;
  }
  if (string.search(/^[^0-9\s]+$/) !== -1) {
    return true;
  }
  return null;
}

/**
 * *Напишите функцию pow(a, x), которая вернёт
значение числа a, возведённого в степень x.
 * 
 */

export function pow(a, x) {
  if (typeof a === "number" && typeof x === "number") {
    return a ** x;
  }
  return false;
}
