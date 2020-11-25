/* *
Создайте массив целых чисел из 10 элементов.
1.Выведите в консоль сумму всех элементов массива.
 */

export function createNewArrayOfNumbers() {
  const array = [];
  for (let i = 1; i <= 10; i++) {
    array.push(Math.round(Math.random() * i * 10));
  }
  return array;
}

export function sumOfArray(array) {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }
  return sum;
}
const myArray = createNewArrayOfNumbers();
console.log(sumOfArray(myArray));

/* *
2.Создайте новый массив на основе исходного, в
котором каждый элемент будет вдвое больше
элемента исходного массива с таким же индексом.
(a[1] = 3, b[1] = 6, где a — исходный массив, b — новый
массив).
 */

export function creaneNewDoubleArray(array) {
  const newArray = [];
  array.forEach((element) => {
    newArray.push(element * 2);
  });
  return newArray;
}

const newDoubleArray = creaneNewDoubleArray(myArray);

/* *
3.*Найдите и выведите в консоль наибольший и
наименьший элементы исходного массива.
 */

export function showMinMaxElement(numberArray) {
  return numberArray.sort(function (a, b) {
    return a - b;
  });
  // console.log('Min = ' + numberArray[0]);
  // console.log('Max = ' + numberArray[numberArray.length-1]);
}

const sortedArray = showMinMaxElement(newDoubleArray);
console.log(`Min = ${sortedArray[0]}`);
console.log(`Max = ${sortedArray[sortedArray.length - 1]}`);
