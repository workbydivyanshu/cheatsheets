---
title: TypeScript
slug: typescript
category: Programming Language
description: A typed superset of JavaScript for building scalable applications with static type checking, interfaces, and advanced OOP patterns.
---

# TypeScript Cheatsheet

## Basics

### Type Annotations
```typescript
// Primitive types
let name: string = "John";
let age: number = 30;
let isActive: boolean = true;
let nothing: null = null;
let undefined_var: undefined = undefined;

// Arrays
let numbers: number[] = [1, 2, 3];
let strings: Array<string> = ["a", "b"];
let mixed: (string | number)[] = [1, "two"];

// Tuple
let tuple: [string, number] = ["hello", 42];

// Any (avoid when possible)
let anything: any = "can be anything";

// Union types
let id: string | number;
id = 101; // valid
id = "123"; // valid

// Literal types
let direction: "up" | "down" | "left" | "right";
```

## Interfaces & Types

### Interfaces
```typescript
interface User {
  name: string;
  age: number;
  email?: string; // optional property
  readonly id: number; // readonly property
}

// Extending interfaces
interface Admin extends User {
  role: string;
}

// Function interface
interface Greet {
  (name: string): string;
}

const greet: Greet = (name) => `Hello, ${name}!`;
```

### Type Aliases
```typescript
type Point = {
  x: number;
  y: number;
};

type ID = string | number;
type Status = "pending" | "completed" | "failed";

// Union and intersection
type Admin = User & { role: string };
```

## Functions

### Function Types
```typescript
// Typed parameters and return
function add(a: number, b: number): number {
  return a + b;
}

// Optional and default parameters
function greet(name: string, greeting: string = "Hello"): void {
  console.log(`${greeting}, ${name}`);
}

// Rest parameters
function sum(...numbers: number[]): number {
  return numbers.reduce((a, b) => a + b, 0);
}

// Overloading
function process(input: string | number): string | number;
function process(input: string | number) {
  return typeof input === "string" ? input.toUpperCase() : input * 2;
}

// Async functions
async function fetchUser(id: number): Promise<User> {
  return await fetch(`/api/users/${id}`).then(r => r.json());
}
```

## Classes

### Class Definition
```typescript
class Animal {
  name: string;
  age: number;
  
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
  
  speak(): void {
    console.log(`${this.name} makes a sound`);
  }
}

// Inheritance
class Dog extends Animal {
  breed: string;
  
  constructor(name: string, age: number, breed: string) {
    super(name, age);
    this.breed = breed;
  }
  
  speak(): void {
    console.log(`${this.name} barks`);
  }
}

// Access modifiers
class Vehicle {
  public name: string; // accessible everywhere
  private engine: string; // accessible only in class
  protected speed: number; // accessible in class and subclasses
  
  constructor(name: string) {
    this.name = name;
  }
}

// Abstract classes
abstract class Shape {
  abstract area(): number;
  
  describe(): string {
    return `Area: ${this.area()}`;
  }
}
```

### Static Members
```typescript
class MathUtils {
  static PI: number = 3.14159;
  
  static circleArea(radius: number): number {
    return this.PI * radius * radius;
  }
}

console.log(MathUtils.PI);
console.log(MathUtils.circleArea(5));
```

## Generics

### Generic Types
```typescript
// Generic function
function identity<T>(arg: T): T {
  return arg;
}

identity<string>("hello");
identity<number>(42);

// Generic classes
class Box<T> {
  contents: T;
  
  constructor(item: T) {
    this.contents = item;
  }
  
  getContents(): T {
    return this.contents;
  }
}

// Generic constraints
function merge<T extends object, U extends object>(obj1: T, obj2: U): T & U {
  return { ...obj1, ...obj2 };
}

// Generic with default
function createArray<T = string>(length: number, value: T): T[] {
  return Array(length).fill(value);
}
```

## Enums

### Enum Types
```typescript
// Numeric enum
enum Direction {
  Up = 0,
  Down = 1,
  Left = 2,
  Right = 3
}

// String enum
enum Status {
  Active = "ACTIVE",
  Inactive = "INACTIVE",
  Pending = "PENDING"
}

// Heterogeneous enum
enum Mixed {
  Yes = 1,
  No = "NO"
}

// Using enums
let status: Status = Status.Active;
```

## Advanced Types

### Mapped Types
```typescript
// Make all properties readonly
type Readonly<T> = {
  readonly [K in keyof T]: T[K];
};

// Make all properties optional
type Partial<T> = {
  [K in keyof T]?: T[K];
};

// Make all properties required
type Required<T> = {
  [K in keyof T]-?: T[K];
};
```

### Conditional Types
```typescript
type IsString<T> = T extends string ? true : false;

type A = IsString<"hello">; // true
type B = IsString<number>; // false

// Useful for function overloads
type Flatten<T> = T extends Array<infer U> ? U : T;

type Str = Flatten<string[]>; // string
type Num = Flatten<number>; // number
```

### Template Literal Types
```typescript
type EventNames = "click" | "hover" | "focus";
type EventHandlers = `on${Capitalize<EventNames>}`;
// "onClick" | "onHover" | "onFocus"

type Getters<T> = {
  [K in keyof T as `get${Capitalize<string & K>}`]: () => T[K];
};
```

## Decorators

### Using Decorators
```typescript
// Class decorator
function sealed(constructor: Function) {
  Object.seal(constructor);
  Object.seal(constructor.prototype);
}

@sealed
class Person {
  name: string = "John";
}

// Property decorator
function log(target: any, propertyKey: string) {
  console.log(`${propertyKey} was accessed`);
}

class User {
  @log
  email: string = "user@example.com";
}

// Method decorator
function measure(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
  const originalMethod = descriptor.value;
  
  descriptor.value = function (...args: any[]) {
    console.time(propertyKey);
    const result = originalMethod.apply(this, args);
    console.timeEnd(propertyKey);
    return result;
  };
}
```

## Utility Types

### Built-in Utilities
```typescript
// Partial - all properties optional
type PartialUser = Partial<User>;

// Required - all properties required
type RequiredUser = Required<User>;

// Readonly - all properties readonly
type ReadonlyUser = Readonly<User>;

// Record - object with specific keys
type RolePermissions = Record<"user" | "admin" | "guest", string[]>;

// Pick - select specific properties
type UserPreview = Pick<User, "name" | "email">;

// Omit - exclude specific properties
type UserWithoutEmail = Omit<User, "email">;

// Extract - extract union members matching
type StringOrNumber = string | number | boolean;
type StringType = Extract<StringOrNumber, string>; // string

// Exclude - exclude union members matching
type NonBooleanType = Exclude<StringOrNumber, boolean>; // string | number

// Parameters - get function parameters
type AddParams = Parameters<typeof add>; // [number, number]

// ReturnType - get function return type
type AddReturn = ReturnType<typeof add>; // number
```

## Modules

### Exporting & Importing
```typescript
// Named exports
export interface User {
  name: string;
}

export function getUser(id: number): User {
  // ...
}

// Default export
export default class Logger {
  static log(message: string) {
    console.log(message);
  }
}

// Importing
import Logger from "./logger";
import { User, getUser } from "./user";
import * as UserModule from "./user";
```

## Type Guards

### Custom Guards
```typescript
// Type predicate
function isUser(obj: any): obj is User {
  return typeof obj === "object" && "name" in obj && "email" in obj;
}

// Using type guards
if (isUser(data)) {
  console.log(data.name); // data is narrowed to User
}

// instanceof
if (obj instanceof Dog) {
  obj.speak(); // type narrowed to Dog
}

// typeof
if (typeof value === "string") {
  // value is string
}

// Discriminated unions
type Shape = Circle | Square;

interface Circle {
  kind: "circle";
  radius: number;
}

interface Square {
  kind: "square";
  side: number;
}

function area(shape: Shape): number {
  switch (shape.kind) {
    case "circle":
      return Math.PI * shape.radius ** 2;
    case "square":
      return shape.side ** 2;
  }
}
```

## Common Patterns

### Singleton Pattern
```typescript
class Singleton {
  private static instance: Singleton;
  
  private constructor() {}
  
  static getInstance(): Singleton {
    if (!this.instance) {
      this.instance = new Singleton();
    }
    return this.instance;
  }
}
```

### Observer Pattern
```typescript
type Observer<T> = (value: T) => void;

class Observable<T> {
  private observers: Observer<T>[] = [];
  
  subscribe(observer: Observer<T>): void {
    this.observers.push(observer);
  }
  
  notify(value: T): void {
    this.observers.forEach(obs => obs(value));
  }
}
```

### Builder Pattern
```typescript
class UserBuilder {
  private user: Partial<User> = {};
  
  setName(name: string): this {
    this.user.name = name;
    return this;
  }
  
  setAge(age: number): this {
    this.user.age = age;
    return this;
  }
  
  build(): User {
    return this.user as User;
  }
}
```

## Best Practices

- Use `const` and `let` instead of `var`
- Enable strict mode in tsconfig.json
- Prefer interfaces for object shapes
- Use union types instead of boolean parameters
- Leverage generics for reusable type-safe code
- Document complex types with comments
- Use type narrowing for safer type checks
- Avoid `any` - use `unknown` and type guards
- Use readonly modifiers where appropriate
- Implement proper error handling with custom error types
