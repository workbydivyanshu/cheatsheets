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

## Arrays & Collections (🟡 Intermediate)

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

## Blocks, Procs, and Lambdas (🔴 Advanced - Ruby's Functional Side)

### What are Blocks?
**Blocks** are chunks of code you pass to methods. They're not objects, but they're fundamental to Ruby. Use `{ }` for one-liners or `do...end` for multi-line.

```ruby
# Block with braces (single-line)
[1, 2, 3].each { |num| puts num }

# Block with do...end (multi-line)
[1, 2, 3].each do |num|
    puts num
end

# Yielding to blocks in custom methods
def greet
    puts "Starting..."
    yield
    puts "Finished!"
end

greet { puts "Hello in the middle!" }
# Output:
# Starting...
# Hello in the middle!
# Finished!

# Check if block was given
def maybe_greet
    if block_given?
        yield
    else
        puts "No block given"
    end
end

maybe_greet { puts "Block!" }      # Block!
maybe_greet                         # No block given
```

**Why blocks matter?** They make Ruby code expressive and elegant. Used with `each`, `map`, `select`, `reduce`, etc.

### Block Parameters

```ruby
# Blocks receive parameters
numbers = [1, 2, 3, 4, 5]

# Each element passed to block
numbers.each { |num| puts num }

# Multiple parameters
{"a" => 1, "b" => 2}.each { |key, value| puts "#{key}: #{value}" }

# Ignoring parameters
numbers.each { |_| puts "Item" }  # Using _ for unused param

# Destructuring in blocks
[[1, 2], [3, 4]].each { |a, b| puts "#{a}, #{b}" }
# Output:
# 1, 2
# 3, 4
```

### Common Block Methods

```ruby
# Map - transform each element
[1, 2, 3].map { |x| x * 2 }        # [2, 4, 6]

# Select - filter elements
[1, 2, 3, 4, 5].select { |x| x > 2 }  # [3, 4, 5]

# Reject - opposite of select
[1, 2, 3, 4, 5].reject { |x| x > 2 }  # [1, 2]

# Reduce - combine all into one
[1, 2, 3, 4].reduce(0) { |sum, x| sum + x }  # 10

# Each_with_object - reduce with cleaner syntax
[1, 2, 3].each_with_object([]) { |num, arr| arr << num * 2 }  # [2, 4, 6]

# Sort with block
students = [["Alice", 85], ["Bob", 75], ["Charlie", 90]]
students.sort_by { |name, score| score }
# [["Bob", 75], ["Alice", 85], ["Charlie", 90]]

# Find - return first matching element
[1, 2, 3, 4, 5].find { |x| x > 3 }  # 4

# Any? / All? - boolean checks
[1, 2, 3, 4].any? { |x| x > 3 }     # true
[1, 2, 3, 4].all? { |x| x > 0 }     # true
```

### Procs - Reusable Blocks

**Procs** are objects that wrap blocks. Unlike blocks, they can be stored in variables and passed around.

```ruby
# Creating a Proc
square = Proc.new { |x| x ** 2 }
puts square.call(5)  # 25

# Alternative syntax
add = proc { |a, b| a + b }
puts add.call(3, 4)  # 7

# Passing Procs to methods
def apply_twice(proc, value)
    proc.call(proc.call(value))
end

double = Proc.new { |x| x * 2 }
puts apply_twice(double, 5)  # 20 (5 * 2 = 10, then 10 * 2 = 20)

# Array of Procs
operations = [
    Proc.new { |x| x + 1 },
    Proc.new { |x| x * 2 },
    Proc.new { |x| x ** 2 }
]

value = 5
operations.each { |op| value = op.call(value) }
puts value  # ((5 + 1) * 2) ^ 2 = 144
```

### Lambdas - Strict Procs

**Lambdas** are like Procs but with stricter argument checking and different return behavior.

```ruby
# Creating a Lambda
square = lambda { |x| x ** 2 }
puts square.call(5)  # 25

# Alternative syntax (arrow)
add = ->(a, b) { a + b }
puts add.call(3, 4)  # 7

# Lambdas check argument count strictly
strict = lambda { |x, y| x + y }
strict.call(1, 2)      # Works
# strict.call(1)       # Error - wrong number of arguments!

# Procs are lenient
lenient = Proc.new { |x, y| x + y }
lenient.call(1, 2)     # Works
lenient.call(1)        # Works, but y is nil

# Return behavior difference
def test_proc
    p = Proc.new { return "From Proc" }
    p.call
    return "After Proc"
end

def test_lambda
    l = lambda { return "From Lambda" }
    l.call
    return "After Lambda"
end

puts test_proc     # "From Proc" (exits method!)
puts test_lambda   # "After Lambda" (normal return)
```

### When to Use What?

| Type | Use Case |
|------|----------|
| **Block** | Simple operations with `each`, `map`, `select` |
| **Proc** | Store for later, pass multiple times, flexible args |
| **Lambda** | Need strict checking, callback functions, functional style |

```ruby
# Practical example: callbacks
class Button
    def initialize(&action)  # &action converts block to Proc
        @action = action
    end
    
    def click
        @action.call
    end
end

button = Button.new { puts "Button clicked!" }
button.click  # "Button clicked!"
```

## Classes & Objects (🟡 Intermediate)

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

## Common Mistakes

| ❌ Mistake | ✅ Fix |
|-----------|--------|
| Confusing `nil` with `false` | `if obj.nil?` not `if obj == nil` |
| Using `==` for identity | Use `.eql?` or `.equal?` for object identity |
| Mutating while iterating | Use `.each_with_index` or `.map` |
| Forgetting implicit return | Ruby methods return last value automatically |
| Modifying frozen strings | Use `.dup` to create copy before modifying |
| Wrong string interpolation | Use double quotes: `"Hello #{name}"` |
| Confusing Proc vs Lambda | Lambdas are stricter (argument checking, return behavior) |
| Not using .times or .each | Traditional `for` loops are not idiomatic Ruby |

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
