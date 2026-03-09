# Dictionary

A dictionary is a collection of key-value pairs.

```py
user = {"name": "John", "age": 30, "city": "New York"}
```

### Dictionary operations

```py
user = {"name": "John", "age": 30, "city": "New York"}
user["name"] # Access an element by key
user["name"] = "John" # Modify an element by key
```

### Dictionary methods

```py
user = {"name": "John", "age": 30, "city": "New York"}
user.get("name") # Return the value of the specified key - "John"
user.keys() # Return a list of all the keys in the dictionary - ["name", "age", "city"]
user.values() # Return a list of all the values in the dictionary - ["John", 30, "New York"]
user.items() # Return a list of all the key-value pairs in the dictionary - [("name", "John"), ("age", 30), ("city", "New York")]
user.update({"name": "John", "age": 30, "city": "New York"}) # Update the dictionary with the specified key-value pairs
user.pop("name") # Remove the specified key-value pair from the dictionary - "John"
user.popitem() # Remove the last key-value pair from the dictionary - ("city", "New York")
user.clear() # Remove all key-value pairs from the dictionary - {}
user.copy() # Return a copy of the dictionary - {"name": "John", "age": 30, "city": "New York"}
```

### Print dictionary

```py
user = {"name": "John", "age": 30, "city": "New York"}

for key, value in user.items():
    print(key, value)
```
