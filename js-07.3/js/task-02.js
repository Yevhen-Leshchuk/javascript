// Задание 2
// В HTML есть пустой список ul#ingredients.

// < ul id = "ingredients" ></ >
//   В JS есть массив строк.

// const ingredients = [
//   'Картошка',
//   'Грибы',
//   'Чеснок',
//   'Помидоры',
//   'Зелень',
//   'Приправы',
// ];
// Напиши скрипт, который для каждого элемента массива ingredients создаст отдельный li,
// после чего вставит все li за одну операцию в список ul.ingredients.Для создания DOM - узлов
// используй document.createElement().

const ingredients = [
  "Картошка",
  "Грибы",
  "Чеснок",
  "Помидоры",
  "Зелень",
  "Приправы",
];

const ingredientsRef = document.querySelector("#ingredients");
const fragment = document.createDocumentFragment();

ingredients.forEach((el) => {
  // console.log(el);
  const itemRef = document.createElement("li");

  itemRef.textContent = el;
  fragment.append(itemRef);
  console.log(itemRef);
});

ingredientsRef.appendChild(fragment);




