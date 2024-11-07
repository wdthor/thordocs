# The Mysterious Keyword "this"

## Introducing `this`

### Example issue with this in object

```js
const person = {
  name: "Paul",
  greet: function () {
    return `${this.name} says hellooo`;
  },
};

console.log(person.greet()); // Paul says hellooo

const personGreeting = person.greet;

console.log(personGreeting()); // says hellooo
```

### Example issue with this in class

```js
class Cat {
  constructor(firstName) {
    this.firstName = firstName;
  }

  dance(style = "tango") {
    return `Meow, I'm ${this.firstName}, I like to ${style}`;
  }
}

const meow = new Cat("Meow");
meow.dance(); // Meow, I'm Meow, I like to tango

const catDance = meow.dance;

catDance();
// Uncaught TypeError: Cannot read properties of undefined (reading 'firstName')
```

## Global Objects and This

- In a sense, JavaScript doesn't have functions.
- Everything is called on something, like a method
- When we call a function on "nothing", we call it on the "global object"
- In browser JS, it's window (the browser window)
- In NodeJS, that's _global_ (where some Node utilities are)
- Ex : `console.log("Hello")` === `window.console.log("Hello")`

## The "Left of the Dot" Rule

- The value of "this", is determined when our code runs
- If we refers to `catDance` example method, **this** refers to **window**, so `window.firstName` does not exist

```js
const person = {
  name: "Paul",
  greet: function () {
    return `${this.name} says hellooo`;
  },
};

console.log(person.greet()); // this refers to person

const personGreeting = person.greet;

console.log(personGreeting()); // this refers to window
```

## This and Classes

- If we do the same thing with a _class_ method, **this** is `undefined` not `window`
- We loose the _this_ context

```js
class Cat {
  constructor(firstName) {
    this.firstName = firstName;
  }
  dance(style = "tango") {
    return `Meow, I'm ${this.firstName}, I like to ${style}`;
  }
}

const meow = new Cat("Meow");
const catDance = meow.dance;
catDance(); // "this" is undefined
```

## Call

- call this function on _this object_
- `<functionName>.call(<objectName>, <...arguments>)`

```js
catDance.call(meow, "salsa");
```

- second usecase

```js
const paul = {
  name: "Paul",
  greet: function () {
    return `${this.name} says hellooo`;
  },
};

const sarah = {
  name: "Sarah",
};

paul.greet.call(sarah); // Sarah says hellooo
// call greet method on paul but tell "this" is "sarah"
```

## Apply

- Apply is similar to Call, but requires an array as arguments
- `<functionName>.apply(<objectName>, [<arguments>])`
- Every functions has an array like object called `arguments` which contains all arguments given to a function

```js
function maximum() {
  // Before the spread operator existed
  return Math.max.apply(null, arguments);
  // After the spread operator existed
  return Math.max(...arguments);
}
```

```js
// difference usecase between call and apply
const paul = {
  name: "Paul",
  greet: function (greeting, punctuation) {
    return `${this.name} says ${greeting}${punctuation}`;
  },
};

const sarah = {
  name: "Sarah",
};

paul.greet.call(sarah, "Hi", "!!!");
paul.greet.apply(sarah, ["Hello", "???"]);
```

## Bind

- `bind` is the most commonly used one over the others (call, apply)
- "perma-bind" a function to a context
- it means `bind` returns a function and set `this` to always be a reference to the given object
- `<functionName>.bind(<objectName>)`
- `call` and `apply` return the result of the function while `bind` returns a function which can be reused

```js
const paul = {
  name: "Paul",
  greet: function (greeting, punctuation) {
    return `${this.name} says ${greeting}${punctuation}`;
  },
};

const sarah = {
  name: "Sarah",
};

const paulGreet = paul.greet.bind(paul);
const sarahGreet = paul.greet.bind(sarah);

paulGreet("Hi", "!!!");
sarahGreet("Hello", "???");
```

## bind with arguments

- We don't always need to bind `this` to an object

```js
function multiply(a, b) {
  return a * b;
}

const double = multiply.bind(null, 2);
double(5); // 10

const six = multiply.bind(null, 2, 3); // 6
```

## bind with event listeners

- When we use a callback function for an event listener, `this` is created for us

```js
const paul = {
  name: "Paul",
  greet: function () {
    return `${this.name} says Hellooo !`;
  },
};

const btn = document.querySelector(button);
btn.addEventListener("click", paul.greet); // " says Hellooo !" - this refers to btn
btn.addEventListener("click", paul.greet.bind(paul)); // "Paul says Hellooo !"
```

## bind with timers

- When using timers, this refers to `window` because `setInterval` is part of the window object
- One solution is to **bind** the _callback function_ (`incrementAndPrint` in the example) to `this`, which itself refers to the **class**

```js
class Counter {
  constructor(startingNum = 0, incrementAmt = 1) {
    this.count = startingNum;
    this.incrementAmt = incrementAmt;
  }

  start() {
    setInterval(this.incrementAndPrint.bind(this), 1000);
    // tells interval to not use the "this" which refers to the window object
    // but use the "this" from the class
  }

  incrementAndPrint() {
    console.log(this.count);
    this.count += this.incrementAmt;
  }
}

const counter = new Counter();
counter.start(); // NaN - if we don't bind "this"
```

## Arrow functions and this

- Since _arrow functions_ to create a new `this` object like other _functions_
- The `this` refers to the _class_ instead of the `window`

```js
class Counter {
  constructor(startingNum = 0, incrementAmt = 1) {
    this.count = startingNum;
    this.incrementAmt = incrementAmt;
  }

  start() {
    setInterval(() => this.incrementAndPrint(), 1000);
  }

  incrementAndPrint() {
    console.log(this.count);
    this.count += this.incrementAmt;
  }
}

const counter = new Counter();
counter.start();
```

## This Takeways

- this is a reserved keyword whose value is determined only at the point of function execution
- If you don't call a function yourself (ex : _it's called by a callback_), you need to ensure JS knows what the this _context_ should be
