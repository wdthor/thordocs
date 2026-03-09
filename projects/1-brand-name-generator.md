- Create a greeting for your program.
- Ask the user for the city that they grew up in and store it in a variable.
- Ask the user for the name of a pet and store it in a variable.
- Combine the name of their city and pet and show them their band name.

::: code-group

```python:line-numbers [index.py]
print("Welcome to the Band Name Generator")

city = input("Which city did you grow up in ? ")
pet_name = input("What is the name of your pet ? ")

print(f"Your band name is : {city} {pet_name}")
```

```java:line-numbers [main.java]
import java.util.Scanner;

public class MyClass {
  public static void main(String args[]) {
    Scanner scanner = new Scanner(System.in);

    System.out.println("Welcome to the Band Name Generator");

    System.out.println("Which city did you grow up in ?");
    String city = scanner.nextLine();

    System.out.println("What is the name of your pet ?");
    String petName = scanner.nextLine();

    System.out.println(STR."Your band name is : \{city} \{petName}");
  }
}
```

```php:line-numbers [index.php]
// readline() only works in CLI

<?php
echo "Welcome to the Band Name Generator";

$city = readline("Which city did you grow up in ? ");
$petName = readline("What is the name of your pet ? ");

echo "Your band name is $city $petName";
?>
```

```c#:line-numbers [program.cs]
namespace BrandNameGenerator
{
  internal class Program
  {
    static void Main(string[] args)
    {
      Console.WriteLine("Welcome to the Band Name Generator");

      Console.WriteLine("Which city did you grow up in ?");
      string? city = Console.ReadLine();

      Console.WriteLine("What is the name of your pet ?")
      string? petName = Console.ReadLine();

      Console.WriteLine($"Your band name is : {city} {petName}")
    }
  }
}
```
