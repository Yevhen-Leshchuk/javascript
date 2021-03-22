// Делаем slug в URL из названия статьи (например на dev.to)
// Должно получиться top-10-benefits-of-react-framework
// После чего сделать руками через for с if...else и тернарником

// const title = "Top 10 benefits of React framework";

// console.log(title);
// console.log(title.split(" "));
// console.log(title);

// -----------------------
// const number = [1, 2, 3, 4, 5];

// console.log(number);
// console.log(number.join("-"));
// console.log(number);

// -----------------------
// v1
// const title = "Top 10 benefits of React framework";

// const nomalizedTitle = title.toLowerCase();
// console.log(nomalizedTitle); // top 10 benefits of react framework

// const words = nomalizedTitle.split(" ");
// console.log(words); // ["top", "10", "benefits", "of", "react", "framework"]

// const slug = words.join("-");
// console.log(slug); // top-10-benefits-of-react-framework

// -----------------------
// v2
// const slug = title.toLowerCase()
//     .split(' ')
//     .join('-');
// console.log(slug);

// -----------------------
// v3 Лучшее решение:
// const title = "Top 10 benefits of React framework";
// const words = title.toLowerCase().split(' ');
// const slug = words.join('-');

// console.log(slug);

// -----------------------
// Join руками для практики циклов

// const title = "Top 10 benefits of React framework";
// const words = title.toLowerCase().split(' ');
// let slug = '';

// console.log(words);

// for (const word of words) {
//     console.log(word);
//     slug += word + '-';
// }

// console.log(slug);

// -----------------------
// Join руками для практики циклов
// const title = "Top 10 benefits of React framework";
// const words = title.toLowerCase().split(" ");
// let slug = "";

// console.log(words);
// console.log(words.length);

// for (let i = 0; i < words.length; i += 1) {
//   console.log(words[i]);

//   if (i !== words.length - 1) {
//     slug += words[i] + "-";
//   } else {
//     slug += words[i];
//   }
// }

// console.log(slug); // top-10-benefits-of-react-framework

// -----------------------
// Join руками для практики циклов

const title = 'Top 10 benefits of React framework';
const words = title.toLowerCase().split(' ');
let slug = '';

for (let i = 0; i < words.length; i += 1) {
  const isNotLastValue = i !== words.length - 1;

  slug += isNotLastValue ? words[i] + "-" : words[i];
}

console.log(slug); // top-10-benefits-of-react-framework.