# Object Oriented JavaScript

## JS objects review

- Plain Old JavaScript Object (POJO)

```js
let o1 = {};

let o2 = new Object(); // same thing

o1.name = "Whiskey";

o2["name"] = "Whiskey"; // same thing
```

- Access object data using keys

```js
const key = "species";

const pet = { species: "Dog", name: "Elton", age: 1.5 };

console.log(pet[key]); // "Dog"
```

## Details you should know

- Properties that don't exist evaluates to _undefined_

```js
pet.something; // undefined
```

- All keys get "stringified"

```js
o1[1] = "hello";
o1["1"] = "goodbye";

console.log(o1[1]); // "goodbye"
```

## Mixing Data & Functions with Objects

### Imagine some useful functions :

- Before

```js
/* Area of right triangle */
function getTriangleArea(a, b) {
  return (a * b) / 2;
}

/* Hypotenuse of right triangle */
function getTriangleHypotenuse(a, b) {
  return Math.sqrt(a ** 2 + b ** 2);
}
```

- This gets a bit messy, though - all those functions to keep track of

- After

```js
let myTri {
    a: 3,
    b: 4,
    getArea: function getArea() {
        return (this.a * this.b) / 2;
    }
}
```

- This is tidy : related functionality lives together
- Annoying when we have more than one triangle
  - Difficult to maintain
  - If we have 1000 triangles, we'd have 1000 copies of these functions - that's going to waste memory

## Classes

- Class names should be **UpperCamelCase**
- Reduces confusion confusion between **triangle** (_individual_ triangle) and **Triangle** (the _class_ of all triangle)

```js
class Triangle {
  getArea() {
    return (this.a * this.b) / 2;
  }

  getHypotenuse() {
    return Math.sqrt(this.a ** 2 + this.b ** 2);
  }
}

const myTriangle = new Triangle();
myTriangle.a = 3;
myTriangle.b = 4;
myTrangle.getArea(); // 6
```

- A triangle is still an object, but we can check if the triangle is an instance of Triangle

```js
myTri instanceof Triangle; // true
```

## Constructor

- Any method named _constructor_ will be called on making a new instance
- Common things we can do in the constructor
  - validate data
  - assign properties
- functions placed in a class are called methods (_instance_ methods)
  - They have access to _this_
  - They take arguments/return data like any other function

```js
class Triangle {
  constructor(a, b) {
    if (!Number.isFinite(a) || a <= 0) throw new Error(`Invalid a: ${a}`);
    if (!Number.isFinite(b) || b <= 0) throw new Error(`Invalid b: ${b}`);
    this.a = a;
    this.b = b;
  }
}
let myTriangle = new Triangle(3, 4); // calls constructor
```

> Note : **this**, refers to the _object_ instanciated, not from the _class_

## Inheritance

A **class** can inherit properties and methods from another class using `extends`

```js
class Parent {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
  greet() {
    return `${firstName} ${lastName}`;
  }
}

class Child extends Parent {
  greet() {
    return `Hello ${firstName} ${lastName} !`;
  }
}

const parent = new Parent("Paul Lastname");
const child = new Child("Thor Lastname");

parent.greet(); // "Paul Lastname"
child.greet(); // "Hello Thor Lastname !"
```

## Super

- Super allow us to add properties to the "child" class constructor

```js
class Parent {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
}

class Child extends Parent {
  constructor(firstName, lastName, age) {
    super(firstName, lastName); // super is the constructor from Parent
    this.age = age;
  }
}
```

## Static properties

- JS offers "static properties", where pieces of _data_ are on the **class**, not on **instances**

```js
class CatWithStaticProp {
  // All instances of cats are the same species
  // it doesn't vary from one cat to another
  static genusSpecies = "feline catus";

  constructor(name) {
    this.name = name;
  }

  describe() {
    return `${this.name} is a ${CatWithStaticProp.genusSpecies}`;
  }
}

console.log(CatWithStaticProp.genusSpecies); // feline catus
```

## Static methods

- "static methods" are called on a **Class**, not an **object**
- Therefore, it cannot have access to object attributes
- Almost every other OO languages more properly calls this "class method"
  not a _static_ method - since it does have access to this class itself
- Most consistent OO languages, like C++ / Java / Python, also have true static methods
- Where they don't have access to the class itself

```js
class CatWithStaticMethod {
  static genusSpecies = "feline catus";

  constructor(name) {
    this.name = name;
  }

  static describe() {
    // static describe don't have access to "name"
    // but it does have access to static properties
    return `The cat is a ${this.genusSpecies}`;
  }
}

console.log(CatWithStaticMethod.genusSpecies()); // The cat is a feline catus
```

## static methods use cases

- Static methods are used to group together related functionalities
- The Math class doesn't need to be instanciated (ex: `Math.round()`)
- It's also used has factory functions
