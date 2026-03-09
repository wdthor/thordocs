# Object-Oriented Programming

## Constructor

A constructor is a special method that is called when an object is created.

::: code-group

```py [Enemy.py]
class Enemy:

    def __init__(self, type: str, health: int, attack: int):
        self.type = type
        self.health = health
        self.attack = attack
        print("Enemy created")
```

```py [main.py]
from Enemy import Enemy

zombie = Enemy("Zombie", 100, 10)
big_dog = Enemy("Big Dog", 150, 20)
```

:::

## The 4 pillars of OOP

- Abstraction
- Encapsulation
- Inheritance
- Polymorphism

### Abstraction

Abstraction is the process of hiding the implementation details of a class and showing only the necessary details to the user.

#### Why Abstraction ?

- To allow the user to use the class without knowing the implementation details.
- To make the code simple and reusable.
- Better use of the DRY (Don't Repeat Yourself) principle.
- Enables objects to become more scalable.

#### Example

::: code-group

```py [Enemy.py]
class Enemy:
    type: str = "Enemy"
    health: int = 100
    attack: int = 10

    def talk(self):
        print(f"I am {self.type}")

    def attack(self):
        print(f"{self.type} attack for {self.attack} damage")

```

```py [main.py]
from Enemy import Enemy

enemy = Enemy()
enemy.talk()
enemy.attack()
```

:::

### Encapsulation

Encapsulation is the process of hiding the implementation details of a class and showing only the necessary details to the user.

- We can use private variables to hide the implementation details of a class.
- To access private variables, we can use `getters` and `setters`.

#### Why Encapsulation ?

- Helps keep related data and methods together.
- Prevents direct access to the internal state of an object.
- Makes the code cleaner and easier to understand.

#### Example

::: code-group

```py [Enemy.py]
class Enemy:

    def __init__(self, health: int, attack: int):
        self.__health = health # private variable
        self.attack = attack # public variable

    def get_health(self):
        return self.__health

    def set_health(self, health):
        self.__health = health
```

```py [main.py]
from Enemy import Enemy

enemy = Enemy(100, 10)
print(enemy.get_health())
enemy.set_health(200)
print(enemy.get_health())
```

:::

### Inheritance

Inheritance is the process of creating a new class from an existing class.

- Properties and methods are inherited from the parent class to the child class.
- The child class can override the properties and methods of the parent class.

#### self vs super()

- `self` is used to refer to the current instance of the child class.
- `super()` is used to refer to the parent class.

#### Example

::: code-group

```py [Enemy.py]
class Enemy:
    def __init__(self, type: str, health: int, attack: int):
        self.type = type
        self.health = health
        self.attack = attack

    def talk(self):
        print(f"I am a {self.type}")

    def attack(self):
        print(f"{self.type} attack for {self.attack} damage")

```

```py [Zombie.py]
class Zombie(Enemy): # Zombie is a type of Enemy
    def __init__(self, health: int, attack: int, speed: int): # Initialize the child class
        super().__init__("Zombie", health, attack) # Initialize the parent class
        self.speed = speed

    # Override the parent class method
    def talk(self):
        print("Grumble...")

    def attack(self):
        print(f"{self.type} bite for {self.attack} damage")

    # Add a new method to the child class
    def infect(self):
        print(f"{self.type} infects you")

```

```py [main.py]
from Zombie import Zombie

zombie = Zombie(100, 10, 1)
zombie.talk() # Grumble...
zombie.attack() # Zombie attack for 10 damage
zombie.infect() # Zombie infects you
```

:::

### Polymorphism

Polymorphism means "many forms". It is the ability of an object to take on many forms.

## Composition

- Composition is a design pattern where one class is composed of one or more other classes.
- It is a way to build complex objects from simpler objects.
- In composition, a class contains one or more other classes as its attributes.

### Example

::: code-group

```py [Weapon.py]
class Weapon:
    def __init__(self, weapon_type: str, attack_increase: int):
        self.weapon_type = weapon_type
        self.attack_increase = attack_increase
```

```py [Hero.py]
from Weapon import Weapon

class Hero:
    def __init__(self, name: str, health: int, attack_damage: int):
        self.name = name
        self.health = health
        self.attack_damage = attack_damage
        self.is_weapon_equipped = False
        self.weapon = None

    def equip_weapon(self, weapon: Weapon):
        # Check if the weapon is not None and hero doesn't have a weapon
        if self.weapon is not None and not self.is_weapon_equipped:
            self.is_weapon_equipped = True
            self.weapon = weapon

    def attack(self):
        if self.is_weapon_equipped:
            print(f"{self.name} attacks with {self.weapon.weapon_type} for {self.attack_damage + self.weapon.attack_increase} damage")
        else:
            print(f"{self.name} attacks for {self.attack_damage} damage")
```

```py [main.py]
from Hero import Hero
from Weapon import Weapon

hero = Hero("Hero", 100, 10)
weapon = Weapon("Sword", 10)
hero.weapon = weapon
hero.equip_weapon(weapon)
```

:::
