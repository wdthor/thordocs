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

.NET Core (support Linux - modern cross plaform)

- 1.0 - 2016
- 2.0 - 2017
- 3.1 - 2019

.NET (Unification of .NET Framework and .NET Core)

- 5.0 - 2020
- 6.0 - 2021
- etc...

### What is .NET ?

- .NET is an _open-source developer platform_, for building many different types of applications
- It supports 3 programming languages
  - C#
  - F#
  - VB
- The compiler compiles the source code into a CIL (**C**ommon **I**ntermediate **L**anguage)
- The CLR (**C**ommon **L**anguage **R**untime) turns the CIL code into machine code

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

### C# value types

#### Integral Types

Most common types

- int
- long
- char

#### Floating-point Types

The result of a floating point operation is rounded to the nearest representable value

- float
- double
  Use case :
- Scientific scenarios
  Not to use :
- Store bookkeeping data
- Salary information

#### Decimal Type

Accurate but higher memory consumption

- decimal

#### Bool Type

- bool

#### Char Type

- char

```csharp
bool enabled = false;
Console.WriteLine($"bool: {enabled}");
```

### DateTime in C#

- Represents an **instant** in time
- Ranges from year 1 to year 9999
- The unit is **ticks** based on 100 nanoseconds

Supports

- Different calendars
- Different time zones
- Transformations between different dates and times

### Conditionals

```csharp
int age = 22;
if(age < 18)
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

### Switch Statement

```csharp
Console.WriteLine("Enter your age: ");
string? input = Console.ReadLine();
int age = int.Parse(input)

switch(age)
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

### Iteration (Loop)

```csharp
// While
Console.WriteLine("While");

int a = 1;
while (a < 5)
{
    Console.WriteLine($"while: {a}");
    a++;
}

// Do while
Console.WriteLine("Do while");

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
- Longer compile time : Isn't really an issue anymore

### Functional Programming (alternative to OOP)

- F# is the functional-first programming language for the .NET platform
- C# gained more and more functional features in recent years
- Most modern programming languages (including C#) are multi-paradigm programming languages

### Reference/Value Types

- Value Types - Variables of value types contain data

```csharp
int age = 32;
int myAge = age;
```

- Reference Types - Variables of reference types contain a reference (address)

```csharp
// They contain the same reference, therefore if person1 is modified, person2 is modified too
Person person1 = new Person();
Person person2 = p1;
```

#### C# keywords reference

The following keywords create reference types in C#

- class
- interface
- delegate
- record

#### C# Built-in reference types

The following reference types included in C#

- object
- string
- dynamic

### Examples

```csharp
Person person1 = new Person("NoobGPT");
Person person2 = new Person("Wdthor");

person1.Name = "Paul";
Console.WriteLine(person1.Name);

/*Greeting*/
person1.PrintGreeting();

/*Math Sum*/
Math math = new Math();
int result = math.Sum(4, 7);
Console.WriteLine(result);

class Person
{
    private string _name;

    /*Constructor*/
    public Person(string Name)
    {
        /*Defined as _name, accessed by Name*/
        _name = Name;
        FriendName = "Sarah";
    }

    public string Name
    {
        get { return _name; }
        set { _name = value; }
    }
    /* Shortcut for getter and setter*/
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

### Access Modifier

- All types and type members (meaning classes, properties, methods, fields, ...) have an accessibility level
- An accessibility level controls whether the code can be used from other code

#### Keywords

- public - Can be used by **any other code**
- private - Can **only** be used in the **same class**
- protected - Can be used only in the **same class** or within a class that is **derived from that class**
- internal - Can be used within the **same assembly or project** but not outside of it

Rarely used :

- protected internal
- private protected

Note : Internal is used in multi-project or multi-assembly solutions

### Namespaces

- Group classes that belong together
