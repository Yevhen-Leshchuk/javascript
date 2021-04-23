// Смотрим на классы. Переписываем Hero с новым синтаксисом
class Hero {
  static description = "This is a Hero base class";

  static showStats(hero) {
    // console.log("this:", this);
    console.log("Logging stats from Hero.showStats:", hero);
  }

  constructor(name, xp) {
    this._name = name;
    this.xp = xp;
  }

  // changeName(name) {
  //   this.name = name;
  // }

  // getName() {
  //   return this.name;
  // }

  // или:
  get name() {
    return this._name;
  }

  set name(newName) {
    this._name = newName;
  }

  gainXp(amount) {
    console.log(`${this.name} получил ${amount} опыта`);
    this.xp += amount;
  }
}

console.dir(Hero);

const mango = new Hero("Mango", 1000);

console.log(mango.name); // Mango
mango.name = "MangoCoolDog";
console.log(mango.name); // MangoCoolDog

mango.gainXp(2000);
console.log(mango);
Hero.showStats(mango);
// console.log(mango.getName());