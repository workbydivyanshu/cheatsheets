---
title: Julia
description: Complete beginner-friendly guide to Julia programming language
category: Programming Language
---

# Julia Cheatsheet

**Julia** is a high-performance programming language for **numerical and scientific computing**. Designed for data science, machine learning, and scientific research. Julia combines the speed of C with the simplicity of Python.

## Getting Started (🟢 Beginner)

### What is Julia?
Julia is a **compiled, dynamically-typed language** optimized for numerical computing. It's used in data science, machine learning, physics, and research where performance is critical.

### Your First Program
```julia
println("Hello, World!")
```

Run it:
```bash
julia hello.jl
# Output: Hello, World!
```

### Running Julia
```bash
# Run a script
julia script.jl

# Interactive REPL
julia
julia> println("Hello")

# Execute command
julia -e 'println("Hello")'
```

## Variables & Data Types (🟢 Beginner)

### Basics
```julia
# Variables (dynamically typed)
name = "Alice"
age = 25
height = 5.9
is_student = true

# Type annotations (optional)
x::Int = 10
y::Float64 = 3.14
s::String = "hello"

# Multiple assignment
a, b, c = 1, 2, 3
```

### Numbers
```julia
# Integers
int_val = 42
big_int = 999999999999999999

# Floats
f = 3.14
scientific = 1.5e-3  # 0.0015

# Complex
c = 1 + 2im          # i is im in Julia

# Operations
2 + 3               # 5
10 - 4              # 6
3 * 4               # 12
10 / 3              # 3.333...
10 ÷ 3              # 3 (integer division)
10 % 3              # 1 (modulo)
2 ^ 10              # 1024 (exponentiation)
```

### Strings
```julia
# String literals
s1 = "Hello"
s2 = 'H'            # Character
s3 = """Multi
line
string"""

# Concatenation & interpolation
"Hello " * "World"                      # "Hello World"
"Name: $name, Age: $age"                # String interpolation
"Calculation: $(2 + 3)"                 # Expression interpolation

# String functions
length("hello")                         # 5
uppercase("hello")                      # "HELLO"
lowercase("HELLO")                      # "hello"
split("a,b,c", ",")                   # ["a", "b", "c"]
join(["a", "b", "c"], "-")             # "a-b-c"
replace("hello", "l" => "L")           # "heLLo"
```

### Arrays
```julia
# Create arrays
arr = [1, 2, 3, 4, 5]
arr2 = [1; 2; 3; 4; 5]        # Column vector
matrix = [1 2; 3 4]            # 2D array

# Ranges
1:10                           # Range 1 to 10
1:2:10                         # Range 1 to 10, step 2: [1,3,5,7,9]
collect(1:10)                  # Convert to array

# Access elements (1-indexed!)
arr[1]                         # 1 (first element)
arr[end]                       # 5 (last element)
arr[1:3]                       # [1, 2, 3] (slice)

# Modify
push!(arr, 6)                  # Add to end: [1,2,3,4,5,6]
pop!(arr)                      # Remove from end
```

## Control Flow (🟢 Beginner)

### If/Elseif/Else
```julia
x = 10

if x > 15
    println("Large")
elseif x > 5
    println("Medium")
else
    println("Small")
end

# Ternary operator
status = (x > 5) ? "big" : "small"
```

### Logical Operators
```julia
true && false           # AND (false)
true || false           # OR (true)
!true                   # NOT (false)

# Comparisons
5 == 5                  # true
5 != 3                  # true
5 > 3                   # true
```

## Loops (🟢 Beginner)

### For Loop
```julia
# Simple for loop
for i in 1:5
    println(i)
end

# Array iteration
arr = ["a", "b", "c"]
for item in arr
    println(item)
end

# Enumerate (get index and value)
for (i, val) in enumerate(arr)
    println("$i: $val")
end

# Nested loops
for i in 1:3, j in 1:2
    println("$i, $j")
end
```

### While Loop
```julia
i = 1
while i <= 5
    println(i)
    i += 1
end
```

## Functions (🟢 Beginner)

### Defining Functions
```julia
# Simple function
function greet()
    println("Hello!")
end

# Function with parameters
function add(a, b)
    return a + b
end

# One-liner
add(a, b) = a + b

# With return type annotation
function multiply(a::Int, b::Int)::Int
    return a * b
end

# Call
greet()                # Hello!
add(5, 3)              # 8
multiply(3, 4)         # 12

# Multiple return values
function swap(a, b)
    return b, a
end

x, y = swap(10, 20)    # x=20, y=10
```

## Vectorization & Broadcasting (🟡 Intermediate)

One of Julia's strengths is efficient numerical operations!

```julia
# Array operations (broadcast)
arr = [1, 2, 3, 4, 5]
arr .* 2                       # [2, 4, 6, 8, 10] (element-wise)
arr .+ 10                      # [11, 12, 13, 14, 15]
arr .^ 2                       # [1, 4, 9, 16, 25] (square each)

# Functions on arrays
sum(arr)                       # 15
mean(arr)                      # 3.0
maximum(arr)                   # 5
minimum(arr)                   # 1

# Matrix operations
A = [1 2; 3 4]
B = [5 6; 7 8]
A + B                          # Matrix addition
A * B                          # Matrix multiplication (linear algebra)
A .* B                         # Element-wise multiplication
```

## Practical Examples

### Statistical Analysis
```julia
using Statistics

data = [10, 20, 15, 30, 25, 18, 22]

println("Mean: $(mean(data))")
println("Std Dev: $(std(data))")
println("Min: $(minimum(data))")
println("Max: $(maximum(data))")
```

### Data Processing
```julia
# Process numerical data
measurements = [1.2, 1.5, 1.3, 1.4, 1.6]

# Filter values > 1.4
high = filter(x -> x > 1.4, measurements)
println(high)  # [1.5, 1.4, 1.6]

# Transform values
squared = map(x -> x^2, measurements)
println(squared)

# Combine
result = sum(x^2 for x in measurements if x > 1.3)
println(result)
```

### Simple Linear Regression
```julia
using LinearAlgebra

# Data points
x = [1, 2, 3, 4, 5]
y = [2, 4, 5, 4, 6]

# Fit line: y = mx + b
A = [x' ones(length(x))]'  # Design matrix
coef = A \ y               # Solve using backslash operator
m, b = coef

println("y = $(m)x + $(b)")
```

## Summary

Julia is essential for **scientific computing and data science**. Its speed, simplicity, and vectorization make it ideal for numerical work, machine learning, and research. Perfect for those working with data and mathematics!

Key strengths:
- **High performance** - compiled, runs as fast as C
- **Scientific computing** - built-in support for linear algebra
- **Data science** - excellent for numerical work
- **Vectorization** - efficient array operations
- **Research-friendly** - used by physicists and mathematicians
