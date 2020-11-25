/**
 Создайте объект user, содержащий поле name со
значением ‘John’.
1.Запросить у пользователя ввод числа. Записать
введенное значение в поле age объекта user.
 * 
 */

const user = { name: "John" };

export function checkCorrectDataAge(myString) {
  if (/^\d+$/.test(myString) && +myString > 0) {
    return true;
  }
  return false;
}
/*
export function getUsersDataAge() {
  let usersInput = "";
  do {
    usersInput = prompt("Введите возраст John");
  } while (!checkCorrectDataAge(usersInput));
}
*/
export function getUsersDataAge() {
  const usersInput = prompt("Введите возраст John");
  if (checkCorrectDataAge(usersInput)) {
    return Number(usersInput);
  }
  return false;
}

const userAge = getUsersDataAge();
if (userAge) {
  user.age = userAge;
}

/**
 * 2.Создать копию объекта user с именем admin.
Добавить новому объекту поле role со значением
‘admin’.
 * 
 */

export function createNewUserAdmin(object) {
  const newUser = { ...object };
  newUser.role = "admin";
  return newUser;
}

// const admin = createNewUserAdmin(user);
/**
*Записать все значения полей объекта admin в
отдельные переменные. Имена переменных
должны совпадать с названиями полей.
 * 
 */
