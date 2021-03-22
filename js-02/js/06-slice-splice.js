// Работем с коллекцией карточек в trello
// Удалить, добавить, обновить

const cards = ['card-1', 'card-2', 'card-3', 'card-4', 'card-5'];

console.log(cards);

cards.splice(1, 2);

console.log(cards);

// -----------------------
// cards.splice(index, 1)

// const cards = ['card-1', 'card-2', 'card-3', 'card-4', 'card-5'];

// console.log(cards);

// const cardToRemove = 'card-5';

// // console.log(cards.indexOf('card-2'));

// const index = cards.indexOf(cardToRemove);
// console.log(index);

// cards.splice(index, 1);
// console.log(cards);

// -----------------------
// const cards = ["card-1", "card-2", "card-3", "card-4", "card-5"];
// console.log(cards);

// cards.splice(2, 0, "card-10", "card-12");
// console.log(cards);

// -----------------------
// Вставка
// const cards = ["card-1", "card-2", "card-3", "card-4", "card-5"];
// console.log(cards);

// const cardToInsert = "card-10";
// const index = 3;

// cards.splice(index, 0, cardToInsert);
// console.log(cards);

// -----------------------
// Обновление
// const cards = ["card-1", "card-2", "card-3", "card-4", "card-5"];
// console.log(cards);

// cards.splice(2, 1, "card-3-modded");
// console.log(cards);

