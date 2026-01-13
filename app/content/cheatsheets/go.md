---
title: Go (Golang)
description: Complete beginner's guide to Go programming language
category: Programming Language
---

# Go Cheatsheet

**Go** (Golang) is a modern, compiled language designed for **simplicity and speed**. Built by Google for efficient systems programming, Go is perfect for web servers, microservices, and concurrent applications. Clean syntax, fast compilation, and built-in concurrency make Go a joy to use.

## Getting Started

### What is Go?
Go **compiles directly to machine code** (no VM needed). It's statically-typed, garbage-collected, and emphasizes **readability and simplicity**.

### Installation
```bash
# Install Go from golang.org
# Verify installation
go version

# Check Go workspace
go env
```

### Your First Program
```go
package main

import "fmt"

func main() {
    fmt.Println("Hello, World!")
}
```

**Why `package main` and `func main()`?** Every Go program starts here.
- `package main` - executable package
- `func main()` - entry point (no parameters, no return)
- `fmt.Println()` - formatted output

### Running Go
```bash
# Compile and run
go run hello.go

# Build binary
go build hello.go

# Execute binary
./hello

# Install (compile and place in $GOPATH/bin)
go install
```

## Variables & Constants

### Variables
```go
// Explicit type
var age int = 25
var name string = "Alice"
var price float64 = 19.99
var isActive bool = true

// Type inference
var count = 42          // int inferred
var greeting = "Hello"  // string inferred

// Short declaration (inside functions only)
age := 25
name := "Alice"
message := "Hi"

// Multiple variables
var a, b, c int = 1, 2, 3
x, y := 10, 20

// Blank identifier (ignore values)
_, err := someFunction()  // Ignore first return value

// Uninitialized variables (zero values)
var emptyInt int        // 0
var emptyString string  // ""
var emptyBool bool      // false
```

**Why `:=`?** Shorter syntax for declaring and initializing in one line.

### Constants
```go
// Constant (immutable)
const Pi = 3.14159
const Greeting = "Hello"
const MaxUsers int = 100

// Multiple constants
const (
    Summer = 1
    Fall = 2
    Winter = 3
    Spring = 4
)

// Typed vs untyped
const TypedMax int = 100
const UntypedMax = 100  // Can be used as any type
```

## Data Types

### Strings
```go
message := "Hello"
quote := "He said \"Hello\""
multiline := `Line 1
Line 2
Line 3`

// String operations
len(message)                    // 5
message[0]                      // 'H' (byte)
message[1:4]                    // "ell" (substring)
strings.ToUpper(message)        // "HELLO"
strings.ToLower(message)        // "hello"
strings.Contains(message, "ell") // true
strings.Replace(message, "Hello", "Hi", 1)  // "Hi"
strings.Split("a,b,c", ",")     // ["a", "b", "c"]
strings.Join([]string{"a", "b"}, "-")  // "a-b"

// String conversion
strconv.Itoa(42)                // "42" (int to string)
strconv.FormatFloat(3.14, 'f', 2, 64)  // "3.14"
strconv.ParseInt("42", 10, 64)  // 42 (string to int)
```

### Numbers
```go
// Integers (various sizes)
var i int = 42
var i8 int8 = 127
var i16 int16 = 32767
var i64 int64 = 9223372036854775807

// Unsigned
var u uint = 42
var u32 uint32 = 1000

// Floating point
var f32 float32 = 3.14
var f64 float64 = 3.14159  // Default

// Operations
a, b := 10, 3
a + b      // 13
a - b      // 7
a * b      // 30
a / b      // 3 (integer division)
a % b      // 1 (modulo)
a ** b     // Not supported; use math.Pow

// Math package
import "math"
math.Sqrt(16)      // 4.0
math.Pow(2, 3)     // 8
math.Max(5, 3)     // 5
math.Min(5, 3)     // 3
```

### Arrays & Slices
```go
// Array (fixed size)
var numbers [5]int              // [0, 0, 0, 0, 0]
var names [3]string = [3]string{"Alice", "Bob", "Charlie"}
arr := [...]int{1, 2, 3, 4, 5}  // Size inferred

// Slice (dynamic)
var numbers []int                  // nil slice
numbers := []int{1, 2, 3, 4, 5}   // Slice literal
slice := numbers[1:4]              // [2, 3, 4] (excludes end)

// Slice operations
len(slice)            // 3 - length
cap(numbers)          // 5 - capacity
append(numbers, 6)    // Add to end
append(slice, 7, 8)   // Add multiple

// Make (allocate with size and capacity)
slice := make([]int, 3, 5)  // length 3, capacity 5

// Iteration
for i := 0; i < len(numbers); i++ {
    fmt.Println(numbers[i])
}

for i, num := range numbers {
    fmt.Println(i, num)  // index, value
}

for _, num := range numbers {  // Ignore index
    fmt.Println(num)
}
```

### Maps (Dictionaries)
```go
// Create map
var ages map[string]int             // nil map
ages := map[string]int{}            // Empty map
people := map[string]int{
    "Alice": 25,
    "Bob": 30,
}

// Add/Update
people["Charlie"] = 35

// Get
age := people["Alice"]              // 25
age, exists := people["Dave"]       // 0, false (value, ok pattern)

// Delete
delete(people, "Alice")

// Check existence
if age, ok := people["Alice"]; ok {
    fmt.Println("Age:", age)
} else {
    fmt.Println("Not found")
}

// Iterate
for name, age := range people {
    fmt.Println(name, age)
}
```

## Control Flow

### If Statements
```go
age := 18

if age >= 18 {
    fmt.Println("Adult")
} else if age >= 13 {
    fmt.Println("Teen")
} else {
    fmt.Println("Child")
}

// Single statement if
if age := 20; age >= 18 {  // age only available in if block
    fmt.Println("Adult")
}
```

### Switch Statement
```go
day := "Monday"

switch day {
case "Monday":
    fmt.Println("Start of week")
case "Friday":
    fmt.Println("Almost weekend")
case "Saturday", "Sunday":
    fmt.Println("Weekend")
default:
    fmt.Println("Midweek")
}

// Switch without expression (like if-else)
age := 25
switch {
case age < 13:
    fmt.Println("Child")
case age < 18:
    fmt.Println("Teen")
default:
    fmt.Println("Adult")
}
```

### For Loop
```go
// Traditional
for i := 0; i < 5; i++ {
    fmt.Println(i)
}

// While-style
i := 0
for i < 5 {
    fmt.Println(i)
    i++
}

// Infinite
for {
    if condition {
        break
    }
    fmt.Println("infinite")
}

// Range
numbers := []int{10, 20, 30}
for i, num := range numbers {
    fmt.Println(i, num)
}

// Just values
for _, num := range numbers {
    fmt.Println(num)
}

// Control
for i := 0; i < 10; i++ {
    if i == 3 {
        continue  // Skip to next iteration
    }
    if i == 7 {
        break     // Exit loop
    }
}
```

## Functions (🟢 Beginner)

### Basic Functions
```go
// Function definition
func add(a, b int) int {
    return a + b
}

// Multiple return types
func divide(a, b int) (int, error) {
    if b == 0 {
        return 0, fmt.Errorf("division by zero")
    }
    return a / b, nil
}

// Using multiple returns
result, err := divide(10, 2)
if err != nil {
    fmt.Println("Error:", err)
} else {
    fmt.Println("Result:", result)
}

// Named return values
func swap(a, b int) (x, y int) {
    x = b
    y = a
    return  // Implicit return
}

// Variadic function
func sum(numbers ...int) int {
    total := 0
    for _, num := range numbers {
        total += num
    }
    return total
}

sum(1, 2, 3, 4)  // 10

// Function as parameter
func apply(operation func(int, int) int, a, b int) int {
    return operation(a, b)
}

apply(add, 5, 3)  // 8

// Anonymous function (closure)
increment := func(x int) int {
    return x + 1
}

increment(5)  // 6
```

## Structs & Interfaces (🟡 Intermediate)

### Structs
```go
// Define struct
type Person struct {
    Name string
    Age  int
    City string
}

// Create struct
person := Person{
    Name: "Alice",
    Age: 25,
    City: "NYC",
}

// Access fields
fmt.Println(person.Name)  // "Alice"
person.Age = 26

// Using var (zero values)
var p Person  // Name="", Age=0, City=""

// Pointer to struct
ptr := &person
ptr.Name = "Bob"  // Automatically dereferenced
(*ptr).Age = 30   // Also works, but ptr.Age is preferred
```

### Methods
```go
// Method (function with receiver)
func (p Person) Greet() string {
    return "Hello, I'm " + p.Name
}

// Pointer receiver (can modify)
func (p *Person) Birthday() {
    p.Age++
}

person := Person{"Alice", 25, "NYC"}
fmt.Println(person.Greet())  // "Hello, I'm Alice"
person.Birthday()
fmt.Println(person.Age)      // 26
```

### Interfaces
```go
// Define interface
type Speaker interface {
    Speak() string
}

// Implement interface
func (p Person) Speak() string {
    return p.Name + " speaks"
}

// Use interface
var s Speaker = person
fmt.Println(s.Speak())  // "Alice speaks"

// Empty interface (any type)
var anything interface{}
anything = 42
anything = "hello"
anything = []int{1, 2, 3}
```

## Error Handling

```go
import "errors"

// Returning errors
func riskyOperation() error {
    if someCondition {
        return errors.New("something went wrong")
    }
    return nil
}

// Check errors
err := riskyOperation()
if err != nil {
    fmt.Println("Error:", err)
}

// Custom errors
type ValidationError struct {
    Field  string
    Reason string
}

func (e ValidationError) Error() string {
    return fmt.Sprintf("%s: %s", e.Field, e.Reason)
}

// Using custom error
err := ValidationError{
    Field: "Email",
    Reason: "Invalid format",
}
fmt.Println(err)  // "Email: Invalid format"
```

## Concurrency

### Goroutines
```go
// Launch goroutine (lightweight thread)
go functionName()

func main() {
    // Non-blocking call
    go printMessage("Hello")
    go printMessage("World")
    
    time.Sleep(time.Second)  // Wait for goroutines
}

func printMessage(msg string) {
    fmt.Println(msg)
}
```

### Channels
```go
// Create channel
messages := make(chan string)

// Send to channel
messages <- "Hello"

// Receive from channel
msg := <-messages
fmt.Println(msg)  // "Hello"

// Buffered channel
ch := make(chan int, 2)  // Buffer size 2
ch <- 1
ch <- 2

val1 := <-ch  // 1
val2 := <-ch  // 2
```

## Practical Examples

### Simple HTTP Server
```go
package main

import (
    "fmt"
    "net/http"
)

func handler(w http.ResponseWriter, r *http.Request) {
    fmt.Fprintf(w, "Hello, %s!", r.URL.Path[1:])
}

func main() {
    http.HandleFunc("/", handler)
    http.ListenAndServe(":8080", nil)
}
```

### File Operations
```go
import "os"
import "io/ioutil"

// Read file
data, err := ioutil.ReadFile("file.txt")
if err != nil {
    fmt.Println("Error:", err)
}
fmt.Println(string(data))

// Write file
content := []byte("Hello, World!")
err := ioutil.WriteFile("output.txt", content, 0644)
if err != nil {
    fmt.Println("Error:", err)
}
```

## Testing (🟡 Intermediate)
Testing ensures your code works as expected. Go's testing philosophy is **simple, fast, and built-in**. No special frameworks needed!

### Writing Unit Tests
```go
// file.go
package main

func Add(a, b int) int {
    return a + b
}

// file_test.go - always use _test suffix
package main

import "testing"

func TestAdd(t *testing.T) {
    result := Add(2, 3)
    expected := 5
    
    if result != expected {
        t.Errorf("Add(2, 3) = %d, expected %d", result, expected)
    }
}
```

**Important:** Test functions must:
- Start with `Test`
- Take `*testing.T` parameter
- Be in `_test.go` files

### Running Tests
```bash
# Run all tests
go test

# Run with verbose output
go test -v

# Run specific test
go test -run TestAdd

# Show test coverage
go test -cover
```

### Table-Driven Tests
Elegant way to test multiple scenarios:

```go
func TestAddTableDriven(t *testing.T) {
    tests := []struct {
        name     string
        a, b     int
        expected int
    }{
        {"positive numbers", 2, 3, 5},
        {"with zero", 5, 0, 5},
        {"negative numbers", -2, -3, -5},
        {"mixed signs", 10, -5, 5},
    }
    
    for _, test := range tests {
        t.Run(test.name, func(t *testing.T) {
            result := Add(test.a, test.b)
            if result != test.expected {
                t.Errorf("got %d, expected %d", result, test.expected)
            }
        })
    }
}
```

**Why this pattern?** Easy to add new test cases - just add to the slice!

### Sub-tests
```go
func TestUserService(t *testing.T) {
    t.Run("create user", func(t *testing.T) {
        user := CreateUser("Alice")
        if user.Name != "Alice" {
            t.Fail()
        }
    })
    
    t.Run("delete user", func(t *testing.T) {
        DeleteUser(1)
        // assert user is deleted
    })
}
```

### Test Setup & Cleanup
```go
func TestWithSetup(t *testing.T) {
    // Setup
    database := setupTestDB()
    defer database.Close()  // Cleanup after test
    
    // Test
    result := database.Query("SELECT * FROM users")
    if result == nil {
        t.Fatal("expected result, got nil")
    }
}
```

**`t.Fatal()` vs `t.Error()`:**
- `t.Fatal()` - stops test immediately
- `t.Error()` - logs error, continues test

### Benchmark Testing
Measure performance:

```go
func BenchmarkAdd(b *testing.B) {
    for i := 0; i < b.N; i++ {
        Add(2, 3)
    }
}

// Run benchmarks
// go test -bench=. -benchmem
```

Output example:
```
BenchmarkAdd-8    1000000000    1.03 ns/op    0 B/op    0 allocs/op
```
- 1 billion operations per second
- 1.03 nanoseconds per operation
- 0 memory allocations

### Helper Functions
```go
func TestMultipleAsserts(t *testing.T) {
    testCases := []string{"Alice", "Bob", "Charlie"}
    
    for _, name := range testCases {
        user := CreateUser(name)
        assertUserName(t, user, name)  // Helper function
    }
}

func assertUserName(t *testing.T, user User, expected string) {
    if user.Name != expected {
        t.Errorf("expected %s, got %s", expected, user.Name)
    }
}
```

### Testing HTTP Handlers
```go
import "net/http/httptest"

func TestHandler(t *testing.T) {
    req := httptest.NewRequest("GET", "/api/users", nil)
    w := httptest.NewRecorder()
    
    handler(w, req)
    
    if w.Code != http.StatusOK {
        t.Errorf("expected 200, got %d", w.Code)
    }
}
```

**Why this matters?** Manual testing is error-prone. Automated tests catch regressions!

## Common Mistakes

| ❌ Mistake | ✅ Fix |
|-----------|--------|
| Ignoring errors silently | Always check `if err != nil { return err }` |
| Unused imports | Remove imports, Go compiler catches this |
| Forgetting defer for cleanup | Use `defer file.Close()` to ensure cleanup |
| Returning nil interface | Return `nil` not empty interface, `var x interface{}` |
| Race conditions with goroutines | Use channels or sync.Mutex for synchronization |
| Copying large structs | Pass pointers to large structs, not values |
| Not closing channels | Sender must close, receivers can range over it |
| Mixing := and var incorrectly | `:=` only in functions, `var` for package-level |

## Best Practices

1. **Handle errors explicitly:**
   ```go
   if err != nil {
       // Handle error
   }
   ```

2. **Use interfaces for abstraction**

3. **Goroutines for concurrency:**
   ```go
   go doSomething()
   ```

4. **Keep functions short and focused**

5. **Use meaningful names**

6. **Write tests as you code** - test-driven development

7. **Use table-driven tests** - scalable test patterns

8. **Test the happy path AND edge cases** - empty inputs, nil values, limits

## Summary

Go is **simple, fast, and powerful**. Its concurrency features, fast compilation, and clean syntax make it ideal for modern systems. Perfect for microservices, APIs, and backend services!

Key strengths:
- **Fast compilation** - compiles to machine code
- **Built-in concurrency** - goroutines and channels
- **Simple syntax** - easy to learn and read
- **Cross-platform** - compile for any OS
- **Great for DevOps** - Kubernetes, Docker, Terraform
- **Built-in testing** - no frameworks needed, just write _test.go files
