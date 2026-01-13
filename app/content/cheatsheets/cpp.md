---
title: C++
description: Beginner's guide to C++ programming language
category: Programming Language
---

# C++ Cheatsheet

**C++** is a powerful, compiled language extending C with object-oriented features. Used for systems programming, game development, high-performance computing. You write it, compile to machine code, and it runs incredibly fast.

## Getting Started

### Installation
```bash
# Install compiler
# macOS
brew install gcc

# Linux
sudo apt-get install g++

# Windows - install MinGW

# Verify
g++ --version
```

### Your First Program
```cpp
#include <iostream>  // Input/output library

int main() {
    std::cout << "Hello, World!" << std::endl;
    return 0;
}
```

### Compiling and Running
```bash
g++ hello.cpp -o hello
./hello
```

## Variables & Types

```cpp
// Integer types
int age = 25;
short small = 1000;
long big = 1000000;

// Floating point
float price = 19.99f;  // Note: f suffix for float
double value = 3.14159;

// Character
char letter = 'A';

// Boolean
bool isActive = true;

// Auto (deduced type)
auto count = 42;  // int inferred

// Constants
const int MAX_USERS = 100;

// Arrays
int numbers[5] = {1, 2, 3, 4, 5};
std::string names[3] = {"Alice", "Bob", "Charlie"};
```

## Strings

```cpp
#include <string>

std::string message = "Hello";

// Operations
message.length()                    // 5
message[0]                          // 'H'
message.substr(1, 3)                // "ell"
message + " World"                  // Concatenation
message += "!";                     // Append

// Methods
message.find("ell")                 // Position or npos
message.replace(0, 5, "Hi")         // "Hi World!"

// I/O
std::cout << message << std::endl;  // Print with newline
std::cin >> message;                // Read input
```

## Control Flow

```cpp
// If statement
int age = 18;
if (age >= 18) {
    std::cout << "Adult" << std::endl;
} else {
    std::cout << "Minor" << std::endl;
}

// Switch
switch (day) {
    case 1:
        std::cout << "Monday";
        break;
    default:
        std::cout << "Other";
}

// Loops
for (int i = 0; i < 5; i++) {
    std::cout << i << std::endl;
}

while (count < 10) {
    count++;
}

do {
    count++;
} while (count < 10);
```

## Functions

```cpp
// Declaration
int add(int a, int b);

// Definition
int add(int a, int b) {
    return a + b;
}

// Calling
int sum = add(5, 3);

// Default parameters
void greet(std::string name = "Guest") {
    std::cout << "Hello, " << name << std::endl;
}

greet();           // "Hello, Guest"
greet("Alice");    // "Hello, Alice"
```

## Pointers & References

```cpp
// Pointer (address of variable)
int x = 10;
int* ptr = &x;     // Pointer to x
std::cout << *ptr; // 10 (dereference)

// Reference (alias)
int& ref = x;      // Reference to x
ref = 20;          // x is now 20

// Pointer operations
int arr[5] = {1, 2, 3, 4, 5};
int* ptr = arr;    // Pointer to first element
std::cout << *(ptr + 1);  // 2 (second element)
```

## Classes & Objects

```cpp
#include <iostream>

class Person {
public:
    // Member variables
    std::string name;
    int age;

    // Constructor
    Person(std::string n, int a) {
        name = n;
        age = a;
    }

    // Method
    void greet() {
        std::cout << "Hello, I'm " << name << std::endl;
    }
};

// Using the class
int main() {
    Person person("Alice", 25);
    person.greet();  // "Hello, I'm Alice"
    std::cout << person.age << std::endl;  // 25
    return 0;
}
```

## Best Practices

1. **Use modern C++ (C++11 and later)**
2. **Prefer references over pointers**
3. **Use smart pointers** (`std::unique_ptr`, `std::shared_ptr`)
4. **STL containers** instead of raw arrays
5. **RAII** - Resource Acquisition Is Initialization

## Common Mistakes

| ❌ Mistake | ✅ Fix |
|-----------|--------|
| Memory leaks with pointers | Use smart pointers: `std::unique_ptr<int>` instead of `new` |
| Forgetting `#include <iostream>` | Always include needed headers for used functions |
| Using `using namespace std;` globally | Avoid namespace pollution; use `std::` prefix |
| Buffer overflow with arrays | Check bounds! Use `std::vector` or `std::array` |
| Passing by value instead of reference | Use references for large objects: `void func(const MyClass& obj)` |
| Forgetting `const` on methods | Methods that don't modify should be `const`: `void method() const {}` |
| Dangling pointers after delete | Set to `nullptr` after delete: `delete ptr; ptr = nullptr;` |
| String concatenation issues | Use `std::string` not C-style `char*`: `s1 + s2` |

## Quick Reference

| Concept | Example |
|---------|---------|
| Variable | `int x = 10;` |
| Pointer | `int* ptr = &x;` |
| Reference | `int& ref = x;` |
| Array | `int arr[5];` |
| Vector | `std::vector<int> v;` |
| String | `std::string s = "hello";` |
| Function | `int add(int a, int b) { return a + b; }` |
| Class | `class MyClass { public: int x; };` |
| Constructor | `MyClass() { }` |
| If statement | `if (x > 5) { }` |
| For loop | `for (int i = 0; i < 10; i++) { }` |
| While loop | `while (x < 10) { x++; }` |

## Summary

C++ combines **performance of C** with **object-oriented features**. Used for games, systems software, and high-speed applications.

Key strengths:
- **Extremely fast** - compiles to efficient machine code
- **Low-level control** - direct memory management
- **Object-oriented** - organize complex code
- **Mature ecosystem** - decades of libraries
