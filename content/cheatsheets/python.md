---
title: Python
description: Python syntax, functions, modules, and common libraries
category: Programming Language
---

# Python Cheatsheet

## Variables & Data Types

### Declaration
```python
name = "John"          # String
age = 30              # Integer
height = 5.9          # Float
is_active = True      # Boolean
nothing = None        # None type
```

### Type Conversion
```python
int("42")            # Convert to int
float("3.14")        # Convert to float
str(42)              # Convert to string
bool(1)              # Convert to boolean
list("abc")          # Convert to list
```

## Operators

### Arithmetic
```python
a + b      # Addition
a - b      # Subtraction
a * b      # Multiplication
a / b      # Division
a // b     # Floor division
a % b      # Modulo
a ** b     # Exponentiation
```

### Comparison
```python
a == b     # Equal
a != b     # Not equal
a > b      # Greater than
a < b      # Less than
a >= b     # Greater or equal
a <= b     # Less or equal
a is b     # Same object
a is not b # Different object
a in b     # Membership
```

### Logical
```python
a and b    # AND
a or b     # OR
not a      # NOT
```

### Assignment
```python
a = 5
a += 2     # a = a + 2
a -= 2
a *= 2
a /= 2
a //= 2
a **= 2
a %= 2
```

## Control Flow

### If/Elif/Else
```python
if condition:
    # code
elif other_condition:
    # code
else:
    # code
```

### Ternary Operator
```python
value_if_true if condition else value_if_false
```

## Loops

### For Loop
```python
for i in range(10):
    print(i)

for item in iterable:
    print(item)

for i, item in enumerate(list):
    print(i, item)

for key, value in dict.items():
    print(key, value)
```

### While Loop
```python
while condition:
    # code
```

### Loop Control
```python
break       # Exit loop
continue    # Skip iteration
pass        # Do nothing
```

### List Comprehension
```python
[x * 2 for x in range(10)]
[x for x in range(10) if x % 2 == 0]
[[x, y] for x in range(3) for y in range(3)]
```

## Functions

### Function Definition
```python
def greet(name):
    return f"Hello, {name}"

def greet(name="Guest"):  # Default parameter
    return f"Hello, {name}"

def sum_all(*args):       # Variable arguments
    return sum(args)

def greet(**kwargs):      # Keyword arguments
    print(kwargs)
```

### Lambda Functions
```python
lambda x: x * 2
lambda x, y: x + y
sorted(list, key=lambda x: x[1])
```

### Decorators
```python
@decorator
def function():
    pass

def decorator(func):
    def wrapper(*args, **kwargs):
        return func(*args, **kwargs)
    return wrapper
```

## Strings

### Creating Strings
```python
str1 = "Hello"
str2 = 'Hello'
str3 = """Multi
line
string"""
str4 = f"Hello {name}"   # F-string
```

### String Methods
```python
str.upper()              # Uppercase
str.lower()              # Lowercase
str.capitalize()         # Capitalize first char
str.title()              # Capitalize each word
str.strip()              # Remove whitespace
str.replace("a", "b")    # Replace
str.split(",")           # Split into list
str.join([list])         # Join list into string
str.find("substring")    # Find index
str.startswith("Hi")     # Check start
str.endswith("bye")      # Check end
str.count("a")           # Count occurrences
str.isdigit()            # Check if digits
str.isalpha()            # Check if alphabetic
str.isspace()            # Check if whitespace
```

### String Formatting
```python
f"Hello {name}"          # F-string
"{} {}".format(a, b)     # Format method
"{0} {1}".format(a, b)   # With indices
"{name} is {age}".format(name="John", age=30)
```

## Lists

### Creating Lists
```python
list1 = []
list2 = [1, 2, 3]
list3 = list([1, 2, 3])
list4 = list(range(5))
```

### List Methods
```python
list.append(item)         # Add item
list.extend([items])      # Add multiple items
list.insert(index, item)  # Insert at index
list.remove(item)         # Remove item
list.pop()                # Remove last item
list.pop(index)           # Remove at index
list.clear()              # Remove all items
list.index(item)          # Get index
list.count(item)          # Count occurrences
list.sort()               # Sort in place
list.sort(reverse=True)   # Sort descending
list.reverse()            # Reverse order
list.copy()               # Shallow copy
len(list)                 # Get length
item in list              # Check membership
```

### List Slicing
```python
list[0]        # First element
list[-1]       # Last element
list[1:4]      # Elements 1 to 3
list[:3]       # First 3 elements
list[2:]       # From element 2 to end
list[::2]      # Every 2nd element
list[::-1]     # Reversed
```

## Tuples

### Creating Tuples
```python
tuple1 = ()
tuple2 = (1,)           # Single element needs comma
tuple3 = (1, 2, 3)
tuple4 = tuple([1, 2, 3])
```

### Tuple Methods
```python
tuple.index(item)       # Get index
tuple.count(item)       # Count occurrences
len(tuple)              # Get length
```

### Unpacking
```python
a, b, c = (1, 2, 3)
a, *rest, c = (1, 2, 3, 4, 5)  # Rest gets [2, 3, 4]
```

## Dictionaries

### Creating Dictionaries
```python
dict1 = {}
dict2 = {"name": "John", "age": 30}
dict3 = dict(name="John", age=30)
dict4 = {x: x**2 for x in range(5)}  # Dict comprehension
```

### Dictionary Methods
```python
dict[key]               # Get value
dict.get(key)           # Get with default None
dict.get(key, default)  # Get with default value
dict[key] = value       # Set value
dict.update({key: val}) # Update multiple
dict.pop(key)           # Remove and return
dict.popitem()          # Remove last item
dict.clear()            # Remove all
dict.keys()             # Get keys
dict.values()           # Get values
dict.items()            # Get key-value pairs
dict.copy()             # Shallow copy
len(dict)               # Get length
key in dict             # Check key exists
```

## Sets

### Creating Sets
```python
set1 = set()
set2 = {1, 2, 3}
set3 = set([1, 2, 3])
```

### Set Methods
```python
set.add(item)           # Add item
set.remove(item)        # Remove item (error if not exists)
set.discard(item)       # Remove item (no error)
set.pop()               # Remove random item
set.clear()             # Remove all
set.union(set2)         # Combine sets
set.intersection(set2)  # Common items
set.difference(set2)    # Items not in set2
set.issubset(set2)      # Check if subset
set.issuperset(set2)    # Check if superset
len(set)                # Get length
item in set             # Check membership
```

## File Handling

### Opening Files
```python
with open("file.txt", "r") as file:     # Read
    content = file.read()

with open("file.txt", "w") as file:     # Write
    file.write("content")

with open("file.txt", "a") as file:     # Append
    file.write("content")

with open("file.txt", "r") as file:     # Read lines
    lines = file.readlines()
```

### File Methods
```python
file.read()             # Read entire file
file.readline()         # Read one line
file.readlines()        # Read all lines
file.write(string)      # Write string
file.writelines(list)   # Write list of strings
file.close()            # Close file
```

## Classes

### Class Definition
```python
class Person:
    def __init__(self, name, age):
        self.name = name
        self.age = age

    def greet(self):
        return f"Hello, I'm {self.name}"

    @staticmethod
    def info():
        return "Person class"

    @classmethod
    def create(cls, name, age):
        return cls(name, age)

person = Person("John", 30)
```

### Inheritance
```python
class Employee(Person):
    def __init__(self, name, age, job):
        super().__init__(name, age)
        self.job = job
```

## Exception Handling

### Try/Except
```python
try:
    # code that might raise
except ValueError:
    # handle ValueError
except (TypeError, KeyError):
    # handle multiple exceptions
except Exception as e:
    # handle any exception
    print(e)
else:
    # runs if no exception
finally:
    # always runs
```

### Raising Exceptions
```python
raise ValueError("Invalid value")
raise TypeError("Type error")
```

## Modules & Imports

### Importing
```python
import module
import module as m
from module import func
from module import func as f
from module import *
```

### Common Modules
```python
import os               # OS operations
import sys              # System operations
import math             # Math functions
import random           # Random operations
import datetime         # Date and time
import json             # JSON handling
import re               # Regular expressions
import collections      # Data structures
import itertools        # Iterators
import functools        # Function tools
```

## Built-in Functions

### Type & Length
```python
type(obj)              # Get type
len(obj)               # Get length
isinstance(obj, type)  # Check type
```

### Iteration
```python
range(10)              # Create range
enumerate(list)        # Get index and item
zip(list1, list2)      # Combine lists
map(func, list)        # Apply function
filter(func, list)     # Filter items
sorted(list)           # Sort and return
reversed(list)         # Reverse and return
sum(list)              # Sum items
min(list)              # Minimum value
max(list)              # Maximum value
all(list)              # All true
any(list)              # Any true
```

### Input/Output
```python
print(obj)             # Print
input(prompt)          # Read input
```

### Other
```python
abs(-5)                # Absolute value
round(3.14, 1)         # Round
int(3.14)              # Convert to int
float(3)               # Convert to float
str(42)                # Convert to string
bool(1)                # Convert to boolean
list()                 # Create list
dict()                 # Create dictionary
set()                  # Create set
tuple()                # Create tuple
```

## Common Patterns

### Dictionary Get with Default
```python
value = dict.get(key, default_value)
```

### List Comprehension with Condition
```python
[x for x in list if condition]
```

### Unpacking
```python
a, b = (1, 2)
a, *rest = [1, 2, 3, 4]
```

### Multiple Assignment
```python
a = b = c = 0
```

### Swap Variables
```python
a, b = b, a
```
