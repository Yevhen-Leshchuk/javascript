/*
 * IntersectionObserver API
 * Callback params
 * Options: root, rootMargin, threshold
 *
 * https://developer.mozilla.org/ru/docs/Web/API/Intersection_Observer_API
 */

// const io = new IntersectionObserver((entries, observer) => {});

// -----------------------
const onEntry = (entries, observer) => {
  entries.forEach((entry) => {
    console.log(entry);
    if (entry.isIntersecting) {
      console.log(`Box ${entry.target.textContent} пересекает Root`);

      observer.disconnect(); // отмена отслеживания boxRef
    }
  });
};

const options = {
  rootMargin: "100px", // начало отслеживания boxRef
  // threshold: [0, 0.25, 0.5, 0.75, 1], // массив значений отслеживания boxRef (%)
};

const io = new IntersectionObserver(onEntry, options);

const boxRef = document.querySelector(".js-box"); // target

io.observe(boxRef); // следим за boxRef