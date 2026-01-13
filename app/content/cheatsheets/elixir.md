---
title: Elixir
description: Complete beginner-friendly Elixir guide for functional and concurrent programming
category: Programming Language
---

# Elixir - Complete Beginner's Guide

> **What is Elixir?** Elixir is a modern functional language that runs on the Erlang Virtual Machine. Built for building scalable, fault-tolerant systems. Used by Discord, Slack, and more! Elegant and powerful!

## 1. Getting Started

### Your First Program

```elixir
IO.puts("Hello, Elixir!")
# Output: Hello, Elixir!
```

### Comments

```elixir
# Single line comment

# Multi-line comment
# Just use multiple single lines
```

---

## 2. Basic Data Types

### Numbers and Strings

```elixir
# Numbers
42          # Integer
3.14        # Float
1_000_000   # Underscores for readability

# Strings (UTF-8)
"Hello"
"Hello, World!"

# String interpolation
name = "Alice"
"Hello, #{name}!"    # "Hello, Alice!"

# Atoms (constants where name is value)
:ok
:error
:hello

# Lists
[1, 2, 3, 4, 5]
[1, "two", 3.0, :four]  # Mixed types

# Tuples (fixed size)
{:ok, "Success"}
{"Name", "Alice", 25}

# Maps (key-value pairs)
%{"name" => "John", "age" => 30}
%{"a" => 1, "b" => 2}
```

---

## 3. Lists and Pattern Matching

### Working with Lists

```elixir
list = [1, 2, 3, 4, 5]

# List operations
hd(list)           # 1 (head - first element)
tl(list)           # [2, 3, 4, 5] (tail - rest)
length(list)       # 5

# Prepend (fast)
[0 | list]         # [0, 1, 2, 3, 4, 5]

# Append (slower)
list ++ [6, 7]     # [1, 2, 3, 4, 5, 6, 7]
```

### Pattern Matching (Core Feature!)

```elixir
# Match values
{a, b} = {1, 2}
# a = 1, b = 2

# Ignore values
{_, value} = {1, 2}
# value = 2

# List patterns
[head | tail] = [1, 2, 3]
# head = 1, tail = [2, 3]

[first, second | rest] = [1, 2, 3, 4, 5]
# first = 1, second = 2, rest = [3, 4, 5]

# Pattern matching in functions
def greet({:hello, name}) do
  "Hello, #{name}!"
end

greet({:hello, "Alice"})  # "Hello, Alice!"
```

---

## 4. Functions

### Defining Functions

```elixir
# Basic function
def add(a, b) do
  a + b
end

# Shorter syntax
def multiply(a, b), do: a * b

# Function with pattern matching
def classify(0), do: "Zero"
def classify(n) when n > 0, do: "Positive"
def classify(n) when n < 0, do: "Negative"

# Default parameters
def greet(name \\ "Guest") do
  "Hello, #{name}!"
end

greet()        # "Hello, Guest!"
greet("John")  # "Hello, John!"
```

### Anonymous Functions (Lambdas)

```elixir
# Anonymous function
add = fn a, b -> a + b end
add.(5, 3)        # 8

# Shorthand syntax
double = &(&1 * 2)
double.(5)        # 10

# Multiple clauses
sum = fn
  {:ok, a} -> a
  {:error} -> 0
end

sum.({:ok, 42})   # 42
```

---

## 5. Control Flow

### If/Else

```elixir
age = 18

if age >= 18 do
  "You can vote"
else
  "You're too young"
end

# Unless (opposite of if)
unless age < 18 do
  "You can vote"
end

# Cond (like if-elsif-else)
cond do
  age < 13 -> "Child"
  age < 18 -> "Teenager"
  true -> "Adult"
end

# Case (pattern matching)
case {:ok, "Success"} do
  {:ok, message} -> "Received: #{message}"
  {:error, reason} -> "Error: #{reason}"
  _ -> "Unknown"
end
```

---

## 6. Loops and Iteration

### Recursion (Primary Loop Method)

```elixir
# Sum a list recursively
def sum([]), do: 0
def sum([head | tail]), do: head + sum(tail)

sum([1, 2, 3, 4, 5])  # 15

# Countdown
def countdown(0), do: IO.puts("Done!")
def countdown(n) do
  IO.puts(n)
  countdown(n - 1)
end

countdown(3)
# Prints: 3, 2, 1, Done!
```

### Higher-Order Functions

```elixir
# Enum module (super useful!)
list = [1, 2, 3, 4, 5]

# Map - transform each element
Enum.map(list, fn x -> x * 2 end)    # [2, 4, 6, 8, 10]
Enum.map(list, &(&1 * 2))            # Shorthand

# Filter - keep matching
Enum.filter(list, fn x -> x > 2 end) # [3, 4, 5]
Enum.filter(list, &(&1 > 2))         # Shorthand

# Reduce - combine all
Enum.reduce(list, 0, fn x, acc -> acc + x end)  # 15
Enum.sum(list)  # Easier way: 15

# Each - do something for each
Enum.each(list, fn x -> IO.puts(x) end)

# Find - first match
Enum.find(list, fn x -> x > 3 end)   # 4
```

---

## 7. Strings and Atoms

### String Operations

```elixir
text = "Hello World"

# Length
String.length(text)        # 11

# Case conversion
String.upcase(text)        # "HELLO WORLD"
String.downcase(text)      # "hello world"

# Splitting
String.split(text, " ")    # ["Hello", "World"]

# Contains/starts with
String.contains?(text, "World")  # true
String.starts_with?(text, "Hello") # true

# Concatenation
text1 = "Hello"
text2 = "World"
text1 <> " " <> text2      # "Hello World"

# String to atom
String.to_atom("hello")    # :hello

# Atoms to string
Atom.to_string(:hello)     # "hello"
```

---

## 8. Maps and Keyword Lists

### Maps (Dictionaries)

```elixir
# Create map
person = %{"name" => "John", "age" => 30}
person = %{name: "John", age: 30}  # With atom keys

# Access
person["name"]             # "John"
person.name                # "John" (if using atoms)

# Update
%{person | name: "Jane"}   # Creates new map with updated name
Map.put(person, :email, "jane@example.com")

# Get all keys/values
Map.keys(person)           # [:name, :age]
Map.values(person)         # ["John", 30]
```

### Keyword Lists

```elixir
# Keyword list (list of tuples)
options = [name: "John", age: 30, city: "NYC"]

# Access
options[:name]             # "John"

# Common in function options
def greet(name, options \\ []) do
  greeting = options[:greeting] || "Hello"
  "#{greeting}, #{name}!"
end
```

---

## 9. Modules and Functions

### Organizing Code

```elixir
defmodule Calculator do
  def add(a, b) do
    a + b
  end

  def subtract(a, b) do
    a - b
  end
end

# Call functions
Calculator.add(5, 3)      # 8
Calculator.subtract(10, 4) # 6

# Nested modules
defmodule Math.Geometry do
  def area_circle(radius) do
    3.14 * radius * radius
  end
end

Math.Geometry.area_circle(5)  # 78.5
```

---

## 10. Pipes (Elixir Magic!)

### Chaining Operations

```elixir
# Without pipes (nested)
Enum.reverse(Enum.filter(Enum.map([1,2,3,4,5], &(&1*2)), &(&1>5)))

# With pipes (readable!)
[1,2,3,4,5]
|> Enum.map(&(&1*2))
|> Enum.filter(&(&1>5))
|> Enum.reverse()
# Result: [10, 8]

# Real-world example
"hello world"
|> String.upcase()
|> String.split(" ")
|> Enum.join("-")
# Result: "HELLO-WORLD"
```

---

## 11. Practical Examples

### Count Word Frequency

```elixir
def count_words(sentence) do
  sentence
  |> String.downcase()
  |> String.split()
  |> Enum.frequencies()
end

count_words("hello world hello elixir hello")
# %{"hello" => 3, "world" => 1, "elixir" => 1}
```

### Check Password Strength

```elixir
def password_strength(password) do
  length = String.length(password)
  has_upper = String.match?(password, ~r/[A-Z]/)
  has_lower = String.match?(password, ~r/[a-z]/)
  has_digit = String.match?(password, ~r/\d/)

  cond do
    length < 8 -> "Too short"
    not (has_upper and has_lower and has_digit) -> "Weak"
    true -> "Strong"
  end
end

password_strength("Pass123")  # "Strong"
password_strength("weak")     # "Too short"
```

### Transform Data

```elixir
users = [
  %{name: "Alice", age: 25, active: true},
  %{name: "Bob", age: 30, active: false},
  %{name: "Charlie", age: 22, active: true}
]

# Get names of active users
users
|> Enum.filter(&(&1.active))
|> Enum.map(&(&1.name))
# ["Alice", "Charlie"]
```

---

## 12. Key Concepts

### Immutability

```elixir
# Everything is immutable
list = [1, 2, 3]
new_list = list ++ [4]     # Creates new list
# list is still [1, 2, 3]!

# Rebinding is OK
x = 1
x = 2  # New binding, not mutation
```

### Pattern Matching in Functions

```elixir
# Great for handling different cases
def process({:ok, data}), do: "Got: #{data}"
def process({:error, reason}), do: "Error: #{reason}"

process({:ok, "Data"})      # "Got: Data"
process({:error, "Failed"}) # "Error: Failed"
```

---

## Quick Reference

```elixir
# Variables & Types
name = "Alice"
age = 25
active = true
tags = ["tag1", "tag2"]

# Strings
"hello #{name}"
String.upcase("hello")
String.split("a,b,c", ",")

# Lists
[1, 2, 3]
[head | tail] = list
Enum.map(list, &(&1 * 2))
Enum.filter(list, &(&1 > 2))

# Maps
%{name: "John", age: 30}
map.name
%{map | age: 31}

# Functions
def add(a, b), do: a + b
fn x -> x * 2 end
&(&1 * 2)

# Control
if age > 18 do end
case x do {:ok, val} -> end
cond do condition -> end

# Pipes
data |> transform |> result
```

Elixir is elegant and powerful! Embrace functional programming! ⚡
