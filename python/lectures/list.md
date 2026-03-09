# List, Set, Tuple

## List

A list is a collection of items in a particular order.

```py
my_list = [1, 2, 3, 4, 5]
```

### List methods

```py
my_list = [1, 2, 3, 4, 5]
my_list.append(6) # Add an element to the end of the list
my_list.remove(1) # Remove an element from the list
my_list.pop() # Remove the last element from the list
my_list.insert(0, 1) # Insert an element at a specific position
my_list.sort() # Sort the list
my_list.reverse() # Reverse the list
my_list.index(1) # Return the index of the first element with the specified value
my_list.count(1) # Return the number of elements with the specified value
my_list.copy() # Return a copy of the list
my_list.clear() # Remove all elements from the list
```

### List operations

```py
my_list = [1, 2, 3, 4, 5]
my_list + [6, 7, 8, 9, 10] # Concatenate two lists
my_list * 2 # Repeat a list
my_list[0] # Access an element by index
my_list[0:2] # Access a slice of the list
my_list[0] = 1 # Modify an element by index
```

### List functions

```py
len(my_list) # Return the number of elements in the list
max(my_list) # Return the maximum element in the list
min(my_list) # Return the minimum element in the list
sum(my_list) # Return the sum of all elements in the list
```

## Set

A set is a collection of unique values but unordered.

```py
my_set = {1, 2, 3, 4, 5}
```

### Set methods

```py
my_set = {1, 2, 3, 4, 5}
my_set.add(6) # Add an element to the set
my_set.remove(1) # Remove an element from the set
my_set.discard(1) # Remove an element from the set if it is a member
my_set.pop() # Remove the last element from the set
my_set.copy() # Return a copy of the set
my_set.clear() # Remove all elements from the set
```

### Set operations

```py
my_set = {1, 2, 3, 4, 5}
my_set.union({6, 7, 8, 9, 10}) # Return the union of two sets - {1, 2, 3, 4, 5, 6, 7, 8, 9, 10}
my_set.intersection({4, 5, 6, 7, 8, 9, 10}) # Return the intersection of two sets - {4, 5}
my_set.difference({4, 5}) # Return the difference of two sets - {1, 2, 3}
my_set.symmetric_difference({4, 5, 6, 7}) # Return the symmetric difference of two sets - {1, 2, 3, 6, 7}

my_set[0] # will throw an error because sets are unordered
```

## Tuple

A tuple is a collection of items in a particular order but immutable.

```py
my_tuple = (1, 2, 3, 4, 5)
```

### Tuple operations

```py
my_tuple = (1, 2, 3, 4, 5)
my_tuple + (6, 7, 8, 9, 10) # Concatenate two tuples
my_tuple * 2 # Repeat a tuple
my_tuple[0] # Access an element by index
my_tuple[0:2] # Access a slice of the tuple
```

### Tuple methods

```py
my_tuple = (1, 2, 3, 4, 5)
my_tuple.count(1) # Return the number of elements with the specified value
my_tuple.index(1) # Return the index of the first element with the specified value
```
