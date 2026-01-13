---
title: Java
description: Complete beginner's guide to Java programming
category: Programming Language
---

# Java Cheatsheet

**Java** is a statically-typed, object-oriented language used for enterprise applications, Android apps, and large-scale systems. Write once, run anywhere (WORA) - Java code compiles to bytecode that runs on any machine with a JVM.

## Getting Started

### What is Java?
Java requires **compilation** before running. You write Java code, compile it to bytecode, then run it on the Java Virtual Machine (JVM). This compilation step catches errors early.

### Installation
```bash
# Install JDK (Java Development Kit)
# macOS
brew install openjdk

# Windows/Linux - download from oracle.com

# Verify installation
java -version
javac -version
```

### Your First Program
```java
public class HelloWorld {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}
```

**Why `public static void main`?** Entry point of every Java program.

- `public` - accessible from anywhere
- `static` - belongs to class, not instances
- `void` - returns nothing
- `String[] args` - command-line arguments

### Running Java
```bash
# Compile to HelloWorld.class
javac HelloWorld.java

# Run the bytecode
java HelloWorld
```

## Variables & Data Types

### Primitive Types
```java
// Integer types
byte   b = 127;              // -128 to 127
short  s = 32767;            // -32,768 to 32,767
int    i = 2147483647;       // -2 billion to 2 billion (default)
long   l = 9223372036854775807L;  // -9 quintillion to 9 quintillion

// Floating point
float  f = 3.14f;            // 32-bit, less precise
double d = 3.14159;          // 64-bit, more precise (default)

// Character
char   c = 'A';              // Single character
char   unicode = '\u0041';   // Unicode character

// Boolean
boolean isTrue = true;       // true or false
```

**Why types?** Java is statically-typed - types are checked at compile time.

### Type Conversion
```java
// Implicit (automatic, safe)
int num = 10;
long longNum = num;  // int to long (smaller to larger)

// Explicit (manual, can lose data)
long bigNum = 100L;
int smallNum = (int) bigNum;  // Must cast

// String conversion
String str = "42";
int num = Integer.parseInt(str);    // String to int
double d = Double.parseDouble("3.14");  // String to double

// To string
String text = String.valueOf(42);   // Any type to string
String text2 = Integer.toString(42);
```

### String (Not a Primitive)
```java
String greeting = "Hello";
String quote = "He said \"Hello\"";  // Escaped quotes
String multiline = "Line 1\nLine 2";  // Newline

// String operations
greeting.length();                    // 5
greeting.charAt(0);                   // 'H'
greeting.substring(1, 4);             // "ell"
greeting.toUpperCase();               // "HELLO"
greeting.toLowerCase();               // "hello"
greeting.contains("ell");             // true
greeting.replace("Hello", "Hi");      // "Hi"
greeting.trim();                      // Remove whitespace
"hello".compareTo("hello");           // 0 if equal
greeting + " World";                  // Concatenation
String formatted = String.format("Name: %s, Age: %d", "Alice", 25);
```

## Collections

### Arrays
```java
// Fixed size
int[] numbers = new int[5];           // Array of 5 zeros
int[] numbers = {1, 2, 3, 4, 5};     // With values
String[] names = new String[3];

// Accessing
numbers[0] = 10;
int first = numbers[0];
int length = numbers.length;

// Multi-dimensional
int[][] matrix = new int[3][3];
int[][] matrix = {{1, 2}, {3, 4}};
matrix[0][1] = 2;

// Iteration
for (int num : numbers) {
    System.out.println(num);
}

for (int i = 0; i < numbers.length; i++) {
    System.out.println(numbers[i]);
}
```

**Why fixed size?** Arrays are efficient but inflexible. Use Collections for dynamic sizes.

### ArrayList (Dynamic Array)
```java
import java.util.ArrayList;

// Create
ArrayList<Integer> numbers = new ArrayList<>();  // Generic type
ArrayList<String> names = new ArrayList<String>();

// Add
numbers.add(1);
numbers.add(2);
numbers.add(0, 99);  // Insert at index 0

// Access
int first = numbers.get(0);
numbers.set(0, 10);  // Update

// Remove
numbers.remove(0);   // Remove by index
numbers.remove(Integer.valueOf(2));  // Remove by value

// Size
int size = numbers.size();

// Iterate
for (int num : numbers) {
    System.out.println(num);
}

for (int i = 0; i < numbers.size(); i++) {
    System.out.println(numbers.get(i));
}

numbers.forEach(num -> System.out.println(num));  // Lambda
```

### HashMap (Key-Value)
```java
import java.util.HashMap;

// Create
HashMap<String, Integer> ages = new HashMap<>();

// Add/Update
ages.put("Alice", 25);
ages.put("Bob", 30);

// Get
int age = ages.get("Alice");  // 25
ages.getOrDefault("Charlie", 0);  // 0 if not found

// Check
ages.containsKey("Alice");     // true
ages.containsValue(25);        // true

// Remove
ages.remove("Alice");

// Iterate
for (String name : ages.keySet()) {
    System.out.println(name);
}

for (int age : ages.values()) {
    System.out.println(age);
}

ages.forEach((name, age) -> System.out.println(name + ": " + age));
```

### HashSet (No Duplicates)
```java
import java.util.HashSet;

HashSet<String> colors = new HashSet<>();
colors.add("red");
colors.add("green");
colors.add("red");  // Ignored - duplicate

colors.contains("red");   // true
colors.remove("red");
colors.size();            // 2
colors.clear();           // Remove all

for (String color : colors) {
    System.out.println(color);
}
```

## Control Flow

### If Statements
```java
int age = 18;

if (age >= 18) {
    System.out.println("Adult");
} else if (age >= 13) {
    System.out.println("Teen");
} else {
    System.out.println("Child");
}

// Ternary
String status = age >= 18 ? "Adult" : "Minor";
```

### Comparison & Logical Operators
```java
int a = 10, b = 20;

// Comparison (return boolean)
a == b;      // false - equal
a != b;      // true - not equal
a > b;       // false - greater
a < b;       // true - less

// Logical
a > 5 && a < 15;     // true - AND
a < 5 || b > 15;     // true - OR
!(a < 5);            // true - NOT
```

### Switch Statement
```java
int day = 3;
String dayName;

switch (day) {
    case 1:
        dayName = "Monday";
        break;  // Important!
    case 2:
        dayName = "Tuesday";
        break;
    default:
        dayName = "Unknown";
}

System.out.println(dayName);  // "Tuesday"

// Switch expressions (Java 12+)
String name = switch (day) {
    case 1 -> "Monday";
    case 2 -> "Tuesday";
    default -> "Unknown";
};
```

## Loops

### For Loop
```java
// Traditional
for (int i = 0; i < 5; i++) {
    System.out.println(i);  // 0 1 2 3 4
}

// Enhanced (for-each)
int[] numbers = {10, 20, 30};
for (int num : numbers) {
    System.out.println(num);
}

// ArrayList
ArrayList<String> names = new ArrayList<>();
names.add("Alice");
names.add("Bob");
for (String name : names) {
    System.out.println(name);
}
```

### While & Do-While
```java
int count = 0;
while (count < 5) {
    System.out.println(count);
    count++;
}

// Do-while (runs at least once)
do {
    System.out.println(count);
    count++;
} while (count < 5);

// Break & Continue
for (int i = 0; i < 10; i++) {
    if (i == 3) continue;  // Skip
    if (i == 7) break;     // Exit
    System.out.println(i);
}
```

## Methods/Functions

### Defining Methods
```java
public class Calculator {
    // Method with parameters and return
    public int add(int a, int b) {
        return a + b;
    }

    // Method with no return
    public void printMessage(String msg) {
        System.out.println(msg);
    }

    // Method with no parameters
    public String getInfo() {
        return "Calculator app";
    }

    // Using methods
    public static void main(String[] args) {
        Calculator calc = new Calculator();
        int sum = calc.add(5, 3);      // 8
        calc.printMessage("Hello");    // Hello
        String info = calc.getInfo();  // "Calculator app"
    }
}
```

### Method Overloading
```java
public class Printer {
    // Same method name, different parameters
    public void print(int num) {
        System.out.println("Int: " + num);
    }

    public void print(String text) {
        System.out.println("String: " + text);
    }

    public void print(double num) {
        System.out.println("Double: " + num);
    }

    public static void main(String[] args) {
        Printer p = new Printer();
        p.print(42);        // "Int: 42"
        p.print("Hello");   // "String: Hello"
        p.print(3.14);      // "Double: 3.14"
    }
}
```

## Object-Oriented Programming

### Classes
```java
public class Person {
    // Fields (instance variables)
    public String name;
    public int age;

    // Constructor
    public Person(String name, int age) {
        this.name = name;
        this.age = age;
    }

    // Method
    public void greet() {
        System.out.println("Hello, I'm " + name);
    }

    public int getYearOfBirth(int currentYear) {
        return currentYear - age;
    }
}

// Using the class
Person alice = new Person("Alice", 25);
alice.greet();                    // "Hello, I'm Alice"
System.out.println(alice.age);    // 25
int birthYear = alice.getYearOfBirth(2024);  // 1999
```

### Access Modifiers
```java
public class Student {
    public String name;          // Accessible everywhere
    private int studentId;       // Only in this class
    protected String school;     // In this class and subclasses
    String department;           // Package private (default)

    public Student(String name, int studentId) {
        this.name = name;
        this.studentId = studentId;
    }

    private void printId() {
        System.out.println(studentId);
    }

    public int getId() {
        return studentId;
    }
}
```

### Inheritance
```java
// Parent class
public class Animal {
    public String name;

    public Animal(String name) {
        this.name = name;
    }

    public void speak() {
        System.out.println(name + " makes a sound");
    }
}

// Child class
public class Dog extends Animal {
    public String breed;

    public Dog(String name, String breed) {
        super(name);  // Call parent constructor
        this.breed = breed;
    }

    @Override  // Annotation - override parent method
    public void speak() {
        System.out.println(name + " barks");
    }
}

// Using
Dog dog = new Dog("Rex", "Golden Retriever");
dog.speak();  // "Rex barks"
System.out.println(dog.name);   // "Rex"
System.out.println(dog.breed);  // "Golden Retriever"
```

### Abstract Classes
```java
// Cannot be instantiated
public abstract class Shape {
    public abstract double getArea();

    public void describe() {
        System.out.println("Area: " + getArea());
    }
}

public class Circle extends Shape {
    private double radius;

    public Circle(double radius) {
        this.radius = radius;
    }

    @Override
    public double getArea() {
        return Math.PI * radius * radius;
    }
}

// Usage
Shape shape = new Circle(5);
shape.describe();  // "Area: 78.5398..."
```

### Interfaces
```java
public interface Animal {
    void speak();
    String getName();
}

public class Dog implements Animal {
    private String name;

    public Dog(String name) {
        this.name = name;
    }

    @Override
    public void speak() {
        System.out.println("Woof!");
    }

    @Override
    public String getName() {
        return name;
    }
}

// Usage
Animal dog = new Dog("Rex");
dog.speak();              // "Woof!"
String name = dog.getName();  // "Rex"
```

## Exception Handling

```java
try {
    int[] numbers = {1, 2, 3};
    System.out.println(numbers[10]);  // IndexOutOfBoundsException
} catch (ArrayIndexOutOfBoundsException e) {
    System.out.println("Index out of range");
} catch (Exception e) {
    System.out.println("General error: " + e.getMessage());
} finally {
    System.out.println("Cleanup code here");
}

// Throwing exceptions
public int divide(int a, int b) throws ArithmeticException {
    if (b == 0) {
        throw new ArithmeticException("Cannot divide by zero");
    }
    return a / b;
}
```

## Practical Examples

### Temperature Converter
```java
public class TemperatureConverter {
    public static double celsiusToFahrenheit(double celsius) {
        return (celsius * 9/5) + 32;
    }

    public static double fahrenheitToCelsius(double fahrenheit) {
        return (fahrenheit - 32) * 5/9;
    }

    public static void main(String[] args) {
        double c = 25;
        double f = celsiusToFahrenheit(c);
        System.out.println(c + "°C = " + f + "°F");  // 25°C = 77°F
    }
}
```

### Bank Account
```java
public class BankAccount {
    private double balance;

    public BankAccount(double initialBalance) {
        this.balance = initialBalance;
    }

    public void deposit(double amount) {
        if (amount > 0) {
            balance += amount;
            System.out.println("Deposited: $" + amount);
        }
    }

    public void withdraw(double amount) {
        if (amount > 0 && amount <= balance) {
            balance -= amount;
            System.out.println("Withdrawn: $" + amount);
        } else {
            System.out.println("Invalid withdrawal");
        }
    }

    public double getBalance() {
        return balance;
    }

    public static void main(String[] args) {
        BankAccount account = new BankAccount(1000);
        account.deposit(500);           // "Deposited: $500"
        account.withdraw(200);          // "Withdrawn: $200"
        System.out.println("Balance: $" + account.getBalance());  // "Balance: $1300"
    }
}
```

## Streams & Functional Programming (Java 8+)

### What are Streams?
**Streams** are pipelines for processing data. Unlike collections (which store data), streams process data without storing it all in memory. They enable functional programming style in Java.

```java
List<Integer> numbers = Arrays.asList(1, 2, 3, 4, 5);

// Stream: filter, transform, collect results
List<Integer> evenNumbers = numbers.stream()
    .filter(n -> n % 2 == 0)     // Keep only evens
    .collect(Collectors.toList());
// Result: [2, 4]
```

**Why streams?** Cleaner, more expressive code. Process large datasets efficiently.

### Lambda Expressions

Lambdas are **anonymous functions** - shorthand for small functions.

```java
// Traditional way (verbose)
numbers.forEach(new Consumer<Integer>() {
    @Override
    public void accept(Integer n) {
        System.out.println(n);
    }
});

// Lambda way (clean)
numbers.forEach(n -> System.out.println(n));

// Lambda syntax
(parameters) -> expression

// Examples
x -> x * 2              // Single parameter
(x, y) -> x + y         // Multiple parameters
(x, y) -> { return x + y; }  // Multiple statements
() -> "Hello"           // No parameters
```

### Common Stream Operations

```java
List<Integer> numbers = Arrays.asList(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

// Filter - keep elements matching condition
List<Integer> evens = numbers.stream()
    .filter(n -> n % 2 == 0)
    .collect(Collectors.toList());
// Result: [2, 4, 6, 8, 10]

// Map - transform each element
List<Integer> doubled = numbers.stream()
    .map(n -> n * 2)
    .collect(Collectors.toList());
// Result: [2, 4, 6, 8, 10, 12, 14, 16, 18, 20]

// Reduce - combine all to single value
int sum = numbers.stream()
    .reduce(0, (a, b) -> a + b);
// Result: 55

// Count
long count = numbers.stream()
    .filter(n -> n > 5)
    .count();
// Result: 5

// Min & Max
int min = numbers.stream()
    .min(Integer::compare)
    .get();
// Result: 1

// Any match
boolean hasEven = numbers.stream()
    .anyMatch(n -> n % 2 == 0);
// Result: true

// All match
boolean allPositive = numbers.stream()
    .allMatch(n -> n > 0);
// Result: true
```

### Chaining Operations (Pipeline)

```java
List<String> fruits = Arrays.asList("apple", "banana", "apricot", "berry", "cherry");

// Chain multiple operations
List<String> result = fruits.stream()
    .filter(f -> f.startsWith("a"))           // Keep fruits starting with 'a'
    .map(String::toUpperCase)                  // Convert to uppercase
    .sorted()                                  // Sort alphabetically
    .collect(Collectors.toList());
// Result: ["APPLE", "APRICOT"]
```

### Collectors - Collecting Results

```java
List<String> names = Arrays.asList("Alice", "Bob", "Charlie", "David");

// Collect to List
List<String> list = names.stream()
    .collect(Collectors.toList());

// Collect to Set (unique)
Set<String> set = names.stream()
    .collect(Collectors.toSet());

// Join to string
String joined = names.stream()
    .collect(Collectors.joining(", "));
// Result: "Alice, Bob, Charlie, David"

// Group by length
Map<Integer, List<String>> grouped = names.stream()
    .collect(Collectors.groupingBy(String::length));
// Result: {3: ["Bob"], 5: ["Alice", "David"], 7: ["Charlie"]}

// Count occurrences
Map<Character, Long> charCount = "hello".chars()
    .boxed()
    .collect(Collectors.groupingBy(
        c -> (char) c.intValue(),
        Collectors.counting()
    ));
// Result: {h: 1, e: 1, l: 2, o: 1}
```

### Real-World Example

```java
List<Person> people = Arrays.asList(
    new Person("Alice", 25),
    new Person("Bob", 30),
    new Person("Charlie", 28),
    new Person("David", 35)
);

// Find average age of people over 26
double avgAge = people.stream()
    .filter(p -> p.getAge() > 26)
    .mapToInt(Person::getAge)
    .average()
    .orElse(0);
// Result: 31.0 (average of 28, 30, 35)

// Get names sorted by age
List<String> sortedNames = people.stream()
    .sorted((p1, p2) -> Integer.compare(p1.getAge(), p2.getAge()))
    .map(Person::getName)
    .collect(Collectors.toList());
// Result: ["Alice", "Charlie", "Bob", "David"]
```

### Functional Interfaces (Lambdas Target)

| Interface | Method | Use |
|-----------|--------|-----|
| `Consumer<T>` | `void accept(T)` | Do something with value |
| `Function<T, R>` | `R apply(T)` | Transform value |
| `Predicate<T>` | `boolean test(T)` | Check condition |
| `Supplier<T>` | `T get()` | Provide value |

```java
// Consumer - do something
Consumer<String> print = s -> System.out.println(s);
print.accept("Hello");  // Prints: Hello

// Function - transform
Function<String, Integer> length = String::length;
int len = length.apply("Hello");  // 5

// Predicate - check condition
Predicate<Integer> isEven = n -> n % 2 == 0;
boolean result = isEven.test(4);  // true

// Supplier - provide value
Supplier<String> greeting = () -> "Hello";
String msg = greeting.get();  // "Hello"
```

**Method References** - shorthand for lambdas:

```java
// Lambda
numbers.forEach(n -> System.out.println(n));

// Method reference (cleaner)
numbers.forEach(System.out::println);

// Other examples
String::toUpperCase              // s -> s.toUpperCase()
Integer::parseInt               // s -> Integer.parseInt(s)
List::add                        // (list, item) -> list.add(item)
Person::new                      // () -> new Person()
```

## Best Practices

1. **Use meaningful names:**
   - ✅ `int numberOfStudents`
   - ❌ `int n`

2. **Follow naming conventions:**
   - Classes: PascalCase - `MyClass`
   - Methods/variables: camelCase - `myMethod`
   - Constants: UPPER_CASE - `MAX_SIZE`

3. **Keep methods focused:**
   - One method = one responsibility
   - Short, readable methods

4. **Use ArrayList instead of arrays when size varies**

5. **Always close resources:**
   ```java
   try (FileReader reader = new FileReader("file.txt")) {
       // Use reader
   } catch (IOException e) {
       // Handle error
   }  // Automatically closes
   ```

## Quick Reference

| Concept | Syntax |
|---------|--------|
| Class | `public class MyClass { }` |
| Method | `public void myMethod() { }` |
| If | `if (condition) { }` |
| Loop | `for (int i = 0; i < n; i++) { }` |
| Array | `int[] arr = new int[size]` |
| ArrayList | `ArrayList<Type> list = new ArrayList<>()` |
| HashMap | `HashMap<Key, Value> map = new HashMap<>()` |
| Try-catch | `try { } catch (Exception e) { }` |

---

## Summary

Java is powerful for building **scalable, enterprise applications**. Its strong typing and OOP principles help write maintainable code. The JVM ensures it runs everywhere!

Key strengths:
- **Statically-typed** - errors caught early
- **Object-oriented** - organize code logically
- **Platform-independent** - write once, run anywhere
- **Mature ecosystem** - thousands of libraries
- **Industry standard** - used in enterprises worldwide
