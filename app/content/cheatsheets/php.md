---
title: PHP
description: Beginner's guide to PHP web development
category: Programming Language
---

# PHP Cheatsheet

**PHP** (Hypertext Preprocessor) is a server-side language perfect for web development. It powers 77% of websites! Easy to learn, runs on servers, and generates dynamic HTML pages.

## Getting Started

### Installation
```bash
# macOS
brew install php

# Linux
sudo apt-get install php

# Windows - download from php.net

# Verify
php --version

# Run local server
php -S localhost:8000
```

### Your First Program
```php
<?php
echo "Hello, World!";
?>
```

**Why `<?php` and `?>`?** PHP files are mixed HTML and PHP. Code between those tags executes server-side.

### Running PHP
```bash
# Direct execution
php hello.php

# In browser (with local server)
# Open http://localhost:8000/hello.php
```

## Variables & Types

```php
<?php
// Variable (starts with $)
$name = "Alice";
$age = 25;
$price = 19.99;
$isActive = true;

// No type declaration needed
$data = "string";
$data = 42;      // Can change type

// Type hints (PHP 7+)
function add(int $a, int $b): int {
    return $a + $b;
}

// Constants
define("MAX_USERS", 100);
const GREETING = "Hello";

// Arrays
$numbers = [1, 2, 3, 4, 5];
$person = [
    "name" => "Alice",
    "age" => 25,
];
?>
```

## Strings

```php
<?php
$text = "Hello World";

// Operations
strlen($text)               // 11
str_contains($text, "World")  // true
strtoupper($text)           // "HELLO WORLD"
strtolower($text)           // "hello world"
substr($text, 0, 5)         // "Hello"
str_replace("Hello", "Hi", $text)  // "Hi World"

// String interpolation
$name = "Alice";
echo "Hello, $name";         // "Hello, Alice"
echo "Hello, {$name}";       // Also works

// Concatenation
"Hello" . " " . "World";     // "Hello World"
?>
```

## Arrays

```php
<?php
// Indexed array
$fruits = ["apple", "banana", "orange"];
echo $fruits[0];           // "apple"

// Associative array
$person = [
    "name" => "Alice",
    "age" => 25,
    "city" => "NYC"
];
echo $person["name"];       // "Alice"

// Array functions
count($fruits)              // 3
in_array("apple", $fruits)  // true
array_merge($arr1, $arr2)
array_slice($arr, 1, 2)     // Get subset
array_push($fruits, "grape")  // Add to end
array_pop($fruits)          // Remove last
sort($fruits)               // Sort array
?>
```

## Control Flow

```php
<?php
// If statement
$age = 18;
if ($age >= 18) {
    echo "Adult";
} elseif ($age >= 13) {
    echo "Teen";
} else {
    echo "Child";
}

// Switch
switch ($day) {
    case "Monday":
        echo "Start of week";
        break;
    default:
        echo "Other day";
}

// Ternary
$status = $age >= 18 ? "Adult" : "Minor";

// Loops
for ($i = 0; $i < 5; $i++) {
    echo $i;
}

while ($count < 10) {
    $count++;
}

foreach ($fruits as $fruit) {
    echo $fruit;
}

foreach ($person as $key => $value) {
    echo "$key: $value";
}
?>
```

## Functions

```php
<?php
// Define function
function add($a, $b) {
    return $a + $b;
}

// Call function
echo add(5, 3);  // 8

// Default parameters
function greet($name = "Guest") {
    echo "Hello, $name";
}

greet();         // "Hello, Guest"
greet("Alice");  // "Hello, Alice"

// Variable arguments
function sum(...$numbers) {
    $total = 0;
    foreach ($numbers as $num) {
        $total += $num;
    }
    return $total;
}

echo sum(1, 2, 3, 4, 5);  // 15
?>
```

## Classes & Objects

```php
<?php
class Person {
    public $name;
    public $age;

    // Constructor
    public function __construct($name, $age) {
        $this->name = $name;
        $this->age = $age;
    }

    // Method
    public function greet() {
        return "Hello, I'm {$this->name}";
    }
}

// Create object
$person = new Person("Alice", 25);
echo $person->greet();  // "Hello, I'm Alice"
echo $person->age;      // 25
?>
```

## Access Modifiers

```php
<?php
class User {
    public $name;          // Accessible everywhere
    private $userId;       // Only in this class
    protected $role;       // In this class and extends

    private function hashPassword($pwd) {
        return md5($pwd);
    }
}
?>
```

## Inheritance

```php
<?php
class Animal {
    public function speak() {
        return "Some sound";
    }
}

class Dog extends Animal {
    public function speak() {
        return "Woof!";
    }
}

$dog = new Dog();
echo $dog->speak();  // "Woof!"
?>
```

## Interfaces

```php
<?php
interface Animal {
    public function speak();
}

class Dog implements Animal {
    public function speak() {
        return "Woof!";
    }
}
?>
```

## Working with Databases

```php
<?php
// MySQLi (procedural)
$conn = new mysqli("localhost", "user", "password", "database");

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Execute query
$sql = "SELECT * FROM users WHERE age > 18";
$result = $conn->query($sql);

// Fetch results
while($row = $result->fetch_assoc()) {
    echo $row["name"];
}

$conn->close();
?>
```

## Web Forms

```php
<?php
// Form submission
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = htmlspecialchars($_POST["name"]);
    $email = htmlspecialchars($_POST["email"]);
    
    echo "Name: $name, Email: $email";
}
?>
<form method="POST">
    <input type="text" name="name" placeholder="Name">
    <input type="email" name="email" placeholder="Email">
    <button type="submit">Submit</button>
</form>
```

## Sessions & Cookies

```php
<?php
// Session
session_start();
$_SESSION["user"] = "Alice";

// Retrieve
echo $_SESSION["user"];  // "Alice"

// Cookie (lasts longer)
setcookie("theme", "dark", time() + (86400 * 30));  // 30 days

// Retrieve
echo $_COOKIE["theme"];  // "dark"
?>
```

## File Operations

```php
<?php
// Read file
$content = file_get_contents("file.txt");

// Write file
file_put_contents("output.txt", "Hello, World!");

// Append
file_put_contents("log.txt", "New entry\n", FILE_APPEND);

// Check if file exists
if (file_exists("file.txt")) {
    echo "File exists";
}
?>
```

## Error Handling

```php
<?php
try {
    if (!file_exists("file.txt")) {
        throw new Exception("File not found");
    }
} catch (Exception $e) {
    echo "Error: " . $e->getMessage();
} finally {
    echo "Cleanup";
}
?>
```

## Common Mistakes

| ❌ Mistake | ✅ Fix |
|-----------|--------|
| SQL injection vulnerabilities | Use prepared statements: `$stmt->bindParam()` |
| Not escaping user input | Use `htmlspecialchars()`: `echo htmlspecialchars($user_input);` |
| Leaving `<?php` without closing `?>` | Always close tags or omit `?>` at file end |
| Magic quotes deprecated | Don't use `addslashes()`, use prepared statements |
| Global variables with extract() | Avoid `extract()`, manually assign variables |
| Session fixation vulnerabilities | Always call `session_regenerate_id()` after login |
| Headers already sent errors | No output before `header()` calls |
| Not validating form input | Always validate and sanitize: `filter_var($email, FILTER_VALIDATE_EMAIL)` |

## Quick Reference

| Concept | Example |
|---------|---------|
| Echo/Print | `echo "Hello";` |
| Variable | `$var = 10;` |
| Array | `$arr = [1, 2, 3];` |
| Associative array | `$data = ['name' => 'Alice', 'age' => 25];` |
| If statement | `if ($x > 5) { }` |
| For loop | `for ($i = 0; $i < 10; $i++) { }` |
| Function | `function add($a, $b) { return $a + $b; }` |
| Class | `class MyClass { public $prop; }` |
| Database query | `$stmt = $pdo->prepare('SELECT * FROM users WHERE id = ?');` |
| Session | `$_SESSION['user'] = 'Alice';` |

## Summary

PHP is **easy to learn** and perfect for web development. Used by WordPress, Facebook, and millions of websites!

Key strengths:
- **Easy to learn** - simple syntax
- **Server-side** - executes on server
- **Database integration** - MySQL, PostgreSQL
- **Web-focused** - built for HTTP/HTML
- **Huge ecosystem** - Laravel, Symfony frameworks
