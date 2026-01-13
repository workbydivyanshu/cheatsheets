---
title: Clojure
description: Complete beginner-friendly guide to Clojure functional programming
category: Programming Language
---

# Clojure Cheatsheet

**Clojure** is a **modern Lisp** dialect that runs on the **Java Virtual Machine**. It emphasizes **functional programming, immutability, and simplicity**. Used for backend systems, data processing, and concurrent applications.

## Getting Started (🟢 Beginner)

### What is Clojure?
Clojure is a dynamically-typed, functional language with a focus on **immutable data structures** and **concurrent programming**. It has powerful metaprogramming capabilities and seamless Java interop.

### Your First Program
```clojure
(println "Hello, World!")
```

Run it:
```bash
clj hello.clj
# Output: Hello, World!
```

### Installation & Running
```bash
# On macOS
brew install clojure

# Run a REPL (read-eval-print loop)
clj

# Run a script
clj -M hello.clj

# Execute expression
clj -e '(println "Hello")'
```

## Syntax Basics (🟢 Beginner)

### S-Expressions (Lists)
```clojure
; Comments start with semicolon

; Lists (parentheses)
'(1 2 3)                       ; Quoted list
(+ 1 2 3)                      ; Function call: 1 + 2 + 3 = 6
(* 5 4)                        ; Multiplication
(/ 10 2)                       ; Division

; First element is function, rest are arguments
(println "Hello" "World")      ; println with 2 arguments
(max 5 3 9 2)                  ; Returns 9
(min 5 3 9 2)                  ; Returns 2
```

### Variables (Symbols)
```clojure
; Define a variable
(def name "Alice")
(def age 25)
(def pi 3.14159)

; Local variables (let binding)
(let [x 10
      y 20]
  (+ x y))                      ; Returns 30

; Using variables
(println name)                 ; Prints: Alice
(+ age 5)                      ; 30
```

## Data Types (🟢 Beginner)

### Numbers
```clojure
; Integers
42
-10

; Floats
3.14
1.5e-3

; Ratios (Clojure special!)
1/3
22/7

; Operations
(+ 10 5)                       ; 15
(- 10 3)                       ; 7
(* 4 5)                        ; 20
(/ 10 2)                       ; 5
(mod 10 3)                     ; 1
(Math/pow 2 8)                 ; 256.0 (Java interop)
```

### Strings
```clojure
; String literals
"hello"
"multi-line\nstring"

; String functions
(str "hello" " " "world")      ; "hello world"
(str "Value: " 42)             ; "Value: 42"

(count "hello")                ; 5
(uppercase "hello")            ; Error! It's clojure.string/upper-case

; Using library
(require '[clojure.string :as str])
(str/upper-case "hello")       ; "HELLO"
(str/lower-case "HELLO")       ; "hello"
(str/split "a,b,c" #",")      ; ["a" "b" "c"]
```

### Lists, Vectors, Sets, Maps
```clojure
; List (linked list, ordered)
'(1 2 3 4 5)
(list 1 2 3)

; Vector (array, indexed)
[1 2 3 4 5]
(vector 1 2 3)

; Access elements
(get [10 20 30] 0)            ; 10 (first)
([10 20 30] 1)                ; 20 (vectors are callable!)

; Set (unique values)
#{1 2 3}
(set [1 2 2 3])               ; #{1 2 3}
(contains? #{1 2 3} 2)        ; true

; Map (key-value pairs)
{:name "Alice" :age 25}
{:a 1 :b 2 :c 3}

; Access map values
(get {:name "Alice" :age 25} :name)    ; "Alice"
({:name "Alice" :age 25} :age)         ; 25
(:name {:name "Alice" :age 25})        ; "Alice" (keyword lookup)

; Adding to collections
(conj [1 2 3] 4)               ; [1 2 3 4]
(assoc {:a 1} :b 2)           ; {:a 1 :b 2}
```

## Functions (🟢 Beginner)

### Defining Functions
```clojure
; Define function
(defn greet []
  (println "Hello!"))

(defn add [a b]
  (+ a b))

(defn square [x]
  (* x x))

; Calling functions
(greet)                        ; Prints: Hello!
(add 5 3)                      ; 8
(square 4)                     ; 16

; Multiple parameters
(defn person [name age]
  (str name " is " age " years old"))

(person "Alice" 25)            ; "Alice is 25 years old"

; Multiple arities (overloading)
(defn greet
  ([] "Hello!")
  ([name] (str "Hello, " name)))

(greet)                        ; "Hello!"
(greet "Alice")                ; "Hello, Alice"
```

## Control Flow (🟢 Beginner)

### If/Cond
```clojure
; If statement
(if (> 10 5)
  "10 is bigger"
  "5 is bigger or equal")

; Cond (like switch/if-else)
(let [x 7]
  (cond
    (> x 10) "large"
    (> x 5)  "medium"
    :else    "small"))

; When (if without else)
(when (> 10 5)
  (println "10 is bigger"))
```

### Logical Operators
```clojure
(and true false)               ; false
(or true false)                ; true
(not true)                     ; false

(if (and (> 10 5) (< 10 20))
  "Between 5 and 20"
  "Outside range")
```

## Higher-Order Functions (🟡 Intermediate)

One of Clojure's superpowers!

```clojure
; Anonymous function (fn)
(fn [x] (* x 2))

; Shorter syntax with #()
#(* % 2)                       ; Function that doubles input
#(+ %1 %2)                     ; %1 and %2 are arguments

; Map: apply function to each element
(map #(* % 2) [1 2 3 4 5])    ; (2 4 6 8 10)
(map inc [1 2 3])              ; (2 3 4) (inc = increment)

; Filter: keep elements that match
(filter #(even? %) [1 2 3 4 5]) ; (2 4)
(filter #(> % 3) [1 2 3 4 5])   ; (4 5)

; Reduce: combine all elements
(reduce + [1 2 3 4 5])         ; 15
(reduce * [1 2 3 4 5])         ; 120

; Sort
(sort [3 1 4 1 5 9])           ; (1 1 3 4 5 9)
(sort-by count ["abc" "ab" "a"]) ; ("a" "ab" "abc")
```

## Immutability & Destructuring (🟡 Intermediate)

Core Clojure concepts!

```clojure
; Destructuring vectors
(let [[a b c] [1 2 3]]
  (+ a b c))                   ; 6

; Destructuring maps
(let [{:keys [name age]} {:name "Alice" :age 25}]
  (str name " is " age))       ; "Alice is 25"

(let [{x :x y :y} {:x 10 :y 20}]
  (+ x y))                     ; 30

; Keyword shorthand
(let [{:keys [name age city]} {:name "Alice" :age 25 :city "NYC"}]
  city)                        ; "NYC"
```

## Practical Examples

### Word Frequency Counter
```clojure
(require '[clojure.string :as str])

(defn count-words [text]
  (->> (str/lower-case text)
       (re-seq #"\w+")
       frequencies))

(count-words "the quick brown fox jumps over the lazy dog")
; {:the 2, :quick 1, :brown 1, :fox 1, ...}
```

### Processing Data
```clojure
(def people
  [{:name "Alice" :age 25 :city "NYC"}
   {:name "Bob" :age 30 :city "LA"}
   {:name "Charlie" :age 25 :city "NYC"}])

; Find all people from NYC
(filter #(= (:city %) "NYC") people)

; Get all names
(map :name people)             ; ("Alice" "Bob" "Charlie")

; Count by age
(group-by :age people)
; {25 [...], 30 [...]}
```

### Recursive Function
```clojure
; Factorial
(defn factorial [n]
  (if (<= n 1)
    1
    (* n (factorial (dec n)))))

(factorial 5)                  ; 120

; Using loop/recur (tail-recursive, optimized)
(defn factorial-fast [n]
  (loop [n n acc 1]
    (if (<= n 1)
      acc
      (recur (dec n) (* acc n)))))

(factorial-fast 5)             ; 120
```

## Summary

Clojure is essential for **functional programming, data processing, and concurrent systems**. Its immutable data structures and powerful abstractions make it ideal for building robust applications.

Key strengths:
- **Functional** - pure functions, first-class functions, closures
- **Immutable** - safer concurrent code, predictable behavior
- **JVM access** - seamless Java interoperability
- **Metaprogramming** - macros for powerful abstractions
- **Data processing** - excellent for ETL and analytics
