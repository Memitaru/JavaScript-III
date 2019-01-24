/*
  Object oriented design is commonly used in video games.  For this part of the assignment you will be implementing several constructor functions with their correct inheritance hierarchy.

  In this file you will be creating three constructor functions: GameObject, CharacterStats, Humanoid.  

  At the bottom of this file are 3 objects that all end up inheriting from Humanoid.  Use the objects at the bottom of the page to test your constructor functions.
  
  Each constructor function has unique properties and methods that are defined in their block comments below:
*/
  
/*
  === GameObject ===
  * createdAt
  * dimensions (These represent the character's size in the video game)
  * destroy() // prototype method -> returns the string: 'Object was removed from the game.'
*/
function GameObject(attributes) {
  this.createdAt = attributes.createdAt;
  this.dimensions = attributes.dimensions;
}

GameObject.prototype.destroy = function() {
  return `${this.name} was removed from the game.`
}

/*
  === CharacterStats ===
  * healthPoints
  * name
  * takeDamage() // prototype method -> returns the string '<object name> took damage.'
  * should inherit destroy() from GameObject's prototype
*/

function CharacterStats(attributes) {
  GameObject.call(this, attributes);
  this.healthPoints = attributes.healthPoints;
  this.name = attributes.name;
}

CharacterStats.prototype = Object.create(GameObject.prototype);

CharacterStats.prototype.takeDamage = function() {
  return `${this.name} took damage.`
}

/*
  === Humanoid (Having an appearance or character resembling that of a human.) ===
  * team
  * weapons
  * language
  * greet() // prototype method -> returns the string '<object name> offers a greeting in <object language>.'
  * should inherit destroy() from GameObject through CharacterStats
  * should inherit takeDamage() from CharacterStats
*/

function Humanoid(attributes){
  CharacterStats.call(this, attributes);
  this.team = attributes.team;
  this.weapons = attributes.weapons;
  this.language = attributes.language;
}

Humanoid.prototype = Object.create(CharacterStats.prototype);

Humanoid.prototype.greet = function() {
  return `${this.name} offers a greeting in ${this.language}.`
}
 
/*
  * Inheritance chain: GameObject -> CharacterStats -> Humanoid
  * Instances of Humanoid should have all of the same properties as CharacterStats and GameObject.
  * Instances of CharacterStats should have all of the same properties as GameObject.
*/

// Test you work by un-commenting these 3 objects and the list of console logs below:

  const mage = new Humanoid({
    createdAt: new Date(),
    dimensions: {
      length: 2,
      width: 1,
      height: 1,
    },
    healthPoints: 5,
    name: 'Bruce',
    team: 'Mage Guild',
    weapons: [
      'Staff of Shamalama',
    ],
    language: 'Common Tongue',
  });

  const swordsman = new Humanoid({
    createdAt: new Date(),
    dimensions: {
      length: 2,
      width: 2,
      height: 2,
    },
    healthPoints: 15,
    name: 'Sir Mustachio',
    team: 'The Round Table',
    weapons: [
      'Giant Sword',
      'Shield',
    ],
    language: 'Common Tongue',
  });

  const archer = new Humanoid({
    createdAt: new Date(),
    dimensions: {
      length: 1,
      width: 2,
      height: 4,
    },
    healthPoints: 10,
    name: 'Lilith',
    team: 'Forest Kingdom',
    weapons: [
      'Bow',
      'Dagger',
    ],
    language: 'Elvish',
  });

  console.log(mage.createdAt); // Today's date
  console.log(archer.dimensions); // { length: 1, width: 2, height: 4 }
  console.log(swordsman.healthPoints); // 15
  console.log(mage.name); // Bruce
  console.log(swordsman.team); // The Round Table
  console.log(mage.weapons); // Staff of Shamalama
  console.log(archer.language); // Elvish
  console.log(archer.greet()); // Lilith offers a greeting in Elvish.
  console.log(mage.takeDamage()); // Bruce took damage.
  console.log(swordsman.destroy()); // Sir Mustachio was removed from the game.


  // Stretch task: 
  // * Create Villain and Hero constructor functions that inherit from the Humanoid constructor function.  
  // * Give the Hero and Villains different methods that could be used to remove health points from objects which could result in destruction if health gets to 0 or drops below 0;
  // * Create two new objects, one a villain and one a hero and fight it out with methods!

  function Hero(attributes) {
    Humanoid.call(this, attributes);
  }

  Hero.prototype = Object.create(Humanoid.prototype);

  function Villian(attributes){
    Humanoid.call(this, attributes);
  }

  Villian.prototype = Object.create(Humanoid.prototype);

  //This is the Hero

  mainCharacter = new Hero ({
    createdAt: new Date(),
    dimensions: {
      length: 2,
      width: 2,
      height: 5
    },
    healthPoints: 100,
    name: "Reuben",
    team: "Good",
    weapons: [
      "Hero's Sword",
      "Cure Stone"
    ],
    language: "Elvish"
  })

  // This is the villian

  mainVillian = new Villian({
    createdAt: new Date(),
    dimensions: {
      length: 2,
      width: 3,
      height: 6
    },
    healthPoints: 100,
    name: "Galdo",
    team: "Evil",
    weapons: [
      "Extra Large Giant Axe"
    ],
    language: "Elvish"
  })

  //Decides if the hero will crit

  Hero.prototype.basicAttack = function(){
    let x = Math.random();
    if (x > .7) {
      console.log(`Critical hit! ${this.team} ${this.name} 30 damage!`);
      return 30;
    } else {
      console.log(`${this.team} ${this.name} deals 10 damage!`)
      return 10;
    }
  }

  // Formula to reduce hero's health

  Hero.prototype.damage = function(damage) {
    this.healthPoints = this.healthPoints - damage;
    if (this.healthPoints <= 0) {
      console.log(`${this.team} ${this.name} has been defeated.`)
      return ending = "villian"
    }
  }

  // Decides of villian will crit

  Villian.prototype.basicAttack = function(){
    let x = Math.random();
    if (x > .7) {
      console.log(`Critical hit! ${this.team} ${this.name} 20 damage!`);
      return 20;
    } else {
      console.log(`${this.team} ${this.name} deals 15 damage!`)
      return 15;
    }
  }

  // Reduces villian's health

  Villian.prototype.damage = function(damage) {
    this.healthPoints = this.healthPoints - damage;
    if (this.healthPoints <= 0) {
      console.log(`${this.team} ${this.name} has been defeated.`)
      return ending = "hero"
    }
  }
  

  //One turn of the fight

  const turn = function(){
    console.log("********************")
    mainCharacter.damage(mainVillian.basicAttack());
    console.log(`The hero has ${mainCharacter.healthPoints} health remaining.`)
    mainVillian.damage(mainCharacter.basicAttack());
    console.log(`The villian has ${mainVillian.healthPoints} health remaining.`)
    console.log("*******************")
  }

 // Actual fight and deciding winner.

  const fight = function(){
    let ending = null;
    if (ending != null) {
      ending === "hero" ?  `The winner is the hero!` : `The winner is the villian!`
    } else {
      turn();
    }
  }

 fight();

