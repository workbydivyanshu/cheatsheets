---
title: C#
description: Beginner's guide to C# programming language
category: Programming Language
---

# C# Cheatsheet

**C#** (pronounced "C-Sharp") is a modern, object-oriented language from Microsoft. It runs on the .NET platform and is perfect for Windows applications, web development (ASP.NET), and game development (Unity). Think of C# as "C++ made easier."

## Getting Started

### Installation
```bash
# Install .NET SDK
# macOS/Linux
brew install dotnet

# Windows - download from microsoft.com

# Verify
dotnet --version
```

### Your First Program
```csharp
using System;

class Program {
    static void Main() {
        Console.WriteLine("Hello, World!");
    }
}
```

### Running C#
```bash
dotnet new console -n MyApp
cd MyApp
dotnet run
```

## Variables & Types

```csharp
// Integers
int age = 25;
long big = 1000000L;
short small = 100;
byte tiny = 255;

// Floating point
float price = 19.99f;
double value = 3.14159;
decimal money = 99.99m;  // For precise money

// Character & String
char letter = 'A';
string name = "Alice";

// Boolean
bool isActive = true;

// Auto (inferred)
var count = 42;  // int inferred
var greeting = "Hello";  // string inferred

// Nullable
int? age = null;  // Can be null
if (age.HasValue) {
    Console.WriteLine(age.Value);
}

// Constants
const int MAX_USERS = 100;
```

## Strings

```csharp
string text = "Hello";

// Properties & Methods
text.Length                         // 5
text[0]                            // 'H'
text.ToUpper()                     // "HELLO"
text.ToLower()                     // "hello"
text.Substring(1, 3)               // "ell"
text.Contains("ell")               // true
text.Replace("Hello", "Hi")        // "Hi"
text.Split(' ')                    // Array of parts

// String interpolation
string message = $"Name: {name}, Age: {age}";

// String concatenation
"Hello" + " " + "World"            // "Hello World"

// Format
string.Format("Name: {0}, Age: {1}", "Alice", 25);
```

## Collections

### Arrays
```csharp
// Fixed array
int[] numbers = new int[5];  // [0, 0, 0, 0, 0]
int[] values = { 1, 2, 3, 4, 5 };

// Access
numbers[0] = 10;
int first = numbers[0];
numbers.Length  // 5
```

### List (Dynamic)
```csharp
using System.Collections.Generic;

List<int> numbers = new List<int>();
numbers.Add(1);
numbers.Add(2);
numbers[0]  // 1
numbers.Remove(1);
numbers.Count  // 1

foreach (int num in numbers) {
    Console.WriteLine(num);
}
```

### Dictionary
```csharp
Dictionary<string, int> ages = new Dictionary<string, int>();
ages["Alice"] = 25;
ages["Bob"] = 30;

int age = ages["Alice"];  // 25
ages.ContainsKey("Alice");  // true
ages.Remove("Alice");

foreach (var pair in ages) {
    Console.WriteLine($"{pair.Key}: {pair.Value}");
}
```

## Control Flow

```csharp
// If statement
if (age >= 18) {
    Console.WriteLine("Adult");
} else if (age >= 13) {
    Console.WriteLine("Teen");
} else {
    Console.WriteLine("Child");
}

// Switch
switch (day) {
    case "Monday":
        Console.WriteLine("Start of week");
        break;
    case "Friday":
        Console.WriteLine("Weekend soon");
        break;
    default:
        Console.WriteLine("Midweek");
}

// Ternary
string status = age >= 18 ? "Adult" : "Minor";

// Loops
for (int i = 0; i < 5; i++) {
    Console.WriteLine(i);
}

while (count < 10) {
    count++;
}

foreach (int num in numbers) {
    Console.WriteLine(num);
}
```

## Methods

```csharp
// Basic method
static int Add(int a, int b) {
    return a + b;
}

// Method with default parameter
static void Greet(string name = "Guest") {
    Console.WriteLine($"Hello, {name}!");
}

// Calling
int sum = Add(5, 3);  // 8
Greet();              // "Hello, Guest!"
Greet("Alice");       // "Hello, Alice!"

// Named parameters
Add(b: 3, a: 5);      // Order doesn't matter
```

## Classes & Objects

```csharp
class Person {
    // Fields
    public string Name;
    public int Age;

    // Constructor
    public Person(string name, int age) {
        Name = name;
        Age = age;
    }

    // Method
    public void Greet() {
        Console.WriteLine($"Hello, I'm {Name}");
    }

    // Property
    public int BirthYear {
        get { return 2024 - Age; }
    }
}

// Using
var person = new Person("Alice", 25);
person.Greet();  // "Hello, I'm Alice"
Console.WriteLine(person.BirthYear);  // 1999
```

## Access Modifiers

```csharp
class User {
    public string Name;       // Accessible everywhere
    private int userId;       // Only in this class
    protected string role;    // In this class and derived
    internal string dept;     // In same assembly

    public int UserId {
        get { return userId; }
        set { userId = value; }
    }
}
```

## Inheritance

```csharp
// Parent class
class Animal {
    public string Name { get; set; }

    public virtual void Speak() {
        Console.WriteLine("Some sound");
    }
}

// Child class
class Dog : Animal {
    public override void Speak() {
        Console.WriteLine("Woof!");
    }
}

// Using
var dog = new Dog { Name = "Rex" };
dog.Speak();  // "Woof!"
```

## Interfaces

```csharp
interface IAnimal {
    void Speak();
    string GetName();
}

class Dog : IAnimal {
    public void Speak() {
        Console.WriteLine("Woof!");
    }

    public string GetName() {
        return "Rex";
    }
}
```

## Exception Handling

```csharp
try {
    int[] numbers = { 1, 2, 3 };
    Console.WriteLine(numbers[10]);
} catch (IndexOutOfRangeException e) {
    Console.WriteLine("Index out of range");
} catch (Exception e) {
    Console.WriteLine($"Error: {e.Message}");
} finally {
    Console.WriteLine("Cleanup");
}

// Throwing
if (age < 0) {
    throw new ArgumentException("Age cannot be negative");
}
```

## LINQ (Language Integrated Query)

```csharp
using System.Linq;

List<int> numbers = new List<int> { 1, 2, 3, 4, 5 };

// Filtering
var evens = numbers.Where(n => n % 2 == 0);  // [2, 4]

// Mapping
var doubled = numbers.Select(n => n * 2);    // [2, 4, 6, 8, 10]

// Ordering
var sorted = numbers.OrderByDescending(n => n);  // [5, 4, 3, 2, 1]

// Other
numbers.First()        // 1
numbers.Count()        // 5
numbers.Contains(3)    // true
```

## Async/Await

```csharp
// Async method
async Task<string> FetchData() {
    await Task.Delay(1000);  // Simulate network call
    return "Data";
}

// Using async
async void PrintData() {
    string result = await FetchData();
    Console.WriteLine(result);
}
```

## Best Practices

1. **Use PascalCase for class names:**
   - ✅ `MyClass`
   - ❌ `my_class`

2. **Use camelCase for variables:**
   - ✅ `userName`
   - ❌ `UserName`

3. **Use properties instead of fields**

4. **Handle exceptions appropriately**

5. **Use LINQ for collections**

## Summary

C# is **modern, clean, and powerful**. Perfect for:
- **Windows applications** - WinForms, WPF
- **Web development** - ASP.NET
- **Game development** - Unity
- **Cross-platform** - .NET Core

Key strengths:
- **Clean syntax** - easy to learn
- **Object-oriented** - organize code logically
- **LINQ** - powerful query language
- **Strong typing** - catches errors early
- **Mature platform** - .NET ecosystem is huge
