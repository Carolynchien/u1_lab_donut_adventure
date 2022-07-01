class Hamster {
  constructor(name) {
    this.name = name
    this.price = 15
    this.ownr = ''
  }
  wheelRun() {
    console.log('squeak squeak')
  }
  eatFood() {
    console.log('nibble nibble')
  }
  getPrice() {
    return this.price
  }
}

class Person {
  constructor(name) {
    this.name = name
    this.age = 0
    this.height = 0
    this.weight = 0
    this.mood = 0
    this.hamsters = []
    this.bankAccount = 0
  }

  getName() {
    return this.name
  }
  getAge() {
    return this.age
  }
  getWeight() {
    return this.weight
  }
  greet() {
    console.log(`this is the message from ${this.name}`)
  }
  eat() {
    this.weight++
    this.mood++
  }
  exercise() {
    this.weight--
  }
  ageUp() {
    this.age += 10
    this.weight += 10
    this.height += 10
    this.mood -= 10
    this.bankAccount += 10
  }
  buyHamster(hamster) {
    this.hamsters.push(hamster)
    this.mood += 10
    this.bankAccount -= hamster.getPrice()
  }
}

const timmy = new Person('Timmy')
timmy.age = 5

for (let i = 0; i < 5; i++) {
  timmy.eat()
  timmy.exercise()
}

timmy.age = 9

const gus = new Hamster('Gus')
gus.ownr = 'Timmy'
timmy.buyHamster(gus)
timmy.age = 15
console.log(timmy)
for (let i = 0; i < 2; i++) {
  timmy.eat()
  timmy.exercise()
}
// console.log(timmy)
