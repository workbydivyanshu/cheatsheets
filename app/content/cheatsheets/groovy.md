---
title: Groovy
description: Complete beginner-friendly guide to Apache Groovy scripting language
category: Programming Language
---

# Groovy Cheatsheet

**Groovy** is a dynamic, JVM-based language that runs on the **Java Virtual Machine**. It's 100% compatible with Java while adding modern scripting features. Used for build scripts (Gradle), testing, and automation.

## Getting Started (🟢 Beginner)

### What is Groovy?
Groovy is Java with **less boilerplate**. Write Java code that just works, or use scripting syntax. Seamlessly integrates with existing Java libraries.

### Your First Program
```groovy
println "Hello, World!"
```

Run it:
```bash
groovy hello.groovy
# Output: Hello, World!
```

### Installation & Running
```bash
# On macOS
brew install groovy

# Run a script
groovy script.groovy

# Interactive shell
groovysh

# Execute command
groovy -e 'println "Hello"'
```

## Variables & Data Types (🟢 Beginner)

### Basics
```groovy
// Variables (dynamically typed)
def name = "Alice"
def age = 25
def height = 5.9
def is_student = true

// Type annotations (optional)
String greeting = "Hello"
int count = 42
double price = 19.99
boolean active = true
```

### Numbers
```groovy
// Different number types
int num = 100
long big = 9999999999L
float f = 3.14f
double d = 3.14159

// Arithmetic
2 + 3                   // 5
10 - 4                  // 6
3 * 4                   // 12
10 / 3                  // 3.333... (float division)
10 % 3                  // 1 (modulo)
2 ** 8                  // 256 (exponentiation, ** not ^)

// BigDecimal (for money!)
def price = 19.99.bd   // BigDecimal
```

### Strings
```groovy
// String literals
String name = "Alice"
String single = 'single quoted'
String multi = """Multi
line
string"""

// GString (interpolation with $)
age = 25
"Hello, $name"                          // "Hello, Alice"
"Age: ${age + 5}"                       // "Age: 30"

// String methods
"hello".length()                        // 5
"hello".toUpperCase()                   // "HELLO"
"HELLO".toLowerCase()                   // "hello"
"a,b,c".split(",")                     // ["a", "b", "c"]
["a", "b", "c"].join("-")              // "a-b-c"
"hello world".replace("world", "Groovy") // "hello Groovy"
"  hello  ".trim()                      // "hello"
```

### Lists (Similar to Java's ArrayList)
```groovy
// Create list
def list = [1, 2, 3, 4, 5]
def fruits = ["apple", "banana", "cherry"]
def mixed = [1, "two", 3.0, true]

// Access elements (0-indexed!)
list[0]                 // 1 (first)
list[-1]                // 5 (last)
list[1..3]              // [2, 3, 4] (slice)

// Modify
list << 6               // Add: [1, 2, 3, 4, 5, 6]
list.add(7)
list.remove(2)
list.size()             // Get size
```

### Maps (Similar to HashMap)
```groovy
// Create map
def person = [name: "Alice", age: 25]
def map = ["key": "value", a: 1]

// Access
person.name             // "Alice"
person["age"]           // 25
person.get("name", "Unknown")  // With default

// Add/modify
person.city = "NYC"
person["job"] = "Engineer"

// Iterate
person.each { key, value ->
    println "$key: $value"
}
```

## Control Flow (🟢 Beginner)

### If/Else
```groovy
x = 10

if (x > 15) {
    println "Large"
} else if (x > 5) {
    println "Medium"
} else {
    println "Small"
}

// Ternary
status = (x > 5) ? "big" : "small"

// Elvis operator (Groovy special!)
def msg = greeting ?: "Hello"  // Use greeting if not null/empty
```

### Logical Operators
```groovy
true && false           // AND
true || false           // OR
!true                   // NOT

if (age > 18 && city == "NYC") {
    println "Can vote in NYC"
}
```

## Loops (🟢 Beginner)

### For Loop
```groovy
// Traditional for
for (i in 0..4) {
    println i           // 0, 1, 2, 3, 4
}

// Range with step
for (i in 0..10 step 2) {
    println i           // 0, 2, 4, 6, 8, 10
}

// Loop over list
def items = ["a", "b", "c"]
for (item in items) {
    println item
}

// With index
items.eachWithIndex { item, index ->
    println "$index: $item"
}
```

### While Loop
```groovy
i = 0
while (i < 5) {
    println i
    i++
}
```

### Each (Groovy's favorite!)
```groovy
[1, 2, 3, 4, 5].each { num ->
    println num * 2
}

// Map iteration
[name: "Alice", age: 25].each { k, v ->
    println "$k = $v"
}
```

## Functions (🟢 Beginner)

### Defining Functions
```groovy
// Simple function
void greet() {
    println "Hello!"
}

// With parameters
def add(a, b) {
    return a + b
}

// One-liner
def multiply(a, b) { a * b }

// Calling
greet()
add(5, 3)               // 8
multiply(3, 4)          // 12

// Default parameters
def welcome(name = "Guest") {
    println "Welcome, $name"
}

welcome()               // Welcome, Guest
welcome("Alice")        // Welcome, Alice
```

## Closures (🟡 Intermediate)

Groovy closures are code blocks that can be stored and passed around!

```groovy
// Simple closure
def sayHi = { println "Hi!" }
sayHi()

// Closure with parameter
def double_it = { x -> x * 2 }
double_it(5)            // 10

// Used with functions
def numbers = [1, 2, 3, 4, 5]
def doubled = numbers.collect { n -> n * 2 }
// doubled = [2, 4, 6, 8, 10]

// Filter with closure
def evens = numbers.findAll { n -> n % 2 == 0 }
// evens = [2, 4]

// Reduce
def sum = numbers.inject(0) { total, n -> total + n }
// sum = 15
```

## Collections & Useful Methods (🟡 Intermediate)

Groovy makes working with lists and maps powerful!

```groovy
def nums = [1, 2, 3, 4, 5]

// Transformation
nums.collect { n -> n * 2 }     // [2, 4, 6, 8, 10]

// Filtering
nums.findAll { n -> n > 2 }     // [3, 4, 5]
nums.find { n -> n > 3 }        // 4 (first match)

// Checking
nums.any { n -> n > 4 }         // true (at least one)
nums.all { n -> n > 0 }         // true (all match)
nums.count { n -> n % 2 == 0 }  // 2

// Joining
nums.join("-")                  // "1-2-3-4-5"

// Sorting
[3, 1, 4, 1, 5].sort()          // [1, 1, 3, 4, 5]
["cat", "dog", "ant"].sort()    // ["ant", "cat", "dog"]
```

## Practical Examples

### Text Processing
```groovy
String log = """
2024-01-15 ERROR Connection failed
2024-01-16 INFO Processing complete
2024-01-17 ERROR Timeout occurred
"""

// Find all errors
errors = log.split("\n").findAll { line ->
    line.contains("ERROR")
}

errors.each { println it }
```

### Working with Files
```groovy
def file = new File("data.txt")

// Read file
String content = file.text

// Read lines
file.eachLine { line ->
    println line
}

// Write file
new File("output.txt").text = "Hello, Groovy!"
```

### Building with Gradle
```groovy
// build.gradle (Groovy in action!)
plugins {
    id 'java'
}

dependencies {
    testImplementation 'junit:junit:4.13'
    implementation 'org.apache.commons:commons-lang3:3.12.0'
}

tasks.register('hello') {
    doLast {
        println 'Hello from Gradle!'
    }
}
```

## Common Mistakes

| ❌ Mistake | ✅ Fix |
|-----------|--------|
| Mixing Java and Groovy syntax | Groovy accepts Java, but use `def`, GStrings, closures |
| Forgetting parentheses in dynamic calls | `println "Hi"` works, but be consistent with `()` |
| String concatenation vs interpolation | Use `"Value: $var"` not `"Value: " + var` |
| Lists are 0-indexed | Remember: `list[0]` is first element |
| Nulls in operations | Use `?:` Elvis operator to provide defaults |
| Not using closures for iteration | Use `.each {}` instead of for loops |
| Forgetting `def` keyword | Use `def` for dynamic typing: `def x = 10` |
| Case-sensitive method names | `println` not `Println`, `toUpperCase()` not `toupper()` |

## Quick Reference

| Concept | Example |
|---------|---------|
| Variable | `def x = 10` |
| List | `[1, 2, 3]` |
| Map | `[name: "Alice", age: 25]` |
| String interp | `"Hello, $name"` |
| Function | `def add(a, b) { a + b }` |
| Closure | `{ x -> x * 2 }` |
| For loop | `for (i in 0..5) { }` |
| Each | `items.each { item -> }` |
| Collect | `list.collect { x -> x * 2 }` |
| Filter | `list.findAll { x -> x > 5 }` |

## Summary

Groovy is perfect for **build automation, testing, and scripting on the JVM**. It combines Java's power with Python-like simplicity. Essential for Gradle users and those building DevOps tools.

Key strengths:
- **Java compatible** - run alongside existing Java code
- **Less boilerplate** - `def`, optional semicolons, no getters needed
- **Scripting focused** - perfect for build scripts and automation
- **Powerful closures** - expressive functional programming
- **Gradle** - the modern Java build tool uses Groovy
