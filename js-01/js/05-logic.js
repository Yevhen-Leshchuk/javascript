// Логические опараторы

// console.log(Boolean(5)); // true
// console.log(Boolean(" ")); // true
// console.log(Boolean(0)); // false
// console.log(Boolean(NaN)); // false
// console.log(Boolean(null)); // false
// console.log(Boolean(undefined)); // false
// console.log(Boolean("")); // false
// console.log(Boolean(false)); // false

// && - Возвращает первый false или последний true
// console.log(5 && 10); // 10 // true && true
// console.log(0 && 10); // 0 // folse && true

// 1 - Числовой отрезок и вхождение значения в отрезок
// const number = 20;

// const isInRange = number > 10 && number < 30; // true && true

// console.log(`Число ${number} попадает в отрезок от 10 до 30? `, isInRange);

// для того чтобы условия логического оператора && выполнилось к true должны приводиться все операнды


// || - Возвращает одно из значений (операндов). Левый операнд если его можно привести к true, и правый в остальных случаях.
// const number = 5;

// const isInRange = number < 10 || number > 30;

// console.log(`Число ${number} попадает в отрезок до 10, или после 30? `, isInRange); // true

// console.log(5 || 10 || 20); // 5
// console.log(0 || false || 20); // 20
// console.log(0 || false || null); // null

// ! - инверсия true меняет на false и наоборот
// console.log(!5); // false
// console.log(!0); // true

// 2 - Возможность открыть живой чат online и не dnd

// const isOnline = true;
// const isFriend = true;
// const isDnd = false;

// const canOpenChat = isOnline && isFriend && !isDnd;
// console.log(' canOpenChat:', canOpenChat); // true

// 3 - Проверка подписки пользователя при доступе к контенту
 
// const subscription = 'free';

// const canAccessContent = subscription === 'pro' || subscription === 'vip';
// console.log(' canAccessContent: ', canAccessContent); // false

const subscription = 'pro';

const canAccessContent = subscription === 'pro' || subscription === 'vip';
console.log(' canAccessContent: ' , canAccessContent); // true




