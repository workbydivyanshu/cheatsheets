---
title: Kotlin
slug: kotlin
category: Programming Language
description: Modern JVM language with null safety, extension functions, and coroutines for concise, expressive code.
---

# Kotlin Cheatsheet

## Basics

### Hello World
```kotlin
fun main() {
    println("Hello, World!")
}

// Comments
// Single line
/* Multi-line
   comment */
```

### Variables & Constants
```kotlin
var name = "Alice"
var age: Int = 30
val email = "alice@example.com" // immutable

// Type annotation
val price: Double = 19.99
val isActive: Boolean = true

// String interpolation
val greeting = "Hello, $name!"
val calculation = "5 + 3 = ${5 + 3}"

// Late initialization
lateinit var config: String
```

### Data Types
```kotlin
// Numbers
val intValue: Int = 42
val longValue: Long = 42L
val floatValue: Float = 3.14f
val doubleValue: Double = 3.14159

// Strings
val str: String = "Hello"
val multiline = """
    Line 1
    Line 2
""".trimIndent()

// Arrays
val arr = intArrayOf(1, 2, 3)
val arr = arrayOf(1, "two", 3.0)
val arr = IntArray(5) // [0, 0, 0, 0, 0]

// Collections
val list = listOf(1, 2, 3)
val mutableList = mutableListOf(1, 2, 3)
val set = setOf(1, 2, 3)
val map = mapOf("name" to "Alice", "age" to 30)
```

## Control Flow

### Conditionals
```kotlin
// if-else (expression)
val status = if (age >= 18) "Adult" else "Minor"

// when (switch alternative)
when (day) {
    "Monday" -> println("Start of week")
    "Friday", "Saturday" -> println("Weekend")
    else -> println("Mid week")
}

// when with ranges
when (age) {
    in 0..12 -> println("Child")
    in 13..17 -> println("Teen")
    else -> println("Adult")
}

// when with is
when (value) {
    is String -> println("String: $value")
    is Int -> println("Int: $value")
    else -> println("Other type")
}
```

### Loops
```kotlin
// for loop
for (i in 1..5) {
    println(i)
}

for (i in 1 until 5) {
    println(i) // 1, 2, 3, 4
}

for (i in 5 downTo 1) {
    println(i)
}

for (i in 1..10 step 2) {
    println(i)
}

// Collections
val numbers = listOf(1, 2, 3)
for (num in numbers) {
    println(num)
}

// with index
for ((index, num) in numbers.withIndex()) {
    println("$index: $num")
}

// while loop
var count = 0
while (count < 5) {
    println(count)
    count++
}

// break and continue
loop@ for (i in 1..10) {
    if (i == 5) break@loop
    if (i == 2) continue
    println(i)
}
```

## Functions

### Function Declaration
```kotlin
fun add(a: Int, b: Int): Int {
    return a + b
}

// Single expression function
fun add(a: Int, b: Int) = a + b

// Default parameters
fun greet(name: String = "Guest") {
    println("Hello, $name")
}

// Named arguments
greet(name = "Alice")

// Variadic parameters
fun sum(vararg numbers: Int): Int {
    return numbers.sum()
}

sum(1, 2, 3, 4, 5)

// Lambda expressions
val multiply: (Int, Int) -> Int = { a, b -> a * b }
multiply(3, 4) // 12

// Trailing lambda
val numbers = listOf(1, 2, 3)
numbers.map { it * 2 }
numbers.filter { it > 1 }

// Higher-order functions
fun operation(a: Int, b: Int, func: (Int, Int) -> Int): Int {
    return func(a, b)
}

operation(3, 5) { x, y -> x + y }
```

## Null Safety

### Nullable Types
```kotlin
var name: String? = "Alice"
var empty: String? = null

// Safe call
val length = name?.length

// Elvis operator
val displayName = name ?: "Unknown"

// Not null assertion (use carefully)
val nonNull = name!!

// Let scope function
name?.let {
    println("Name: $it")
}

// Non-null assertion with let
val length = name?.let { it.length } ?: 0
```

## Classes & Objects

### Class Definition
```kotlin
class Person(val name: String, val age: Int) {
    init {
        println("Person created: $name")
    }
    
    fun display() {
        println("Name: $name, Age: $age")
    }
}

val person = Person("Alice", 30)

// Data class (auto generates equals, hashCode, toString, copy)
data class User(val name: String, val age: Int)

val user = User("Bob", 25)
println(user) // User(name=Bob, age=25)

val user2 = user.copy(age = 26)
```

### Inheritance
```kotlin
open class Animal(val name: String) {
    open fun speak() {
        println("Some sound")
    }
}

class Dog(name: String) : Animal(name) {
    override fun speak() {
        println("Woof!")
    }
}

val dog = Dog("Buddy")
dog.speak()
```

### Interfaces
```kotlin
interface Drawable {
    fun draw()
    fun describe() {
        println("Drawing")
    }
}

class Circle(val radius: Double) : Drawable {
    override fun draw() {
        println("Drawing circle with radius $radius")
    }
}
```

## Extensions

### Extension Functions
```kotlin
fun String.isEmail(): Boolean {
    return this.contains("@") && this.contains(".")
}

fun Int.isEven(): Boolean {
    return this % 2 == 0
}

"test@example.com".isEmail() // true
4.isEven() // true

// Extension property
val String.lastChar: Char?
    get() = this.lastOrNull()

"hello".lastChar // 'o'
```

## Scope Functions

### let, apply, run, also
```kotlin
val person = Person("Alice", 30)

// let - returns transformed value
val result = person.let {
    it.display()
    it.age + 1
}

// apply - returns object
person.apply {
    // this refers to person
    display()
}.also { println("Applied") }

// run - returns result
val description = person.run {
    "Person: $name ($age years old)"
}

// also - returns object (side effects)
person.also {
    println("Created person: ${it.name}")
}

// with - context for multiple calls
with(person) {
    display()
    age + 1
}
```

## Collections

### List Operations
```kotlin
val numbers = listOf(1, 2, 3, 4, 5)

// Transformations
numbers.map { it * 2 }
numbers.filter { it > 2 }
numbers.associate { it to it * it }

// Reductions
numbers.sum()
numbers.fold(0) { acc, it -> acc + it }
numbers.reduce { acc, it -> acc + it }

// Grouping
numbers.groupBy { if (it % 2 == 0) "even" else "odd" }

// Sorting
numbers.sorted()
numbers.sortedDescending()
numbers.sortedBy { it % 2 }

// Other
numbers.first()
numbers.last()
numbers.find { it > 3 }
numbers.any { it > 4 }
numbers.all { it > 0 }
numbers.contains(3)
```

### Map Operations
```kotlin
val map = mapOf("a" to 1, "b" to 2)

// Access
map["a"]
map.getOrDefault("c", 0)

// Transformations
map.mapKeys { it.key.uppercase() }
map.mapValues { it.value * 2 }

// Filtering
map.filter { (k, v) -> v > 1 }

// Iteration
map.forEach { (k, v) -> println("$k: $v") }
```

## Coroutines (Basic)

### Launch & Async
```kotlin
import kotlinx.coroutines.*

// Launch - fire and forget
GlobalScope.launch {
    delay(1000)
    println("Hello from coroutine")
}

// Async - returns result
GlobalScope.async {
    delay(1000)
    42
}

// runBlocking - blocks main thread
runBlocking {
    delay(1000)
    println("Done")
}
```

## Sealed Classes

### Sealed Types
```kotlin
sealed class Result {
    data class Success(val data: String) : Result()
    data class Error(val exception: Exception) : Result()
    object Loading : Result()
}

fun handle(result: Result) {
    when (result) {
        is Result.Success -> println(result.data)
        is Result.Error -> println(result.exception.message)
        is Result.Loading -> println("Loading...")
    }
}
```

## Best Practices

- Use `val` by default, only use `var` when needed
- Leverage null safety with `?` and `?:`
- Use data classes for simple data containers
- Implement extension functions for code organization
- Use scope functions for concise code
- Prefer sealed classes for type-safe patterns
- Use meaningful names
- Handle exceptions properly
- Write tests for all functions
- Follow Kotlin coding conventions
