# Testing Equality

We use `toBe` for primitives (numbers, strings, booleans) and `toEqual` for objects and arrays

## Equality Rules

### Primitives

```js
test("primitives", () => {
  expect(1).toBe(1);
  expect("1").toBe("1");
  expect(true).toBe(true);
});
```

### Objects and Arrays

```js
test("objects", () => {
  expect({ a: 1 }).toEqual({ a: 1 });
});
```

```js
test("arrays", () => {
  expect([1, 2, 3]).toEqual([1, 2, 3]);
});
```

## Testing Randomness

Randomness is hard to test

### Not Testing Randomness

::: code-group

```js [person.js]
import { v4 as id } from "uuid";
class Person {
  constructor(firstName, lastName) {
    if (!firstName || !lastName) {
      throw new Error("First name and last name are required");
    }

    this.id = "person-" + id();
    this.firstName = firstName;
    this.lastName = lastName;
  }
}
```

```js [person.test.js]
describe("Person", () => {
  it("should create a person with a first name and an id", () => {
    const person = new Person("John", "Doe");
    expect(person).toEqual({
      id: expect.stringContaining("person-"),
      firstName: "John",
      lastName: "Doe",
    });
  });
});
```

:::
