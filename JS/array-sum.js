// Написать скрипт который считает сумму элементов двух массивов.
const array1 = [5, 10, 15, 20];
const array2 = [10, 20, 30];
let arraySum = 0;

// объеденить 2 массива в 1

const array = array1.concat(array2);
console.log(array);

// посчитать сумму элементов

for (const number of array) {
  arraySum += number;
}

console.log(arraySum);
