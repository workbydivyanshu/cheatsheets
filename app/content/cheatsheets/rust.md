---
title: Rust
description: Complete beginner's guide to Rust programming language
category: Programming Language
---

# Rust Cheatsheet

**Rust** is a modern systems programming language that focuses on **safety, speed, and concurrency** without sacrificing performance. Rust prevents entire classes of bugs (null pointer errors, data races) at compile time. Perfect for performance-critical applications, embedded systems, and concurrent code.

## Getting Started

### What is Rust?
Rust **compiles to machine code** and is extremely fast. It features a **borrow checker** that ensures memory safety without garbage collection - catching bugs at compile time.

### Installation
```bash
# Install Rust using rustup
curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh

# Verify
rustc --version
cargo --version
```

### Your First Program
```rust
fn main() {
    println!("Hello, World!");
}
```

**Why `fn main()`?** Entry point of every Rust program.
- `fn` - declares a function
- `main()` - no parameters, no return
- `println!` - macro for printing (note the `!`)

### Running Rust
```bash
# Compile and run
rustc main.rs
./main

# Better: use Cargo (Rust package manager)
cargo new my_project
cd my_project
cargo run       # Compiles and runs
cargo build     # Just compile
cargo release   # Optimized build
```

## Variables & Constants

### Variables
```rust
// Immutable (default)
let name = "Alice";
let age = 25;

// Mutable
let mut count = 0;
count = 1;  // OK - mutable

// Type annotation
let price: f64 = 19.99;
let num: i32 = 42;

// Multiple variables
let (x, y, z) = (1, 2, 3);

// Shadowing (redefine with different type)
let x = 5;
let x = x + 1;      // x = 6
let x = "six";      // Now x is a string (new binding)
```

**Why immutable by default?** Prevents accidental changes. More predictable code.

### Constants
```rust
// Immutable, compile-time value
const MAX_SIZE: usize = 100;
const GREETING: &str = "Hello";
const PI: f64 = 3.14159;
```

**Difference:** `let` are runtime variables, `const` are compile-time constants.

## Data Types

### Scalar Types
```rust
// Integers (signed)
let byte: i8 = 127;
let short: i16 = 32767;
let int: i32 = 2147483647;
let long: i64 = 9223372036854775807;

// Integers (unsigned)
let u8_var: u8 = 255;
let u32_var: u32 = 1000;

// Floating point
let pi: f32 = 3.14;
let e: f64 = 2.71828;  // Default

// Boolean
let is_active: bool = true;
let is_valid: bool = false;

// Character
let letter: char = 'A';
let emoji: char = '🦀';

// Type inference
let num = 42;        // i32 inferred
let price = 19.99;   // f64 inferred
```

### String Types
```rust
// String literal (immutable)
let greeting = "Hello";  // &str - string slice

// String type (mutable, growable)
let mut message = String::from("Hello");
message.push_str(" World");    // "Hello World"
message.push('!');             // "Hello World!"

// String operations
let text = "Hello";
text.len()                      // 5
text.chars().count()            // 5
&text[0..2]                     // "He" (slice)
text.to_uppercase()             // "HELLO"
text.contains("ell")            // true
text.replace("Hello", "Hi")     // "Hi"
text.split(' ')                 // Iterator of parts

// String conversion
42.to_string()                  // "42"
"42".parse::<i32>()             // Ok(42)
format!("Name: {}", "Alice")    // "Name: Alice"
```

### Collections

#### Vec (Vector - Dynamic Array)
```rust
// Create vector
let mut numbers: Vec<i32> = Vec::new();
let numbers = vec![1, 2, 3, 4, 5];  // Macro shorthand

// Add/Remove
let mut v = Vec::new();
v.push(1);
v.push(2);          // v = [1, 2]
v.pop();            // Returns Some(2), v = [1]

// Access (immutable)
let first = &numbers[0];        // 1
let second = numbers.get(1);    // Some(&2)
let invalid = numbers.get(10);  // None (safe!)

// Iterate
for num in &numbers {
    println!("{}", num);
}

for (i, num) in numbers.iter().enumerate() {
    println!("{}: {}", i, num);
}

// Methods
numbers.len()       // 5
numbers.is_empty()  // false
numbers.contains(&3)  // true
```

#### HashMap
```rust
use std::collections::HashMap;

// Create
let mut ages = HashMap::new();
ages.insert("Alice", 25);
ages.insert("Bob", 30);

// Access
let alice_age = ages.get("Alice");      // Some(&25)
let charlie_age = ages.get("Charlie");  // None

// Iterate
for (name, age) in &ages {
    println!("{}: {}", name, age);
}

// Remove
ages.remove("Alice");

// Check existence
if ages.contains_key("Bob") {
    println!("Bob exists");
}

// Mutable reference to value
if let Some(age) = ages.get_mut("Bob") {
    *age = 31;  // Dereference and modify
}
```

## Control Flow

### If Expressions
```rust
let age = 18;

if age >= 18 {
    println!("Adult");
} else if age >= 13 {
    println!("Teen");
} else {
    println!("Child");
}

// If as expression (returns value)
let status = if age >= 18 { "Adult" } else { "Minor" };
```

### Match (Pattern Matching)
```rust
let number = 2;

match number {
    1 => println!("One"),
    2 => println!("Two"),
    3 | 4 => println!("Three or Four"),  // OR pattern
    _ => println!("Other"),  // Default case
}

// Match with guards
match age {
    0..=12 => println!("Child"),
    13..=19 => println!("Teen"),
    20..=59 => println!("Adult"),
    _ => println!("Senior"),
}

// Match with bindings
match Option {
    Some(value) => println!("Got: {}", value),
    None => println!("Empty"),
}

// Exhaustive matching ensures all cases handled
enum Direction {
    Up,
    Down,
    Left,
    Right,
}

match direction {
    Direction::Up => {},
    Direction::Down => {},
    Direction::Left => {},
    Direction::Right => {},  // Must handle all
}
```

### Loops
```rust
// Infinite loop
loop {
    println!("Forever!");
    if condition {
        break;
    }
}

// While loop
let mut count = 0;
while count < 5 {
    println!("{}", count);
    count += 1;
}

// For range
for i in 0..5 {          // 0, 1, 2, 3, 4
    println!("{}", i);
}

for i in 0..=5 {         // 0, 1, 2, 3, 4, 5 (inclusive)
    println!("{}", i);
}

// For collection
for num in numbers {     // Takes ownership
    println!("{}", num);
}

for num in &numbers {    // Borrows
    println!("{}", num);
}

// For mutable
for num in &mut numbers {
    *num += 1;          // Dereference and modify
}

// Loop labels and breaks
'outer: loop {
    loop {
        break 'outer;  // Break out of outer loop
    }
}
```

## Functions

### Function Basics
```rust
// Simple function
fn add(a: i32, b: i32) -> i32 {
    a + b  // Return without semicolon
}

// Function returning nothing
fn print_message(msg: &str) {
    println!("{}", msg);
}

// Multiple returns (using tuple)
fn swap(a: i32, b: i32) -> (i32, i32) {
    (b, a)
}

let (x, y) = swap(5, 10);  // x=10, y=5

// Calling
let sum = add(5, 3);       // 8
```

### Closures (Anonymous Functions)
```rust
// Closure syntax
let add_one = |x| x + 1;
add_one(5)  // 6

// With type annotations
let multiply = |x: i32, y: i32| -> i32 {
    x * y
};
multiply(3, 4)  // 12

// Capturing variables
let num = 10;
let add_num = |x| x + num;
add_num(5)  // 15

// As function parameters
fn apply<F>(f: F, val: i32) -> i32
where F: Fn(i32) -> i32
{
    f(val)
}

apply(|x| x * 2, 5)  // 10
```

## Ownership & Borrowing (The Borrow Checker)

### Ownership
```rust
// Ownership (value moves)
let s1 = String::from("hello");
let s2 = s1;  // Ownership moves from s1 to s2

println!("{}", s1);  // ERROR - s1 no longer owns the data
println!("{}", s2);  // OK - "hello"

// Moving in functions
fn takes_ownership(s: String) {
    println!("{}", s);
}  // s is dropped here

let s = String::from("hello");
takes_ownership(s);  // s moved into function
// println!("{}", s);  // ERROR - s moved
```

**Why ownership?** Rust automatically cleans up when owner goes out of scope. No garbage collection needed!

### Borrowing (References)
```rust
// Immutable borrow
let s = String::from("hello");
let len = calculate_length(&s);  // Borrow with &

fn calculate_length(s: &String) -> usize {
    s.len()
}  // s is returned, not dropped

println!("{}", s);  // Still valid - "hello"

// Mutable borrow
let mut s = String::from("hello");
change_string(&mut s);  // Mutable borrow with &mut

fn change_string(s: &mut String) {
    s.push_str(" world");
}

println!("{}", s);  // "hello world"

// Rules:
// 1. Can have many immutable borrows OR one mutable borrow
// 2. Mutable borrows have exclusive access
let mut x = 5;
let r1 = &x;    // OK
let r2 = &x;    // OK
let r3 = &mut x;  // ERROR - can't mix mutable and immutable
```

## Structs & Enums

### Structs
```rust
// Define struct
struct Person {
    name: String,
    age: u32,
    city: String,
}

// Create instance
let person = Person {
    name: String::from("Alice"),
    age: 25,
    city: String::from("NYC"),
};

// Shorthand
let name = String::from("Bob");
let age = 30;
let person2 = Person {
    name,      // name: name
    age,       // age: age
    city: String::from("LA"),
};

// Access fields
println!("{}", person.name);
let alice_age = person.age;

// Tuple struct
struct Color(i32, i32, i32);
let red = Color(255, 0, 0);
println!("{}", red.0);  // 255

// Unit struct
struct Marker;
let m = Marker;
```

### Methods
```rust
impl Person {
    // Method (takes &self)
    fn greet(&self) -> String {
        format!("Hello, I'm {}", self.name)
    }

    // Mutable method
    fn birthday(&mut self) {
        self.age += 1;
    }

    // Associated function (no self)
    fn new(name: String, age: u32, city: String) -> Person {
        Person { name, age, city }
    }
}

// Using
let mut alice = Person::new(
    String::from("Alice"),
    25,
    String::from("NYC"),
);
println!("{}", alice.greet());  // "Hello, I'm Alice"
alice.birthday();
```

### Enums
```rust
// Define enum
enum Result<T, E> {
    Ok(T),
    Err(E),
}

enum Color {
    Red,
    Green,
    Blue,
    Custom(u32, u32, u32),  // Associated data
}

// Using
let color = Color::Custom(255, 0, 0);

match color {
    Color::Red => println!("Red"),
    Color::Custom(r, g, b) => println!("RGB: {}, {}, {}", r, g, b),
    _ => println!("Other"),
}

// Option<T> enum (instead of null)
let some_num: Option<i32> = Some(5);
let no_num: Option<i32> = None;

match some_num {
    Some(num) => println!("Got: {}", num),
    None => println!("No value"),
}

// Result<T, E> enum (for error handling)
fn divide(a: i32, b: i32) -> Result<i32, String> {
    if b == 0 {
        Err(String::from("Division by zero"))
    } else {
        Ok(a / b)
    }
}

match divide(10, 2) {
    Ok(result) => println!("Result: {}", result),
    Err(e) => println!("Error: {}", e),
}
```

## Error Handling

```rust
// Using Result
fn open_file(path: &str) -> Result<String, std::io::Error> {
    std::fs::read_to_string(path)
}

// Match approach
match open_file("file.txt") {
    Ok(content) => println!("{}", content),
    Err(e) => println!("Error: {}", e),
}

// Unwrap (panics if Err)
let content = open_file("file.txt").unwrap();

// Expect (panics with message)
let content = open_file("file.txt")
    .expect("Failed to read file");

// ? operator (propagate errors)
fn process_file() -> Result<String, std::io::Error> {
    let content = std::fs::read_to_string("file.txt")?;
    Ok(content.to_uppercase())
}

// if let (ignore some cases)
if let Ok(content) = open_file("file.txt") {
    println!("{}", content);
}
```

## Practical Examples

### Temperature Converter
```rust
fn celsius_to_fahrenheit(c: f64) -> f64 {
    (c * 9.0 / 5.0) + 32.0
}

fn main() {
    let celsius = 25.0;
    let fahrenheit = celsius_to_fahrenheit(celsius);
    println!("{}°C = {}°F", celsius, fahrenheit);
}
```

### Fibonacci
```rust
fn fibonacci(n: u32) -> u32 {
    match n {
        0 => 0,
        1 => 1,
        _ => fibonacci(n - 1) + fibonacci(n - 2),
    }
}

fn main() {
    for i in 0..10 {
        println!("{}", fibonacci(i));
    }
}
```

## Best Practices

1. **Embrace the borrow checker** - it's your friend
2. **Use ownership to prevent bugs**
3. **Prefer Result over unwrap** - handle errors properly
4. **Use pattern matching** with `match`
5. **Keep functions focused**

## Summary

Rust provides **memory safety without garbage collection**. The borrow checker ensures:
- **No null pointer errors** - use `Option<T>`
- **No data races** - enforced by compiler
- **No memory leaks** - ownership ensures cleanup
- **Fast execution** - compiles to efficient machine code

Perfect for systems programming, embedded, and performance-critical applications!

Key strengths:
- **Memory safe** at compile time
- **Zero-cost abstractions** - fast as C++
- **Concurrency** - fearless concurrency
- **Great error messages** - helps you learn
- **Modern syntax** - clean and expressive
