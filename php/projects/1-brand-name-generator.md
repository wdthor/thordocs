- Create a greeting for your program.
- Ask the user for the city that they grew up in and store it in a variable.
- Ask the user for the name of a pet and store it in a variable.
- Combine the name of their city and pet and show them their band name.

```php
// readline() only works in CLI

<?php
echo "Welcome to the Band Name Generator";

$city = readline("Which city did you grow up in ? ");
$petName = readline("What is the name of your pet ? ");

echo "Your band name is $city $petName";
?>
```
