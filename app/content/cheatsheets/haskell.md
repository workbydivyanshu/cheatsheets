---
title: Haskell
description: Complete beginner-friendly Haskell guide for functional programming
category: Programming Language
---

# Haskell - Complete Beginner's Guide

> **What is Haskell?** Haskell is a purely functional programming language. If you want to understand what functional programming really means, Haskell is it! Pure, elegant, and mathematically beautiful. Perfect for building reliable systems!

## 1. Getting Started

### Your First Program

```haskell
main = putStrLn "Hello, Haskell!"

-- This prints: Hello, Haskell!
```

### Comments

```haskell
-- Single line comment

{- Multi-line
   comment
   like this -}
```

---

## 2. Basic Types and Functions

### Simple Expressions

```haskell
ghci> 5 + 3
8

ghci> 10 - 4
6

ghci> 3 * 4
12

ghci> 15 / 3
5.0

ghci> 17 `mod` 5
2

ghci> 2 ^ 3
8
```

### Declaring Variables and Functions

```haskell
-- Variable (in GHCi)
let x = 5
let name = "Alice"

-- Function definition
add a b = a + b

-- Call function
add 5 3          -- Returns 8

-- Function with pattern matching
greet "Alice" = "Hello, Alice!"
greet name = "Hello, " ++ name ++ "!"

greet "Alice"    -- "Hello, Alice!"
greet "Bob"      -- "Hello, Bob!"
```

---

## 3. Type Annotations

### Declaring Types

```haskell
-- Function with type annotation
add :: Int -> Int -> Int
add a b = a + b

-- Variables with type
x :: Int
x = 5

y :: String
y = "Hello"

z :: Double
z = 3.14

-- Lists
nums :: [Int]
nums = [1, 2, 3, 4, 5]

-- Boolean
active :: Bool
active = True
```

### Common Types

```haskell
Int          -- Integers: 42, -10
Integer      -- Big integers
Double       -- Decimals: 3.14
Float        -- Single precision
String       -- Text: "Hello"
Char         -- Single character: 'a'
Bool         -- True or False

[Int]        -- List of integers
[String]     -- List of strings
(Int, String) -- Tuple: (1, "hello")
```

---

## 4. Strings and Lists

### Strings

```haskell
-- String is a list of characters
"Hello"

-- Concatenation
"Hello" ++ " " ++ "World"   -- "Hello World"

-- String length
length "Hello"              -- 5

-- Get character at position
"Hello" !! 0                -- 'H'

-- Useful functions
head "Hello"                -- 'H'
tail "Hello"                -- "ello"
init "Hello"                -- "Hell"
last "Hello"                -- 'o'
reverse "Hello"             -- "olleH"
```

### Lists

```haskell
-- Create lists
[1, 2, 3, 4, 5]
['a', 'b', 'c']

-- Ranges
[1..5]                      -- [1,2,3,4,5]
[1, 3..10]                  -- [1,3,5,7,9]
[10, 9..1]                  -- [10,9,8,7,6,5,4,3,2,1] (descending)
replicate 3 5               -- [5,5,5]

-- List operations
[1,2,3] ++ [4,5]            -- [1,2,3,4,5] (concatenate)
5 : [1,2,3]                 -- [5,1,2,3] (cons - prepend)
head [1,2,3]                -- 1
tail [1,2,3]                -- [2,3]
length [1,2,3]              -- 3
sum [1,2,3,4,5]             -- 15
product [1,2,3,4]           -- 24
reverse [1,2,3]             -- [3,2,1]
```

---

## 5. Lists and Comprehensions

### List Comprehensions (Beautiful!)

```haskell
-- List all numbers 1-10 squared
[x^2 | x <- [1..10]]
-- [1,4,9,16,25,36,49,64,81,100]

-- Only even numbers squared
[x^2 | x <- [1..10], even x]
-- [4,16,36,64,100]

-- Pairs of numbers
[(x, y) | x <- [1,2,3], y <- [4,5,6]]
-- [(1,4),(1,5),(1,6),(2,4),(2,5),(2,6),...]

-- With multiple conditions
[x | x <- [1..20], x > 10, x < 15]
-- [11,12,13,14]
```

### Useful List Functions

```haskell
-- Map (transform each)
map (\x -> x * 2) [1,2,3,4]      -- [2,4,6,8]
map (+1) [1,2,3]                  -- [2,3,4]

-- Filter (keep matching)
filter even [1,2,3,4,5,6]         -- [2,4,6]
filter (>3) [1,2,3,4,5]           -- [4,5]

-- Fold (combine all)
foldl (+) 0 [1,2,3,4,5]           -- 15 (sum)
foldl (*) 1 [1,2,3,4]             -- 24 (product)

-- Zip (pair up elements)
zip [1,2,3] ['a','b','c']         -- [(1,'a'),(2,'b'),(3,'c')]
```

---

## 6. Functions and Pattern Matching

### Pattern Matching

```haskell
-- Matching specific values
greet :: String -> String
greet "Alice" = "Hello, Alice!"
greet "Bob" = "Hi, Bob!"
greet name = "Hello, " ++ name

-- Matching patterns
isEmpty :: [a] -> Bool
isEmpty [] = True           -- Empty list
isEmpty _ = False           -- Anything else

-- Matching list structure
getFirst :: [a] -> a
getFirst (x:_) = x          -- First element

getSecond :: [a] -> a
getSecond (_:x:_) = x       -- Second element

-- Recursive patterns
sumList :: [Int] -> Int
sumList [] = 0              -- Base case
sumList (x:xs) = x + sumList xs  -- Recursive case
```

### Guards

```haskell
-- Use guards for conditions
classify :: Int -> String
classify x
  | x < 0 = "Negative"
  | x == 0 = "Zero"
  | x < 10 = "Single digit"
  | otherwise = "Multiple digits"
```

---

## 7. Recursion (Fundamental!)

### Classic Recursion Examples

```haskell
-- Factorial
factorial :: Int -> Int
factorial 0 = 1             -- Base case
factorial n = n * factorial (n-1)  -- Recursive case

factorial 5                 -- 120

-- List length
listLength :: [a] -> Int
listLength [] = 0
listLength (_:xs) = 1 + listLength xs

listLength [1,2,3]          -- 3

-- List reversal
reverseList :: [a] -> [a]
reverseList [] = []
reverseList (x:xs) = reverseList xs ++ [x]

-- Get max element
maxElement :: [Int] -> Int
maxElement [x] = x
maxElement (x:xs) = max x (maxElement xs)
```

---

## 8. Higher-Order Functions

### Functions That Work with Functions

```haskell
-- Apply function twice
applyTwice :: (a -> a) -> a -> a
applyTwice f x = f (f x)

applyTwice (+1) 5           -- 7

-- Function composition
(.) :: (b -> c) -> (a -> b) -> (a -> c)
(f . g) x = f (g x)

let double = (*2)
let addOne = (+1)
(double . addOne) 5         -- 12: (5+1)*2

-- Map and filter (already shown but powerful!)
map (+1) [1,2,3]            -- [2,3,4]
filter (>2) [1,2,3,4]       -- [3,4]
```

---

## 9. Tuples

### Working with Tuples

```haskell
-- Create tuple
let person = ("John", 30, "NYC")

-- Access elements
fst ("a", "b")              -- "a"
snd ("a", "b")              -- "b"

-- Pattern match
let (name, age, city) = person
-- name = "John", age = 30, city = "NYC"

-- List of tuples
let users = [("Alice", 25), ("Bob", 30), ("Charlie", 22)]

-- Get all names
map fst users               -- ["Alice","Bob","Charlie"]
```

---

## 10. Maybe Type (Null Safety!)

### Handling Missing Values

```haskell
-- Maybe is Some(value) or Nothing
findUser :: Int -> Maybe String
findUser 1 = Just "Alice"
findUser 2 = Just "Bob"
findUser _ = Nothing

-- Pattern match on Maybe
case findUser 1 of
  Just name -> "Found: " ++ name
  Nothing -> "Not found"

-- Safer operations
findUser 1 >>= \user -> Just (user ++ "!")  -- Just "Alice!"
findUser 3 >>= \user -> Just (user ++ "!")  -- Nothing
```

---

## 11. Practical Example

### Count Word Occurrences

```haskell
import Data.List (group, sort)

countWords :: String -> [(String, Int)]
countWords sentence =
  let words = words sentence
      sorted = sort words
      grouped = group sorted
  in map (\g -> (head g, length g)) grouped

-- Usage:
-- countWords "hello world hello haskell hello"
-- [("hello",3),("haskell",1),("world",1)]
```

### Fibonacci Sequence

```haskell
-- Infinite list of Fibonacci numbers
fibs :: [Integer]
fibs = 0 : 1 : zipWith (+) fibs (tail fibs)

-- Get first n Fibonacci numbers
take 10 fibs  -- [0,1,1,2,3,5,8,13,21,34]
```

---

## 12. Key Concepts

### Immutability

```haskell
-- Everything is immutable
let x = 5
-- x = 10  -- Can't do this in Haskell!
let y = 10  -- Must create new variable

-- But lists can be efficiently transformed
let nums = [1,2,3]
let doubled = map (*2) nums  -- [2,4,6]
```

### Lazy Evaluation

```haskell
-- Haskell only computes what it needs
let infiniteList = [1..]  -- Infinite list!
take 5 infiniteList       -- [1,2,3,4,5] (only computes first 5)

-- This doesn't compute forever
filter (<5) [1..]         -- [1,2,3,4] (stops at 5)
```

---

