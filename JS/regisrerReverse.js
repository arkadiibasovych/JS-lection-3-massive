// Напиши скрипт который заменяет регистр каждого символа в строке на противоположный.
//     Например, если сторока "JavaScript", то на выходе должна получится строка "jAVAsCRIPT"

const string = "JavaScript";
const letters = string.split("");
console.log(string);
console.log(letters);
let invertedString = "";

// черезе фор...оф

for (const letter of letters) {
  //   if (letter === letter.toLowerCase()) {
  //     console.log(letter, "- эта буква в нижнем регистре!!!");

  //     invertedString += letter.toUpperCase();
  //   } else {
  //     console.log(letter, "- эта буква в верхнем регистре!!!");
  //     invertedString += letter.toLowerCase();
  //   }

  // через тернарный оператор

  invertedString +=
    letter === letter.toLowerCase()
      ? letter.toUpperCase()
      : letter.toLowerCase();
}

console.log("invertedString : ", invertedString);
