import throttle from 'lodash.throttle';
// import { uuid } from 'uuidv4';
import { v4 as uuidv4 } from 'uuid';
import createBox from './js/create-box';
// import { add, mult } from './js/calc';
// import * as calc from './js/calc';
import './styles.scss';

// console.log(add);
// console.log(mult);
// console.log(calc);
// console.log(calc.add);

console.log(throttle);

// const id = uuid();
const id = uuidv4();

document.body.appendChild(createBox('Webpack is awesome! id: ' + id));
