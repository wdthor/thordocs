- Create a greeting for your program.
- Ask the user for the city that they grew up in and store it in a variable.
- Ask the user for the name of a pet and store it in a variable.
- Combine the name of their city and pet and show them their band name.

```c#
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
