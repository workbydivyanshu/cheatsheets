---
title: Swift
slug: swift
category: Programming Language
description: Modern language for Apple platforms with type safety, optionals, and expressive syntax for iOS and macOS development.
---

# Swift Cheatsheet

## Basics

### Hello World
```swift
import Foundation

print("Hello, World!")

// Single-line comment
/* Multi-line
   comment */
```

### Variables & Constants
```swift
var name = "Alice"
var age: Int = 30
let email = "alice@example.com" // constant

// Type annotation
var price: Double = 19.99
var isActive: Bool = true

// String interpolation
let greeting = "Hello, \(name)!"

// Multiple variables
var x = 1, y = 2, z = 3
```

### Data Types
```swift
// Integers
let intValue: Int = 42
let uint: UInt = 42

// Floats
let floatValue: Float = 3.14
let doubleValue: Double = 3.14159

// Strings
let str: String = "Hello"

// Booleans
let flag: Bool = true

// Arrays
var arr: [Int] = [1, 2, 3]
var arr = [1, 2, 3] // type inference
var arr: [Int] = [] // empty

// Dictionaries
var dict: [String: Int] = ["Alice": 30, "Bob": 25]
var dict = ["Alice": 30, "Bob": 25]

// Tuples
let tuple: (String, Int) = ("Alice", 30)
let (name, age) = tuple
let named: (name: String, age: Int) = ("Bob", 25)
```

## Control Flow

### Conditionals
```swift
// if-else
if age >= 18 {
    print("Adult")
} else if age >= 13 {
    print("Teen")
} else {
    print("Child")
}

// Ternary
let status = age >= 18 ? "Adult" : "Minor"

// switch
switch day {
case "Monday":
    print("Start of week")
case "Saturday", "Sunday":
    print("Weekend")
default:
    print("Mid week")
}

// switch with ranges
switch age {
case 0..<13:
    print("Child")
case 13..<18:
    print("Teen")
default:
    print("Adult")
}

// guard
guard age >= 18 else {
    print("Too young")
    return
}
print("Proceed")
```

### Loops
```swift
// for-in
for i in 0..<5 {
    print(i) // 0, 1, 2, 3, 4
}

for i in 0...5 {
    print(i) // 0, 1, 2, 3, 4, 5
}

// Array iteration
let arr = [1, 2, 3]
for num in arr {
    print(num)
}

// Dictionary iteration
for (key, value) in dict {
    print("\(key): \(value)")
}

// while loop
var count = 0
while count < 5 {
    print(count)
    count += 1
}

// repeat-while
repeat {
    print(count)
    count += 1
} while count < 5

// break and continue
for i in 0..<10 {
    if i == 5 {
        break
    }
    if i == 2 {
        continue
    }
    print(i)
}
```

## Functions

### Function Declaration
```swift
func add(a: Int, b: Int) -> Int {
    return a + b
}

func add(a: Int, b: Int) -> Int {
    a + b // implicit return
}

// Multiple return values
func divmod(a: Int, b: Int) -> (Int, Int) {
    (a / b, a % b)
}

let (quotient, remainder) = divmod(a: 10, b: 3)

// Default parameters
func greet(name: String = "Guest") {
    print("Hello, \(name)")
}

// Variadic parameters
func sum(_ numbers: Int...) -> Int {
    var total = 0
    for num in numbers {
        total += num
    }
    return total
}

sum(1, 2, 3, 4, 5)

// Inout parameters
func increment(_ num: inout Int) {
    num += 1
}

var x = 5
increment(&x)
print(x) // 6

// Closures
let multiply: (Int, Int) -> Int = { a, b in
    a * b
}

multiply(3, 4) // 12

// Trailing closure
let numbers = [1, 2, 3, 4, 5]
let doubled = numbers.map { $0 * 2 }
```

## Optionals

### Optional Types
```swift
var optionalString: String? = "Hello"
var optionalInt: Int? = nil

// Force unwrap (dangerous)
let name = optionalString! // "Hello"

// Optional binding
if let name = optionalString {
    print("Name: \(name)")
}

// Guard binding
guard let name = optionalString else {
    print("Name is nil")
    return
}

// Nil coalescing
let name = optionalString ?? "Unknown"

// Optional chaining
let length = optionalString?.count

// Map with optional
let uppercase = optionalString?.uppercased()
```

## Classes & Structures

### Classes
```swift
class Person {
    var name: String
    var age: Int
    
    init(name: String, age: Int) {
        self.name = name
        self.age = age
    }
    
    func display() {
        print("Name: \(name), Age: \(age)")
    }
}

let person = Person(name: "Alice", age: 30)
person.display()

// Deinitializer
deinit {
    print("Person deallocated")
}
```

### Structures
```swift
struct Point {
    var x: Int
    var y: Int
    
    func distance() -> Double {
        Double(x * x + y * y).squareRoot()
    }
    
    mutating func move(dx: Int, dy: Int) {
        x += dx
        y += dy
    }
}

var point = Point(x: 3, y: 4)
point.move(dx: 1, dy: 1)
print(point.distance())
```

### Inheritance
```swift
class Employee: Person {
    var employeeId: String
    
    init(name: String, age: Int, employeeId: String) {
        self.employeeId = employeeId
        super.init(name: name, age: age)
    }
    
    override func display() {
        super.display()
        print("ID: \(employeeId)")
    }
}
```

## Protocols

### Protocol Definition
```swift
protocol Animal {
    var name: String { get }
    func speak()
}

class Dog: Animal {
    var name: String
    
    init(name: String) {
        self.name = name
    }
    
    func speak() {
        print("Woof!")
    }
}

// Protocol with default implementation
extension Animal {
    func sleep() {
        print("\(name) is sleeping")
    }
}
```

## Enums

### Enum Definition
```swift
enum Direction {
    case north
    case south
    case east
    case west
}

var dir = Direction.north

// Associated values
enum Result {
    case success(String)
    case failure(String)
}

let result = Result.success("Data loaded")

if case .success(let message) = result {
    print(message)
}

// Raw values
enum Status: String {
    case pending = "PENDING"
    case completed = "COMPLETED"
    case failed = "FAILED"
}
```

## Error Handling

### Try-Catch
```swift
enum FileError: Error {
    case fileNotFound
    case permissionDenied
}

func readFile(_ name: String) throws -> String {
    if name.isEmpty {
        throw FileError.fileNotFound
    }
    return "File content"
}

do {
    let content = try readFile("file.txt")
    print(content)
} catch FileError.fileNotFound {
    print("File not found")
} catch {
    print("Error: \(error)")
}

// try? (returns optional)
if let content = try? readFile("file.txt") {
    print(content)
}

// try! (force try, crashes on error)
let content = try! readFile("file.txt")
```

## Extensions

### Extending Types
```swift
extension String {
    var isEmail: Bool {
        self.contains("@") && self.contains(".")
    }
    
    func repeated(times: Int) -> String {
        String(repeating: self, count: times)
    }
}

"hello".repeated(times: 3) // "hellohellohello"
"test@example.com".isEmail // true
```

## Collections

### Array Methods
```swift
let numbers = [1, 2, 3, 4, 5]

// map
let doubled = numbers.map { $0 * 2 }

// filter
let evens = numbers.filter { $0 % 2 == 0 }

// reduce
let sum = numbers.reduce(0, +)

// sorted
let sorted = numbers.sorted()

// reversed
let reversed = numbers.reversed()

// contains
numbers.contains(3)

// first, last
numbers.first
numbers.last
```

### Dictionary Methods
```swift
let dict = ["name": "Alice", "age": "30"]

// Keys and values
dict.keys
dict.values

// Merge
var dict2 = ["email": "alice@example.com"]
dict2.merge(dict) { _, new in new }

// Map
let uppercase = dict.mapValues { $0.uppercased() }
```

## Best Practices

- Use `let` by default, only use `var` when needed
- Handle optionals explicitly
- Use guard statements early
- Leverage type inference
- Write extensions for code organization
- Use protocols for abstraction
- Implement error handling with throws
- Use meaningful names
- Write tests for all functions
- Follow Swift API Design Guidelines
