---
title: PHP
slug: php
category: Programming Language
description: Server-side scripting language for web development with easy database integration and vast hosting support.
---

# PHP Cheatsheet

## Basics

### Hello World
```php
<?php
echo "Hello, World!";
echo "String 1", "String 2"; // Multiple outputs
print "Hello"; // Single output

// Comments
// Single line comment
/* Multi-line
   comment */
```

### Variables & Types
```php
<?php
// Variables (dynamic typing)
$name = "Alice";
$age = 30;
$price = 19.99;
$isActive = true;
$empty = null;

// Type checking
is_string($name);
is_int($age);
is_float($price);
is_bool($isActive);
is_null($empty);
is_array($arr);

// Type casting
$num = (int)"42";
$str = (string)42;
$float = (float)"3.14";
$bool = (bool)1;

// Constants
define("SITE_NAME", "MyWebsite");
const API_KEY = "secret123";

// Variable variables
$var = "hello";
$$var = "world"; // $hello = "world"
```

### Strings
```php
<?php
$name = "Alice";
$greeting = "Hello, $name"; // Interpolation
$greeting = 'Hello, ' . $name; // Concatenation

// String functions
strlen($name);
strtoupper($name); // "ALICE"
strtolower($name); // "alice"
strpos($name, "li"); // 2
substr($name, 0, 3); // "Ali"
str_replace("Alice", "Bob", $greeting);
trim("  spaces  ");
explode(",", "a,b,c"); // ["a", "b", "c"]
implode(",", ["a", "b", "c"]); // "a,b,c"
```

### Arrays
```php
<?php
// Indexed array
$colors = array("Red", "Green", "Blue");
$colors = ["Red", "Green", "Blue"];
echo $colors[0]; // "Red"

// Associative array
$person = ["name" => "Alice", "age" => 30];
echo $person["name"]; // "Alice"

// Multi-dimensional array
$matrix = [[1, 2], [3, 4]];

// Array functions
count($colors);
array_push($colors, "Yellow");
array_pop($colors);
array_merge($colors, ["Pink"]);
in_array("Red", $colors);
array_key_exists("name", $person);
array_keys($person); // ["name", "age"]
array_values($person); // ["Alice", 30]

// Iteration
foreach ($colors as $color) {
    echo $color;
}

foreach ($person as $key => $value) {
    echo "$key: $value";
}
```

## Control Structures

### Conditionals
```php
<?php
$age = 20;

// if-else
if ($age >= 18) {
    echo "Adult";
} elseif ($age >= 13) {
    echo "Teen";
} else {
    echo "Child";
}

// Ternary operator
$status = ($age >= 18) ? "Adult" : "Minor";

// Null coalescing
$name = $_GET["name"] ?? "Guest";

// switch
switch ($day) {
    case "Monday":
        echo "Start of week";
        break;
    case "Friday":
        echo "End of week";
        break;
    default:
        echo "Mid week";
}
```

### Loops
```php
<?php
// for loop
for ($i = 0; $i < 10; $i++) {
    echo $i;
}

// while loop
$count = 0;
while ($count < 5) {
    echo $count;
    $count++;
}

// do-while
do {
    echo $count;
    $count++;
} while ($count < 5);

// foreach
$colors = ["Red", "Green", "Blue"];
foreach ($colors as $color) {
    echo $color;
}

// break and continue
for ($i = 0; $i < 10; $i++) {
    if ($i == 5) break;
    if ($i == 2) continue;
    echo $i;
}
```

## Functions

### Function Definition
```php
<?php
function add($a, $b) {
    return $a + $b;
}

echo add(3, 5); // 8

// Default parameters
function greet($name = "Guest") {
    echo "Hello, $name";
}

// Variable parameters
function sum(...$numbers) {
    $total = 0;
    foreach ($numbers as $num) {
        $total += $num;
    }
    return $total;
}

echo sum(1, 2, 3, 4); // 10

// Pass by reference
function increment(&$num) {
    $num++;
}

$x = 5;
increment($x);
echo $x; // 6

// Anonymous function
$multiply = function($a, $b) {
    return $a * $b;
};

echo $multiply(3, 4); // 12

// Arrow function (PHP 7.4+)
$double = fn($x) => $x * 2;
echo $double(5); // 10
```

## Object-Oriented Programming

### Classes & Objects
```php
<?php
class Person {
    public $name;
    private $age;
    protected $email;
    
    public function __construct($name, $age) {
        $this->name = $name;
        $this->age = $age;
    }
    
    public function getAge() {
        return $this->age;
    }
    
    public function setAge($age) {
        if ($age > 0) {
            $this->age = $age;
        }
    }
}

$person = new Person("Alice", 30);
echo $person->name; // Alice
echo $person->getAge(); // 30
```

### Inheritance
```php
<?php
class Employee extends Person {
    public $employeeId;
    
    public function __construct($name, $age, $id) {
        parent::__construct($name, $age);
        $this->employeeId = $id;
    }
}

$emp = new Employee("Bob", 25, "E123");
echo $emp->employeeId; // E123
```

### Interfaces & Traits
```php
<?php
interface Animal {
    public function speak();
    public function move();
}

class Dog implements Animal {
    public function speak() {
        return "Woof!";
    }
    
    public function move() {
        return "Running...";
    }
}

// Traits (code reuse without inheritance)
trait Logger {
    public function log($message) {
        echo "Log: $message";
    }
}

class Application {
    use Logger;
}

$app = new Application();
$app->log("App started");
```

## Working with Data

### JSON
```php
<?php
// Encode to JSON
$person = ["name" => "Alice", "age" => 30];
$json = json_encode($person);
echo $json; // {"name":"Alice","age":30}

// Decode JSON
$data = json_decode($json, true); // assoc array
$data = json_decode($json); // object
echo $data["name"]; // Alice
```

### Form Handling
```php
<?php
// GET request
$name = $_GET["name"] ?? null;

// POST request
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $email = $_POST["email"];
    // Process form
}

// File upload
if (isset($_FILES["upload"])) {
    $file = $_FILES["upload"];
    $name = $file["name"];
    $tmpName = $file["tmp_name"];
    move_uploaded_file($tmpName, "uploads/" . $name);
}
```

## Built-in Functions

### String Functions
```php
<?php
strlen("hello"); // 5
strpos("hello world", "world"); // 6
substr("hello", 0, 3); // "hel"
str_replace("o", "0", "hello"); // "hell0"
strtoupper("hello"); // "HELLO"
strtolower("HELLO"); // "hello"
trim("  hello  "); // "hello"
explode(" ", "hello world"); // ["hello", "world"]
```

### Array Functions
```php
<?php
count($arr); // length
array_push($arr, $value);
array_pop($arr);
array_merge($arr1, $arr2);
array_keys($arr);
array_values($arr);
in_array($value, $arr);
array_key_exists($key, $arr);
array_map(fn($x) => $x * 2, $arr);
array_filter($arr, fn($x) => $x > 5);
```

### Date & Time
```php
<?php
date("Y-m-d"); // "2024-01-13"
date("H:i:s"); // "14:30:45"
time(); // Unix timestamp
strtotime("2024-01-13");
date_create("2024-01-13");
```

## Regular Expressions

### Regex Patterns
```php
<?php
// Match
if (preg_match("/^[a-z]+$/i", "Hello")) {
    echo "Matched";
}

// Replace
$text = "Hello World";
$new = preg_replace("/World/", "PHP", $text);

// Split
$parts = preg_split("/\s+/", "hello world foo");

// Match all
preg_match_all("/\d+/", "a1b2c3", $matches);
```

## File Handling

### Reading & Writing Files
```php
<?php
// Read file
$content = file_get_contents("file.txt");

// Write file
file_put_contents("file.txt", "Hello World");

// Append
file_put_contents("file.txt", "New line\n", FILE_APPEND);

// Line by line
$lines = file("file.txt");
foreach ($lines as $line) {
    echo trim($line);
}
```

## Best Practices

- Use double quotes for interpolation, single for literals
- Always validate and sanitize user input
- Use prepared statements to prevent SQL injection
- Implement proper error handling
- Use meaningful variable names
- Follow PSR-12 coding standards
- Use type hints and return types (PHP 7+)
- Avoid global variables
- Use autoloading for classes
- Keep business logic separate from presentation
