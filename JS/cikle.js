// найти сумму всех четных чисел

// const numbers = [1, 2, 3, 5, 6, 7, 8, 10];
// let total = 0;

// через for

// for (let i = 0; i < numbers.length; i += 1) {
//   const number = numbers[i];
//   console.log(number);
//   if (number % 2 === 0) {
//     console.log("четное");
//     total += number;
//   }
// }

// через for of

// for (const number of numbers) {
//   //   console.log(number);
//   if (number % 2 !== 0) {
//     console.log(`${number} - нечетное`);
//     total += number;
//   }
// }

// от обратного

// for (const number of numbers) {
//   if (number % 2 !== 0) {
//     continue;
//   }
//   total += number;
// }

// console.log("Total:", total);

// напиши скрипт поиска логина
//     - если логина нет, вывести сообщение "Пользователь [логин] не найдеден."
//     - если нашли логин, вывести сообщение "Пользователь [логин] найдеден."

//     - сначала через for
//     - потом через for...of
//     - логика break
//     - метод includes c тренарным оператором

// const logins = ["poly1scute", "m4ngoDoge", "aj4xth3m4n", "k1widab3st"];
// const loginToFind = "poly1scute";
// let message = `Пользователь ${loginToFind} не найден`;

// через for

// for (let i = 0; i < logins.length; i += 1) {
//   const login = logins[i];

//   if (login === loginToFind) {
//     message = `Пользователь ${loginToFind} найден`;
//     break;
//   }
// }

// через for...of

// for (const login of logins) {
//   if (login === loginToFind) {
//     message = `Пользователь ${loginToFind} найден`;
//   }
// }

// метод includes

// const message = logins.includes(loginToFind)
//   ? `Пользователь ${loginToFind} найден`
//   : `Пользователь ${loginToFind} не найден`;

// console.log(message);
