/**
 * 
 * 1.Вывести в консоль сумму всех целых чисел от 50 до
100.
 * 
 * 
 */

export function showSumm(start, finish) {
  let summ = 0;
  for (let i = start; i <= finish; i++) {
    summ += i;
  }
  return summ;
}

console.log(showSumm(50, 100));

/**
 *
 *2.Вывести в консоль таблицу умножения на 7.
 *
 *
 */

export function showMultiplyTable(number) {
  let resultTable = "";
  for (let i = 1; i <= 10; i++) {
    const string = `${number} X ${i} = ${i * number}\n`;
    resultTable += string;
  }
  return resultTable;
}

console.log(showMultiplyTable(7));

/**
 * 
 **Запросить у пользователя ввод числа N. Вывести в
консоль среднее арифметическое всех нечётных
чисел от 1 до N
 * 
 * 
 */
export function checkCorrectData(myString) {
  if (/^\d+$/.test(myString) && myString * 1 > 0) {
    return true;
  }
  return false;
}
/*
export function getUsersData(){
    let usersInput = '';
        do{
        usersInput = prompt('Введите число больше 0');
    }while(!checkCorrectData(usersInput))
    return usersInput*1;
} */

export function getUsersData() {
  const usersInput = prompt("Введите число больше 0");
  if (checkCorrectData(usersInput)) {
    return Number(usersInput);
  }
  return false;
}

export function showOddAverage(usersNumber) {
  if (usersNumber) {
    let oddSumm = 0;
    let oddCount = 0;
    for (let i = 1; i <= usersNumber; i += 2) {
      oddSumm += i;
      oddCount += 1;
    }
    return oddSumm / oddCount;
  }
  return false;
}

console.log(showOddAverage(getUsersData()));
