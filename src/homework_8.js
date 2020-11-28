/* 
1.Запросите у пользователя дату в формате
ДД.ММ.ГГГГ. Напишите программу, выводящую день
недели по введённой дате.


 */

export function checkCorrectData(myString) {
  const parcedData = myString.match(/^(\d{2})\.(\d{2})\.(\d{4})$/);
  if (parcedData) {
    if (!(+parcedData[1] > 0 && +parcedData[1] <= 31)) {
      return false;
    }
    if (!(+parcedData[2] > 0 && +parcedData[2] <= 12)) {
      return false;
    }
    if (+parcedData[2] === 2 && !(+parcedData[1] > 0 && +parcedData[1] <= 29)) {
      return false;
    }
    return true;
  }
  return false;
}

export function getUsersData() {
  let usersInput = "";
  do {
    usersInput = prompt("Введите дату рождения в формате  ДД.ММ.ГГГГ");
    console.log(usersInput);
  } while (!checkCorrectData(usersInput));

  return usersInput;
}

export function getTypeOfDay(textInput) {
  const myDateArr = textInput.split(".");
  const dateFormatedString = `${myDateArr[2]}-${myDateArr[1]}-${myDateArr[0]}`;
  const myDate = Date.parse(dateFormatedString);
  const weekDaysArray = [
    "Воскресенье",
    "Понедельник",
    "Вторник",
    "Среда",
    "Четверг",
    "Пятница",
    "Суббота",
  ];
  return console.log(weekDaysArray[new Date(myDate).getDay()]);
}

// console.log(getTypeOfDay(getUsersData()));

/**
* 
*2.Написать программу, которая выводит в консоль
количество минут, прошедшее с начала сегодняшнего
дня. 
* 
* 
 */

export function showMinutesFromMidnigt() {
  const thisDateZero = Date.parse(
    [
      new Date().getFullYear(),
      new Date().getMonth() + 1,
      new Date().getDate(),
    ].join("-")
  );
  const now = new Date().valueOf();
  return console.log((now - thisDateZero) / 60000);
}

/**
* 
* 
* 3.*В двух переменных хранятся даты рождения двух
пользователей в формате ДД.ММ.ГГГГ. Написать
программу, которая определяет более молодого
пользователя.
* 
 */

export function showWhoIsYonger(first, second) {
  function getDate(textInput) {
    const myDateArr = textInput.split(".");
    const dateFormatedString = `${myDateArr[2]}-
                                ${myDateArr[1]}-
                                ${myDateArr[0]}`;
    const myDate = Date.parse(dateFormatedString);
    return myDate;
  }
  const firstMS = getDate(first);
  const secondMS = getDate(second);

  if (firstMS > secondMS) {
    return console.log(first);
  }
  if (firstMS < secondMS) {
    return console.log(second);
  }
  return console.log(second);
}
