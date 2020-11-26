/* 
Пользователь вводит текстовую строку. Определить с
помощью регулярного выражения, является ли
введённая строка:
1.Датой.
2.Адресом электронной почты.
3.*Номером телефона.
 */

export function isStringDate(string) {
  if (/^\d{2}[.\-/]\d{2}[.\-/]\d{4}$/.test(string)) {
    return true;
  }
  return false;
}

export function isStringRuMobilePhone(string) {
  if (/^((8|\+7)[- ]?)?(\(?\d{3}\)?[- ]?)?[\d\- ]{7,10}$/.test(string)) {
    return true;
  }
  return false;
}

export function isStringEmail(string) {
  return /^[+a-z0-9._-]+@[a-z0-9.-]+\.[a-z]{2,10}$/i.test(string);
}

export function checkUserInput(string) {
  if (isStringEmail(string)) {
    return "Вы ввели Email";
  }
  if (isStringDate(string)) {
    return "Вы ввели дату";
  }
  if (isStringRuMobilePhone(string)) {
    return "Вы ввели мобильный телефон";
  }
  return "Я не знаю что это :(";
}
console.log(checkUserInput(prompt("Введите дату, емейл или телефон")));
