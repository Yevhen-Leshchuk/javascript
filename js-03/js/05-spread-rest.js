// const temperatures = [18, 14, 12, 21, 17, 29];

// console.log(Math.min(1, -20, 3, -4)); // -20
// console.log(Math.min([18, 14, 12, 21, 17, 29])); //NaN
// console.log(Math.min(...[18, 14, 12, 21, 17, 29])); //12

// -----------------------

// const temperatures = [18, 14, 12, 21, 17, 29];
// const nextTemps1 = temperatures.concat([1, 2, 3]);
// console.log(nextTemps1); // [18, 14, 12, 21, 17, 29, 1, 2, 3]

// const nextTemps2 = [...temperatures, 1, 2, 3];
// console.log(nextTemps2); // [18, 14, 12, 21, 17, 29, 1, 2, 3]

// -----------------------

// const lastWeekTemps = [1, 2, 3];
// const currentTemps = [6, 1, 8];
// const nextWeekTemps = [12, 14, 8];

// const temps1 = lastWeekTemps.concat(currentTemps, nextWeekTemps);
// console.log(temps1);

// const temps2 = [
//   ...lastWeekTemps,
//   "xD",
//   ...currentTemps,
//   "hello",
//   ...nextWeekTemps,
// ];
// console.log(temps2);

// -----------------------

const a = { x: 1, y: 2 };
const b = { x: 0, z: 3 };

const c1 = Object.assign({}, a, b);
console.log(c1); // {x: 0, y: 2, z: 3}

const c2 = Object.assign({}, a, b, { z: 5, x: 8, g: 1 });
console.log(c2); // {x: 8, y: 2, z: 5, g: 1}

const c3 = { ...b, ...a, x: 100 };
console.log(c3); // {x: 100, z: 3, y: 2}

const c4 = { t: 5, ...a, ...b, ...{ z: 5, x: 8, g: 1 }, x: 100 };
console.log(c4); // {t: 5, x: 100, y: 2, z: 5, g: 1}

// слева всегда rest = справа всегда spread

// -----------------------
//rest

const fn = function (a, b, c, ...rest) { };

fn(1, 2, 3, 4, 5, 6);