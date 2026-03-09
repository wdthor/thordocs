- Create a greeting for your program.
- Ask the user for the city that they grew up in and store it in a variable.
- Ask the user for the name of a pet and store it in a variable.
- Combine the name of their city and pet and show them their band name.

```java
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
