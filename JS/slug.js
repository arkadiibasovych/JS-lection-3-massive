// Делаем slug в URL из названия статьи(например на dev.to)
// заголовок статьи состоит только из букв и пробелов
//     - нормализуем строку
//     - разбиваем по словам
//     - сшиваем в строку с разделителями

// должно получится Top-10-benefits-of-React-framework

const title = "Top 10 benefits of React framework";

// const normalizedTitle = title.toLowerCase();

// console.log(normalizedTitle);

// const words = normalizedTitle.split(" ");

// console.log(words);

// const slug = words.join("-");

// цепочка вызова методов

const slug = title.toLowerCase().split(" ").join("-");

console.log(slug);
