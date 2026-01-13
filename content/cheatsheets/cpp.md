---
title: "C++"
slug: cpp
category: Programming Language
description: Powerful compiled language combining low-level memory manipulation with high-level abstractions, widely used for performance-critical applications.
---

# C++ Cheatsheet

## Basics

### Hello World
```cpp
#include <iostream>

int main() {
    std::cout << "Hello, World!" << std::endl;
    return 0;
}
```

### Variables & Data Types
```cpp
// Integer types
int age = 25;
short x = 10;
long y = 100000L;
long long z = 1000000000000LL;
unsigned int count = 42;

// Floating-point
float pi = 3.14f;
double pi2 = 3.14159265;

// Character
char letter = 'A';
std::string name = "Alice";

// Boolean
bool flag = true;

// Constants
const int MAX_SIZE = 100;
const float PI = 3.14159f;
```

### Input/Output
```cpp
#include <iostream>
#include <iomanip>

int age;
std::cin >> age;
std::cout << "Age: " << age << std::endl;

// Formatted output
std::cout << std::setprecision(2) << 3.14159 << std::endl; // 3.1
std::cout << std::setw(10) << "Right aligned" << std::endl;
std::cout << std::left << "Left aligned" << std::endl;
```

## Arrays & Vectors

### Arrays
```cpp
int arr[5] = {1, 2, 3, 4, 5};
int arr[] = {1, 2, 3}; // size inferred
int matrix[3][3] = {{1, 2, 3}, {4, 5, 6}, {7, 8, 9}};

// Access and modify
arr[0] = 10;
std::cout << arr[0];

// Iterate
for (int i = 0; i < 5; i++) {
    std::cout << arr[i];
}
```

### Vectors
```cpp
#include <vector>

std::vector<int> vec;
vec.push_back(1);
vec.push_back(2);
vec.push_back(3);

std::vector<int> vec = {1, 2, 3};
std::vector<int> vec(5, 0); // 5 elements, all 0

// Access
int first = vec[0];
int last = vec.at(vec.size() - 1);

// Modify
vec[0] = 10;
vec.pop_back();

// Size
int size = vec.size();
bool empty = vec.empty();

// Iterate
for (int num : vec) {
    std::cout << num;
}

for (auto it = vec.begin(); it != vec.end(); ++it) {
    std::cout << *it;
}
```

## Strings

### String Operations
```cpp
#include <string>

std::string s = "Hello";
std::string s2 = " World";
std::string s3 = s + s2; // "Hello World"

s.append(" Cpp"); // "Hello Cpp"
s.length();
s.size();
s[0]; // 'H'
s.at(0); // 'H' (bounds checking)

// Substring
std::string sub = s.substr(0, 5); // "Hello"

// Find
size_t pos = s.find("ell"); // 1
if (pos != std::string::npos) {
    std::cout << "Found at: " << pos;
}

// Replace
s.replace(0, 5, "Hi"); // "Hi Cpp"

// Conversion
std::string num_str = std::to_string(42); // "42"
int num = std::stoi("123"); // 123
```

## Pointers & References

### Pointers
```cpp
int x = 10;
int* ptr = &x;
std::cout << *ptr; // 10
*ptr = 20;

// Null pointer
int* null_ptr = nullptr;

// Pointer arithmetic
int arr[] = {1, 2, 3};
int* p = arr;
std::cout << *p; // 1
p++;
std::cout << *p; // 2

// Dynamic memory
int* p = new int;
*p = 42;
delete p;

// Dynamic arrays
int* arr = new int[5];
arr[0] = 10;
delete[] arr;
```

### References
```cpp
int x = 10;
int& ref = x;
ref = 20;
std::cout << x; // 20

// References cannot be reassigned
int y = 30;
// ref = y; // Error

// Pass by reference
void modify(int& num) {
    num += 10;
}

int a = 5;
modify(a);
std::cout << a; // 15
```

## Functions

### Function Declaration
```cpp
int add(int a, int b) {
    return a + b;
}

// Default parameters
void greet(std::string name = "Guest") {
    std::cout << "Hello, " << name << std::endl;
}

greet(); // "Hello, Guest"
greet("Alice"); // "Hello, Alice"

// Function overloading
int multiply(int a, int b) {
    return a * b;
}

double multiply(double a, double b) {
    return a * b;
}

// Variadic templates (C++11)
template<typename... Args>
void print(Args... args) {
    // Print all arguments
}

// Lambda functions
auto add_lambda = [](int a, int b) { return a + b; };
int result = add_lambda(3, 5); // 8

// Capture by value
int x = 10;
auto capture_by_value = [x]() { return x * 2; };

// Capture by reference
auto capture_by_ref = [&x]() { return x * 2; };

// Capture all
auto capture_all = [=]() { return x; }; // by value
auto capture_all = [&]() { return x; }; // by reference
```

## Classes & Objects

### Class Definition
```cpp
class Person {
private:
    std::string name;
    int age;

public:
    // Constructor
    Person(std::string n, int a) : name(n), age(a) {}
    
    // Destructor
    ~Person() {}
    
    // Getter
    std::string getName() const {
        return name;
    }
    
    // Setter
    void setName(std::string n) {
        name = n;
    }
    
    void display() const {
        std::cout << name << ", " << age << std::endl;
    }
};

// Usage
Person p("Alice", 30);
p.display();
std::cout << p.getName();
```

### Inheritance
```cpp
class Animal {
protected:
    std::string name;
    
public:
    Animal(std::string n) : name(n) {}
    virtual void speak() {
        std::cout << "Some sound" << std::endl;
    }
    virtual ~Animal() {}
};

class Dog : public Animal {
public:
    Dog(std::string n) : Animal(n) {}
    void speak() override {
        std::cout << "Woof!" << std::endl;
    }
};

// Polymorphism
Animal* animal = new Dog("Buddy");
animal->speak(); // "Woof!"
delete animal;
```

### Templates
```cpp
template <typename T>
class Box {
private:
    T content;
    
public:
    void set(T value) {
        content = value;
    }
    
    T get() const {
        return content;
    }
};

Box<int> intBox;
intBox.set(42);

Box<std::string> strBox;
strBox.set("Hello");
```

## STL Containers

### Map
```cpp
#include <map>

std::map<std::string, int> ages;
ages["Alice"] = 30;
ages["Bob"] = 25;

std::cout << ages["Alice"]; // 30

if (ages.find("Charlie") != ages.end()) {
    std::cout << ages["Charlie"];
}

for (auto& [name, age] : ages) {
    std::cout << name << ": " << age << std::endl;
}

ages.erase("Bob");
```

### Set
```cpp
#include <set>

std::set<int> numbers = {3, 1, 4, 1, 5};
// {1, 3, 4, 5} - sorted and unique

numbers.insert(9);
numbers.erase(3);

if (numbers.count(5) > 0) {
    std::cout << "5 is in the set" << std::endl;
}

for (int num : numbers) {
    std::cout << num << " ";
}
```

## Memory Management

### Smart Pointers
```cpp
#include <memory>

// unique_ptr - exclusive ownership
std::unique_ptr<int> ptr1(new int(42));
std::unique_ptr<int> ptr2 = std::make_unique<int>(42);
std::cout << *ptr2; // 42

// shared_ptr - shared ownership
std::shared_ptr<int> ptr3 = std::make_shared<int>(42);
std::shared_ptr<int> ptr4 = ptr3;
std::cout << ptr3.use_count(); // 2
```

## Exception Handling

### Try-Catch
```cpp
try {
    if (denominator == 0) {
        throw std::invalid_argument("Division by zero");
    }
    result = numerator / denominator;
} catch (const std::invalid_argument& e) {
    std::cerr << "Error: " << e.what() << std::endl;
} catch (const std::exception& e) {
    std::cerr << "General error: " << e.what() << std::endl;
} catch (...) {
    std::cerr << "Unknown error" << std::endl;
}
```

## Algorithms

### Common Algorithms
```cpp
#include <algorithm>
#include <vector>

std::vector<int> vec = {5, 2, 8, 1, 9};

// Sort
std::sort(vec.begin(), vec.end());

// Find
auto it = std::find(vec.begin(), vec.end(), 8);
if (it != vec.end()) {
    std::cout << "Found at: " << std::distance(vec.begin(), it);
}

// Count
int count = std::count(vec.begin(), vec.end(), 5);

// For each
std::for_each(vec.begin(), vec.end(), [](int n) {
    std::cout << n << " ";
});

// Transform
std::vector<int> doubled;
std::transform(vec.begin(), vec.end(), std::back_inserter(doubled),
               [](int n) { return n * 2; });
```

## Best Practices

- Use `const` for variables that don't change
- Prefer references over pointers when possible
- Use smart pointers instead of raw pointers
- Follow RAII (Resource Acquisition Is Initialization)
- Use `std::string` instead of `char*`
- Use STL containers over raw arrays
- Avoid global variables
- Use meaningful names
- Document complex code
- Prefer composition over inheritance
