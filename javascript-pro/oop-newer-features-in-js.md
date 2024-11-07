# OOP : Newer Features in JavaScipt

## Getters

- Allow you to retrieve the value of an object property
- It works like a method but we can call it like a property

```js
class Circle {
  constructor(radius) {
    // "_" is a convention to tell other developers to not call/edit it directly
    // But it can still get access by JavaScript
    this._radius = radius;
  }

  get diameter() {
    return this._radius * 2;
  }
}

const circle = new Circle(5);
console.log(circle.diameter); // 10
```

## Setters

- Allow you to set the value of an object's property

```js
class Circle {
  static allowedColors = new Set(["red", "green", "blue"]);
  constructor(radius, color) {
    this._radius = radius;
    this.setColor(color);
  }

  setColor(newColor) {
    if (Circle.allowedColors.has(newColor)) {
      this._color = newColor;
    } else {
      throw new Error("That color is not allowed");
    }
  }

  set radius(value) {
    if (value < 0) {
      throw new Error("Radius cannot be negative");
    }
    return (this._radius = value);
  }

  set color(newColor) {
    this.setColor(newColor);
  }
}
```

## Public

- **public** attributes are common to all _instances_ of a class while **static** is a _class_ attribute

```js
class Cat {
  static numOfCats = 0;
  name; // when used in constructor, it acts as documentation
  breed;
  nbOfKitten = 0; // set property common to all instances of cat,
  hasTail = true;

  constructor(name, breed) {
    this.name = name;
    this.breed = breed;
    Cat.numOfCats += 1;
  }

  breedNewKitten() {
    this.nbOfKitten += 1;
  }
}
```

## Private

- Private properties can only be used inside their class
- Note : The Chrome devtools can still display its value for debugging purposes

```js
class Circle {
  #radius; // Must be declared here, otherwise it won't work
  constructor(radius) {
    this.#radius = radius;
  }

  get radius() {
    return this.#radius;
  }
  set radius(value) {
    this.#radius = value;
  }

  #privateMethod() {
    console.log("This is a private method");
  }
  publicMethod() {
    return this.#privateMethod();
  }
}

const circle = new Circle(5);

circle.#radius;
// Property '#radius' is not accessible outside class 'Circle'
// because it has a private identifier
```

## Static Initialization Blocks

- Only run once when the class is initialized NOT when instanciating a new class object

```js
class MyClass {
  static {
    console.log("Class is loaded");
  }
}

// Exemple usecase
class DatabaseConnection {
  static connection;
  static {
    if (process.env.NODE_ENV === "production") {
      this.connection = this.loadProductionConnection();
    } else {
      this.connection = this.loadDevelopmentConnection();
    }
  }

  static loadProductionConnection() {}
  static loadDevelopmentConnection() {}
}
```
