/*
 * - Показываем и скрываем, добавляя/удаляя класс
 * - Скрываем через определенное время
 * - Скрываем при клике
 * - Не забываем чистить таймер
 */

const refs = {
  notification: document.querySelector('.js-notification'),
};

let timeoutId = null;

refs.notification.addEventListener('click', notificationClickHandler);

showNotification();

function notificationClickHandler() {
  console.log('Клик по Notification + clearTimeout!');
  clearTimeout(timeoutId);
  hideNotification();
}

function showNotification() {
  refs.notification.classList.add('is-visible');

  timeoutId = setTimeout(() => {
    console.log('Сработал setTimeout, через 3000ms!');
    hideNotification();
  }, 3000);
}

function hideNotification() {
  refs.notification.classList.remove('is-visible');
}