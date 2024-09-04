# Regular Expressions

## Introduction

### What are Regular Expressions

- Describe patterns in text using sequence of characters
- Used for matching, locating, and managing text
- Not limited to "any" match; can find specific patterns
- Work across many programming languages

### Components of a Regular Expression

- Regular expressions consist of two character types:
  - literals
  - metacharacters
- Literals match themselves exactly, e.g., 'cat' matches 'cat' in a sentence
- Metacharacters have special meanings, representing various elements and conditions
- The combination of literals and metacharacters creates powerful search patterns

### How Regular Expressions Work

- Regular expressions search text by asking : "Where can I find a pattern match ?"
- The process begins at the start of the text, progressing character by character
- Metacharacters allow for complex search patterns, enhancing regex versatility

## Regex Syntax Basics

- Practice regex : [Pythex]("https://pythex.org/")

1. `/banana/`

- Banana **banana** BANANA! No matter how you spell it, a **banana** is a **banana**.

2. `/.at/` - `.` represents any character

- I saw a **cat**, a **rat** and a **bat**. They were all wearing **hat**s.

3. `/\./` - `\` escape character

## Special Characters

- `\d` - any digit (0-9)
- `\D` - any non-digit character
- `\w` - any alphanumeric character (a-z, A-Z, 0-9)
- `\W` - any non-alphanumeric character
- `\s` - represents white space

1.  `\d`

- I have **7** cats, **2** dogs, and **17** fish.

2. `\D`

- **I have** 7 **cats,** 2 **dogs, and** 17 **fish.**

3. `\w` (no spaces were highlighted)

- **2020**, **it was the best of times**, **it was the worst of times**.

4. `\W` (all spaces were highlighted)

- 2020 **,** it was the best of times **,** it was the worst of times **.**

5. `S` (only spaces were not hightlighted)

- **2020, it was the best of times, it was the worst of times.**

## Matching Multiple Characters

- [0-9] - any digits from 1 to 9
- [a-z] - any lowercase letters
- [A-Z] - any uppercase letters

### Combined Ranges

- [a-zA-Z] any letters
- [0-9A-Za-z] numbers or letters

### Sets of Characters

- [tlc149] - identifies t, l, c, 1, 4, 9
- [tlc1-3] - identifies t, l, c, 1, 2, 3

1. `[1-9]`

- I have **5** apples, **3** oranges, **7** bananas, and 0 kumquats.

2. `[^1-9]` matches anything excepts number from 1 to 9

- **I have** 5 **apples,** 3 **oranges,** 7 **bananas, and 0 kumquats.**
