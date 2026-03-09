# OOP Under the Hood

## The New Keyword

The **new** keyword does four things:

1. Creates an empty object
2. Sets the keyword **this** to be that object
3. Returns the object - return this
4. Creates a link to the object's prototype

```js
// Dog is a constructor function
function Dog(name, breed) {
  this.name = name;
  this.breed = breed;
}

Dog.prototype.bark = function () {
  console.log("Woof!");
};

const paul = new Dog("Paul", "German Shepherd");
console.log(paul); // { name: "Paul", breed: "German Shepherd" }
// the method bark is added to the prototype of Dog, and each Dog object has access to it
paul.bark(); // Woof!
```

## Prototypes

Methods defined in a class are added to the prototype of the class. This is why we can call methods on objects created with the new keyword.

## The Prototype Chain

```js
const child = {
  num: 2,
  __proto__: parent,
};

const parent = {
  color: "red",
  sing() {
    return "I am singing!";
  },
  __proto__: grandParent,
};

const grandParent = {
  greet() {
    return "Hello!";
  },
};

console.log(child.num); // 2
console.log(child.color); // red
console.log(child.greet()); // Hello!
console.log(child.__proto__); // { color: "red", sing: [Function: sing], __proto__: [Object] }
console.log(child.__proto__.__proto__); // { greet: [Function: greet], __proto__: null }
console.log(child.__proto__.__proto__.__proto__); // object prototype
```

## Classes, Inheritance, and Prototypes

ES6 classes are just a syntax sugar over constructor functions.

```js
class Dog {
  constructor(name, breed) {
    this.name = name;
    this.breed = breed;
  }
  bark() {
    console.log("Woof!");
  }
}

class GuidedDog extends Dog {
  constructor(name, breed, owner) {
    super(name, breed);
    this.owner = owner;
  }
  alert() {
    return `${this.name} alerts you to danger!`;
  }
}

const paul = new GuidedDog("Paul", "German Shepherd", "John");
paul.__proto__; // Dog {constructor: [Function: Dog], alert: [Function: alert]}
```

## \_\_proto\_\_ vs prototype

\_\_proto\_\_ is an internal property of an object. (not used in practice)
we use prototype to add methods to the prototype (standard way)
