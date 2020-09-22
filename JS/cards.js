// Работаем с коллекцией карточек в trello
//   - метод splice()
//   - удалить
//   - добавить
//   - обновить

const cards = [
  "Карточка-1",
  "Карточка-2",
  "Карточка-3",
  "Карточка-4",
  "Карточка-5",
];

console.table(cards);

// Удаление по индексу, метод indexOf()

// const cardToRemove = "Карточка-3";
// const index = cards.indexOf(cardToRemove);
// cards.splice(index, 1);
// console.log(cards);

// Добавление по индексу

// const cardToInsert = "Карточка-6";
// const index = 3;
// cards.splice(index, 0, cardToInsert);
// console.table(cards);

// Обновлние(по индексу)

const cardToUpdate = "Карточка-4";
cards.splice(1, 1, cardToUpdate);

console.table(cards);
