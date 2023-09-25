---
layout: doc
---

## History .NET

- .NET Framework 1.0 Release (2002) - now outdated
- .NET Core 1.0 Release (2016) - now outdated
- The product was renamed and is now called .NET (5.0 - 2020)

## What is .NET ?

> .NET is an open-source developer platform, for building many different types of applications

- It supports 3 programming languages (C#, F#, VB)
  - Compilers compile code into Common Intermediate Language (CIL)
- It is cross platform
- Consistent API
- Libraries

## Shortcuts

| Shortcut               | Description                                             |
| ---------------------- | ------------------------------------------------------- |
| `F9`                   | Add debugger on current line                            |
| `ctrl` + `shift` + `n` | Create a new project                                    |
| `F10`                  | Execute the current line or continue on next line       |
| `F5`                   | Start the program or continue the executing the program |

## Value Types

Important types are :

- int
- long
- bool
- float
- double
- char

Note : It's not necessary to memorize information that you rarely or never use.

## Using C# value types

```csharp
// bool - boolean
bool enabled = false;
Console.WriteLine($"bool: {enabled}");

enabled = true;
Console.WriteLine($"bool: {enabled}");

// char
char myChar = 'a';
Console.WriteLine($"char: {myChar}");

// int
int a = 0;
int b = 5;
int c = -10;

Console.WriteLine($"a: {a}, b: {b}, c: {c}");

// long
long i = 99;

Console.WriteLine($"long: {i}");

// floating point number types
float f = 3.5f; // float - single precision (32-bit) floating point number
double d = 7.8d; // double - double precision (64-bit) floating point number
decimal dec = 7.15m; // decimal - high precision (128-bit) smaller range floating point number

Console.WriteLine($"f: {f}, g: {d}, dec: {dec}");

// Nullable value types
int? myNullInt = null;
bool? myNullBool = null;
Console.WriteLine($"int?: {myNullInt}, bool?: {myNullBool}");

// Infered value types
var myVar = "Hello"; // Infered as string
```

```csharp
// In
```

## Casting and Value Type Conversions

- Implicit Conversions
  - no syntax needed, no data loss, no precision loss
  - Ex: conversions between `int` and `long`
- Explicit Conversions
  - require casting, potential data loss, potential precision loss

```csharp
// implicit conversion
int age = 32;
long myAge = age;
```

```csharp
// explicit conversion
float myWeight = 75.5f;
long yourWeight = (int)myWeight;
```

```csharp
// explicit conversions with precision loss
long bigNumber = 111111111111111;
int smallerNumber = (int)bigNumber;

Console.WriteLine($"smallerNumber: {smallerNumber}"); // prints : 307163591
```

# Section 2

## Random class

```csharp
Random dice = new Random();
int roll1 = dice.Next(); // random number
int roll2 = dice.Next(101); // random number from 0 to 100
int roll3 = dice.Next(50, 101); // random number from 50 to 100

Console.WriteLine($"First roll: {roll1}");
Console.WriteLine($"Second roll: {roll2}");
Console.WriteLine($"Third roll: {roll3}");

// Get the highest number
int firstValue = 500;
int secondValue = 600;
int largerValue = System.Math.Max(firstValue, secondValue);

```

## Conditional expressions

```csharp

// Random class using condition
Random dice = new Random();

int roll1 = dice.Next(1, 7);
int roll2 = dice.Next(1, 7);
int roll3 = dice.Next(1, 7);

int total = roll1 + roll2 + roll3;

Console.WriteLine($"Dice roll: {roll1} + {roll2} + {roll3} = {total}");

if(total > 14)
{
    Console.WriteLine("Winner");
}

if(total < 15)
{
    Console.WriteLine("Looser");
}

// Boolean expression
string message = "The quick brown fox jumps over the lazy dog.";
bool result = message.Contains("dog");
Console.WriteLine(result);

if (message.Contains("fox"))
{
    Console.WriteLine("What does the fox say?");
}

```

## Array basics

```csharp
// Declare an array
string[] fraudulentOrderIDs = new string[3];

fraudulentOrderIDs[0] = "A123";
fraudulentOrderIDs[1] = "B456";
fraudulentOrderIDs[2] = "C789";
```
