---
title: Ruby
slug: ruby
category: Programming Language
description: Elegant, expressive language emphasizing developer happiness with metaprogramming, blocks, and a vibrant ecosystem.
---

# Ruby Cheatsheet

## Basics

### Hello World
```ruby
puts "Hello, World!"
print "Hello" # no newline
p "Debug output" # inspect format

# Comments
# Single line comment
=begin
Multi-line
comment
=end
```

### Variables & Types
```ruby
name = "Alice"
age = 30
price = 19.99
is_active = true
nothing = nil

# String
str = "Hello"
str = 'Hello'
str = %q(Hello)

# String interpolation
name = "Bob"
greeting = "Hello, #{name}!"

# Symbols (immutable strings)
symbol = :user_id
symbol = :"user-id"

# Constants
MAX_SIZE = 100
```

### Data Types & Conversion
```ruby
# Integers
100.times { |i| puts i }
100.upto(105) { |i| puts i }
5.downto(1) { |i| puts i }

# Floats
3.14.round
3.14.ceil
3.14.floor
3.14.to_i

# Strings
"hello".length
"hello".upcase
"hello".downcase
"hello".capitalize
"hello".reverse
"hello".chars
"a,b,c".split(",")
["a", "b"].join(",")

# Type conversion
"42".to_i
42.to_s
3.14.to_i
"true".to_sym
```

## Arrays & Hashes

### Arrays
```ruby
arr = [1, 2, 3, 4, 5]
arr = Array.new(5, 0) # [0, 0, 0, 0, 0]

# Access
arr[0]
arr[-1] # last element
arr[0..2] # slice [1, 2, 3]

# Modification
arr.push(6)
arr << 7
arr.pop
arr.shift
arr.unshift(0)
arr.insert(2, "inserted")
arr.delete_at(2)

# Methods
arr.length / arr.size
arr.empty?
arr.include?(3)
arr.first
arr.last
arr.reverse
arr.sort
arr.uniq
arr.flatten

# Iteration
arr.each { |num| puts num }
arr.map { |num| num * 2 }
arr.select { |num| num > 3 }
arr.reject { |num| num > 3 }
arr.reduce(:+) # sum
arr.join(", ")
```

### Hashes
```ruby
hash = { "name" => "Alice", "age" => 30 }
hash = { name: "Alice", age: 30 } # symbol keys

# Access
hash["name"]
hash[:name]
hash.fetch("name", "default")

# Modification
hash["email"] = "alice@example.com"
hash.delete("email")
hash.clear

# Methods
hash.keys
hash.values
hash.length
hash.empty?
hash.key?("name")
hash.value?(30)

# Iteration
hash.each { |key, value| puts "#{key}: #{value}" }
hash.map { |k, v| "#{k}=#{v}" }
hash.select { |k, v| v > 25 }
```

## Strings

### String Operations
```ruby
# Concatenation
str = "Hello" + " " + "World"
str = "Hello #{name}"

# Methods
"hello".length
"hello".size
"hello".upcase
"hello".downcase
"hello".capitalize
"hello".reverse
"hello".chars
"hello".bytes
"hello".include?("ll")
"hello".start_with?("he")
"hello".end_with?("lo")
"hello world".index("world")

# Splitting & Joining
"a,b,c".split(",") # ["a", "b", "c"]
["a", "b", "c"].join("-") # "a-b-c"

# Case conversion
"hello".swapcase
"hello_world".camelcase

# Whitespace
"  hello  ".strip
"  hello  ".lstrip
"  hello  ".rstrip

# Slicing
"hello"[0]
"hello"[0..2]
"hello"[-1]

# Regular expressions
"hello world".gsub(/world/, "ruby")
"hello world".sub(/world/, "ruby")
"hello".match(/l+/)
"hello" =~ /ll/
```

## Control Flow

### Conditionals
```ruby
# if-elsif-else
if age >= 18
  puts "Adult"
elsif age >= 13
  puts "Teen"
else
  puts "Child"
end

# Ternary
status = age >= 18 ? "Adult" : "Minor"

# unless (opposite of if)
unless age < 18
  puts "Adult"
end

# case-when
case day
when "Monday"
  puts "Start of week"
when "Friday", "Saturday"
  puts "Weekend coming"
else
  puts "Mid week"
end

# Inline conditionals
puts "Adult" if age >= 18
puts "Minor" unless age >= 18
```

### Loops
```ruby
# while
count = 0
while count < 5
  puts count
  count += 1
end

# until (opposite of while)
count = 0
until count >= 5
  puts count
  count += 1
end

# for
for i in 1..5
  puts i
end

for num in [1, 2, 3]
  puts num
end

# break and next
5.times do |i|
  next if i == 2
  break if i == 4
  puts i
end
```

## Methods & Blocks

### Methods
```ruby
def add(a, b)
  a + b
end

def greet(name = "Guest")
  "Hello, #{name}"
end

# Multiple return
def div_mod(a, b)
  [a / b, a % b]
end

quotient, remainder = div_mod(10, 3)

# Variadic args
def sum(*numbers)
  numbers.reduce(:+)
end

sum(1, 2, 3, 4) # 10

# Keyword arguments
def user(name:, age: 18)
  { name: name, age: age }
end

user(name: "Alice", age: 30)

# Splat and kwargs
def show(name, *args, **kwargs)
  # args is array, kwargs is hash
end
```

### Blocks & Yield
```ruby
# Blocks
[1, 2, 3].each { |num| puts num }

[1, 2, 3].each do |num|
  puts num
end

# Yield in methods
def three_times
  yield
  yield
  yield
end

three_times { puts "Hello" }

# Block parameters
def each_pair
  yield 1, 2
  yield 3, 4
end

each_pair { |a, b| puts "#{a}, #{b}" }

# Lambda & Proc
square = lambda { |x| x * x }
square = ->(x) { x * x }
square.call(5) # 25

add = Proc.new { |a, b| a + b }
add.call(3, 5) # 8
```

## Classes & Objects

### Class Definition
```ruby
class Person
  attr_accessor :name, :age
  attr_reader :email
  attr_writer :password
  
  def initialize(name, age)
    @name = name
    @age = age
  end
  
  def display
    "Name: #{@name}, Age: #{@age}"
  end
  
  def adult?
    @age >= 18
  end
end

person = Person.new("Alice", 30)
person.name = "Bob"
puts person.display
```

### Inheritance
```ruby
class Employee < Person
  def initialize(name, age, employee_id)
    super(name, age)
    @employee_id = employee_id
  end
  
  def display
    "#{super} - ID: #{@employee_id}"
  end
end

emp = Employee.new("Bob", 25, "E123")
puts emp.display
```

### Modules & Mixins
```ruby
module Logger
  def log(message)
    puts "[LOG] #{message}"
  end
end

class Application
  include Logger
end

app = Application.new
app.log("App started")

# Extend adds as singleton methods
obj = Object.new
obj.extend(Logger)
obj.log("Message")
```

## Best Practices

- Use meaningful variable names
- Follow snake_case for variables and methods
- Use PascalCase for classes
- Use symbols instead of strings for keys
- Leverage blocks and iterators
- Use string interpolation instead of concatenation
- Implement proper error handling
- Write tests for all methods
- Use meaningful comments
- Keep methods focused and small
- Use Ruby idioms and conventions
- Leverage built-in methods
