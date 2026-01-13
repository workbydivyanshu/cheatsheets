---
title: Scala
description: Complete beginner-friendly Scala guide for functional and OOP programming
category: Programming Language
---

# Scala - Complete Beginner's Guide

> **What is Scala?** Scala combines object-oriented and functional programming. It runs on the Java Virtual Machine (JVM), so it has access to all Java libraries. Great for big data (Spark) and building scalable systems!

## 1. Getting Started

### Your First Program

```scala
object HelloWorld {
  def main(args: Array[String]) {
    println("Hello, Scala!")
  }
}

// Or simpler (Scala 3)
@main def hello() =
  println("Hello, Scala!")
```

### Variables

```scala
// var - mutable (can change)
var name = "Alice"
name = "Bob"  // OK

// val - immutable (cannot change)
val age = 25
// age = 26  // ❌ Error!

// Type annotations
val greeting: String = "Hello"
val count: Int = 42
val height: Double = 5.7
val active: Boolean = true
```

---

## 2. Data Types

### Numbers and Strings

```scala
// Numbers
val num: Int = 42
val big: Long = 1000000L
val decimal: Double = 3.14
val precise: Float = 3.14f

// Strings
val text = "Hello"
val multiLine = """This is
a multi-line
string"""

// String interpolation
val name = "Alice"
val age = 25
println(s"$name is $age years old")
println(s"Next year: ${age + 1}")
```

### Collections

```scala
// List (immutable)
val numbers = List(1, 2, 3, 4, 5)
val strings = List("apple", "banana", "orange")

// Vector (like list but faster)
val vec = Vector(1, 2, 3)

// Set (no duplicates)
val unique = Set(1, 2, 2, 3)  // Set(1, 2, 3)

// Map (key-value pairs)
val person = Map(
  "name" -> "John",
  "age" -> 30,
  "city" -> "NYC"
)

// Array (mutable)
val arr = Array(1, 2, 3)
arr(0) = 10  // Change element

// Tuples (fixed size, mixed types)
val pair = ("John", 30)
pair._1  // "John"
pair._2  // 30
```

---

## 3. Control Flow

### If Expressions

```scala
val age = 18

if (age >= 18) {
  println("You can vote")
} else if (age >= 13) {
  println("You're a teenager")
} else {
  println("You're a child")
}

// If-expression returns value
val status = if (age >= 18) "Adult" else "Minor"
println(status)  // "Adult"
```

### Pattern Matching (Super Powerful!)

```scala
val num = 2

num match {
  case 1 => println("One")
  case 2 => println("Two")
  case 3 => println("Three")
  case _ => println("Other")  // Default case
}
// Output: Two

// With types
def describe(x: Any) = x match {
  case s: String => s"String: $s"
  case i: Int => s"Integer: $i"
  case b: Boolean => s"Boolean: $b"
  case _ => "Unknown"
}
```

---

## 4. Functions

### Defining Functions

```scala
// Basic function
def add(a: Int, b: Int): Int = {
  a + b
}

// Or shorter (one line)
def multiply(a: Int, b: Int) = a * b

// No parameters
def greeting() = "Hello!"

// Multiple parameters
def greet(firstName: String, lastName: String) =
  s"Hello, $firstName $lastName!"

// Default parameters
def welcome(name: String = "Guest") =
  s"Welcome, $name!"

// Variable arguments
def sum(numbers: Int*) = numbers.foldLeft(0)(_ + _)
sum(1, 2, 3, 4, 5)  // 15
```

### Function Types

```scala
// Function as type
val add: (Int, Int) => Int = (a, b) => a + b
add(5, 3)  // 8

// Anonymous functions (lambdas)
val square = (x: Int) => x * x
square(5)  // 25

// Passing functions
def applyFunction(f: Int => Int, x: Int) = f(x)
applyFunction(square, 4)  // 16
```

---

## 5. Collections and Iteration

### Looping

```scala
// For loop with range
for (i <- 1 to 5) {
  println(i)  // 1, 2, 3, 4, 5
}

// Until (exclusive)
for (i <- 1 until 5) {
  println(i)  // 1, 2, 3, 4
}

// Loop through collection
val nums = List(1, 2, 3, 4, 5)
for (num <- nums) {
  println(num)
}

// Multiple variables
for {
  i <- 1 to 3
  j <- 1 to 2
} println(s"$i, $j")

// With condition
for {
  i <- 1 to 10
  if i % 2 == 0
} println(i)  // 2, 4, 6, 8, 10
```

### Functional Operations

```scala
val nums = List(1, 2, 3, 4, 5)

// map - transform each element
nums.map(x => x * 2)    // List(2, 4, 6, 8, 10)
nums.map(_ * 2)         // Same thing (shorthand)

// filter - keep matching elements
nums.filter(x => x > 3) // List(4, 5)
nums.filter(_ > 3)      // Shorthand

// fold - combine all elements
nums.foldLeft(0)(_ + _)  // 15 (sum)

// foreach - do something for each
nums.foreach(println)

// find - get first match
nums.find(_ > 3)        // Some(4)

// map + filter (together)
nums.filter(_ % 2 == 0).map(_ * 10)  // List(20, 40)
```

---

## 6. Classes and Objects

### Basic Class

```scala
class Person(val name: String, val age: Int) {
  def greet() = s"Hello, I'm $name"
}

val person = new Person("John", 30)
person.name    // "John"
person.greet() // "Hello, I'm John"
```

### Class with Methods

```scala
class Rectangle(val width: Double, val height: Double) {
  def area = width * height
  def perimeter = 2 * (width + height)
  
  def describe() =
    s"Rectangle ${width}x${height}, area=${area}"
}

val rect = new Rectangle(5, 10)
println(rect.area)       // 50.0
println(rect.describe()) // Rectangle 5.0x10.0, area=50.0
```

### Inheritance

```scala
class Animal(val name: String) {
  def speak() = s"$name makes a sound"
}

class Dog(name: String) extends Animal(name) {
  override def speak() = s"$name barks!"
}

val dog = new Dog("Buddy")
dog.speak()  // "Buddy barks!"
```

### Case Classes (Great for Data)

```scala
case class Person(name: String, age: Int)

val person = Person("John", 30)
person.name  // "John"

// Automatic copy method
val olderPerson = person.copy(age = 31)

// Pattern matching
person match {
  case Person("John", 30) => println("Found John!")
  case Person(n, a) => println(s"$n is $a years old")
}
```

---

## 7. Objects (Singletons)

```scala
// Object - only one instance ever
object Calculator {
  def add(a: Int, b: Int) = a + b
  def multiply(a: Int, b: Int) = a * b
}

// Use directly (no new needed)
Calculator.add(5, 3)      // 8
Calculator.multiply(4, 2) // 8

// Companion object
class Dog(name: String) {
  def bark() = s"$name barks!"
}

object Dog {
  def create(name: String) = new Dog(name)
}

val myDog = Dog.create("Buddy")
```

---

## 8. Traits (Interfaces)

```scala
trait Animal {
  val name: String
  def speak(): String
}

class Dog(val name: String) extends Animal {
  def speak() = s"$name barks!"
}

class Cat(val name: String) extends Animal {
  def speak() = s"$name meows!"
}

val dog: Animal = new Dog("Buddy")
val cat: Animal = new Cat("Whiskers")

println(dog.speak())  // "Buddy barks!"
println(cat.speak())  // "Whiskers meows!"
```

---

## 9. Functional Programming

### First-Class Functions

```scala
// Higher-order function
def applyTwice(f: Int => Int, x: Int) = f(f(x))

val double = (x: Int) => x * 2
applyTwice(double, 5)  // 20

// Composition
def compose(f: Int => Int, g: Int => Int) =
  (x: Int) => f(g(x))

val addOne = (x: Int) => x + 1
val double = (x: Int) => x * 2

val addThenDouble = compose(double, addOne)
addThenDouble(5)  // 12: (5+1)*2
```

### Immutability

```scala
// Good: immutable
val numbers = List(1, 2, 3)
val doubled = numbers.map(_ * 2)  // New list

// Avoid: mutable
var list = scala.collection.mutable.ListBuffer(1, 2, 3)
list += 4  // Modifies original

// Prefer immutable!
val immutableList = List(1, 2, 3)
val withFour = immutableList :+ 4  // New list
```

---

## 10. Options (Null Safety)

```scala
// Option: None or Some(value)
def findUser(id: Int): Option[String] = {
  if (id == 1) Some("John") else None
}

// Work with Option
findUser(1) match {
  case Some(name) => println(s"Found: $name")
  case None => println("Not found")
}

// Methods on Option
findUser(1).map(_.toUpperCase)      // Some("JOHN")
findUser(2).getOrElse("Unknown")    // "Unknown"
findUser(1).isDefined               // true
```

---

## 11. Practical Example

### Word Count

```scala
val text = "hello world hello scala hello"
val words = text.split(" ")

// Count occurrences
words.groupBy(identity)
     .mapValues(_.length)
     .foreach { case (word, count) =>
       println(s"$word: $count")
     }

// Or more functional
words.foldLeft(Map[String, Int]()) { (counts, word) =>
  counts + (word -> (counts.getOrElse(word, 0) + 1))
}
```

---

