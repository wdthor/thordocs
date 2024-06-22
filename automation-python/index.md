# Python Basics

## Lists

::: code-group

```py:line-numbers [lists.py]
# list
my_list = [1, 2, 3]

# len()
print(len(my_list))

```

:::

## Tuples

- Tuples are immutable lists

::: code-group

```py:line-numbers [tuples.py]
# tuple
my_tuple = (1, 2, 3)

# len()
print(len(my_tuple))

```

:::

## Dictionaries

- Dictionaries are like objects in other programming languages
- They have key value pairs

::: code-group

```py:line-numbers [dictionaries.py]
# Dictionaries
translations = {"hello", "bonjour", "yes": "oui", "no": "non"}

hello_in_french = translations["hello"]

print(hello_in_french)

# len()
print(len(translations))


```

:::

## Conditions

::: code-group

```py:line-numbers [conditions.py]
cities = ['New York', "Los Angeles", "Chicago", "Seattle", "Phoenix"]

user_city = input("Please enter the name of your city :")

# if user_city in cities:
#   response = f"Yes, {user_city} is in our list of cities, you get a discount !"
#   print(response)

# We can use "not in"

if user_city not in cities:
  response = f"Yes, {user_city} is in our list of cities, you get a discount !"
  print(response)

```

```py:line-numbers [if_elif_else.py]
score = float(input("Enter your score : "))
if score >= 90:
  print("Grade : A")
elif score >= 80:
  print("Grade : B")
elif score >= 70:
  print("Grade : C")
elif score >= 60:
  print("Grade : D")
else:
  print("Grade : E")

```

```py:line-numbers [if_and_or.py]
age = 32
driving_experience = 3

if age >= 21 and driving_experience >= 2:
  print("Eligible for car rental"):
else:
  print("Not eligible for car rental")

is_student = False
is_senior_citizen = True

if is_student or is_senior_citizen:
  print("You get a free coffee !")
else:
  print("That'll be $10.99")

```

:::

## Loops

::: code-group

```py:line-numbers [while_loop.py]
number = 1

while number <= 10:
  print(number)
  number += 1

```

```py:line-numbers [while_validation.py]

score = input("Enter your score : ")

while not score.isNumeric():
  print("Invalid input")
  score = input("Enter a numeric score : ")

score = float(score)

if score >= 90:
  print("Grade : A")
elif score >= 80:
  print("Grade : B")
elif score >= 70:
  print("Grade : C")
elif score >= 60:
  print("Grade : D")
else:
  print("Grade : E")

```

```py:line-numbers [for_loop.py]
for number in range(10):
  print(number)

numbers_to_print = int(input("Enter the number of numbers you want to generate :"))

for number in range(numbers_to_print):
  print(number)
```

```py:line-numbers [loop_list.py]
fruits = ['apple', 'banana', 'strawberry']

for fruit in fruits:
  print(fruit)
```

```py:line-numbers [loop_dictionary.py]
person = {
  'name': 'Alice',
  'age': 30,
  'job': 'Engineer'
}

for key in person:
  print(key)

for value in person.values():
  print(value)

for key, value in person.items():
  print(f'{key} : {value}')
```

:::

## Modules, libraries and classes

::: code-group

```py:line-numbers [module.py]
from datetime import datetime

now = datetime.now()

new_years_day = datetime(year=now.year + 1, month=1, day=1)

difference = new_years_day - now

day_left = difference.days

print(f"There are {days_left} days left until the next New Year's")
```

:::
