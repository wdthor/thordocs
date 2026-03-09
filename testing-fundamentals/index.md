# Testing Fundamentals

## Testing Basics

- If a test passes, it doesn't mean the code works, it just means the test didn't fail

```js
// This test passes because the test completed before the setTimeout callback was executed
// The test doesn't wait for the setTimeout to finish
test("a simple test", () => {
  setTimeout(() => {
    expect(true).toBe(false);
  }, 1000);
});
```

- If there is no test in a file, the test runner will throw an error

### Testing Guidelines

- Writing tests isn't hard. But, some code is hard to test
- Your tests don't pass because your code works. They pass because they didn't fail
- Someone is always testing your code
- No one has ever broken their code into too many, small, well-named, easy-to-test functions
- Testing the unhappy path is about making sure that you've thought through all of the stuff that can get weird

```js
add(1);
add(null, 1);
add("1", 2);
add(2, "potato");
subtract("1", 1);
divide(5, 0);
```

### Testing for Invalid Input

If we expect a function to fail, we need to pass the function inside an anonymous function to the expect block

```js
test("subtracting a string from a number throws an error", () => {
  expect(() => subtract(1, "potato")).toThrow();
});
```

- `toThrow` doesn't need the full error message
- Having an error message that matches the expectation is great, until you decide, you want to change the error message or include more information in it

```js
test("subtracting a string from a number throws an error", () => {
  expect(() => subtract(1, "potato")).toThrow("not a number");
});
```
