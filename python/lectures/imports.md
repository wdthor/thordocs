# Imports

- Modules are files containing Python definitions and statements.
- They help organize code and make it reusable.

## Standard library

Python comes with a large standard library that provides ready-to-use modules for common tasks.

```py
import math
math.sqrt(4) # 2.0
```

## Custom modules

You can create your own modules to organize your code.

::: code-group

```py [my_module.py]
def my_function():
    print("Hello")
```

```py [main.py]
import my_module
my_module.my_function() # Hello
```

:::

## Importing specific functions

```py
from math import sqrt
sqrt(4) # 2.0
```
