---
title: Rust
slug: rust
category: Programming Language
description: Systems programming language with memory safety, zero-cost abstractions, and expressive type system without garbage collection.
---

# Rust Cheatsheet

## Basics

### Hello World
```rust
fn main() {
    println!("Hello, world!");
    println!("Hello, {}!", "Rust");
    println!("{0} {1} {0}", "A", "B"); // A B A
    println!("{x} {y}", x = 10, y = 20); // 10 20
}
```

### Variables & Mutability
```rust
// Immutable (default)
let x = 5;
// x = 6; // Error: cannot assign

// Mutable
let mut y = 5;
y = 6; // OK

// Const (compile-time)
const MAX_POINTS: u32 = 100_000;

// Shadowing
let x = 5;
let x = x + 1; // x = 6
let x: f64 = x as f64; // x = 6.0
```

### Data Types
```rust
// Integers
let x: i32 = 42;      // signed 32-bit
let y: u32 = 42;      // unsigned 32-bit
let z: i64 = 42i64;   // signed 64-bit
let a: isize = 42;    // platform-dependent

// Floats
let f: f32 = 3.14;
let g: f64 = 3.14;    // default float type

// Boolean
let flag: bool = true;

// Character
let c: char = 'A';
let emoji: char = '🦀';

// Strings
let s: &str = "Hello";            // string slice
let s: String = String::from("Hello"); // owned string
let s: String = "Hello".to_string();
let s: String = format!("Hello, {}", "Rust");

// Tuples
let tup: (i32, f64, bool) = (42, 3.14, true);
let (x, y, z) = tup;
let first = tup.0;

// Arrays
let arr: [i32; 3] = [1, 2, 3];
let arr: [i32; 5] = [0; 5]; // [0, 0, 0, 0, 0]
let element = arr[0];

// Vectors
let mut vec: Vec<i32> = Vec::new();
vec.push(1);
vec.push(2);
let vec = vec![1, 2, 3]; // macro
let element = vec[0];
```

## Ownership & Borrowing

### Ownership
```rust
// Move
let s1 = String::from("hello");
let s2 = s1;  // s1 no longer valid
// println!("{}", s1); // Error

// Copy (for small types like integers)
let x = 5;
let y = x;
println!("{}", x); // OK, x is still valid

// Return from function
fn takes_ownership(s: String) {
    println!("{}", s);
} // s dropped here

fn gives_ownership() -> String {
    String::from("hello")
}

let s = gives_ownership();
```

### Borrowing
```rust
// Immutable borrow
let s = String::from("hello");
let len = calculate_length(&s);
println!("s: {}, len: {}", s, len); // s still valid

fn calculate_length(s: &String) -> usize {
    s.len()
}

// Mutable borrow
let mut s = String::from("hello");
change(&mut s);
println!("{}", s); // "hello world"

fn change(s: &mut String) {
    s.push_str(" world");
}

// Rules:
// - Either multiple immutable borrows
// - OR one mutable borrow
// - NOT both at the same time
```

## Functions

### Function Declaration
```rust
fn add(a: i32, b: i32) -> i32 {
    a + b  // no semicolon = return
}

fn print_value(x: i32) {
    println!("{}", x);
}

// Expression vs statement
let y = {
    let x = 3;
    x + 1  // expression, no semicolon
};

// Multiple return with tuple
fn div_mod(a: i32, b: i32) -> (i32, i32) {
    (a / b, a % b)
}

let (quotient, remainder) = div_mod(10, 3);
```

## Control Flow

### Conditionals
```rust
// if-else
if number > 0 {
    println!("Positive");
} else if number < 0 {
    println!("Negative");
} else {
    println!("Zero");
}

// Expression
let status = if number > 0 { "positive" } else { "negative" };

// match (pattern matching)
match number {
    0 => println!("Zero"),
    1 | 2 => println!("One or two"),
    3..=5 => println!("Three to five"),
    _ => println!("Other"),
}

let message = match number {
    0 => "zero",
    1 => "one",
    _ => "other",
};
```

### Loops
```rust
// infinite loop
loop {
    println!("again!");
    break;
}

// while loop
let mut count = 0;
while count < 5 {
    println!("{}", count);
    count += 1;
}

// for loop
for i in 0..5 {
    println!("{}", i); // 0, 1, 2, 3, 4
}

for i in 0..=5 {
    println!("{}", i); // 0, 1, 2, 3, 4, 5
}

// Iterate over collection
let v = vec![1, 2, 3];
for num in v {
    println!("{}", num);
}

// Iterator methods
for (i, &num) in v.iter().enumerate() {
    println!("{}: {}", i, num);
}

// Early exit
'outer: loop {
    for i in 0..5 {
        if i == 3 {
            break 'outer;
        }
    }
}
```

## Structs

### Struct Definition
```rust
struct User {
    username: String,
    email: String,
    age: u32,
}

let user = User {
    username: String::from("john"),
    email: String::from("john@example.com"),
    age: 30,
};

let username = user.username;

// Struct update
let user2 = User {
    email: String::from("jane@example.com"),
    ..user
};

// Tuple struct
struct Point(i32, i32, i32);
let p = Point(1, 2, 3);
let Point(x, y, z) = p;

// Unit struct
struct Marker;
```

### Implementations
```rust
impl User {
    fn new(username: String, email: String, age: u32) -> User {
        User {
            username,
            email,
            age,
        }
    }
    
    fn display(&self) {
        println!("User: {}", self.username);
    }
    
    fn change_email(&mut self, new_email: String) {
        self.email = new_email;
    }
    
    fn into_email(self) -> String {
        self.email
    }
}

let mut user = User::new("alice".to_string(), "alice@example.com".to_string(), 25);
user.display();
user.change_email("newemail@example.com".to_string());
```

## Enums

### Enum Definition
```rust
enum Direction {
    Up,
    Down,
    Left,
    Right,
}

enum Message {
    Quit,
    Move { x: i32, y: i32 },
    Write(String),
    ChangeColor(i32, i32, i32),
}

// Match on enum
let msg = Message::Write("hello".to_string());
match msg {
    Message::Quit => println!("Quit"),
    Message::Move { x, y } => println!("Move to {}, {}", x, y),
    Message::Write(text) => println!("Text: {}", text),
    Message::ChangeColor(r, g, b) => println!("RGB: {}, {}, {}", r, g, b),
}

// Option enum (built-in)
let some_number = Some(5);
let absent_number: Option<i32> = None;

match some_number {
    Some(x) => println!("Value: {}", x),
    None => println!("No value"),
}

// Result enum (built-in)
fn divide(a: f64, b: f64) -> Result<f64, String> {
    if b == 0.0 {
        Err(String::from("Division by zero"))
    } else {
        Ok(a / b)
    }
}

match divide(10.0, 2.0) {
    Ok(result) => println!("Result: {}", result),
    Err(e) => println!("Error: {}", e),
}
```

## Traits

### Trait Definition
```rust
trait Animal {
    fn speak(&self) -> String;
    fn move_distance(&self) -> u32 {
        10 // default implementation
    }
}

struct Dog;

impl Animal for Dog {
    fn speak(&self) -> String {
        String::from("Woof!")
    }
    fn move_distance(&self) -> u32 {
        20
    }
}

// Using traits
fn make_sound(animal: &impl Animal) {
    println!("{}", animal.speak());
}

// Trait bounds
fn announce_animal<T: Animal>(animal: T) {
    println!("Animal says: {}", animal.speak());
}

// Multiple traits
trait Drawable {
    fn draw(&self);
}

fn both_traits(item: &(impl Animal + Drawable)) {
    println!("{}", item.speak());
    item.draw();
}
```

## Error Handling

### Result
```rust
use std::fs::File;
use std::io::Read;

fn read_file(filename: &str) -> Result<String, std::io::Error> {
    let mut f = File::open(filename)?;
    let mut contents = String::new();
    f.read_to_string(&mut contents)?;
    Ok(contents)
}

// Using unwrap (panics on error)
let file = File::open("main.rs").unwrap();

// Using expect (panics with message)
let file = File::open("main.rs").expect("Could not open file");

// Using match
match File::open("main.rs") {
    Ok(file) => println!("File opened"),
    Err(e) => println!("Error: {}", e),
}
```

## Collections

### Vec, HashMap, HashSet
```rust
// Vector
let mut vec = Vec::new();
vec.push(1);
vec.push(2);
let element = &vec[0];
let last = vec.pop();

// HashMap
use std::collections::HashMap;
let mut map = HashMap::new();
map.insert("Alice", 30);
map.insert("Bob", 25);
if let Some(age) = map.get("Alice") {
    println!("Age: {}", age);
}

// HashSet
use std::collections::HashSet;
let mut set = HashSet::new();
set.insert(1);
set.insert(2);
set.insert(2); // duplicate ignored
println!("{}", set.contains(&1));
```

## Generics
```rust
fn largest<T: PartialOrd + Copy>(list: &[T]) -> T {
    let mut largest = list[0];
    for &item in list {
        if item > largest {
            largest = item;
        }
    }
    largest
}

struct Point<T> {
    x: T,
    y: T,
}

impl<T> Point<T> {
    fn x(&self) -> &T {
        &self.x
    }
}
```

## Best Practices

- Leverage the type system for correctness
- Use pattern matching instead of if-else
- Prefer immutability
- Handle errors with Result/Option
- Write tests alongside code
- Use iterators instead of loops
- Document with doc comments
- Use meaningful names
- Avoid unwrap in production code
