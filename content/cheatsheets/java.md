---
title: Java
slug: java
category: Programming Language
description: Object-oriented programming language with strong typing, built-in concurrency, and a vast ecosystem for enterprise applications.
---

# Java Cheatsheet

## Basics

### Hello World & Main Method
```java
public class HelloWorld {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}
```

### Variables & Data Types
```java
// Primitive types
int age = 25;
long largeNumber = 9223372036854775807L;
float price = 19.99f;
double pi = 3.14159265;
boolean isActive = true;
char letter = 'A';
byte smallNumber = 127;
short mediumNumber = 32767;

// Type conversion
int num = 100;
double decimal = (double) num; // casting
String text = String.valueOf(num); // to string
int fromString = Integer.parseInt("123"); // from string

// Constants
final int MAX_USERS = 100;
static final double PI = 3.14159;
```

### String Operations
```java
String name = "John";
String greeting = "Hello, " + name;

// String methods
name.length();
name.toUpperCase();
name.toLowerCase();
name.substring(0, 2);
name.contains("oh");
name.split(",");
name.trim();
name.replace("John", "Jane");

// String formatting
String formatted = String.format("Hello, %s! You are %d years old.", name, 25);
String interpolated = "Name: " + name; // string concatenation

// StringBuilder for efficient concatenation
StringBuilder sb = new StringBuilder();
sb.append("Hello");
sb.append(" ");
sb.append("World");
String result = sb.toString();
```

## Control Flow

### Conditional Statements
```java
// if-else
if (age >= 18) {
    System.out.println("Adult");
} else if (age >= 13) {
    System.out.println("Teen");
} else {
    System.out.println("Child");
}

// switch
switch (day) {
    case 1:
        System.out.println("Monday");
        break;
    case 2:
        System.out.println("Tuesday");
        break;
    default:
        System.out.println("Other day");
}

// Ternary operator
String status = age >= 18 ? "Adult" : "Minor";
```

### Loops
```java
// for loop
for (int i = 0; i < 10; i++) {
    System.out.println(i);
}

// for-each
int[] numbers = {1, 2, 3, 4, 5};
for (int num : numbers) {
    System.out.println(num);
}

// while loop
int count = 0;
while (count < 10) {
    System.out.println(count);
    count++;
}

// do-while
do {
    System.out.println(count);
    count++;
} while (count < 10);
```

## Arrays & Collections

### Arrays
```java
// Single dimension array
int[] numbers = {1, 2, 3, 4, 5};
int[] array = new int[5];
array[0] = 10;

// Multi-dimensional arrays
int[][] matrix = {{1, 2}, {3, 4}};
int[][] grid = new int[3][3];

// Array methods
Arrays.sort(numbers);
Arrays.fill(array, 0);
Arrays.copyOf(array, newLength);
int index = Arrays.binarySearch(numbers, 3);
```

### Collections Framework

#### List
```java
List<String> list = new ArrayList<>();
list.add("Apple");
list.add("Banana");
list.get(0);
list.size();
list.remove(0);
list.contains("Apple");

// LinkedList for frequent additions/removals
LinkedList<Integer> linkedList = new LinkedList<>();
```

#### Set
```java
Set<String> set = new HashSet<>();
set.add("Apple");
set.add("Banana");
set.add("Apple"); // no duplicates

// TreeSet for sorted order
Set<Integer> treeSet = new TreeSet<>();

// LinkedHashSet maintains insertion order
Set<String> linkedSet = new LinkedHashSet<>();
```

#### Map
```java
Map<String, Integer> map = new HashMap<>();
map.put("Alice", 30);
map.put("Bob", 25);
map.get("Alice");
map.size();
map.remove("Alice");
map.containsKey("Bob");

// Iterate
for (String key : map.keySet()) {
    System.out.println(key + ": " + map.get(key));
}

for (Integer value : map.values()) {
    System.out.println(value);
}

for (Map.Entry<String, Integer> entry : map.entrySet()) {
    System.out.println(entry.getKey() + ": " + entry.getValue());
}
```

## Object-Oriented Programming

### Classes & Objects
```java
public class Person {
    private String name;
    private int age;
    
    public Person(String name, int age) {
        this.name = name;
        this.age = age;
    }
    
    public String getName() {
        return name;
    }
    
    public void setName(String name) {
        this.name = name;
    }
    
    public void displayInfo() {
        System.out.println("Name: " + name + ", Age: " + age);
    }
}

// Usage
Person person = new Person("Alice", 30);
person.displayInfo();
```

### Inheritance
```java
public class Employee extends Person {
    private String employeeId;
    
    public Employee(String name, int age, String employeeId) {
        super(name, age);
        this.employeeId = employeeId;
    }
    
    public String getEmployeeId() {
        return employeeId;
    }
}
```

### Interfaces
```java
public interface Animal {
    void speak();
    void move();
}

public class Dog implements Animal {
    @Override
    public void speak() {
        System.out.println("Woof!");
    }
    
    @Override
    public void move() {
        System.out.println("Running...");
    }
}
```

### Abstract Classes
```java
public abstract class Vehicle {
    abstract void start();
    
    public void stop() {
        System.out.println("Stopping...");
    }
}

public class Car extends Vehicle {
    @Override
    void start() {
        System.out.println("Car started");
    }
}
```

## Methods

### Method Declaration
```java
public void methodName(String param1, int param2) {
    System.out.println(param1 + ": " + param2);
}

public int add(int a, int b) {
    return a + b;
}

// Varargs
public void printAll(String... args) {
    for (String arg : args) {
        System.out.println(arg);
    }
}

printAll("Hello", "World", "Java");

// Method overloading
public int add(int a, int b) { return a + b; }
public double add(double a, double b) { return a + b; }
```

## Exception Handling

### Try-Catch-Finally
```java
try {
    int result = 10 / 0;
} catch (ArithmeticException e) {
    System.out.println("Error: " + e.getMessage());
    e.printStackTrace();
} catch (Exception e) {
    System.out.println("General error");
} finally {
    System.out.println("This always executes");
}

// Try-with-resources
try (FileReader fr = new FileReader("file.txt")) {
    // use fr
} catch (IOException e) {
    e.printStackTrace();
}
```

### Throwing Exceptions
```java
public void validateAge(int age) throws IllegalArgumentException {
    if (age < 0) {
        throw new IllegalArgumentException("Age cannot be negative");
    }
}

// Custom exception
public class InvalidAgeException extends Exception {
    public InvalidAgeException(String message) {
        super(message);
    }
}
```

## Generics

### Generic Classes & Methods
```java
public class Box<T> {
    private T content;
    
    public void set(T content) {
        this.content = content;
    }
    
    public T get() {
        return content;
    }
}

Box<String> stringBox = new Box<>();
stringBox.set("Hello");

// Generic methods
public <T> void printArray(T[] array) {
    for (T element : array) {
        System.out.println(element);
    }
}

// Bounded wildcards
public void printList(List<? extends Number> list) {
    for (Number num : list) {
        System.out.println(num);
    }
}
```

## Functional Programming

### Lambda Expressions
```java
// Functional interface
@FunctionalInterface
interface Operation {
    int apply(int a, int b);
}

Operation add = (a, b) -> a + b;
Operation multiply = (a, b) -> a * b;

int result = add.apply(5, 3);

// Stream API
List<Integer> numbers = Arrays.asList(1, 2, 3, 4, 5);

// map
List<Integer> doubled = numbers.stream()
    .map(n -> n * 2)
    .collect(Collectors.toList());

// filter
List<Integer> evenNumbers = numbers.stream()
    .filter(n -> n % 2 == 0)
    .collect(Collectors.toList());

// reduce
int sum = numbers.stream()
    .reduce(0, (a, b) -> a + b);

// forEach
numbers.forEach(n -> System.out.println(n));

// anyMatch, allMatch, noneMatch
boolean hasEven = numbers.stream().anyMatch(n -> n % 2 == 0);
```

## File I/O

### Reading & Writing Files
```java
// Reading file
BufferedReader reader = new BufferedReader(new FileReader("file.txt"));
String line;
while ((line = reader.readLine()) != null) {
    System.out.println(line);
}
reader.close();

// Writing file
BufferedWriter writer = new BufferedWriter(new FileWriter("file.txt"));
writer.write("Hello, World!");
writer.close();

// NIO (New I/O)
Path path = Paths.get("file.txt");
List<String> lines = Files.readAllLines(path);
Files.write(path, Arrays.asList("Hello", "World"));
```

## Common Patterns

### Singleton
```java
public class Singleton {
    private static Singleton instance;
    
    private Singleton() {}
    
    public static synchronized Singleton getInstance() {
        if (instance == null) {
            instance = new Singleton();
        }
        return instance;
    }
}
```

### Builder Pattern
```java
public class UserBuilder {
    private String name;
    private int age;
    
    public UserBuilder setName(String name) {
        this.name = name;
        return this;
    }
    
    public UserBuilder setAge(int age) {
        this.age = age;
        return this;
    }
    
    public User build() {
        return new User(name, age);
    }
}
```

## Best Practices

- Use meaningful variable and method names
- Follow Java naming conventions (camelCase for variables, PascalCase for classes)
- Use access modifiers appropriately (private, protected, public)
- Implement equals() and hashCode() for custom classes
- Use generics to ensure type safety
- Handle exceptions properly
- Avoid null pointer exceptions with Optional
- Use StringBuilder for string concatenation in loops
- Keep classes focused on single responsibility
- Document code with JavaDoc comments
