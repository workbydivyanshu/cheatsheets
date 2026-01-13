---
title: Python
description: Complete beginner's guide to Python programming with practical examples
category: Programming Language
---

# Python Cheatsheet

**Python** is a general-purpose, beginner-friendly programming language known for its clean, readable syntax. It's used for web development, data science, artificial intelligence, automation, and more. Why learn Python? It has a gentle learning curve, powerful libraries, and a huge community.

## Getting Started

### What is Python?
Python is an **interpreted language**, meaning code runs line-by-line without needing compilation. It emphasizes **readability** - code that looks like natural English.

### Your First Program
```python
# This is a comment (Python ignores this)
print("Hello, World!")  # Output: Hello, World!
```

**Why this matters:** `print()` is how you display output. Everything in parentheses gets shown to the user.

### Running Python
```bash
# Run a Python file
python filename.py

# Start interactive Python shell
python

# Exit interactive shell
exit()
```

## Variables & Data Types

### What are Variables?
Variables are **containers for storing data**. Think of them as labeled boxes where you put information.

```python
# Creating variables (no type declaration needed!)
name = "Alice"        # String - text in quotes
age = 25              # Integer - whole number
height = 5.9          # Float - decimal number
is_student = True     # Boolean - True or False
nothing = None        # None - represents "nothing"

# Accessing variables
print(name)           # Output: Alice
print(age + 5)        # Output: 30 (math works!)
```

**Why no type declaration?** Python figures out the type automatically - it's **dynamically typed**.

### Understanding Each Data Type

#### Strings (Text)
```python
# Creating strings
message = "Hello"
quote = 'Single quotes work too'
multiline = """This spans
multiple lines"""

# String operations
greeting = "Hello" + " " + "World"  # Concatenation: "Hello World"
repeated = "Ha" * 3                  # Repetition: "HaHaHa"
text = "Python"
length = len(text)                   # Length: 6
char = text[0]                       # Index 0: "P" (0-based indexing!)
substring = text[1:4]                # Slice [1:4]: "yth" (includes 1, excludes 4)

# String methods (built-in functions)
text = "hello world"
text.upper()               # "HELLO WORLD"
text.capitalize()          # "Hello world"
text.replace("world", "Python")  # "hello Python"
text.split(" ")            # ["hello", "world"] - returns a list
"hello" in text            # True - checks if substring exists
```

**Why strings use indexing:** Programmers count from 0, not 1. The first character is at index 0.

#### Numbers (Integer & Float)
```python
# Integers
count = 42
negative = -10
binary = 0b1010        # Binary number: 10 in decimal
hexadecimal = 0xFF     # Hex number: 255 in decimal

# Floats
price = 19.99
scientific = 1.5e-3    # Scientific notation: 0.0015

# Number operations
a, b = 10, 3
a + b      # 13 - addition
a - b      # 7 - subtraction
a * b      # 30 - multiplication
a / b      # 3.333... - division (always returns float)
a // b     # 3 - floor division (rounds down)
a % b      # 1 - modulo (remainder after division)
a ** b     # 1000 - exponentiation (power)

# Rounding
round(3.7)     # 4
round(3.14159, 2)  # 3.14 (round to 2 decimal places)

# Absolute value
abs(-5)        # 5
```

#### Booleans (True/False)
```python
# Boolean values
is_raining = True
is_sunny = False

# Comparison operators return booleans
5 > 3          # True
5 == 3         # False
5 != 3         # True
5 >= 5         # True

# Logical operators (AND, OR, NOT)
sunny = True
warm = True
sunny and warm      # True - both conditions true
sunny or warm       # True - at least one condition true
not sunny           # False - reverses the boolean

# None - represents "nothing"
result = None          # Variable holds no value
if result is None:     # Check if something is None
    print("No data yet")
```

**Why booleans?** They're essential for making decisions in code (if this, then that).

### Type Conversion (Casting)
```python
# Converting between types
int("42")          # 42 - string to integer
float("3.14")      # 3.14 - string to float
str(42)            # "42" - integer to string
bool(1)            # True - 1 is truthy
bool(0)            # False - 0 is falsy
list("abc")        # ['a', 'b', 'c'] - string to list
int(3.9)           # 3 - float to int (truncates, doesn't round)

# Check type
type(42)           # <class 'int'>
type(3.14)         # <class 'float'>
isinstance(42, int)  # True - checks if 42 is an integer
```

## Collections (Storing Multiple Values)

### Lists (Ordered, Changeable)
```python
# Creating lists
numbers = [1, 2, 3, 4, 5]
fruits = ["apple", "banana", "orange"]
mixed = [1, "hello", 3.14, True]
empty = []

# Accessing elements (0-based indexing)
fruits[0]      # "apple"
fruits[-1]     # "orange" (last element)
fruits[1:3]    # ["banana", "orange"] (slice: index 1 to 2)
fruits[:2]     # ["apple", "banana"] (first two)
fruits[1:]     # ["banana", "orange"] (from index 1 onward)

# List operations
len(fruits)    # 3 - how many items
fruits + ["grape"]  # Concatenation: new list with all items
fruits * 2     # Repetition: list repeated twice

# List methods (modify the list)
fruits.append("grape")      # Add to end: ["apple", "banana", "orange", "grape"]
fruits.insert(1, "mango")   # Insert at index: ["apple", "mango", "banana", "orange", "grape"]
fruits.remove("banana")     # Remove by value
fruits.pop()                # Remove last item, returns it
fruits.pop(0)               # Remove and return first item
fruits.sort()               # Sort in place: modifies original
sorted_fruits = sorted(fruits)  # Returns sorted copy
fruits.reverse()            # Reverse in place
fruits.clear()              # Remove all items

# Checking if item exists
"apple" in fruits           # True or False
```

**Why lists?** When you need to store multiple related values, lists keep them organized.

### Tuples (Ordered, Unchangeable)
```python
# Creating tuples (use parentheses)
coordinates = (10, 20)
colors = ("red", "green", "blue")
single = (42,)              # Note the comma for single item!
empty_tuple = ()

# Accessing (same as lists)
colors[0]      # "red"
colors[-1]     # "blue"
colors[1:3]    # ("green", "blue")

# Tuples cannot be changed
# colors[0] = "yellow"  # ERROR! Tuples are immutable

# But you can create new tuples
colors = colors + ("yellow",)  # Creates new tuple

# Tuple unpacking
r, g, b = colors  # r="red", g="green", b="blue"
x, y = (10, 20)   # x=10, y=20
```

**Why tuples exist:** When you want data that shouldn't be changed accidentally. Also faster than lists.

### Dictionaries (Key-Value Pairs)
```python
# Creating dictionaries
student = {
    "name": "Alice",
    "age": 20,
    "major": "Computer Science",
    "gpa": 3.8
}

# Accessing values (use keys, not index)
student["name"]    # "Alice"
student.get("age")  # 20
student.get("phone", "No phone")  # "No phone" (default if missing)

# Adding/updating
student["age"] = 21             # Update existing
student["phone"] = "555-1234"   # Add new key-value pair

# Removing
del student["phone"]            # Delete by key
student.pop("major")            # Remove and return value

# Checking
"name" in student   # True - checks if key exists
student.keys()      # dict_keys(['name', 'age', 'major', 'gpa'])
student.values()    # dict_values(['Alice', 21, 'Computer Science', 3.8])
student.items()     # Key-value pairs: [('name', 'Alice'), ('age', 21), ...]

# Dictionary operations
len(student)        # 3 - number of key-value pairs
student.clear()     # Remove all items
```

**Why dictionaries?** When you need to store data with meaningful labels (keys) instead of just positions.

### Sets (Unordered, No Duplicates)
```python
# Creating sets
colors = {"red", "green", "blue"}
fruits = set(["apple", "banana", "apple"])  # {"apple", "banana"} - duplicates removed

# Set operations (common in mathematics)
colors.add("yellow")
colors.remove("red")
colors.discard("purple")  # Doesn't error if not found

# Set math
colors1 = {"red", "green", "blue"}
colors2 = {"blue", "yellow", "orange"}
colors1 & colors2      # Intersection: {"blue"} - common elements
colors1 | colors2      # Union: all elements from both
colors1 - colors2      # Difference: in colors1 but not colors2
colors1 ^ colors2      # Symmetric difference: in one or the other, not both

# Checking
"red" in colors        # True
"purple" in colors     # False
```

**Why sets?** Fast membership testing, removing duplicates, and mathematical operations.

## Control Flow (Making Decisions)

### If Statements
```python
# Simple if
age = 18
if age >= 18:
    print("You are an adult")

# If-else
if age >= 18:
    print("You are an adult")
else:
    print("You are a minor")

# If-elif-else (multiple conditions)
score = 85
if score >= 90:
    grade = "A"
elif score >= 80:
    grade = "B"
elif score >= 70:
    grade = "C"
else:
    grade = "F"
print(grade)  # "B"

# Nested conditions
age = 25
has_license = True
if age >= 18:
    if has_license:
        print("You can drive")
    else:
        print("You need a license")
else:
    print("You're too young to drive")

# Conditional expression (one-liner if-else)
status = "adult" if age >= 18 else "minor"
print(status)  # "adult"
```

**Why if statements?** Programs need to make decisions based on conditions.

### Comparison & Logical Operators
```python
# Comparison operators (return True/False)
a = 10
a == 10      # True - equal to
a != 5       # True - not equal to
a > 5        # True - greater than
a < 20       # True - less than
a >= 10      # True - greater or equal
a <= 10      # True - less or equal

# Logical operators (combine conditions)
age = 25
has_license = True

age >= 18 and has_license   # True - both conditions must be true
age >= 65 or has_license    # True - at least one must be true
not (age < 18)              # True - negation (opposite)

# Combining multiple conditions
score = 85
is_submitted = True
if score >= 80 and is_submitted:  # Both must be true
    print("Assignment accepted")

if score < 60 or not is_submitted:  # One or both must be true
    print("Assignment not accepted")
```

## Loops (Repeating Code)

### For Loops
```python
# Loop through list
fruits = ["apple", "banana", "orange"]
for fruit in fruits:
    print(f"I like {fruit}")
# Output:
# I like apple
# I like banana
# I like orange

# Loop with range
for i in range(5):     # 0, 1, 2, 3, 4
    print(i)

# Range with start, stop, step
for i in range(1, 10, 2):  # 1, 3, 5, 7, 9
    print(i)

# Loop through string
word = "Hello"
for letter in word:
    print(letter)  # H, e, l, l, o

# Loop through dictionary
student = {"name": "Alice", "age": 20, "major": "CS"}
for key in student:
    print(f"{key}: {student[key]}")

# Loop with index
fruits = ["apple", "banana", "orange"]
for index, fruit in enumerate(fruits):
    print(f"{index}: {fruit}")
# Output:
# 0: apple
# 1: banana
# 2: orange
```

**Why for loops?** When you know how many times to repeat or have a collection to go through.

### While Loops
```python
# Basic while loop
count = 0
while count < 5:
    print(count)
    count += 1  # count = count + 1
# Output: 0 1 2 3 4

# While with condition
password = ""
while password != "secret":
    password = input("Enter password: ")
print("Access granted!")

# Loop control
count = 0
while count < 10:
    if count == 3:
        break      # Exit loop immediately
    print(count)
    count += 1
# Output: 0 1 2

# Skip iteration
for i in range(5):
    if i == 2:
        continue   # Skip to next iteration
    print(i)
# Output: 0 1 3 4
```

**Why while loops?** When you don't know how many iterations you need, or condition-based looping.

### List Comprehensions (Elegant Loops)
```python
# Create list with loop
numbers = [1, 2, 3, 4, 5]
squared = [x**2 for x in numbers]
# Result: [1, 4, 9, 16, 25]

# With condition
even_squared = [x**2 for x in numbers if x % 2 == 0]
# Result: [4, 16]

# Dictionary comprehension
pairs = [(1, 'a'), (2, 'b'), (3, 'c')]
dictionary = {num: letter for num, letter in pairs}
# Result: {1: 'a', 2: 'b', 3: 'c'}

# Set comprehension
unique_squared = {x**2 for x in [1, 2, 2, 3, 3, 3]}
# Result: {1, 4, 9}
```

**Why comprehensions?** More concise and often faster than regular loops.

## Functions (Reusable Code)

### Defining Functions
```python
# Basic function
def greet():
    print("Hello, World!")

greet()  # Call the function - Output: Hello, World!

# Function with parameters
def greet_person(name):
    print(f"Hello, {name}!")

greet_person("Alice")  # Output: Hello, Alice!

# Function with multiple parameters
def add(a, b):
    return a + b

result = add(5, 3)
print(result)  # 8

# Function with default parameters
def greet_formal(name, greeting="Good morning"):
    print(f"{greeting}, {name}!")

greet_formal("Bob")                    # Uses default greeting
greet_formal("Bob", "Good afternoon")  # Override default

# Function with multiple returns
def divide(a, b):
    if b == 0:
        return None  # Handle error
    quotient = a / b
    remainder = a % b
    return quotient, remainder

q, r = divide(17, 5)
print(q, r)  # 3.4 2
```

**Why functions?** Avoid repeating code, organize logic, make code readable.

### Variable Scope
```python
# Global variable (accessible everywhere)
global_var = "I'm global"

def my_function():
    local_var = "I'm local"  # Only exists inside function
    print(global_var)        # Can access global
    print(local_var)         # Can access local

my_function()
# print(local_var)  # ERROR - doesn't exist outside function
print(global_var)  # Works fine

# Modifying global variable
counter = 0

def increment():
    global counter  # Tell Python to use global counter
    counter += 1

increment()
print(counter)  # 1
```

**Why scope matters?** Prevents accidental variable conflicts and makes code predictable.

### Anonymous Functions (Lambda)
```python
# Lambda - small unnamed function
square = lambda x: x**2
print(square(5))  # 25

# Common use with built-in functions
numbers = [1, 2, 3, 4, 5]
doubled = list(map(lambda x: x * 2, numbers))
# Result: [2, 4, 6, 8, 10]

evens = list(filter(lambda x: x % 2 == 0, numbers))
# Result: [2, 4]

# Sort with lambda
students = [("Alice", 85), ("Bob", 75), ("Charlie", 90)]
sorted_by_score = sorted(students, key=lambda x: x[1])
# Result: [("Bob", 75), ("Alice", 85), ("Charlie", 90)]
```

**Why lambda?** Quick, throwaway functions for simple operations.

## Object-Oriented Programming (OOP)

### What is OOP?
**OOP** organizes code into **objects** that contain data (variables) and behavior (functions). Think of a class as a blueprint for creating objects.

```python
# Class - blueprint for objects
class Dog:
    # Constructor - runs when creating new object
    def __init__(self, name, age):
        # Instance variables - unique to each object
        self.name = name
        self.age = age
    
    # Method - function inside class
    def bark(self):
        return f"{self.name} says woof!"
    
    def birthday(self):
        self.age += 1
        return f"{self.name} is now {self.age}"

# Creating objects (instances)
dog1 = Dog("Rex", 3)
dog2 = Dog("Buddy", 5)

# Accessing variables
print(dog1.name)       # Rex
print(dog2.age)        # 5

# Calling methods
print(dog1.bark())     # Rex says woof!
print(dog2.birthday()) # Buddy is now 6
```

**Why this matters:** Objects group related data and behavior together, making code organized and reusable.

### Instance vs Class Variables
```python
class Car:
    # Class variable - shared by all instances
    total_cars = 0
    
    def __init__(self, brand, model):
        # Instance variables - unique to each car
        self.brand = brand
        self.model = model
        Car.total_cars += 1
    
    def info(self):
        return f"{self.brand} {self.model}"

car1 = Car("Toyota", "Camry")
car2 = Car("Honda", "Civic")

print(car1.brand)      # Toyota
print(Car.total_cars)  # 2 - shared by all cars

car1.brand = "Ford"    # Changes only car1
Car.total_cars = 10    # Changes for everyone
```

### Inheritance - Code Reuse
```python
# Parent class (base class)
class Animal:
    def __init__(self, name):
        self.name = name
    
    def speak(self):
        return f"{self.name} makes a sound"

# Child class (inherits from Animal)
class Dog(Animal):
    def speak(self):  # Override parent's method
        return f"{self.name} says woof!"

class Cat(Animal):
    def speak(self):
        return f"{self.name} says meow!"

# Using inheritance
dog = Dog("Rex")
cat = Cat("Whiskers")

print(dog.speak())  # Rex says woof!
print(cat.speak())  # Whiskers says meow!

# Calling parent method with super()
class Puppy(Dog):
    def speak(self):
        parent_sound = super().speak()  # Calls Dog's speak
        return f"{parent_sound} (puppy version!)"

puppy = Puppy("Scout")
print(puppy.speak())  # Scout says woof! (puppy version!)
```

**Why inheritance?** Avoid repeating code, create organized hierarchies.

### Special Methods (Dunder Methods)
```python
class Person:
    def __init__(self, name, age):
        self.name = name
        self.age = age
    
    # String representation
    def __str__(self):
        return f"{self.name} (age {self.age})"
    
    # Developer-friendly representation
    def __repr__(self):
        return f"Person('{self.name}', {self.age})"
    
    # Equality comparison
    def __eq__(self, other):
        return self.name == other.name and self.age == other.age
    
    # Length
    def __len__(self):
        return self.age
    
    # Less than comparison
    def __lt__(self, other):
        return self.age < other.age

alice = Person("Alice", 25)
bob = Person("Bob", 30)

print(alice)           # Alice (age 25)
print(alice == bob)    # False
print(len(alice))      # 25
print(alice < bob)     # True (Alice is younger)
```

### Properties - Controlled Access
```python
class BankAccount:
    def __init__(self, balance):
        self._balance = balance  # _ means "internal"
    
    # Getter - read property
    @property
    def balance(self):
        return self._balance
    
    # Setter - write property with validation
    @balance.setter
    def balance(self, amount):
        if amount < 0:
            raise ValueError("Balance cannot be negative")
        self._balance = amount
    
    def deposit(self, amount):
        self.balance += amount  # Uses setter

account = BankAccount(1000)
print(account.balance)  # 1000 (getter)
account.balance = 1500  # (setter with validation)
# account.balance = -100  # Error! ValueError
```

**Why properties?** Add validation and logic while keeping clean syntax.

## Decorators

### What are Decorators?
**Decorators** are functions that modify other functions or classes. They "wrap" a function to change or extend its behavior.

```python
# Simple decorator
def greeting_decorator(func):
    def wrapper():
        print("Before function")
        func()
        print("After function")
    return wrapper

# Without decorator
def say_hello():
    print("Hello!")

say_hello()  # Just "Hello!"

# With decorator
@greeting_decorator
def say_hello_decorated():
    print("Hello!")

say_hello_decorated()
# Output:
# Before function
# Hello!
# After function
```

**Why decorators?** Add functionality without changing original code (logging, timing, authentication, etc.)

### Decorators with Arguments
```python
def my_decorator(func):
    def wrapper(*args, **kwargs):  # Accept any arguments
        print(f"Calling {func.__name__}")
        result = func(*args, **kwargs)  # Pass arguments through
        print(f"Finished {func.__name__}")
        return result
    return wrapper

@my_decorator
def add(a, b):
    return a + b

result = add(5, 3)
# Output:
# Calling add
# Finished add
print(result)  # 8
```

### Built-in Decorators

```python
# @property - already covered above

# @staticmethod - doesn't need self or cls
class Math:
    @staticmethod
    def add(a, b):
        return a + b

print(Math.add(5, 3))  # 8 - no instance needed

# @classmethod - receives class as first argument
class Counter:
    count = 0
    
    @classmethod
    def increment(cls):
        cls.count += 1

Counter.increment()
print(Counter.count)  # 1

# @classmethod - creating alternative constructors
class Date:
    def __init__(self, day, month, year):
        self.day = day
        self.month = month
        self.year = year
    
    @classmethod
    def from_string(cls, date_string):
        day, month, year = date_string.split("-")
        return cls(int(day), int(month), int(year))

date = Date.from_string("25-12-2024")
print(f"{date.day}/{date.month}/{date.year}")  # 25/12/2024
```

### Practical Decorator Examples

```python
import time

# Timing decorator
def timer(func):
    def wrapper(*args, **kwargs):
        start = time.time()
        result = func(*args, **kwargs)
        end = time.time()
        print(f"{func.__name__} took {end - start:.4f} seconds")
        return result
    return wrapper

@timer
def slow_function():
    time.sleep(1)
    print("Done")

slow_function()
# Output:
# Done
# slow_function took 1.0003 seconds

# Logging decorator
def log_calls(func):
    def wrapper(*args, **kwargs):
        print(f"Called {func.__name__} with args={args}, kwargs={kwargs}")
        return func(*args, **kwargs)
    return wrapper

@log_calls
def greet(name, greeting="Hello"):
    return f"{greeting}, {name}!"

print(greet("Alice", greeting="Hi"))
# Output:
# Called greet with args=('Alice',), kwargs={'greeting': 'Hi'}
# Hi, Alice!
```

## Input & Output

### Getting User Input
```python
# Basic input (returns string)
name = input("What's your name? ")
print(f"Hello, {name}!")

# Converting input
age = int(input("How old are you? "))
price = float(input("Price: $"))

# Multiple inputs
x, y = input("Enter two numbers (comma-separated): ").split(",")
x, y = int(x), int(y)

# Handle invalid input
try:
    age = int(input("Age: "))
except ValueError:
    print("Please enter a number")
```

### Printing Output
```python
# Basic print
print("Hello")  # Prints and adds newline

# Multiple arguments
print("Name:", "Alice", "Age:", 25)  # Output: Name: Alice Age: 25

# String formatting
name = "Alice"
age = 25
# f-strings (recommended)
print(f"{name} is {age} years old")

# .format()
print("{} is {} years old".format(name, age))

# %s string formatting (older style)
print("%s is %d years old" % (name, age))

# Formatting numbers
pi = 3.14159
print(f"Pi: {pi:.2f}")  # Pi: 3.14 (2 decimal places)
print(f"Large number: {1000000:,}")  # Large number: 1,000,000

# No newline
print("Part 1", end=" ")
print("Part 2")  # Output: Part 1 Part 2
```

## File Operations

### Reading Files
```python
# Read entire file
with open("file.txt", "r") as file:
    content = file.read()  # Entire content as string
    print(content)

# Read line by line
with open("file.txt", "r") as file:
    for line in file:
        print(line.strip())  # .strip() removes newline

# Read all lines into list
with open("file.txt", "r") as file:
    lines = file.readlines()
    print(lines[0])  # First line
```

### Writing Files
```python
# Write (overwrites existing content)
with open("output.txt", "w") as file:
    file.write("Hello, World!\n")
    file.write("Line 2\n")

# Append (add to end of file)
with open("output.txt", "a") as file:
    file.write("New line\n")

# Write multiple lines
lines = ["Line 1\n", "Line 2\n", "Line 3\n"]
with open("output.txt", "w") as file:
    file.writelines(lines)
```

**Why `with` statement?** Automatically closes the file, even if an error occurs.

## Common Built-in Functions

```python
# Math
abs(-5)              # 5 - absolute value
round(3.7)           # 4 - round to nearest integer
min([3, 1, 4, 1, 5])  # 1 - smallest value
max([3, 1, 4, 1, 5])  # 5 - largest value
sum([1, 2, 3, 4, 5])  # 15 - sum all values
len([1, 2, 3])       # 3 - length of collection

# Type checking
type(42)             # <class 'int'>
isinstance(42, int)  # True

# All/Any
all([True, True, True])      # True - all must be True
all([True, False, True])     # False
any([False, False, True])    # True - at least one True

# Enumerate
fruits = ["apple", "banana", "orange"]
for index, fruit in enumerate(fruits):
    print(index, fruit)

# Zip (pair elements from multiple lists)
names = ["Alice", "Bob", "Charlie"]
ages = [25, 30, 35]
for name, age in zip(names, ages):
    print(f"{name}: {age}")

# Range
list(range(5))        # [0, 1, 2, 3, 4]
list(range(1, 5))     # [1, 2, 3, 4]
list(range(0, 10, 2)) # [0, 2, 4, 6, 8]
```

## String Methods

```python
text = "Hello World"

# Case conversion
text.upper()         # "HELLO WORLD"
text.lower()         # "hello world"
text.capitalize()    # "Hello world" (first char only)
text.title()         # "Hello World" (each word)
text.swapcase()      # "hELLO wORLD"

# Checking
text.startswith("Hello")   # True
text.endswith("World")     # True
text.isdigit()             # False (not all digits)
text.isalpha()             # False (has space)
text.isspace()             # False (has non-space)

# Finding
text.find("World")         # 6 - index of substring
text.find("xyz")           # -1 - not found
text.count("l")            # 3 - count occurrences

# Replacing & splitting
text.replace("World", "Python")  # "Hello Python"
text.split(" ")                  # ["Hello", "World"]
text.split()                     # Same (splits on whitespace)
"-".join(["a", "b", "c"])       # "a-b-c"

# Stripping
"  hello  ".strip()      # "hello" - remove leading/trailing
"xxxhelloxxx".strip("x") # "hello"
"xxxhelloxxx".lstrip("x")  # "helloxxx" - left only
"xxxhelloxxx".rstrip("x")  # "xxxhello" - right only
```

## Error Handling

### Try-Except
```python
# Basic error handling
try:
    age = int(input("Age: "))
    print(f"You are {age} years old")
except ValueError:
    print("Please enter a number")

# Multiple except blocks
try:
    numbers = [1, 2, 3]
    print(numbers[10])  # Index error
except ValueError:
    print("Wrong type")
except IndexError:
    print("Index out of range")
except Exception as e:
    print(f"Unexpected error: {e}")

# Finally (always runs)
try:
    file = open("data.txt")
    data = file.read()
finally:
    file.close()  # Runs whether error occurred or not

# Else (runs if no error)
try:
    age = int(input("Age: "))
except ValueError:
    print("Invalid number")
else:
    print(f"You are {age} years old")
```

**Why error handling?** Prevents crashes and lets you handle problems gracefully.

## Working with Modules

### Importing
```python
# Import entire module
import math
print(math.sqrt(16))   # 4.0
print(math.pi)         # 3.14159...

# Import specific items
from math import sqrt, pi
print(sqrt(16))        # 4.0
print(pi)              # 3.14159...

# Import with alias
import datetime as dt
now = dt.datetime.now()

# Import all (not recommended)
from math import *     # Imports everything
```

### Common Modules
```python
# Math
import math
math.sqrt(16)
math.ceil(3.2)     # 4 - round up
math.floor(3.9)    # 3 - round down
math.pow(2, 3)     # 8 - power

# Random
import random
random.randint(1, 10)        # Random integer 1-10
random.choice([1, 2, 3, 4])  # Random element
random.shuffle(list)         # Shuffle list in place

# Datetime
import datetime
now = datetime.datetime.now()
today = datetime.date.today()
today.year, today.month, today.day

# String operations
import string
string.ascii_letters   # "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
string.digits          # "0123456789"
string.punctuation     # "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~"
```

## Practical Examples

### Fibonacci Sequence
```python
# Generate Fibonacci numbers
def fibonacci(n):
    """Generate first n Fibonacci numbers"""
    a, b = 0, 1
    for _ in range(n):
        print(a, end=" ")
        a, b = b, a + b
    print()

fibonacci(10)  # Output: 0 1 1 2 3 5 8 13 21 34
```

### Grade Calculator
```python
# Calculate student grade
def get_grade(score):
    if score >= 90:
        return "A"
    elif score >= 80:
        return "B"
    elif score >= 70:
        return "C"
    elif score >= 60:
        return "D"
    else:
        return "F"

scores = [95, 87, 76, 65, 45]
for score in scores:
    grade = get_grade(score)
    print(f"Score: {score}, Grade: {grade}")
```

### Word Frequency Counter
```python
# Count words in text
text = "python is great python is fun python is powerful"
words = text.split()

# Using dictionary
word_count = {}
for word in words:
    word_count[word] = word_count.get(word, 0) + 1

print(word_count)
# Output: {'python': 3, 'is': 3, 'great': 1, 'fun': 1, 'powerful': 1}

# Find most common
most_common = max(word_count, key=word_count.get)
print(f"Most common word: {most_common} ({word_count[most_common]} times)")
```

## Best Practices

1. **Use meaningful variable names:**
   - ✅ Good: `user_age = 25`
   - ❌ Bad: `ua = 25` or `x = 25`

2. **Write comments for complex logic:**
   ```python
   # Calculate factorial for number
   result = 1
   for i in range(1, n + 1):
       result *= i
   ```

3. **Keep functions focused:**
   - One function = one responsibility
   - Functions should be short and understandable

4. **Use descriptive function names:**
   ```python
   def calculate_student_gpa(grades):  # Clear what it does
       return sum(grades) / len(grades)
   ```

5. **Handle errors appropriately:**
   ```python
   try:
       age = int(input("Age: "))
   except ValueError:
       print("Age must be a number")
   ```

6. **Avoid magic numbers:**
   ```python
   # ❌ Bad: What is 18?
   if age >= 18:
       
   # ✅ Good: Clear what 18 means
   LEGAL_AGE = 18
   if age >= LEGAL_AGE:
   ```

## Common Mistakes

- **Forgetting colons after if/for/def:** `if x > 5` ❌ should be `if x > 5:` ✅
- **Wrong indentation:** Python uses spaces/tabs to define code blocks
- **Using = instead of ==:** `if x = 5` ❌ should be `if x == 5` ✅
- **Modifying list while looping:** Can cause unexpected behavior
- **Forgetting to close files:** Use `with` statement to avoid this
- **Confusing mutable vs immutable:** Lists can be changed, tuples cannot

## Quick Reference

| Concept | Syntax | Example |
|---------|--------|---------|
| Variable | `name = value` | `x = 10` |
| String | quotes | `"hello"` or `'hello'` |
| List | `[item1, item2]` | `[1, 2, 3]` |
| Dictionary | `{key: value}` | `{"name": "Alice"}` |
| Function | `def name():` | `def greet():` |
| If statement | `if condition:` | `if x > 5:` |
| For loop | `for item in list:` | `for x in [1,2,3]:` |
| While loop | `while condition:` | `while x < 10:` |
| Try-except | `try: / except:` | error handling |

---

## Summary

Python is powerful yet beginner-friendly because:
- **Clear syntax** - reads like English
- **Dynamic typing** - variables adjust types automatically
- **Batteries included** - huge standard library
- **Versatile** - web, data science, AI, automation, and more
- **Big community** - lots of help and libraries

Start small, practice regularly, and build up to larger projects. Python rewards curiosity!
