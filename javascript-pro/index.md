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
- Properties that don't exist evaluates to *undefined*

```js
pet.something // undefined
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