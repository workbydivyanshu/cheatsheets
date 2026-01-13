---
title: Dart
description: Complete beginner-friendly Dart guide for Flutter app development
category: Programming Language
---

# Dart - Complete Beginner's Guide

> **What is Dart?** Dart is the language for building mobile apps with Flutter. It's modern, fast, and makes beautiful apps for iOS and Android. If you love clean syntax, you'll love Dart!

## 1. Getting Started

### Your First Program

```dart
void main() {
  print("Hello, Dart!");
  // Output: Hello, Dart!
}
```

### Variables and Types

```dart
// Explicit types
String name = "Alice";
int age = 25;
double height = 5.7;
bool isStudent = true;

// Type inference (Dart figures it out)
var city = "New York";      // String
var score = 95;             // int
var temperature = 98.6;     // double
var active = true;          // bool

// Dynamic (any type - use rarely!)
dynamic something = 42;
something = "now I'm a string";

// Constants
const pi = 3.14159;         // Compile-time constant
final name = "John";        // Runtime constant
```

---

## 2. Strings

### String Basics

```dart
// Single or double quotes
String single = 'Hello';
String double = "World";

// String interpolation
String name = "Alice";
String greeting = "Hello, $name!";
print(greeting);  // "Hello, Alice!"

// With expressions
int age = 25;
String message = "I am ${age + 1} years old";
print(message);   // "I am 26 years old"

// Multi-line strings
String multiLine = """
This is a
multi-line
string
""";
```

### String Methods

```dart
String text = "Hello World";

text.length;               // 11
text.toUpperCase();        // "HELLO WORLD"
text.toLowerCase();        // "hello world"
text.contains("World");    // true
text.startsWith("Hello");  // true
text.endsWith("World");    // true
text.substring(0, 5);      // "Hello"
text.replaceAll("World", "Dart");  // "Hello Dart"
```

---

## 3. Numbers and Math

### Numbers

```dart
// Integers
int count = 10;
int negative = -5;

// Doubles (decimals)
double pi = 3.14159;
double result = 10 / 3;    // Always double

// Arithmetic
10 + 5;          // 15
10 - 3;          // 7
4 * 3;           // 12
15 / 3;          // 5.0 (division always returns double)
15 ~/ 3;         // 5 (integer division)
17 % 5;          // 2 (remainder)

// Math functions
import 'dart:math';
sqrt(16);        // 4.0
pow(2, 3);       // 8.0
sin(pi/2);       // 1.0
```

---

## 4. Lists (Arrays)

### Creating and Using Lists

```dart
// List of integers
List<int> numbers = [1, 2, 3, 4, 5];

// List of strings
List<String> colors = ["red", "blue", "green"];

// Type inference
var mixed = [1, "hello", true];    // List<Object>

// Empty list
List<int> empty = [];

// Access elements
numbers[0];       // 1
numbers[2];       // 3
numbers.last;     // 5
numbers.first;    // 1

// Length
numbers.length;   // 5
```

### List Methods

```dart
List<int> nums = [3, 1, 4, 1, 5, 9];

// Add elements
nums.add(2);                    // Adds 2 to end
nums.addAll([6, 5, 3]);        // Add multiple
nums.insert(0, 10);            // Insert at position

// Remove elements
nums.remove(5);                // Remove first occurrence
nums.removeAt(0);              // Remove by index
nums.removeLast();             // Remove last

// Other operations
nums.contains(4);              // true
nums.indexOf(4);               // 2
nums.sort();                   // [1, 1, 2, 3, 4, 5, 6, 9]
nums.reversed.toList();        // Reverse
nums.join(", ");               // "1, 1, 2, 3, 4, 5"
```

---

## 5. Maps (Dictionaries)

### Creating Maps

```dart
// Map with string keys
Map<String, String> person = {
  "name": "John",
  "city": "New York",
  "job": "Developer"
};

// Map with various types
Map<String, dynamic> user = {
  "name": "Alice",
  "age": 25,
  "isActive": true
};

// Access values
person["name"];     // "John"
person["age"];      // null (key doesn't exist)

// Add/Update
person["email"] = "john@example.com";
person["name"] = "Jane";  // Update

// Remove
person.remove("city");
```

### Map Methods

```dart
Map<String, int> scores = {
  "Alice": 90,
  "Bob": 85,
  "Charlie": 92
};

// Keys and values
scores.keys;       // [Alice, Bob, Charlie]
scores.values;     // [90, 85, 92]

// Check
scores.containsKey("Alice");    // true
scores.containsValue(90);       // true

// Iteration
scores.forEach((name, score) {
  print("$name: $score");
});
```

---

## 6. Control Flow

### If Statements

```dart
int age = 18;

if (age >= 18) {
  print("You can vote");
} else if (age >= 13) {
  print("You're a teenager");
} else {
  print("You're a child");
}

// Ternary operator
String status = age >= 18 ? "Adult" : "Minor";
```

### Comparisons

```dart
5 == 5;            // true
5 != 3;            // true
5 > 3;             // true
5 < 3;             // false
5 >= 5;            // true
5 <= 4;            // false

true && false;     // false (AND)
true || false;     // true (OR)
!true;             // false (NOT)

// Null-aware operators
String? name;
name ??= "Guest";  // Assign if null
print(name ?? "Unknown");  // Use if null
```

---

## 7. Loops

### For Loops

```dart
// Traditional for loop
for (int i = 0; i < 5; i++) {
  print(i);        // 0, 1, 2, 3, 4
}

// For-in loop (modern)
List<String> fruits = ["apple", "banana", "orange"];
for (String fruit in fruits) {
  print(fruit);
}

// forEach (with index)
fruits.asMap().forEach((index, fruit) {
  print("$index: $fruit");
});
```

### While Loops

```dart
int count = 0;
while (count < 5) {
  print(count);
  count++;
}

// Do-while (runs at least once)
int x = 0;
do {
  print(x);
  x++;
} while (x < 3);
```

### Break and Continue

```dart
for (int i = 0; i < 10; i++) {
  if (i == 5) {
    break;         // Exit loop
  }
  print(i);        // 0, 1, 2, 3, 4
}

for (int i = 0; i < 5; i++) {
  if (i == 2) {
    continue;      // Skip to next
  }
  print(i);        // 0, 1, 3, 4
}
```

---

## 8. Functions

### Defining Functions

```dart
// Basic function
int add(int a, int b) {
  return a + b;
}

add(5, 3);         // 8

// Return type inferred
subtract(a, b) {
  return a - b;
}

// Optional positional parameters
greet(String name, [String greeting = "Hello"]) {
  return "$greeting, $name!";
}

greet("Alice");              // "Hello, Alice!"
greet("Bob", "Hi");          // "Hi, Bob!"

// Named parameters
void printInfo({
  required String name,
  int age = 0,
  String city = "Unknown"
}) {
  print("$name, $age, $city");
}

printInfo(name: "John", age: 30);
printInfo(name: "Jane", city: "NYC", age: 25);
```

### Arrow Functions

```dart
// Short function
int square(int x) => x * x;

List<int> numbers = [1, 2, 3, 4];
List<int> squared = numbers.map((n) => n * n).toList();
// [1, 4, 9, 16]
```

---

## 9. Classes

### Basic Class

```dart
class Person {
  String name;
  int age;

  // Constructor
  Person(this.name, this.age);

  // Method
  void greet() {
    print("Hello, I'm $name and I'm $age years old");
  }
}

// Create instance
Person person = Person("John", 30);
person.greet();  // "Hello, I'm John and I'm 30 years old"
```

### Properties and Methods

```dart
class Rectangle {
  double width;
  double height;

  Rectangle(this.width, this.height);

  // Getter
  double get area => width * height;

  // Setter
  set area(double value) {
    width = value / height;
  }

  // Method
  void printDimensions() {
    print("${width}x${height}");
  }
}

Rectangle rect = Rectangle(5, 10);
print(rect.area);      // 50
rect.area = 100;       // width changes
```

### Inheritance

```dart
class Animal {
  String name;

  Animal(this.name);

  void speak() {
    print("$name makes a sound");
  }
}

class Dog extends Animal {
  Dog(String name) : super(name);

  @override
  void speak() {
    print("$name barks!");
  }
}

Dog dog = Dog("Buddy");
dog.speak();  // "Buddy barks!"
```

---

## 10. Null Safety (Dart Feature!)

### Non-nullable by Default

```dart
// Can't be null
String name = "John";
// name = null;  // ❌ ERROR

// Can be null
String? nickname = null;
nickname = "Johnny";

// Safe access
nickname?.length;      // null or length
nickname ?? "Unknown";  // Use default if null

// Null assertion (careful!)
int length = nickname!.length;  // Crashes if null!
```

---

## 11. Practical Example

### Simple Calculator

```dart
void main() {
  print(calculate(10, 5, '+'));  // 15
  print(calculate(10, 5, '-'));  // 5
  print(calculate(10, 5, '*'));  // 50
  print(calculate(10, 5, '/'));  // 2.0
}

double calculate(double a, double b, String operation) {
  switch (operation) {
    case '+':
      return a + b;
    case '-':
      return a - b;
    case '*':
      return a * b;
    case '/':
      if (b == 0) throw Exception("Cannot divide by zero");
      return a / b;
    default:
      throw Exception("Unknown operation");
  }
}
```

---

