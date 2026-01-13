---
title: "C#"
slug: csharp
category: Programming Language
description: Modern, object-oriented language for .NET platform with strong typing, async support, and comprehensive standard library.
---

# C# Cheatsheet

## Basics

### Hello World & Basics
```csharp
using System;

class Program {
    static void Main() {
        Console.WriteLine("Hello, World!");
    }
}

// Variables
int age = 25;
double price = 19.99;
bool isActive = true;
string name = "Alice";
char letter = 'A';

// Type inference
var message = "Hello"; // string inferred
var number = 42; // int inferred

// String interpolation
var greeting = $"Hello, {name}!";
var info = $"Age: {age}, Price: {price:F2}";
```

### Arrays & Collections
```csharp
// Arrays
int[] numbers = { 1, 2, 3, 4, 5 };
int[] arr = new int[5];
string[] names = new string[] { "Alice", "Bob" };

// Lists
List<int> list = new List<int>();
list.Add(1);
list.AddRange(new[] { 2, 3, 4 });
list.Remove(1);
int count = list.Count;

// Dictionary
Dictionary<string, int> dict = new Dictionary<string, int>();
dict.Add("Alice", 30);
dict["Bob"] = 25;
int age = dict["Alice"];

// Tuple
(int, string, double) tuple = (42, "Hello", 3.14);
var (num, text, price) = tuple;
```

## Object-Oriented Programming

### Classes
```csharp
public class Person {
    // Fields
    private string name;
    private int age;
    
    // Properties
    public string Name {
        get { return name; }
        set { name = value; }
    }
    
    // Auto-property
    public string Email { get; set; }
    
    // Constructor
    public Person(string name, int age) {
        this.name = name;
        this.age = age;
    }
    
    // Methods
    public void Display() {
        Console.WriteLine($"Name: {name}, Age: {age}");
    }
}

// Usage
var person = new Person("Alice", 30);
person.Email = "alice@example.com";
person.Display();
```

### Inheritance
```csharp
public class Employee : Person {
    public string EmployeeId { get; set; }
    
    public Employee(string name, int age, string id) 
        : base(name, age) {
        EmployeeId = id;
    }
    
    public override void Display() {
        base.Display();
        Console.WriteLine($"ID: {EmployeeId}");
    }
}
```

### Interfaces
```csharp
public interface IAnimal {
    void Speak();
    void Move();
}

public class Dog : IAnimal {
    public void Speak() {
        Console.WriteLine("Woof!");
    }
    
    public void Move() {
        Console.WriteLine("Running...");
    }
}
```

## LINQ & Functional

### LINQ Queries
```csharp
using System.Linq;

List<int> numbers = new List<int> { 1, 2, 3, 4, 5, 6 };

// Where
var evenNumbers = numbers.Where(n => n % 2 == 0);

// Select
var doubled = numbers.Select(n => n * 2);

// First, Last, Single
int first = numbers.First();
int last = numbers.Last();

// Count, Sum, Average
int count = numbers.Count(n => n > 3);
int sum = numbers.Sum();
double average = numbers.Average();

// OrderBy, GroupBy
var sorted = numbers.OrderBy(n => n).ToList();
var grouped = numbers.GroupBy(n => n % 2);

// Take, Skip
var first3 = numbers.Take(3);
var skip2 = numbers.Skip(2);

// Join
List<Person> people = new List<Person>();
List<string> names = new List<string>();

var joined = people.Join(names,
    p => p.Name,
    n => n,
    (p, n) => new { p.Name, p.Age });
```

## Async & Await

### Async Functions
```csharp
public async Task<string> FetchData() {
    // Simulate async operation
    await Task.Delay(1000);
    return "Data";
}

public async Task Main() {
    string result = await FetchData();
    Console.WriteLine(result);
}

// Multiple async operations
public async Task ProcessMultiple() {
    var task1 = FetchData();
    var task2 = FetchData();
    
    await Task.WhenAll(task1, task2);
}

// async void (only for event handlers)
public async void OnButtonClick() {
    string data = await FetchData();
    Display(data);
}
```

## Exception Handling

### Try-Catch-Finally
```csharp
try {
    int result = 10 / int.Parse("0");
} catch (DivideByZeroException ex) {
    Console.WriteLine("Cannot divide by zero");
} catch (FormatException ex) {
    Console.WriteLine("Invalid format");
} catch (Exception ex) {
    Console.WriteLine($"Error: {ex.Message}");
} finally {
    Console.WriteLine("Cleanup code");
}

// Custom exception
public class InvalidAgeException : Exception {
    public InvalidAgeException(string message) 
        : base(message) { }
}

throw new InvalidAgeException("Age must be positive");
```

## Delegates & Events

### Delegates
```csharp
// Define delegate
public delegate void Notify(string message);

// Use delegate
Notify notify = Console.WriteLine;
notify("Hello");

// Multi-cast delegate
Notify notify1 = Console.WriteLine;
Notify notify2 = Console.WriteLine;
Notify combined = notify1 + notify2;
combined("Message");

// Func and Action
Func<int, int, int> add = (a, b) => a + b;
int result = add(3, 5);

Action<string> print = s => Console.WriteLine(s);
print("Hello");
```

### Events
```csharp
public class Button {
    public event EventHandler Click;
    
    public void OnClick() {
        Click?.Invoke(this, EventArgs.Empty);
    }
}

Button button = new Button();
button.Click += (s, e) => Console.WriteLine("Clicked!");
button.OnClick();
```

## Generics

### Generic Classes & Methods
```csharp
public class Box<T> {
    private T content;
    
    public void Set(T item) {
        content = item;
    }
    
    public T Get() {
        return content;
    }
}

Box<string> stringBox = new Box<string>();
stringBox.Set("Hello");

// Generic constraints
public class Repository<T> where T : class {
    public void Save(T item) { }
}

public class NumberRepository<T> where T : struct {
    public void Process(T value) { }
}

// Method constraints
public T Max<T>(T a, T b) where T : IComparable<T> {
    return a.CompareTo(b) > 0 ? a : b;
}
```

## Extension Methods

### Creating Extensions
```csharp
public static class StringExtensions {
    public static bool IsNullOrEmpty(this string str) {
        return string.IsNullOrEmpty(str);
    }
    
    public static string Reverse(this string str) {
        char[] charArray = str.ToCharArray();
        Array.Reverse(charArray);
        return new string(charArray);
    }
}

// Usage
string text = "Hello";
bool empty = text.IsNullOrEmpty();
string reversed = text.Reverse(); // "olleH"
```

## Null Coalescing & Pattern Matching

### Operators
```csharp
// Null coalescing
string name = person?.Name ?? "Unknown";

// Null conditional
int? length = person?.Name?.Length;

// Pattern matching
if (person is not null && person.Age > 18) {
    Console.WriteLine("Adult");
}

// Type pattern matching
if (obj is int number) {
    Console.WriteLine($"Number: {number}");
}

// Property pattern
if (person is { Name: "Alice", Age: > 18 }) {
    Console.WriteLine("Alice is an adult");
}
```

## Attributes

### Creating & Using Attributes
```csharp
[Serializable]
[Obsolete("Use NewClass instead")]
public class OldClass {
    [Deprecated]
    public void OldMethod() { }
}

// Custom attribute
public class AuthorAttribute : Attribute {
    public string Name { get; set; }
}

[Author(Name = "John")]
public class MyClass { }
```

## Best Practices

- Follow C# naming conventions (PascalCase for classes, camelCase for variables)
- Use properties instead of public fields
- Implement IDisposable for resource management
- Use async/await for I/O operations
- Prefer LINQ over traditional loops
- Use null coalescing and null conditional operators
- Implement meaningful exception handling
- Use dependency injection
- Document public APIs with XML comments
- Avoid using `dynamic` when possible
