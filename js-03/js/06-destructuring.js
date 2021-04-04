// const hotel = {
//   name: 'Resort Hotel',
//   stars: 5,
//   capacity: 100,
// };
// const { name = '', stars = 1, capacity = 0, address = 'street' } = hotel;

// console.log('Name: ', name);
// console.log('Stars: ', stars);
// console.log('Capacity: ', capacity);
// console.log('Address: ', address);

// -----------------------

// const hotel = {
//   name: "Resort Hotel",
//   stars: 5,
//   capacity: 100,
// };

// const showHotelInfo = function (hotelStats) {
//   const { name, stars, capacity } = hotelStats;

//   console.log("Name:", name);
//   console.log("Stars:", stars);
//   console.log("Capacity:", capacity);
// };

// showHotelInfo(hotel);

// -----------------------

// const hotel = {
//   name: "Resort Hotel",
//   stars: 5,
//   capacity: 100,
// };

// const showHotelInfo = function ({ name, stars, capacity }, a, b, c) {
//   console.log("Name:", name);
//   console.log("Stars:", stars);
//   console.log("Capacity:", capacity);
//   console.log(a); // 1
// };

// showHotelInfo(hotel, 1, 2, 3);

// -----------------------
// const hotel = {
//   name: "Resort Hotel",
//   stars: 5,
//   // capacity: 100,
// };

// const showHotelInfo = function ({ name, stars, capacity = 0 }) {
//   console.log("Name: ", name);
//   console.log("Stars: ", stars);
//   console.log("Capacity: ", capacity); // 0
// };

// showHotelInfo(hotel);

// -----------------------
// const hotel = {
//   name: "Resort Hotel",
//   stars: 5,
//   capacity: 100,
// };

// const { name: hotelName = "Gold", stars, capacity } = hotel;
// console.log(hotelName); // Resort Hotel
// console.log(hotel.name); // Resort Hotel

// -----------------------
// Глубокая деструктуризация
// const profile = {
//   name: "Jacques Gluke",
//   tag: "jgluke",
//   location: "Ocho Rios, Jamaica",
//   avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/r_oy/128.jpg",
//   stats: {
//     followers: 5603,
//     views: 4827,
//     likes: 1308,
//   },
// };

// // const { name, tag, location, avatar, stats } = profile;

// const {
//   name,
//   tag,
//   location,
//   avatar,
//   stats: { followers, views, likes: myLikes = 0 },
// } = profile;

// // const { followers, views, likes } = stats;

// // console.log(name, tag, location, avatar, stats, followers, views, likes);

// console.log(name, tag, location, avatar, followers, views, myLikes);

// -----------------------

// const profile = {
//   name: "Jacques Gluke",
//   tag: "jgluke",
//   location: "Ocho Rios, Jamaica",
//   avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/r_oy/128.jpg",
//   stats: {
//     followers: 5603,
//     views: 4827,
//     likes: 1308,
//   },
//   example: {
//     a: {
//       x: 1,
//       y: 2,
//     },
//   },
// };

// const {
//   name,
//   tag,
//   location,
//   avatar,
//   stats: { followers, views, likes: myLikes = 0 },
//   example: {
//     a: { x, y },
//   },
// } = profile;

// console.log(name, tag, location, avatar, followers, views, myLikes);
// console.log(x); // 1
// console.log(y); // 2

// -----------------------

// const rgb = [255, 100, 80];
// const [red, green, blue] = rgb;

// console.log(blue); // 80

// -----------------------

// const rgb = [255, 100, 80];
// const [, , blue] = rgb;

// console.log(blue); // 80

// -----------------------

// const rgb = [255, 100, 80];
// const red = rgb[0];
// const green = rgb[1];
// const blue = rgb[2];

// console.log(red); // 255

// -----------------------

const profile = {
  name: "Jacques Gluke",
  tag: "jgluke",
  location: "Ocho Rios, Jamaica",
  avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/r_oy/128.jpg",
  stats: {
    followers: 5603,
    views: 4827,
    likes: 1308,
  },
};

const { name, tag, location, ...restProps } = profile; // rest

console.log(name, tag, location);
console.log(restProps);
console.log(profile);

// -----------------------
const a = { ...{ x: 1 }, ...{ y: 3 } }; // spread