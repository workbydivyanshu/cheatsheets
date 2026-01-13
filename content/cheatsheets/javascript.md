---
title: JavaScript
description: JavaScript fundamentals, syntax, methods, and API reference
category: Programming Language
---

# JavaScript Cheatsheet

## Variables & Data Types

### Declaration
```javascript
var name = "John";        // Function scoped, can be redeclared
let age = 30;            // Block scoped, cannot be redeclared
const city = "NYC";      // Block scoped, constant (cannot be reassigned)
```

### Data Types
```javascript
// Primitives
let str = "Hello";       // String
let num = 42;            // Number
let bool = true;         // Boolean
let empty = null;        // Null
let undef = undefined;   // Undefined
let sym = Symbol("id");  // Symbol

// Objects
let obj = {};
let arr = [];
let func = function() {};
```

## Operators

### Arithmetic
```javascript
a + b      // Addition
a - b      // Subtraction
a * b      // Multiplication
a / b      // Division
a % b      // Modulo
a ** b     // Exponentiation
```

### Comparison
```javascript
a == b     // Loose equality
a === b    // Strict equality
a != b     // Loose inequality
a !== b    // Strict inequality
a > b      // Greater than
a < b      // Less than
a >= b     // Greater than or equal
a <= b     // Less than or equal
```

### Logical
```javascript
a && b     // AND
a || b     // OR
!a         // NOT
```

### Assignment
```javascript
a = 5;
a += 2;    // a = a + 2
a -= 2;    // a = a - 2
a *= 2;    // a = a * 2
a /= 2;    // a = a / 2
```

## Control Flow

### If/Else
```javascript
if (condition) {
  // code
} else if (otherCondition) {
  // code
} else {
  // code
}
```

### Ternary Operator
```javascript
condition ? trueValue : falseValue;
```

### Switch
```javascript
switch (value) {
  case 1:
    // code
    break;
  case 2:
    // code
    break;
  default:
    // code
}
```

## Loops

### For Loop
```javascript
for (let i = 0; i < 10; i++) {
  console.log(i);
}
```

### While Loop
```javascript
while (condition) {
  // code
}
```

### Do While
```javascript
do {
  // code
} while (condition);
```

### For...of
```javascript
for (let item of array) {
  console.log(item);
}
```

### For...in
```javascript
for (let key in object) {
  console.log(key, object[key]);
}
```

### Array Methods
```javascript
arr.forEach(item => console.log(item));
arr.map(item => item * 2);
arr.filter(item => item > 5);
arr.reduce((sum, item) => sum + item, 0);
arr.find(item => item > 5);
arr.some(item => item > 5);
arr.every(item => item > 5);
```

## Functions

### Function Declaration
```javascript
function greet(name) {
  return `Hello, ${name}`;
}
```

### Function Expression
```javascript
const greet = function(name) {
  return `Hello, ${name}`;
};
```

### Arrow Function
```javascript
const greet = (name) => `Hello, ${name}`;
const add = (a, b) => a + b;
```

### Default Parameters
```javascript
function greet(name = "Guest") {
  return `Hello, ${name}`;
}
```

### Rest Parameters
```javascript
function sum(...numbers) {
  return numbers.reduce((a, b) => a + b);
}
```

### Destructuring
```javascript
const { name, age } = person;
const [first, second] = array;
const { name = "Guest" } = obj;
```

## Objects

### Creating Objects
```javascript
const obj = { name: "John", age: 30 };
const obj = new Object();
const obj = Object.create(null);
```

### Accessing Properties
```javascript
obj.name              // Dot notation
obj["name"]           // Bracket notation
```

### Methods
```javascript
Object.keys(obj);              // Get keys
Object.values(obj);            // Get values
Object.entries(obj);           // Get key-value pairs
Object.assign(obj, src);       // Copy properties
Object.freeze(obj);            // Make immutable
Object.seal(obj);              // Prevent new properties
Object.create(proto);          // Create with prototype
```

## Arrays

### Creating Arrays
```javascript
const arr = [1, 2, 3];
const arr = new Array(1, 2, 3);
const arr = Array.from("hello");
```

### Array Methods
```javascript
arr.push(4);           // Add to end
arr.pop();             // Remove from end
arr.shift();           // Remove from start
arr.unshift(0);        // Add to start
arr.slice(0, 2);       // Extract subarray
arr.splice(0, 1);      // Remove elements
arr.concat([4, 5]);    // Combine arrays
arr.reverse();         // Reverse order
arr.sort();            // Sort elements
arr.join(", ");        // Join as string
arr.includes(2);       // Check existence
arr.indexOf(2);        // Find index
```

## Strings

### Creating Strings
```javascript
const str = "Hello";
const str = 'Hello';
const str = `Hello ${name}`;  // Template literal
```

### String Methods
```javascript
str.length;              // Length
str.toUpperCase();       // Convert to uppercase
str.toLowerCase();       // Convert to lowercase
str.charAt(0);          // Get character at index
str.charCodeAt(0);      // Get character code
str.substring(0, 5);    // Extract substring
str.slice(0, 5);        // Extract with negative indices
str.split(",");         // Split into array
str.trim();             // Remove whitespace
str.replace("a", "b");  // Replace first occurrence
str.replaceAll("a", "b"); // Replace all occurrences
str.startsWith("He");   // Check start
str.endsWith("lo");     // Check end
str.includes("ll");     // Check contains
str.repeat(3);          // Repeat string
str.padStart(5, "0");   // Pad start
str.padEnd(5, "0");     // Pad end
```

## Classes

### Class Definition
```javascript
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    return `Hello, I'm ${this.name}`;
  }

  static info() {
    return "Person class";
  }
}

const person = new Person("John", 30);
```

### Inheritance
```javascript
class Employee extends Person {
  constructor(name, age, job) {
    super(name, age);
    this.job = job;
  }
}
```

## Async/Await

### Promises
```javascript
const promise = new Promise((resolve, reject) => {
  if (success) {
    resolve(value);
  } else {
    reject(error);
  }
});

promise.then(result => {}).catch(error => {});
```

### Async Functions
```javascript
async function fetchData() {
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
}
```

## DOM Manipulation

### Selecting Elements
```javascript
document.getElementById("id");
document.querySelector(".class");
document.querySelectorAll("div");
document.getElementsByClassName("class");
document.getElementsByTagName("div");
```

### Modifying Elements
```javascript
element.textContent = "Hello";
element.innerHTML = "<p>Hello</p>";
element.setAttribute("class", "active");
element.getAttribute("class");
element.removeAttribute("class");
element.classList.add("active");
element.classList.remove("active");
element.classList.toggle("active");
```

### Events
```javascript
element.addEventListener("click", () => {});
element.removeEventListener("click", handler);
element.onclick = () => {};
element.onchange = () => {};
element.onkeydown = () => {};
```

### Creating Elements
```javascript
const div = document.createElement("div");
parent.appendChild(div);
parent.removeChild(div);
parent.insertBefore(div, sibling);
parent.replaceChild(newChild, oldChild);
```

## JSON

### Parsing & Stringifying
```javascript
JSON.parse(jsonString);       // String to object
JSON.stringify(obj);           // Object to string
JSON.stringify(obj, null, 2);  // With formatting
```

## Error Handling

### Try/Catch
```javascript
try {
  // code that might throw
} catch (error) {
  console.error(error);
} finally {
  // always runs
}
```

### Throwing Errors
```javascript
throw new Error("Something went wrong");
throw new TypeError("Type error");
```

## Common Global Objects & Methods

### Console
```javascript
console.log();
console.error();
console.warn();
console.table();
console.time();
console.timeEnd();
```

### Math
```javascript
Math.abs(-5);
Math.round(4.5);
Math.floor(4.9);
Math.ceil(4.1);
Math.max(1, 2, 3);
Math.min(1, 2, 3);
Math.random();
Math.sqrt(16);
Math.pow(2, 3);
Math.sin(), Math.cos(), Math.tan();
```

### Date
```javascript
new Date();
new Date("2024-01-01");
date.getFullYear();
date.getMonth();
date.getDate();
date.getTime();
date.toISOString();
```

## Useful Patterns

### Spread Operator
```javascript
const arr2 = [...arr1];
const obj2 = { ...obj1 };
function sum(...args) {}
```

### Optional Chaining
```javascript
obj?.property;
arr?.[0];
func?.();
```

### Nullish Coalescing
```javascript
value ?? defaultValue;  // Use default if null or undefined
```

### Template Literals
```javascript
`String with ${variable} interpolation`;
`Multi
line
string`;
```
