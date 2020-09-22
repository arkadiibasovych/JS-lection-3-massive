// Напиши скрипт, который объеденит все элементы массива в одно строковое значение.
// Элементов может быть произвольное количество.НапишиПусть элементы массива будут разделены запятой
//     - сначала через фор...оф
//     - потом через джойн
const friends = ["Mango", "Poly", "Kiwi", "Ajax"];

// через фор...оф

// let string = "";
// for (const friend of friends) {
//   string += friend + ", ";
// }
// string = string.slice(0, -2);

// через джойн

const string = friends.join(", ");

console.log(string);
