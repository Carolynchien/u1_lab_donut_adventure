class Hero {
  constructor(name) {
    this.health = 100
    this.name = name
    this.object = {
      sprinkleSpray: 5,
      sugarShock: 10
    }
    this.catchPhrases = [
      "i'm fresher than day old pizza",
      "you can't count my calories"
    ]
  }
  talkSass() {
    const random = Math.floor(Math.random(2))
    console.log(this.catchPhrases[random])
  }

  announceHealth() {
    console.log(this.health)
  }
  battle(enemy) {
    console.log(`I'm ready to rumble`)
    const random = Math.floor(Math.random() * 2)
    const weapon = Object.keys(this.object)[random]
    console.log(weapon)
    if (weapon === 'sprinkleSpray') {
      enemy.health -= this.object.sprinkleSpray
    } else {
      enemy.health -= this.object.sugarShock
    }
    console.log(
      `${enemy.name} got hit by ${weapon}! His health is now at ${enemy.health}`
    )
  }
}

const dougie = new Hero('Dougie')

class Enemy {
  constructor(name) {
    this.health = 100
    this.name = name
    this.object = {
      pepperoniStars: 5,
      cheeseGrease: 10
    }
    this.catchPhrases = [
      "i'm youtube famous",
      "i'm more dangerous than an uncovered sewer"
    ]
  }

  function() {
    console.log(this.object.pepperoniStars)
  }

  talkSmack() {
    const random = Math.floor(Math.random(2))
    console.log(this.catchPhrases[random])
  }
  announceHealth() {
    console.log(this.health)
  }
  battle(hero) {
    console.log(`i\'m gonna flatten you like a slice of pepperoni!`)
    const random = Math.floor(Math.random() * 2)
    const weapon = Object.keys(this.object)[random]
    console.log(weapon)
    if (weapon === 'pepperoniStars') {
      hero.health -= this.object.pepperoniStars
    } else {
      hero.health -= this.object.cheeseGrease
    }
    console.log(
      `${hero.name} got hit by ${weapon}! His health is now at ${hero.health}`
    )
  }
}

const pizzaRat = new Enemy('Rat')
// dougie.talkSass()
// pizzaRat.talkSmack()
// dougie.announceHealth()
// pizzaRat.announceHealth()

while (pizzaRat.health > 0 && dougie.health > 0) {
  pizzaRat.battle(dougie)
  dougie.battle(pizzaRat)
}

if (pizzaRat.health <= 0) {
  console.log(`${pizzaRat.name} lost`)
} else if (dougie.health <= 0) {
  console.log(`${dougie.name} lost`)
} else {
  console.log(`even`)
}
