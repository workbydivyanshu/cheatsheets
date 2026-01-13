---
title: Ruby
description: Beginner's guide to Ruby programming language
category: Programming Language
---

# Ruby Cheatsheet

**Ruby** is an elegant, human-friendly language emphasizing **productivity and readability**. Famous for Rails framework, Ruby makes you "happy" with its clean syntax and powerful features.

## Getting Started

### Installation
```bash
# macOS
brew install ruby

# Linux
sudo apt-get install ruby

# Verify
ruby --version
```

### Your First Program
```ruby
puts "Hello, World!"
```

**Why `puts`?** Print with newline. (There's also `print` without newline.)

### Running Ruby
```bash
ruby hello.rb

# Interactive shell
irb
```

## Variables & Types

```ruby
# Variable (lowercase_with_underscore)
name = "Alice"
age = 25
price = 19.99
is_active = true

# Symbols (like constants)
:ruby          # Symbol - more efficient than strings

# Arrays
numbers = [1, 2, 3, 4, 5]
mixed = [1, "hello", 3.14, true]

# Hashes (like dictionaries)
person = {
    "name" => "Alice",
    "age" => 25
}

# Or with symbols
person = {
    name: "Alice",
    age: 25
}

person[:name]  # "Alice"

# Constants
MAX_USERS = 100
```

## Strings

```ruby
text = "Hello"

# Operations
text.length             # 5
text.upcase             # "HELLO"
text.downcase           # "hello"
text.capitalize         # "Hello"
text[0]                 # "H"
text[0..2]              # "Hel"
text.include?("ell")    # true
text.gsub("Hello", "Hi")  # "Hi"

# String interpolation
name = "Alice"
puts "Hello, #{name}"   # "Hello, Alice"

# Concatenation
"Hello" + " " + "World"  # "Hello World"
"Hello" * 3              # "HelloHelloHello"
```

## Arrays & Collections

```ruby
# Array
arr = [1, 2, 3, 4, 5]
arr[0]                  # 1
arr.length              # 5
arr << 6                # Add to end: [1,2,3,4,5,6]
arr.push(7)             # Add: [1,2,3,4,5,6,7]
arr.pop                 # Remove last: 7
arr.first               # 1
arr.last                # 6

# Array methods
arr.reverse             # Reversed copy
arr.sort                # Sorted copy
arr.include?(3)         # true
arr.empty?              # false
arr.map { |x| x * 2 }   # [2,4,6,8,10] - transform
arr.select { |x| x > 2 }  # [3,4,5] - filter

# Hash
person = { name: "Alice", age: 25 }
person[:name]           # "Alice"
person.keys             # [:name, :age]
person.values           # ["Alice", 25]
person.each { |k, v| puts "#{k}: #{v}" }

# Range
1..5                    # 1, 2, 3, 4, 5 (inclusive)
1...5                   # 1, 2, 3, 4 (exclusive)
('a'..'z').to_a         # Array of letters
```

## Control Flow

```ruby
# If statement
age = 18
if age >= 18
    puts "Adult"
elsif age >= 13
    puts "Teen"
else
    puts "Child"
end

# Inline if
puts "Adult" if age >= 18

# Unless (opposite of if)
puts "Not adult" unless age >= 18

# Case/when
case day
when "Monday"
    puts "Start of week"
when "Friday", "Saturday"
    puts "Weekend"
else
    puts "Midweek"
end

# Ternary
status = age >= 18 ? "Adult" : "Minor"
```

## Loops

```ruby
# While
count = 0
while count < 5
    puts count
    count += 1
end

# Until (opposite of while)
count = 0
until count == 5
    puts count
    count += 1
end

# For loop
for i in 1..5
    puts i
end

# Each (most Ruby way)
[1, 2, 3, 4, 5].each { |num| puts num }

# Map (transform array)
doubled = [1, 2, 3].map { |x| x * 2 }  # [2, 4, 6]

# Select (filter array)
evens = [1, 2, 3, 4, 5].select { |x| x.even? }  # [2, 4]

# Break & Next
[1, 2, 3, 4, 5].each do |i|
    next if i == 3      # Skip
    break if i == 4     # Exit
    puts i
end
```

## Methods/Functions

```ruby
# Define method
def add(a, b)
    a + b
end

# Call method
add(5, 3)  # 8

# Default parameters
def greet(name = "Guest")
    "Hello, #{name}"
end

greet()         # "Hello, Guest"
greet("Alice")  # "Hello, Alice"

# Multiple returns
def swap(a, b)
    [b, a]
end

x, y = swap(1, 2)  # x=2, y=1

# Splat operator (variable arguments)
def sum(*numbers)
    numbers.reduce(0) { |total, num| total + num }
end

sum(1, 2, 3, 4)  # 10
```

## Classes & Objects

```ruby
class Person
    attr_accessor :name, :age  # Getters & setters

    def initialize(name, age)
        @name = name
        @age = age
    end

    def greet
        "Hello, I'm #{@name}"
    end

    def birthday
        @age += 1
    end
end

# Create object
person = Person.new("Alice", 25)
puts person.greet      # "Hello, I'm Alice"
person.birthday
puts person.age        # 26

# attr_reader (getter only)
# attr_writer (setter only)
# attr_accessor (both)
```

## Inheritance

```ruby
class Animal
    def speak
        "Some sound"
    end
end

class Dog < Animal
    def speak
        "Woof!"
    end
end

dog = Dog.new
puts dog.speak  # "Woof!"
```

## Modules & Mixins

```ruby
module Greeter
    def hello
        "Hello!"
    end
end

class Person
    include Greeter  # Mix in module
end

person = Person.new
puts person.hello  # "Hello!"
```

## Error Handling

```ruby
begin
    # Risky code
    result = 10 / 0
rescue ZeroDivisionError => e
    puts "Error: #{e.message}"
ensure
    puts "Cleanup code"
end

# Raise custom error
raise "Something went wrong"
```

## Working with Files

```ruby
# Read file
content = File.read("file.txt")

# Read lines
lines = File.readlines("file.txt")

# Write file
File.write("output.txt", "Hello, World!")

# Append
File.write("log.txt", "New entry\n", mode: "a")

# Using blocks (auto-close)
File.open("file.txt") do |file|
    file.each_line { |line| puts line }
end
```

## Regular Expressions

```ruby
text = "Hello 123 World"

# Match
text.match?(/\d+/)          # true - contains digits
text =~ /\d+/               # 6 - position of match

# Replace
text.gsub(/\d+/, "XXX")     # "Hello XXX World"

# Split
"a,b,c".split(/,/)          # ["a", "b", "c"]
```

## Best Practices

1. **Use snake_case for variables and methods**
2. **Use CamelCase for classes**
3. **Prefer blocks and iterators**
4. **Keep methods focused**
5. **Embrace Ruby idioms**

## Summary

Ruby is **elegant and productive**. Famous for Rails framework, perfect for web development.

Key strengths:
- **Clean syntax** - reads like English
- **Productive** - write less code
- **Flexible** - multiple ways to solve problems
- **Rails framework** - build web apps fast
- **Great community** - lots of gems (libraries)
