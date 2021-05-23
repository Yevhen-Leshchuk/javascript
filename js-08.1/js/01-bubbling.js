/*
 * Всплытие событие
 * Исходный элемпент: event.target и event.currentTarget
 */

const refs = {
  parent: document.querySelector("#parent"),
  child: document.querySelector("#child"),
  innerChild: document.querySelector("#inner-child"),
};

const parentClickHandler = (e) => {
  console.log("PARENT click handler!");
  console.log("target: ", e.target);
  console.log("currentTarget: ", e.currentTarget);
};

const childClickHandler = (e) => {
  console.log("CHILD click handler!");
  console.log("target: ", e.target);
  console.log("currentTarget: ", e.currentTarget);

  // Прекращение всплытия:
  // e.stopPropagation();
};

const innerClickChildHandler = (e) => {
  console.log("INNER CHILD click handler!");
  console.log("target: ", e.target);
  console.log("currentTarget: ", e.currentTarget);
};

refs.parent.addEventListener("click", parentClickHandler);
refs.child.addEventListener("click", childClickHandler);
refs.innerChild.addEventListener("click", innerClickChildHandler);