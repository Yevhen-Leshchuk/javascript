// Задание 7
// Напиши скрипт управления личным кабинетом интернет банка.
// Есть объект account в котором необходимо реализовать методы для
// работы с балансом и историей транзакций.

//Решение 1. (Моё решение).

/*
 * Типов транзацкий всего два.
 * Можно положить либо снять деньги со счета.
 */
const Transaction = {
  DEPOSIT: 'deposit',
  WITHDRAW: 'withdraw',
};
/*
 * Каждая транзакция это объект со свойствами: id, type и amount
 */

const account = {
  // Текущий баланс счета
  balance: 0,

  // История транзакций
  transactions: [],

  /*
   * Метод создает и возвращает объект транзакции.
   * Принимает сумму и тип транзакции.
   */
  createTransaction(amount, type) {

    let id = this.transactions.length;

    this.transactions.push({ id, amount, type });

  },

  /*
   * Метод отвечающий за добавление суммы к балансу.
   * Принимает сумму танзакции.
   * Вызывает createTransaction для создания объекта транзакции
   * после чего добавляет его в историю транзакций
   */
  deposit(amount) {

    this.balance += amount;

    this.createTransaction(amount, Transaction.DEPOSIT);
  },

  /*
   * Метод отвечающий за снятие суммы с баланса.
   * Принимает сумму танзакции.
   * Вызывает createTransaction для создания объекта транзакции
   * после чего добавляет его в историю транзакций.
   *
   * Если amount больше чем текущий баланс, выводи сообщение
   * о том, что снятие такой суммы не возможно, недостаточно средств.
   */
  withdraw(amount) {

    this.createTransaction(amount, Transaction.WITHDRAW);

    amount > this.balance ? console.log('Недостаточно средств!') : this.balance -= amount;
  },

  /*
   * Метод возвращает текущий баланс
   */
  getBalance() {
    return `Текущий баланс: ${this.balance}`;
  },

  /*
   * Метод ищет и возвращает объект транзакции по id
   */
  getTransactionDetails(id) {

    for (let i = 0; i < this.transactions.length; i += 1) {

      if (id >= this.transactions.length) {
        console.log('Такой транзакции нет!');
        break;
      } else if (id === i) {
        return this.transactions[i];
      }
    }
  },

  /*
   * Метод возвращает количество средств
   * определенного типа транзакции из всей истории транзакций
   */
  getTransactionTotal(type) {
    let transactionTotal = 0;
    for (const transaction of this.transactions) {
      if (type === transaction.type) {
        transactionTotal += transaction.amount;
      }
    }
    return `Транзакция "${type}" - общая сумма средств: "${transactionTotal}".`;
  },
};

account.deposit(15);
account.deposit(5);
account.deposit(8);
account.deposit(12);

account.withdraw(5);
account.withdraw(5);
account.withdraw(5);
account.withdraw(7);

console.table(account.transactions);
console.log(account.getBalance());
console.log(account.getTransactionDetails(3));
console.log(account.getTransactionTotal(Transaction.WITHDRAW));


//----------------

// Решение 2. 

// const Transaction = {
//   DEPOSIT: "deposit",
//   WITHDRAW: "withdraw",
// };

// const account = {
//   balance: 0, // Текущий баланс счета.
//   transactions: [], // История транзакций.

//   // Метод создает и возвращает объект транзакции. Принимает сумму и тип транзакции.
//   createTransaction(amount, type) {
//     const transaction = {
//       id: this.transactions.length + 1,
//       type: type,
//       amount: amount,
//     };
//     return transaction;
//   },

//   // Метод отвечающий за добавление суммы к балансу. Принимает сумму танзакции. Вызывает createTransaction() для создания объекта транзакции, после чего добавляет его в историю транзакций.
//   deposit(amount) {
//     this.transactions.push(this.createTransaction(amount, Transaction.DEPOSIT));
//     this.balance += amount;
//     console.log(
//       `Операция выполнена успешно! Ваш счет пополнен на сумму ${amount}!`
//     );
//   },

//   // Метод отвечающий за снятие суммы с баланса. Принимает сумму танзакции. Вызывает createTransaction() для создания объекта транзакции, после чего добавляет его в историю транзакций. Если amount больше, чем текущий баланс, выводи сообщение о том, что снятие такой суммы не возможно, недостаточно средств.
//   withdraw(amount) {
//     const newTransaction = this.createTransaction(amount, Transaction.WITHDRAW);
//     if (amount > this.balance) {
//       console.log(`Снятие суммы ${amount} невозможно. Недостаточно средств!`);
//       return;
//     }

//     this.balance -= amount;
//     this.transactions.push(newTransaction);
//     console.log(
//       `Операция выполнена успешно! С Вашего счета снята сумма ${amount}!`
//     );
//   },

//   // Метод возвращает текущий баланс.
//   getBalance() {
//     return this.balance;
//   },

//   // Метод ищет и возвращает объект транзации по id.
//   getTransactionDetails(id) {
//     for (const transaction of this.transactions) {
//       if (transaction.id === id) {
//         return transaction;
//       }
//     }
//     console.log(`Транзакция №${id} не найдена!`);
//   },

//   // Метод возвращает количество средств определенного типа транзакции из всей истории транзакций.
//   getTransactionTotal(type) {
//     let total = 0;
//     for (const transaction of this.transactions) {
//       if (transaction.type === type) {
//         total += transaction.amount;
//       }
//     }
//     return total;
//   },
// };

// // Проверка работоспособности кода
// account.deposit(100);
// account.withdraw(20);
// account.withdraw(30);
// account.withdraw(10);
// account.deposit(80);

// console.log(account);
// console.log(account.getBalance());
// console.log(account.getTransactionDetails(5));
// console.log(account);
// console.log(account.getTransactionTotal(Transaction.DEPOSIT));
// console.log(account.getTransactionTotal(Transaction.WITHDRAW));



