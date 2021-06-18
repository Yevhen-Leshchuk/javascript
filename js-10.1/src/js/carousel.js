import Siema from 'siema';

const siema = new Siema({
  duration: 500,
  selector: '.siema',
  duration: 200,
  easing: 'ease-out',
  perPage: 1,
  startIndex: 0,
  draggable: true,
  multipleDrag: true,
  threshold: 20,
  loop: false,
  rtl: false,
  onInit: () => { },
  onChange: () => { },
});

// console.log('siema', siema);

const nextBtnRef = document.querySelector('.js-next');
const prevBtnRef = document.querySelector('.js-prev');

prevBtnRef.addEventListener('click', () => siema.prev());
nextBtnRef.addEventListener('click', () => siema.next());