---
title: TypeScript
description: Complete beginner's guide to TypeScript - JavaScript with types
category: Programming Language
---

# TypeScript Cheatsheet

**TypeScript** is JavaScript with **type safety**. It lets you add types to your variables, functions, and objects so that errors are caught before running the code. Imagine JavaScript with guard rails! Every TypeScript file becomes JavaScript - TypeScript just checks for mistakes first.

## Getting Started

### What is TypeScript?
TypeScript **adds types** to JavaScript. Instead of a variable being anything, you declare what type it should be:

```typescript
// JavaScript - could be anything
let name = "Alice";
name = 42;  // OK in JavaScript (but probably a mistake!)

// TypeScript - type-safe
let name: string = "Alice";
name = 42;  // ERROR! TypeScript catches this
```

### Installation & Setup
```bash
# Install TypeScript globally
npm install -g typescript

# Create a project
npm init -y
npm install --save-dev typescript

# Generate tsconfig.json
npx tsc --init

# Compile TypeScript to JavaScript
tsc filename.ts

# Watch mode (auto-compile on save)
tsc --watch
```

### Your First Program
```typescript
// hello.ts
function greet(name: string): void {
    console.log(`Hello, ${name}!`);
}

greet("Alice");  // Output: Hello, Alice!
greet(42);       // ERROR - 42 is not a string
```

**Why types matter:** Catches bugs before they cause problems in production.

## Basic Types

### Primitives
```typescript
// String
let message: string = "Hello";
let empty: string = "";
let greeting = "Hi";  // Type inferred as string

// Number
let count: number = 42;
let price: number = 19.99;
let negative: number = -10;
let infinity: number = Infinity;

// Boolean
let isActive: boolean = true;
let isDone: boolean = false;

// Any (avoid when possible - defeats purpose of TypeScript)
let anything: any = "string";
anything = 42;  // OK (but bad practice)
anything.nonExistentMethod();  // No error, but crashes at runtime

// Unknown (safer than any)
let unknown: unknown = "string";
if (typeof unknown === "string") {
    console.log(unknown.toUpperCase());  // Safe access
}

// Never (function never returns normally)
function throwError(message: string): never {
    throw new Error(message);
}

// Void (function returns nothing)
function printMessage(msg: string): void {
    console.log(msg);
}
```

**Why types?** Prevents `undefined is not a function` errors before they happen.

### Union Types
```typescript
// Variable can be one of multiple types
let id: string | number;
id = "ABC123";  // OK
id = 42;        // OK
id = true;      // ERROR

// Function that accepts multiple types
function processId(id: string | number) {
    if (typeof id === "string") {
        console.log(`ID is: ${id.toUpperCase()}`);
    } else {
        console.log(`ID is number: ${id}`);
    }
}
```

### Literal Types
```typescript
// Variable can only be specific values
let direction: "up" | "down" | "left" | "right";
direction = "up";     // OK
direction = "north";  // ERROR

// Function with specific parameters
function setStatus(status: "active" | "inactive" | "pending") {
    // ...
}

// Number literal types
let dice: 1 | 2 | 3 | 4 | 5 | 6;
dice = 3;  // OK
dice = 7;  // ERROR
```

## Functions

### Typed Parameters & Returns
```typescript
// Basic function
function add(a: number, b: number): number {
    return a + b;
}

add(5, 3);    // 8
add("5", 3);  // ERROR

// Function with no return
function logMessage(message: string): void {
    console.log(message);
}

// Optional parameters
function greet(name: string, greeting?: string): string {
    return greeting ? `${greeting}, ${name}!` : `Hello, ${name}!`;
}

greet("Alice");                    // "Hello, Alice!"
greet("Alice", "Good morning");    // "Good morning, Alice!"

// Default parameters
function multiply(a: number, b: number = 2): number {
    return a * b;
}

multiply(5);     // 10
multiply(5, 3);  // 15

// Rest parameters
function sum(...numbers: number[]): number {
    return numbers.reduce((a, b) => a + b, 0);
}

sum(1, 2, 3, 4, 5);  // 15
```

### Arrow Functions
```typescript
// Basic arrow function
const double = (n: number): number => n * 2;
double(5);  // 10

// Multiple parameters
const add = (a: number, b: number): number => a + b;
add(5, 3);  // 8

// No parameters
const greet = (): string => "Hello!";

// Without type annotations (inferred)
const isEven = (n: number) => n % 2 === 0;
```

### Function Types
```typescript
// Define function type
type MathOperation = (a: number, b: number) => number;

const add: MathOperation = (a, b) => a + b;
const subtract: MathOperation = (a, b) => a - b;

// Function type in interface
interface Calculator {
    add: (a: number, b: number) => number;
    subtract: (a: number, b: number) => number;
}

const calc: Calculator = {
    add: (a, b) => a + b,
    subtract: (a, b) => a - b,
};
```

## Objects & Interfaces

### Objects
```typescript
// Basic object
let person: { name: string; age: number } = {
    name: "Alice",
    age: 25,
};

// Optional properties
let config: { host: string; port?: number } = {
    host: "localhost",
    // port not required
};

config.port = 3000;  // Can add it later

// Readonly properties
let settings: { readonly api: string; timeout: number } = {
    api: "https://api.example.com",
    timeout: 5000,
};

settings.timeout = 10000;  // OK
settings.api = "https://new.com";  // ERROR - readonly
```

### Interfaces
```typescript
// Define object shape
interface User {
    id: number;
    name: string;
    email?: string;  // Optional
    readonly createdAt: Date;  // Readonly
}

const user: User = {
    id: 1,
    name: "Alice",
    email: "alice@example.com",
    createdAt: new Date(),
};

// Function with interface
function printUser(user: User): void {
    console.log(`${user.name} (${user.email})`);
}

// Interface extension
interface Admin extends User {
    permissions: string[];
}

const admin: Admin = {
    id: 1,
    name: "Alice",
    createdAt: new Date(),
    permissions: ["read", "write", "delete"],
};
```

### Types vs Interfaces
```typescript
// Type - more flexible
type Person = {
    name: string;
    age: number;
};

type Contact = Person & {
    email: string;
};

// Interface - for objects
interface Animal {
    name: string;
    move(): void;
}

interface Dog extends Animal {
    breed: string;
}
```

## Arrays & Collections

### Array Types
```typescript
// Array of numbers
let numbers: number[] = [1, 2, 3];
let moreNumbers: Array<number> = [1, 2, 3];  // Alternative syntax

// Array of strings
let words: string[] = ["hello", "world"];

// Array of mixed types
let mixed: (string | number)[] = [1, "two", 3];

// Array of objects
interface Product {
    id: number;
    name: string;
    price: number;
}

let products: Product[] = [
    { id: 1, name: "Laptop", price: 999 },
    { id: 2, name: "Mouse", price: 25 },
];

// Readonly array
let constants: readonly string[] = ["RED", "GREEN", "BLUE"];
// constants.push("YELLOW");  // ERROR
```

### Tuples
```typescript
// Fixed length, specific types
let tuple: [string, number] = ["Alice", 25];
let tuple2: [string, number, boolean] = ["Bob", 30, true];

// Optional elements
let optional: [string, number?] = ["Alice"];
optional = ["Alice", 25];  // Also valid

// Rest elements
let rest: [string, ...number[]] = ["count", 1, 2, 3];
```

### Enums
```typescript
// Numeric enum
enum Direction {
    Up = 1,
    Down = 2,
    Left = 3,
    Right = 4,
}

let d: Direction = Direction.Up;

// String enum
enum Status {
    Active = "ACTIVE",
    Inactive = "INACTIVE",
    Pending = "PENDING",
}

let status: Status = Status.Active;
```

## Generics (Reusable Types)

### Generic Functions
```typescript
// Generic function - works with any type
function identity<T>(value: T): T {
    return value;
}

identity<string>("hello");     // "hello"
identity<number>(42);          // 42
identity([1, 2, 3]);           // [1, 2, 3]

// Type inference
const result = identity("Alice");  // Type inferred as string

// Multiple type parameters
function pair<T, U>(a: T, b: U): [T, U] {
    return [a, b];
}

pair<string, number>("age", 25);  // ["age", 25]
```

### Generic Interfaces & Types
```typescript
// Generic interface
interface Container<T> {
    value: T;
    getValue(): T;
    setValue(value: T): void;
}

const stringContainer: Container<string> = {
    value: "hello",
    getValue() {
        return this.value;
    },
    setValue(value) {
        this.value = value;
    },
};

// Generic type
type Response<T> = {
    data: T;
    status: number;
    message: string;
};

type UserResponse = Response<User>;
```

### Constraints
```typescript
// Generic constrained to object
interface HasLength {
    length: number;
}

function getLength<T extends HasLength>(value: T): number {
    return value.length;
}

getLength("hello");        // 5
getLength([1, 2, 3]);      // 3
getLength(42);             // ERROR - number has no length

// Constrained to type
function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
    return obj[key];
}

getProperty({ name: "Alice", age: 25 }, "name");  // "Alice"
getProperty({ name: "Alice" }, "age");             // ERROR
```

## Classes

### Basic Classes
```typescript
class Person {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    greet(): string {
        return `Hello, I'm ${this.name}`;
    }
}

const person = new Person("Alice", 25);
console.log(person.greet());  // "Hello, I'm Alice"
```

### Access Modifiers
```typescript
class User {
    public name: string;      // Accessible everywhere
    private password: string;  // Only inside class
    protected role: string;    // Inside class and subclasses
    readonly id: number;       // Can't be changed

    constructor(name: string, password: string, role: string, id: number) {
        this.name = name;
        this.password = password;
        this.role = role;
        this.id = id;
    }

    // Private method
    private hashPassword(password: string): string {
        return `hashed_${password}`;
    }
}

const user = new User("Alice", "secret", "admin", 1);
console.log(user.name);         // OK
// console.log(user.password);  // ERROR
```

### Inheritance
```typescript
class Animal {
    name: string;

    constructor(name: string) {
        this.name = name;
    }

    speak(): void {
        console.log(`${this.name} makes a sound`);
    }
}

class Dog extends Animal {
    breed: string;

    constructor(name: string, breed: string) {
        super(name);  // Call parent constructor
        this.breed = breed;
    }

    speak(): void {
        console.log(`${this.name} barks`);  // Override method
    }
}

const dog = new Dog("Rex", "Golden Retriever");
dog.speak();  // "Rex barks"
```

### Abstract Classes
```typescript
// Can't be instantiated directly
abstract class Shape {
    abstract getArea(): number;

    describe(): void {
        console.log(`Area: ${this.getArea()}`);
    }
}

class Circle extends Shape {
    radius: number;

    constructor(radius: number) {
        super();
        this.radius = radius;
    }

    getArea(): number {
        return Math.PI * this.radius ** 2;
    }
}

// const shape = new Shape();  // ERROR
const circle = new Circle(5);
circle.describe();  // "Area: 78.53..."
```

## Advanced Types

### Intersection Types
```typescript
type HasName = { name: string };
type HasAge = { age: number };

type Person = HasName & HasAge;

const person: Person = {
    name: "Alice",
    age: 25,
};
```

### Conditional Types
```typescript
// If T is string, return string type, else unknown
type CheckString<T> = T extends string ? string : unknown;

type A = CheckString<"hello">;     // string
type B = CheckString<number>;      // unknown
```

### Utility Types
```typescript
interface User {
    id: number;
    name: string;
    email: string;
}

// Partial - all properties optional
type PartialUser = Partial<User>;
const update: PartialUser = { name: "Alice" };  // OK

// Required - all properties required
type RequiredUser = Required<PartialUser>;

// Readonly - all properties readonly
type ReadonlyUser = Readonly<User>;

// Pick - select specific properties
type UserPreview = Pick<User, "id" | "name">;

// Omit - exclude specific properties
type UserWithoutId = Omit<User, "id">;

// Record - create object with specific keys
type UserRoles = Record<"admin" | "user" | "guest", User>;

// Exclude - remove types from union
type ValidStatus = Exclude<"success" | "error" | "pending", "pending">;
```

## Modules

### Exporting
```typescript
// Export variable
export const MAX_SIZE = 100;

// Export function
export function greet(name: string): string {
    return `Hello, ${name}!`;
}

// Export interface
export interface User {
    id: number;
    name: string;
}

// Export class
export class Logger {
    log(message: string): void {
        console.log(message);
    }
}

// Default export
export default class App {
    run(): void {
        console.log("App running");
    }
}
```

### Importing
```typescript
// Import specific
import { greet, User } from "./module";

// Import as namespace
import * as Module from "./module";
Module.greet("Alice");

// Import default
import App from "./app";
const app = new App();

// Rename on import
import { greet as sayHello } from "./module";
```

## Error Handling

### Try-Catch
```typescript
try {
    const result = riskyOperation();
    console.log(result);
} catch (error) {
    if (error instanceof Error) {
        console.log(`Error: ${error.message}`);
    }
}

// With finally
try {
    // code
} catch (error) {
    // handle
} finally {
    // cleanup
}
```

### Custom Errors
```typescript
class ValidationError extends Error {
    constructor(message: string) {
        super(message);
        this.name = "ValidationError";
    }
}

try {
    throw new ValidationError("Invalid email");
} catch (error) {
    if (error instanceof ValidationError) {
        console.log(error.message);
    }
}
```

## Best Practices

1. **Enable strict mode in tsconfig.json:**
   ```json
   {
     "compilerOptions": {
       "strict": true,
       "strictNullChecks": true,
       "strictFunctionTypes": true
     }
   }
   ```

2. **Use meaningful type names:**
   - ✅ `type UserRepository = ...`
   - ❌ `type T = ...`

3. **Prefer interfaces for object shapes**

4. **Use `unknown` instead of `any`**

5. **Leverage generics for reusability**

## Summary

TypeScript adds **type safety** to JavaScript, catching errors during development instead of at runtime. Use it for scalable, maintainable applications with confidence!
