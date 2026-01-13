---
title: Kotlin
description: Beginner's guide to Kotlin programming language
category: Programming Language
---

# Kotlin Cheatsheet

**Kotlin** is a modern JVM language designed for **Android development and productivity**. **Pragmatic and safe**, Kotlin combines the power of Java with clean, expressive syntax.

## Getting Started

### Installation
```bash
# macOS
brew install kotlin

# Linux
sudo apt-get install kotlin

# Verify
kotlin -version

# Interactive shell
kotlinc -script script.kts
```

### Your First Program
```kotlin
fun main() {
    println("Hello, World!")
}
```

### Running Kotlin
```bash
# Compile and run
kotlinc hello.kt -include-runtime -d hello.jar
java -jar hello.jar

# Or directly
kotlinc -script hello.kts
```

## Variables & Constants

```kotlin
// Constant (val)
val name = "Alice"
val age: Int = 25

// Variable (var)
var counter = 0
counter += 1

// Explicit types
val message: String = "Hello"
val count: Int = 10
val price: Double = 19.99
val isActive: Boolean = true

// Type inference
val year = 2024          // Int inferred
val rating = 4.5         // Double inferred

// Multiple declarations
val (x, y) = Pair(1, 2)

// Lateinit (initialize later)
lateinit var name: String
name = "Alice"
```

## Data Types

```kotlin
// Strings
val text = "Hello"
text.length                         // 5
text.uppercase()                    // "HELLO"
text.lowercase()                    // "hello"
text.contains("ell")                // true
text.replace("H", "J")              // "Jello"

// String interpolation
val name = "Alice"
println("Hello, $name")             // "Hello, Alice"
println("Age: ${age + 1}")          // Expressions too!
println("Length: ${text.length}")

// Multiline strings
val poem = """
    Line 1
    Line 2
    Line 3
""".trimIndent()

// Numbers
val integer: Int = 42
val long: Long = 42L
val float: Float = 3.14f
val double: Double = 3.14159

// Operations
10 + 5                              // 15
10 - 5                              // 5
10 * 5                              // 50
10 / 5                              // 2
10 % 3                              // 1

// Range
1..5                                // 1, 2, 3, 4, 5 (inclusive)
1 until 5                           // 1, 2, 3, 4 (exclusive)
5 downTo 1                          // 5, 4, 3, 2, 1
1..10 step 2                        // 1, 3, 5, 7, 9
```

## Collections

```kotlin
// List (immutable by default)
val numbers = listOf(1, 2, 3, 4, 5)
val mutable = mutableListOf(1, 2, 3)

// Type annotation
val names: List<String> = listOf("Alice", "Bob")
val empty: List<Int> = emptyList()

// Access
numbers[0]                          // 1
numbers.first()                     // 1
numbers.last()                      // 5
numbers.get(2)                      // 3

// Modification (mutable only)
mutable.add(4)                      // [1, 2, 3, 4]
mutable.remove(1)                   // [2, 3, 4]
mutable[0] = 10                     // [10, 3, 4]

// Properties
numbers.size                        // 5
numbers.isEmpty()                   // false
numbers.contains(3)                 // true

// Iteration
for (num in numbers) {
    println(num)
}

// Indexed iteration
for ((index, value) in numbers.withIndex()) {
    println("$index: $value")
}

// Transform (very Kotlin!)
val doubled = numbers.map { it * 2 }        // [2, 4, 6, 8, 10]
val evens = numbers.filter { it % 2 == 0 } // [2, 4]
val sum = numbers.sum()                     // 15
val product = numbers.reduce { a, b -> a * b }  // 120

// Set (unique values)
val unique = setOf(1, 2, 2, 3, 3)   // [1, 2, 3]
val mutableSet = mutableSetOf(1, 2)

// Map (key-value)
val person = mapOf(
    "name" to "Alice",
    "age" to 25,
    "city" to "NYC"
)

val mutableMap = mutableMapOf("a" to 1)
mutableMap["b"] = 2
person["name"]                      // "Alice"
person.keys                         // [name, age, city]
person.values                       // [Alice, 25, NYC]
```

## Control Flow

```kotlin
// If statement
val age = 18
if (age >= 18) {
    println("Adult")
} else if (age >= 13) {
    println("Teen")
} else {
    println("Child")
}

// If as expression (returns value)
val status = if (age >= 18) "Adult" else "Minor"

// When statement (like switch)
val day = "Monday"
when (day) {
    "Monday", "Friday" -> println("Work day")
    "Saturday", "Sunday" -> println("Weekend")
    else -> println("Midweek")
}

// When with ranges
when (number) {
    0 -> println("Zero")
    in 1..10 -> println("1 to 10")
    in 11..100 -> println("11 to 100")
    else -> println("Greater than 100")
}

// When with smart cast
when (value) {
    is String -> println("It's a string: $value")
    is Int -> println("It's an int: $value")
}
```

## Loops

```kotlin
// For-in with range
for (i in 1..5) {
    println(i)
}

// For-in with array
val colors = listOf("red", "green", "blue")
for (color in colors) {
    println(color)
}

// While loop
var count = 0
while (count < 5) {
    println(count)
    count++
}

// Do-while
var number = 0
do {
    println(number)
    number++
} while (number < 5)

// Control flow
for (i in 1..10) {
    if (i == 3) continue       // Skip 3
    if (i == 7) break          // Exit at 7
    println(i)
}
```

## Functions

```kotlin
// Basic function
fun add(a: Int, b: Int): Int {
    return a + b
}

// Single expression (implicit return)
fun multiply(a: Int, b: Int): Int = a * b

// No return type needed
fun greet() = "Hello!"

// Default parameters
fun sayHello(name: String = "Guest") {
    println("Hello, $name")
}

sayHello()                  // "Hello, Guest"
sayHello("Alice")           // "Hello, Alice"

// Named arguments
fun createUser(name: String, age: Int, city: String) {
    println("$name, $age, $city")
}

createUser(name = "Alice", age = 25, city = "NYC")
createUser(age = 25, name = "Alice", city = "NYC")  // Order doesn't matter

// Variadic parameters
fun sum(vararg numbers: Int): Int {
    return numbers.sum()
}

sum(1, 2, 3, 4)             // 10

// Lambda (anonymous function)
val multiply: (Int, Int) -> Int = { a, b -> a * b }
multiply(3, 4)              // 12

// Higher-order functions
fun applyTwice(fn: (Int) -> Int, value: Int): Int {
    return fn(fn(value))
}

applyTwice({ it * 2 }, 5)   // 20
applyTwice { it * 2 }       // Trailing lambda
```

## Classes & Objects

```kotlin
// Data class (auto-generates equals, hashCode, toString, copy)
data class Person(
    val name: String,
    val age: Int
)

val person = Person("Alice", 25)
println(person)             // Person(name=Alice, age=25)
val copy = person.copy(age = 26)  // Immutable copy with change

// Regular class
class Dog {
    var name: String = ""
    var age: Int = 0

    constructor(name: String, age: Int) {
        this.name = name
        this.age = age
    }

    fun bark() {
        println("$name says woof!")
    }
}

val dog = Dog("Rex", 3)
dog.bark()

// Primary constructor
class Cat(val name: String, var age: Int) {
    fun meow() {
        println("$name says meow!")
    }
}

val cat = Cat("Whiskers", 2)

// Getters and setters
class Account {
    var balance: Double = 0.0
        set(value) {
            require(value >= 0) { "Balance must be positive" }
            field = value
        }
}
```

## Inheritance

```kotlin
// Open for inheritance (classes are final by default)
open class Animal {
    open fun speak() {
        println("Some sound")
    }
}

class Dog : Animal() {
    override fun speak() {
        println("Woof!")
    }
}

val dog = Dog()
dog.speak()             // "Woof!"
```

## Interfaces

```kotlin
interface Drawable {
    fun draw()
    fun description() = "Drawable"  // Default implementation
}

class Circle : Drawable {
    override fun draw() {
        println("Drawing circle")
    }
}

val circle: Drawable = Circle()
circle.draw()
```

## Extension Functions

```kotlin
// Add functions to existing classes
fun String.wordCount(): Int {
    return this.split(" ").size
}

"Hello Kotlin World".wordCount()    // 3

fun Int.isEven(): Boolean {
    return this % 2 == 0
}

4.isEven()              // true
```

## Sealed Classes

```kotlin
// Restricted class hierarchy (for pattern matching)
sealed class Result {
    data class Success(val data: String) : Result()
    data class Error(val exception: Exception) : Result()
}

when (result) {
    is Result.Success -> println("Success: ${result.data}")
    is Result.Error -> println("Error: ${result.exception}")
}
```

## Null Safety

```kotlin
// Nullable type
val age: Int? = null
val name: String? = "Alice"

// Safe call operator
val length = name?.length          // null or length

// Elvis operator (default value)
val displayName = name ?: "Guest"  // "Alice" or "Guest"

// Not-null assertion
val notNull = name!!               // Throws if null

// Let (execute if not null)
name?.let {
    println("Name: $it")
}

// Smart cast after null check
if (name != null) {
    println(name.uppercase())       // No need for name?.uppercase()
}
```

## Practical Example: Simple Calculator

```kotlin
data class Expression(val a: Int, val b: Int, val op: String)

class Calculator {
    fun evaluate(expr: Expression): Int? = when (expr.op) {
        "+" -> expr.a + expr.b
        "-" -> expr.a - expr.b
        "*" -> expr.a * expr.b
        "/" -> if (expr.b != 0) expr.a / expr.b else null
        else -> null
    }
}

val calc = Calculator()
val result = calc.evaluate(Expression(10, 5, "+"))
println(result)                     // 15
```

## Best Practices

1. **Prefer val over var** (immutability first)
2. **Use data classes** for simple data holders
3. **Leverage null safety** - eliminate null pointer exceptions
4. **Use extension functions** for cleaner code
5. **Embrace functional programming** - map, filter, reduce
6. **Use sealed classes** for restricted hierarchies

## Summary

Kotlin is **pragmatic and safe**. Perfect for Android and JVM development.

Key strengths:
- **Null-safe** - eliminates null pointer exceptions
- **Concise** - less boilerplate than Java
- **Interoperable** - 100% compatible with Java
- **Functional** - first-class functions and lambdas
- **Android** - official language for Android development
- **Productive** - write less, do more
