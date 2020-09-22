// напиши скрипт поиска самого маленького числа в массиве,
// при условии, что числа уникальные (не повторяются).

const numbers = [51, 18, 13, 24, 73, 7, 4, 85, 19, 195];

// найти самое маленькое число

let smallestNumber = numbers[0];

for (const number of numbers) {
  if (number < smallestNumber) {
    smallestNumber = number;
  }
}

console.log(`smallestNumber:`, smallestNumber);

// найти самое большое число

let highestNumber = numbers[0];
for (const number of numbers) {
  if (number > highestNumber) {
    highestNumber = number;
  }
}

console.log(`highestNumber : `, highestNumber);
