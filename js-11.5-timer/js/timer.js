// Таймер обратного отсчета
// Создай плагин настраиваемого таймера, который ведет обратный отсчет до 
// предварительно определенной даты.Такой плагин может использоваться 
// в блогах и интернет - магазинах, страницах регистрации событий, 
// во время технического обслуживания и т.д.


// Плагин ожидает следующую HTML - разметку и показывает четыре цифры: дни, часы, 
// минуты и секунды в формате XX: XX: XX: XX.Количество дней может состоять из более чем двух цифр.

// < div class="timer" id = "timer-1" >
//   <div class="field">
//     <span class="value" data-value="days">11</span>
//     <span class="label">Days</span>
//   </div>

//   <div class="field">
//     <span class="value" data-value="hours">11</span>
//     <span class="label">Hours</span>
//   </div>

//   <div class="field">
//     <span class="value" data-value="mins">11</span>
//     <span class="label">Minutes</span>
//   </div>

//   <div class="field">
//     <span class="value" data-value="secs">11</span>
//     <span class="label">Seconds</span>
//   </div>
// </ >
//     Плагин это класс CountdownTimer, экземпляр которого создает новый таймер с настройками.

// new CountdownTimer({
//     selector: '#timer-1',
//     targetDate: new Date('Jul 17, 2019'),
// });
// Для подсчета значений используй следующие готовые формулы, 
// где time - разница между targetDate и текущей датой.

// /*
//  * Оставшиеся дни: делим значение UTC на 1000 * 60 * 60 * 24, количество
//  * миллисекунд в одном дне (миллисекунды * секунды * минуты * часы)
//  */
// const days = Math.floor(time / (1000 * 60 * 60 * 24));

// /*
//  * Оставшиеся часы: получаем остаток от предыдущего расчета с помощью оператора
//  * остатка % и делим его на количество миллисекунд в одном часе
//  * (1000 * 60 * 60 = миллисекунды * минуты * секунды)
//  */
// const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

// /*
//  * Оставшиеся минуты: получаем оставшиеся минуты и делим их на количество
//  * миллисекунд в одной минуте (1000 * 60 = миллисекунды * секунды)
//  */
// const mins = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));

// /*
//  * Оставшиеся секунды: получаем оставшиеся секунды и делим их на количество
//  * миллисекунд в одной секунде (1000)
//  */
// const secs = Math.floor((time % (1000 * 60)) / 1000);

//---------------------------------------

//---- v.1

// const refs = {
//     days: document.querySelector('span[data-value="days"]'),
//     hours: document.querySelector('span[data-value="hours"]'),
//     mins: document.querySelector('span[data-value="mins"]'),
//     secs: document.querySelector('span[data-value="secs"]'),
// };

// class CountdownTimer {
//     constructor(selector, targetDate) {
//         this.selector = selector;
//         this.targetDate = targetDate;
//     }

//     start() {
//         setInterval(() => {
//             const currentTime = Date.now();

//             const deltaTime = this.targetDate - currentTime;

//             updateTimerFace(deltaTime);

//         }, 1000);
//     }
// }

// const timer = new CountdownTimer(
//     '#timer-1',
//     new Date('Aug 31, 2021'),
// );

// timer.start();

// function updateTimerFace(time) {
//     const days = pad(Math.floor(time / (1000 * 60 * 60 * 24)));

//     const hours = pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));

//     const mins = pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));

//     const secs = pad(Math.floor((time % (1000 * 60)) / 1000));

//     refs.days.textContent = `${days}`;
//     refs.hours.textContent = `${hours}`;
//     refs.mins.textContent = `${mins}`;
//     refs.secs.textContent = `${secs}`;
// }

// function pad(value) {
//     return String(value).padStart(2, '0');
// }

// ---------------------------------------

// --- v2
const refs = {
    days: document.querySelector('span[data-value="days"]'),
    hours: document.querySelector('span[data-value="hours"]'),
    mins: document.querySelector('span[data-value="mins"]'),
    secs: document.querySelector('span[data-value="secs"]'),
};

function updateClockFace({ days, hours, mins, secs }) {
    refs.days.textContent = `${days}`;
    refs.hours.textContent = `${hours}`;
    refs.mins.textContent = `${mins}`;
    refs.secs.textContent = `${secs}`;
}

class CountdownTimer {
    constructor({ selector, targetDate, onTick }) {
        this.selector = selector;
        this.targetDate = targetDate;
        this.onTick = onTick;
    }

    start() {
        this.createTimer();

        setInterval(() => {
            this.createTimer();
        }, 1000);
    }

    createTimer() {
        const deadlineDate = this.targetDate.getTime();
        const currentDate = new Date().getTime();
        const deltaTime = deadlineDate - currentDate;
        const time = this.getTimerComponents(deltaTime);
        deltaTime > 0 ? time : this.timeIsOver();
        this.onTick(time);
    }

    pad(value) {
        return String(value).padStart(2, '0');
    }

    getTimerComponents(deltaTime) {
        const days = this.pad(Math.floor(deltaTime / (1000 * 60 * 60 * 24)));
        const hours = this.pad(
            Math.floor((deltaTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
        );
        const mins = this.pad(
            Math.floor((deltaTime % (1000 * 60 * 60)) / (1000 * 60))
        );
        const secs = this.pad(Math.floor((deltaTime % (1000 * 60)) / 1000));

        return { days, hours, mins, secs };
    }

    timeIsOver() {
        document.querySelector(this.selector).innerHTML = 'Time is over';
        document.querySelector(this.selector).style.cssText =
            'color: #3f403f; font-size: 70px; font-weight: 700; font-family: "Roboto Mono", monospace;';
    }
}

const timer = new CountdownTimer({
    selector: '#timer-1',
    targetDate: new Date('Aug 31, 2021'),
    onTick: updateClockFace,
});

timer.start();