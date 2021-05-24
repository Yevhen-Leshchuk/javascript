
const refs = {
  tags: document.querySelector(".js-tags"),
  activeTagOutput: document.querySelector(".js-active-tag"),
};

refs.tags.addEventListener("click", onTagsClick);

function onTagsClick(e) {
  console.log(e.target);
  // console.log(e.target.nodeName); // BUTTON or UL

  if (e.target.nodeName !== "BUTTON") {
    console.log("Кликнули не по кнопке, выходим и ничего не делаем!");
    return;
  }

  const nextActiveTag = e.target;
  const activeTagValue = nextActiveTag.dataset.value;

  setActiveTag(nextActiveTag);
  updateOutput(activeTagValue);
}

function setActiveTag(nextActiveTag) {
  const currentActiveTag = refs.tags.querySelector(".tags__btn--active");
  // console.log("currentActiveTag: ", currentActiveTag);

  if (currentActiveTag) {
    // console.log("Уже есть активный, снимаю класс!");
    currentActiveTag.classList.remove("tags__btn--active");
  }

  nextActiveTag.classList.add("tags__btn--active");

  if (currentActiveTag === nextActiveTag) {
    console.log("Кликнули по той же кнопке, снимаю класс!");
    currentActiveTag.classList.remove("tags__btn--active");
  }

  // console.log("Tag:", nextActiveTag.dataset.value); // в html data-value="react"
}

function updateOutput(value) {
  refs.activeTagOutput.textContent = value;
}