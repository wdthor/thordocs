# Functional Programming

## What is Functional Programming ?

Functional programming is a style (or "paradigm") of programming where we compose functions instead of mutating state (updating the value of variables).

- **Functional programming** is more about **declaring what you want to happen**, rather than how you want it to happen.
- **Imperative** (or procedural) programming **declares both** the **what** and the **how**.

Imperative code :

```py
car = create_car()
car.add_gas(10)
car.clean_windows()
```

Functional code :

```py
return clean_windows(add_gas(create_car()))
```

In functional programming, we just compose functions that return new values

**Notes :**

Python is not the best language for functional programming :

1. No **static typing**.
2. Everything is **mutable**.
3. No **tail call optimization**.
4. **Side effects** are common.
5. Imperative and OOP styles abound in popular libraries.
6. **Purity** is not enforced (and sometimes not even encouraged).
7. **Sum Types** are hard to define.
8. **Pattern matching** is weak at best.

### Immutability

- In **FP**, we strive to make data **immutable**
- Generally speaking, _immutability means fewer bugs_ and _more maintainable code_

### Declarative Programming

- Functional programming aims to be _declarative_. We prefer to declare what we want the computer to do, rather than muck around with the details of how to do it.  
  Ex : _Css_ is declarative

```css
button {
  color: red;
}
```

- Unlike functional programming, a lot of code is imperative
- We write out the exact step-by-step implementation details

```py
from tkinter import * # first, import the library
master = Tk() # create a window
master.geometry("200x100") # set the window size
button = Button(master, text="Submit", fg="red").pack() # create a button
master.mainloop() # start the event loop
```

### Classes vs Functions

If you're unsure, default to functions.

> **Classes** encourage you to think about the world as a hierarchical collection of objects. Objects bundle behavior, data, and state together in a way that draws boundaries between instances of things, like chess pieces on a board.

> **Functions** encourage you to think about the world as a series of data transformations. Functions take data as input and return a transformed output. For example, a function might take the entire state of a chess board and a move as inputs, and return the new state of the board as output.

### Functional vs OOP

**Functional programming** and** object-oriented** programming are **styles for writing code**. One isn't inherently superior to the other, but to be a well-rounded developer you should understand both well and use ideas from each when appropriate.

- Of the four pillars of **OOP**, **inheritance** is _the only one that doesn't fit_ with **functional programming**.

## First Class Functions

### Functions as Values

In Python, we can assign an existing function to a variable :

```py
def add(x, y):
    return x + y

# assign the function to a new variable
# called "addition". It behaves the same
# as the original "add" function
addition = add
print(addition(2, 5))
# 7
```

### Anonymous Functions

Anonymous functions have _no name_, and in Python, they're called **lambda functions** after lambda calculus :

```py
lambda x: x + 1
```

Notice that the expression `x + 1` is returned automatically, no need for a `return` statement. And because functions are just values, we can assign the function to a variable named `add_one` :

```py
add_one = lambda x: x + 1
print(add_one(2))
# 3
```

Lambda functions are still just functions, they're often used for small, simple evaluations

```py
get_age = lambda name: {
    'lane': 29,
    'hunter': 69,
    'allan': 17
}.get(name, 'not found')
print(get_age('lane'))
# 29
```

### First Class and Higher Order Functions

A programming language "supports first-class functions" when functions are treated like any other variable. That means functions can be passed as arguments to other functions, can be returned by other functions, and can be assigned to variables.

- **First-class function**: A function that is treated like any other value
- **Higher-order function**: A function that accepts another function as an argument or returns a function

#### First-class example

```py
def square(x):
    return x * x

# Assign function to a variable
f = square

print(f(5))
# 25
```

#### Higher-order example

```py
def square(x):
    return x * x

def my_map(func, arg_list):
    result = []
    for i in arg_list:
        result.append(func(i))
    return result

squares = my_map(square, [1, 2, 3, 4, 5])
print(squares)
# [1, 4, 9, 16, 25]
```

### Map

The `map` function takes a function and an `iterable` (in this case a list) as inputs. It returns an iterator that applies the function to every item, yielding the results.

- With `map`, we can operate on lists without using loops and stateful variables.

```py
def square(x):
    return x * x

nums = [1, 2, 3, 4, 5]
squared_nums = map(square, nums)
print(list(squared_nums))
# [1, 4, 9, 16, 25]
```

- `list()` converts the `map` object back into a standard list.

### Filter

The `filter` function takes a function and an `iterable` (in this case a list) and returns a new iterable that only contains elements from the original iterable where the result of the function on that item returned True.

```py
def is_even(x):
    return x % 2 == 0

numbers = [1, 2, 3, 4, 5, 6]
evens = list(filter(is_even, numbers))
print(evens)
# [2, 4, 6]
```
