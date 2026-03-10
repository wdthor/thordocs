---
layout: doc
---

# C#

## Fundamentals

1. .NET Framework

- 2002-2019 : 1.0-4.8 release - Modern Windows-only software development platform

2. .NET Core

- 2016-2019 : 1.0-3.1 release - Modern cross-platform app development

3. .NET

- 2020-current - 5.0-current - Current name going forward with a new version released every year

### .NET Design Principles

- Interoperability
- Language independence
- Type safety
- Portability
- Security
- Memory Management
- Performance

### Timeline & Product Names

.NET Framework (Windows only)

- 1.0 - 2002
- 2.0 - 2005
- 3.0 - 2006
- 4.0 - 2010
- 4.2 - 2012
- 4.8 - 2019

.NET Core (support Linux - modern cross platform)

- 1.0 - 2016
- 2.0 - 2017
- 3.1 - 2019

.NET (Unification of .NET Framework and .NET Core)

- 5.0 - 2020
- 6.0 - 2021
- etc...

### What is .NET ?

- .NET is an _open-source developer platform_, for building many different types of applications
- It supports 3 programming languages (C#, F#, VB)
  - Compilers compile code into Common Intermediate Language (CIL)
- The CLR (**C**ommon **L**anguage **R**untime) turns the CIL code into machine code
- It is cross platform with a consistent API and rich libraries

### What is C# ?

- C# is a general-purpose programming language for the .NET platform
- It is a multi-paradigm programming language

#### Design Goals

- Simple, modern, general-purpose, object-oriented programming language
- Support for software engineering principles including strong type checking, array bounds checking, etc...
- Support for internationalization

#### C# Timeline

- 1.0 - 2002
- 2.0 - 2003
- ...
- 5.0 - 2012
- ...
- 10.0 - 2021

## Shortcuts

| Shortcut               | Description                                             |
| ---------------------- | ------------------------------------------------------- |
| `F9`                   | Add debugger on current line                            |
| `ctrl` + `shift` + `n` | Create a new project                                    |
| `F10`                  | Execute the current line or continue on next line       |
| `F5`                   | Start the program or continue the executing the program |

## Value Types

Important types:

- int
- long
- bool
- float
- double
- char

#### Integral Types

Most common: `int`, `long`, `char`

#### Floating-point Types

The result of a floating point operation is rounded to the nearest representable value: `float`, `double`

- Use case: Scientific scenarios
- Not for: bookkeeping data, salary information

#### Decimal Type

Accurate but higher memory consumption: `decimal`

Note: It's not necessary to memorize information that you rarely or never use.

## Using C# Value Types

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
float f = 3.5f; // float - single precision (32-bit)
double d = 7.8d; // double - double precision (64-bit)
decimal dec = 7.15m; // decimal - high precision (128-bit) smaller range

Console.WriteLine($"f: {f}, g: {d}, dec: {dec}");

// Nullable value types
int? myNullInt = null;
bool? myNullBool = null;
Console.WriteLine($"int?: {myNullInt}, bool?: {myNullBool}");

// Inferred value types
var myVar = "Hello"; // Inferred as string
```

## Casting and Value Type Conversions

- Implicit Conversions — no syntax needed, no data loss, no precision loss (e.g. `int` → `long`)
- Explicit Conversions — require casting, potential data loss, potential precision loss

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
// explicit conversion with precision loss
long bigNumber = 111111111111111;
int smallerNumber = (int)bigNumber;
Console.WriteLine($"smallerNumber: {smallerNumber}"); // prints: 307163591
```

## DateTime in C#

- Represents an **instant** in time
- Ranges from year 1 to year 9999
- The unit is **ticks** based on 100 nanoseconds

Supports different calendars, time zones, and transformations between dates and times.

## Random Class

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

## Conditionals

```csharp
int age = 22;
if (age < 18)
{
    Console.WriteLine("Young");
}
else if (age == 22)
{
    Console.WriteLine("Happy Birthday");
}
else
{
    Console.WriteLine("Adult");
}

// Ternary operator
int version = 4;
string productVersion = version == 4 ? "4.0" : "3.0";
Console.WriteLine(productVersion);
```

```csharp
// Boolean expression
string message = "The quick brown fox jumps over the lazy dog.";
bool result = message.Contains("dog");
Console.WriteLine(result);

if (message.Contains("fox"))
{
    Console.WriteLine("What does the fox say?");
}
```

## Switch Statement

```csharp
Console.WriteLine("Enter your age: ");
string? input = Console.ReadLine();
int age = int.Parse(input);

switch (age)
{
    case < 10:
        Console.WriteLine("You're a child");
        break;
    case < 20:
        Console.WriteLine("You're a teenager");
        break;
    case < 30:
        Console.WriteLine("You're a young adult");
        break;
    case < 40:
        Console.WriteLine("You're an adult");
        break;
    default:
        Console.WriteLine("You're a wise person");
        break;
}
```

## Iteration (Loops)

```csharp
// While
int a = 1;
while (a < 5)
{
    Console.WriteLine($"while: {a}");
    a++;
}

// Do while
int b = 1;
do
{
    Console.WriteLine($"do while: {b}");
    b++;
} while (b < 1);

// For
for (int i = 0; i < 5; i++)
{
    Console.WriteLine($"for {i}");
}
```

## Array Basics

```csharp
// Declare an array
string[] fraudulentOrderIDs = new string[3];

fraudulentOrderIDs[0] = "A123";
fraudulentOrderIDs[1] = "B456";
fraudulentOrderIDs[2] = "C789";
```

## OOP

- OOP is a programming paradigm based on the concepts of **objects**

### Structure of OOP

- class : data type including properties and methods
- object : instance of a class with specified data for the properties
- method : function defined within a class
- property : data field within a class

### OOP Principles

- Encapsulation : Data is contained inside an object (information hiding)
- Abstraction : Classes expose what they can do, not how they do it
- Inheritance : Derived classes inherit the structure and behavior of the parent class
- Polymorphism : Classes sharing the same structure can be exchanged

### Strengths of OOP

- Modularity : Data encapsulation results in self-contained objects. It simplifies software development in teams
- Reusability : Classes can be shared across applications. Don't reinvent the wheel
- Productivity : Reusable building blocks help developers build applications more quickly

### Weaknesses of OOP

- Focus on Data : Does not focus enough on computation or algorithms
- OO code is lengthy : Code is lengthy and complicated to implement

### Functional Programming (alternative to OOP)

- F# is the functional-first programming language for the .NET platform
- C# gained more and more functional features in recent years
- Most modern programming languages (including C#) are multi-paradigm programming languages

### Reference/Value Types

- Value Types — Variables contain data directly

```csharp
int age = 32;
int myAge = age;
```

- Reference Types — Variables contain a reference (address)

```csharp
// They contain the same reference, so modifying person1 also modifies person2
Person person1 = new Person();
Person person2 = person1;
```

#### Keywords that create reference types

- class
- interface
- delegate
- record

#### Built-in reference types

- object
- string
- dynamic

### Examples

```csharp
Person person1 = new Person("NoobGPT");
Person person2 = new Person("Wdthor");

person1.Name = "Paul";
Console.WriteLine(person1.Name);

person1.PrintGreeting();

Math math = new Math();
int result = math.Sum(4, 7);
Console.WriteLine(result);

class Person
{
    private string _name;

    public Person(string Name)
    {
        _name = Name;
        FriendName = "Sarah";
    }

    public string Name
    {
        get { return _name; }
        set { _name = value; }
    }

    public string FriendName { get; private set; }

    public void PrintGreeting()
    {
        Console.WriteLine($"Hello {Name}");
    }
}

public class Math
{
    public int Sum(int a, int b)
    { return a + b; }
}
```

### Access Modifiers

- All types and type members have an accessibility level that controls whether they can be used from other code

#### Keywords

- public — Can be used by **any other code**
- private — Can **only** be used in the **same class**
- protected — Can be used only in the **same class** or within a **derived class**
- internal — Can be used within the **same assembly or project** but not outside of it

Rarely used: `protected internal`, `private protected`

Note: `internal` is used in multi-project or multi-assembly solutions

### Namespaces

- Group classes that belong together
