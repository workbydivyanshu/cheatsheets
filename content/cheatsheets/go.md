---
title: Go
slug: go
category: Programming Language
description: Fast, compiled language with built-in concurrency, simplicity-first design, and excellent performance for systems and cloud applications.
---

# Go Cheatsheet

## Basics

### Hello World
```go
package main

import "fmt"

func main() {
    fmt.Println("Hello, World!")
}
```

### Variables & Constants
```go
// Variables
var name string = "Alice"
var age int = 30
var isActive bool = true

// Short declaration
name := "Bob"
age := 25

// Multiple declarations
var (
    x int = 10
    y string = "hello"
    z bool = false
)

// Constants
const MaxUsers = 100
const Pi float64 = 3.14159
```

### Data Types
```go
// Numeric types
var i int = 42
var f float64 = 3.14
var u uint = 100
var b byte = 255

// String
var s string = "Hello"

// Boolean
var flag bool = true

// Arrays
var arr [5]int
arr[0] = 10
arr := [...]int{1, 2, 3, 4, 5}

// Slices (dynamic arrays)
slice := []int{1, 2, 3}
slice = append(slice, 4)
length := len(slice)
capacity := cap(slice)

// Maps
m := make(map[string]int)
m["Alice"] = 30
m["Bob"] = 25
value := m["Alice"]
delete(m, "Bob")
if val, exists := m["Charlie"]; exists {
    fmt.Println(val)
}

// Structs
type Person struct {
    Name string
    Age  int
}

p := Person{Name: "Alice", Age: 30}
p.Name = "Bob"
```

## Control Flow

### Conditionals
```go
// if-else
if age >= 18 {
    fmt.Println("Adult")
} else if age >= 13 {
    fmt.Println("Teen")
} else {
    fmt.Println("Child")
}

// switch
switch day {
case 1:
    fmt.Println("Monday")
case 2:
    fmt.Println("Tuesday")
default:
    fmt.Println("Other day")
}

// switch without condition
switch {
case age < 13:
    fmt.Println("Child")
case age < 18:
    fmt.Println("Teen")
default:
    fmt.Println("Adult")
}
```

### Loops
```go
// for loop
for i := 0; i < 10; i++ {
    fmt.Println(i)
}

// while-style loop
count := 0
for count < 10 {
    fmt.Println(count)
    count++
}

// range loop
numbers := []int{1, 2, 3, 4, 5}
for i, num := range numbers {
    fmt.Printf("Index: %d, Value: %d\n", i, num)
}

// range over maps
m := map[string]int{"Alice": 30, "Bob": 25}
for key, value := range m {
    fmt.Printf("%s: %d\n", key, value)
}

// break and continue
for i := 0; i < 10; i++ {
    if i == 5 {
        break
    }
    if i == 2 {
        continue
    }
    fmt.Println(i)
}
```

## Functions

### Function Declaration
```go
func add(a int, b int) int {
    return a + b
}

// Shorter syntax
func add(a, b int) int {
    return a + b
}

// Multiple return values
func divide(a, b float64) (float64, error) {
    if b == 0 {
        return 0, fmt.Errorf("division by zero")
    }
    return a / b, nil
}

// Named return values
func swap(a, b string) (first, second string) {
    first = b
    second = a
    return
}

// Variadic functions
func sum(numbers ...int) int {
    total := 0
    for _, num := range numbers {
        total += num
    }
    return total
}

sum(1, 2, 3, 4, 5)

// Anonymous functions
add := func(a, b int) int {
    return a + b
}
result := add(3, 5)

// Closures
counter := func() func() int {
    count := 0
    return func() int {
        count++
        return count
    }
}()

counter() // 1
counter() // 2
```

### Defer, Panic, Recover
```go
// defer - executes when function returns
func example() {
    defer fmt.Println("World")
    fmt.Println("Hello")
    // Output: Hello World
}

// defer stack
defer fmt.Println("1")
defer fmt.Println("2")
defer fmt.Println("3")
// Output: 3 2 1 (LIFO)

// panic and recover
func safeDivide(a, b int) {
    defer func() {
        if r := recover(); r != nil {
            fmt.Println("Recovered from:", r)
        }
    }()
    
    if b == 0 {
        panic("division by zero")
    }
    fmt.Println(a / b)
}
```

## Pointers

### Pointer Basics
```go
x := 10
p := &x           // pointer to x
fmt.Println(*p)   // dereference: 10
*p = 20           // change value via pointer
fmt.Println(x)    // 20

// nil pointer
var ptr *int
if ptr == nil {
    fmt.Println("pointer is nil")
}

// pointers with structs
type Person struct {
    Name string
    Age  int
}

person := Person{"Alice", 30}
ptr := &person
ptr.Name = "Bob"  // equivalent to (*ptr).Name
fmt.Println(person.Name) // Bob
```

## Interfaces

### Interface Definition
```go
type Writer interface {
    Write([]byte) (int, error)
}

type Reader interface {
    Read([]byte) (int, error)
}

// Embedded interfaces
type ReadWriter interface {
    Reader
    Writer
}

// Type assertion
var w interface{} = "hello"
str, ok := w.(string)
if ok {
    fmt.Println(str)
}

// Type switch
func describe(i interface{}) {
    switch v := i.(type) {
    case string:
        fmt.Printf("string: %s\n", v)
    case int:
        fmt.Printf("int: %d\n", v)
    case bool:
        fmt.Printf("bool: %v\n", v)
    default:
        fmt.Printf("type: %T\n", i)
    }
}
```

## Goroutines & Channels

### Goroutines
```go
// Simple goroutine
go func() {
    fmt.Println("Running in goroutine")
}()

// Wait for goroutine
import "sync"

var wg sync.WaitGroup
wg.Add(1)
go func() {
    defer wg.Done()
    fmt.Println("Task completed")
}()
wg.Wait()
```

### Channels
```go
// Unbuffered channel
ch := make(chan string)
go func() {
    ch <- "Hello"
}()
msg := <-ch
fmt.Println(msg)

// Buffered channel
ch := make(chan int, 2)
ch <- 1
ch <- 2
fmt.Println(<-ch) // 1
fmt.Println(<-ch) // 2

// Closing channels
close(ch)

// Range over channel
for msg := range ch {
    fmt.Println(msg)
}

// Select for multiple channels
select {
case msg := <-ch1:
    fmt.Println("Received:", msg)
case msg := <-ch2:
    fmt.Println("From channel 2:", msg)
default:
    fmt.Println("No data")
}
```

## Error Handling

### Creating Errors
```go
import "errors"

func divide(a, b float64) (float64, error) {
    if b == 0 {
        return 0, errors.New("division by zero")
    }
    return a / b, nil
}

// Custom error type
type ValidationError struct {
    Field   string
    Message string
}

func (e *ValidationError) Error() string {
    return fmt.Sprintf("%s: %s", e.Field, e.Message)
}

// Using custom error
_, err := someFunction()
if err != nil {
    if validErr, ok := err.(*ValidationError); ok {
        fmt.Println("Validation error:", validErr.Field)
    }
}
```

## Packages & Imports

### Package Organization
```go
package main

import (
    "fmt"
    "math"
    "strings"
    "github.com/some/package"
)

// Exported (public) - starts with uppercase
func PublicFunction() {}
var PublicVar = 10

// Unexported (private) - starts with lowercase
func privateFunction() {}
var privateVar = 5

// Alias imports
import (
    f "fmt"
    "math/rand" // scoped import
)
```

## File I/O

### Reading & Writing Files
```go
import "os"
import "io/ioutil"

// Read entire file
data, err := ioutil.ReadFile("file.txt")
if err != nil {
    fmt.Println(err)
}
fmt.Println(string(data))

// Write to file
err := ioutil.WriteFile("file.txt", []byte("Hello, Go!"), 0644)
if err != nil {
    fmt.Println(err)
}

// Append to file
f, err := os.OpenFile("file.txt", os.O_APPEND|os.O_WRONLY, 0644)
if err != nil {
    fmt.Println(err)
}
defer f.Close()
f.WriteString("New line\n")
```

## Best Practices

- Use meaningful variable names
- Handle errors explicitly
- Keep functions small and focused
- Use interfaces to define contracts
- Leverage goroutines for concurrency
- Avoid global variables
- Use constants for fixed values
- Document exported functions
- Format code with `gofmt`
- Write tests for all functions
- Use `go vet` to check for errors
- Avoid panic in libraries
