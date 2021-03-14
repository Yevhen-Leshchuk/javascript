// Задание 5

// Пользователь может оформить доставку товара к себе в страну, указав ее при посещении страницы в prompt.
// Учти, пользователь может ввести имя страны не только буквами нижнего регистра, а к примеру 'кИтАЙ'.

// Напиши скрипт который выводит сообщение о стоимости доставки в указанную страну.Обязательно используй switch. 
// Формат сообщения: 'Доставка в [страна] будет стоить [цена] кредитов'.

// Но доставка есть не везде, если указанной страны нет в списке, то выводи
// в alert сообщение 'В вашей стране доставка не доступна'.

// Ниже приведен список стран и стоимость доставки.

// Китай - 100 кредитов
// Чили - 250 кредитов
// Австралия - 170 кредитов
// Индия - 80 кредитов
// Ямайка - 120 кредитов


const China = 'Китай';
const Chile = 'Чили';
const Australia = 'Австралия';
const India = 'Индия';
const Jamaica = 'Ямайка';

const priceChina = '100';
const priceChile = '250';
const priceAustralia = '170';
const priceIndia = '80';
const priceJamaica = '120';

const userInput = prompt('Введите название вашей страны.');

if (userInput !== null) {
    switch (userInput.toLowerCase()) {
        case China.toLowerCase():
            alert(`Доставка в ${China} будет стоить ${priceChina} кредитов`);
            break;
        
        case Chile.toLowerCase():
            alert(`Доставка в ${Chile} будет стоить ${priceChile} кредитов`);
            break;
        
        case Australia.toLowerCase():
            alert(`Доставка в ${Australia} будет стоить ${priceAustralia} кредитов`);
            break;
        
        case India.toLowerCase():
            alert(`Доставка в ${India} будет стоить ${priceIndia} кредитов`);
            break;
        
        case Jamaica.toLowerCase():
            alert(`Доставка в ${Jamaica} будет стоить ${priceJamaica} кредитов`);
            break;
        
        default:
            alert('В вашей стране доставка не доступна');
    }
} else alert('Отменено пользователем.');
