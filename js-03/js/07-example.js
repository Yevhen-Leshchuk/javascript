const profile = {
  name: "Jacques Gluke",
  tag: "jgluke",
  // location: "Ocho Rios, Jamaica",
  location: undefined,
  avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/r_oy/128.jpg",
  stats: {
    followers: 5603,
    views: 4827,
    likes: 1308,
  },
};

const makeProfileMarkup = function ({
  name,
  tag,
  location = "Planet Earth",
  avatar = "https://i.pravatar.cc/400?img=6",
  stats: { followers, views, likes },
}) {
  return `<div>
    <img src="${avatar}" alt="user avatar">
    <p>${name}<span>@${tag}</span></p>
    <p>Location: ${location}</p>
    <ul>
      <li>Followers: ${followers}</li>
      <li>Views: ${views}</li>
      <li>Likes: ${likes}</li>
    </ul>
  </div>`;
};

const markup = makeProfileMarkup(profile);
console.log(markup);

document.body.insertAdjacentHTML("afterbegin", markup);