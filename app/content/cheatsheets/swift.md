---
title: Swift
description: Beginner's guide to Swift programming language
category: Programming Language
---

# Swift Cheatsheet

**Swift** is Apple's modern language for iOS, macOS, watchOS, and tvOS. **Safe, fast, and expressive**, Swift replaces Objective-C with clean syntax and powerful features.

## Getting Started

### Installation
```bash
# macOS (includes Xcode)
brew install swift

# Verify
swift --version

# Interactive shell
swift
```

### Your First Program
```swift
print("Hello, World!")
```

### Using Playgrounds
```swift
// Create a .playground file and type code
// Results show immediately!
let message = "Hello"  // ← Shows result on right
```

## Variables & Constants

```swift
// Constants (preferred)
let name = "Alice"
let age = 25

// Variables (when value changes)
var counter = 0
counter += 1

// Type annotations
let message: String = "Hello"
let count: Int = 10
let price: Double = 19.99
let isActive: Bool = true

// Type inference
let year = 2024          // Int inferred
let rating = 4.5         // Double inferred

// Multiple constants/variables
let (x, y) = (1, 2)     // Tuple unpacking
```

## Data Types

```swift
// String
let text = "Hello"
text.count                          // 5
text.uppercased()                   // "HELLO"
text.lowercased()                   // "hello"
text.contains("ell")                // true
text.replacingOccurrences(of: "H", with: "J")  // "Jello"

// String interpolation
let name = "Alice"
print("Hello, \(name)")             // "Hello, Alice"
print("Age: \(age + 1)")            // Expressions too!

// Numbers
let integer: Int = 42
let float: Float = 3.14
let double: Double = 3.14159        // Preferred for precision
let binary = 0b1010                 // 10 in decimal
let hex = 0xFF                      // 255 in decimal

// Operations
10 + 5                              // 15
10 - 5                              // 5
10 * 5                              // 50
10 / 5                              // 2
10 % 3                              // 1

// Range
1...5                               // 1, 2, 3, 4, 5 (inclusive)
1..<5                               // 1, 2, 3, 4 (exclusive)
```

## Arrays

```swift
// Array literal
let numbers = [1, 2, 3, 4, 5]
var mutable = [1, 2, 3]

// Type annotation
let names: [String] = ["Alice", "Bob", "Charlie"]
let empty: [Int] = []               // Empty array

// Access elements
numbers[0]                          // 1
numbers.first                       // Optional(1)
numbers.last                        // Optional(5)

// Modification
mutable.append(4)                   // [1, 2, 3, 4]
mutable += [5]                      // [1, 2, 3, 4, 5]
mutable.insert(0, at: 0)            // [0, 1, 2, 3, 4, 5]
mutable.remove(at: 0)               // Removes 0

// Properties
numbers.count                       // 5
numbers.isEmpty                     // false

// Iteration
for number in numbers {
    print(number)
}

// Indexed iteration
for (index, value) in numbers.enumerated() {
    print("\(index): \(value)")
}

// Transform
let doubled = numbers.map { $0 * 2 }     // [2, 4, 6, 8, 10]
let evens = numbers.filter { $0 % 2 == 0 }  // [2, 4]
let sum = numbers.reduce(0) { $0 + $1 }     // 15
```

## Dictionaries

```swift
// Dictionary literal
let person: [String: Any] = [
    "name": "Alice",
    "age": 25,
    "city": "NYC"
]

// Access
person["name"]                      // "Alice"
person["name"] = "Bob"              // Update

// Add new key
var dict = ["a": 1]
dict["b"] = 2                       // ["a": 1, "b": 2]

// Properties
dict.count                          // 2
dict.isEmpty                        // false

// Keys & values
dict.keys                           // ["a", "b"]
dict.values                         // [1, 2]

// Iteration
for (key, value) in dict {
    print("\(key): \(value)")
}
```

## Control Flow

```swift
// If statement
let age = 18
if age >= 18 {
    print("Adult")
} else if age >= 13 {
    print("Teen")
} else {
    print("Child")
}

// If as expression (returns value)
let status = if age >= 18 { "Adult" } else { "Minor" }

// Switch statement
let day = "Monday"
switch day {
case "Monday", "Friday":
    print("Work day")
case "Saturday", "Sunday":
    print("Weekend")
default:
    print("Midweek")
}

// Switch with pattern matching
switch number {
case 0:
    print("Zero")
case 1...10:
    print("1 to 10")
case let x where x > 100:
    print("Greater than 100: \(x)")
default:
    print("Other")
}

// Ternary operator
let result = age >= 18 ? "Adult" : "Minor"
```

## Loops

```swift
// For-in with range
for i in 1...5 {
    print(i)
}

// For-in with array
let colors = ["red", "green", "blue"]
for color in colors {
    print(color)
}

// While loop
var count = 0
while count < 5 {
    print(count)
    count += 1
}

// Repeat-while (do-while)
var number = 0
repeat {
    print(number)
    number += 1
} while number < 5

// Control flow
for i in 1...10 {
    if i == 3 {
        continue        // Skip 3
    }
    if i == 7 {
        break           // Exit at 7
    }
    print(i)
}
```

## Functions

```swift
// Basic function
func add(a: Int, b: Int) -> Int {
    a + b               // Implicit return
}

add(a: 5, b: 3)         // Must use argument labels

// No argument labels
func multiply(_ a: Int, _ b: Int) -> Int {
    a * b
}

multiply(5, 3)

// Default parameters
func greet(name: String = "Guest") {
    print("Hello, \(name)")
}

greet()                 // "Hello, Guest"
greet(name: "Alice")    // "Hello, Alice"

// Multiple return values (tuple)
func swap(_ a: Int, _ b: Int) -> (Int, Int) {
    (b, a)
}

let (x, y) = swap(1, 2)  // x=2, y=1

// Variadic parameters
func sum(_ numbers: Int...) -> Int {
    numbers.reduce(0, +)
}

sum(1, 2, 3, 4)         // 10

// Inout parameters (pass by reference)
func increment(_ number: inout Int) {
    number += 1
}

var value = 5
increment(&value)
print(value)            // 6

// Closure (anonymous function)
let multiply: (Int, Int) -> Int = { a, b in
    a * b
}

multiply(3, 4)          // 12
```

## Optionals

```swift
// Optional (value might be nil)
let age: Int? = nil
let name: String? = "Alice"

// Unwrap with !
let unwrapped: String = name!   // Force unwrap (dangerous!)

// Unwrap with if let
if let name = name {
    print(name)         // "Alice"
} else {
    print("No name")
}

// Unwrap with guard
func printName(_ name: String?) {
    guard let name = name else {
        print("No name")
        return
    }
    print(name)
}

// Optional chaining
let first: String? = "Alice"
let upper = first?.uppercased()   // Optional("ALICE")

// Nil coalescing
let displayName = name ?? "Guest"  // "Alice" or "Guest"
```

## Structs & Classes

```swift
// Struct (value type)
struct Person {
    var name: String
    var age: Int

    func greet() {
        print("Hello, I'm \(name)")
    }

    mutating func birthday() {
        age += 1
    }
}

// Use struct
var person = Person(name: "Alice", age: 25)
person.greet()          // "Hello, I'm Alice"
person.birthday()
print(person.age)       // 26

// Class (reference type)
class Dog {
    var name: String

    init(name: String) {
        self.name = name
    }

    func bark() {
        print("\(name) says woof!")
    }
}

let dog = Dog(name: "Rex")
dog.bark()              // "Rex says woof!"
```

## Inheritance

```swift
class Animal {
    func speak() {
        print("Some sound")
    }
}

class Cat: Animal {
    override func speak() {
        print("Meow!")
    }
}

let cat = Cat()
cat.speak()             // "Meow!"
```

## Protocols (Interfaces)

```swift
protocol Drawable {
    func draw()
}

struct Circle: Drawable {
    func draw() {
        print("Drawing circle")
    }
}

struct Square: Drawable {
    func draw() {
        print("Drawing square")
    }
}

let circle = Circle()
circle.draw()           // "Drawing circle"
```

## Extensions

```swift
// Add methods to existing types
extension String {
    var wordCount: Int {
        self.split(separator: " ").count
    }
}

"Hello Swift World".wordCount       // 3

extension Int {
    func isPrime() -> Bool {
        guard self > 1 else { return false }
        for i in 2..<self {
            if self % i == 0 { return false }
        }
        return true
    }
}

7.isPrime()             // true
```

## Error Handling

```swift
// Define error
enum FileError: Error {
    case notFound
    case permissionDenied
}

// Function that throws
func readFile(_ path: String) throws -> String {
    if !path.contains(".txt") {
        throw FileError.notFound
    }
    return "File content"
}

// Call with try-catch
do {
    let content = try readFile("file.txt")
    print(content)
} catch FileError.notFound {
    print("File not found")
} catch FileError.permissionDenied {
    print("Permission denied")
}

// Try with optional
let content = try? readFile("file.txt")  // nil on error
```

## Practical Example: Simple Calculator

```swift
struct Calculator {
    func add(_ a: Int, _ b: Int) -> Int { a + b }
    func subtract(_ a: Int, _ b: Int) -> Int { a - b }
    func multiply(_ a: Int, _ b: Int) -> Int { a * b }
    func divide(_ a: Int, _ b: Int) -> Int? {
        guard b != 0 else { return nil }
        return a / b
    }
}

let calc = Calculator()
print(calc.add(10, 5))              // 15
print(calc.divide(10, 5) ?? "Error")  // 2
```

## Best Practices

1. **Prefer structs over classes** (unless reference needed)
2. **Use optionals** for "may not have value" scenarios
3. **Guard early** to avoid nested if-lets
4. **Use type inference** when obvious
5. **Prefer immutability** (let over var)

## Common Mistakes

| ❌ Mistake | ✅ Fix |
|-----------|--------|
| Using ! (force unwrap) carelessly | Use optional binding: `if let x = optional { }` |
| Forcing with as? and force-casting | Use `as?` for safe casting: `let str = obj as? String` |
| Forgetting self in closures | Use `[weak self]` to avoid retain cycles |
| Using class when struct fits | Default to `struct`, use `class` only for reference semantics |
| Not using guard for early exit | Use `guard let x = optional else { return }` |
| Comparing optionals with == | Use pattern matching: `if case .some(let v) = optional` |
| Mutating value types in methods | Mark method `mutating`: `mutating func add()` |
| Not handling all switch cases | Swift enforces exhaustiveness - use `@unknown default` if needed |

## Quick Reference

| Concept | Example |
|---------|---------|
| Variable | `let x = 10` |
| Mutable | `var x = 10` |
| Optional | `let x: Int? = nil` |
| Array | `let arr = [1, 2, 3]` |
| Dictionary | `let dict = ["a": 1, "b": 2]` |
| Function | `func add(_ a: Int, _ b: Int) -> Int { a + b }` |
| Struct | `struct Person { let name: String }` |
| Class | `class MyClass { init() { } }` |
| Optional binding | `if let x = optional { }` |
| Guard | `guard let x = optional else { return }` |

## Summary

Swift is **modern, safe, and fast**. Perfect for Apple ecosystem.

Key strengths:
- **Type-safe** - catches errors at compile time
- **Memory-safe** - prevents common bugs
- **Fast** - compiled to native code
- **Clear syntax** - reads like pseudocode
- **Perfect for iOS** - the best way to build Apple apps
