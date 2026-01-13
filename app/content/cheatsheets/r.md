---
title: R
description: Complete beginner-friendly R guide for data analysis and statistical computing
category: Programming Language
---

# R - Complete Beginner's Guide

> **What is R?** R is the language for data analysis, statistics, and visualization. Scientists, data analysts, and statisticians use R to analyze massive datasets. Perfect for learning data science!

## 1. Getting Started

### Basic Output

```r
# Print to console
print("Hello, World!")
# [1] "Hello, World!"

# Simpler way
"Hello, R!"
# [1] "Hello, R!"

# Comments start with #
# This is a comment

x <- 5
x  # Print value
# [1] 5
```

### Variables and Assignment

```r
# Assignment with <-
name <- "Alice"
age <- 25
height <- 5.7
is_student <- TRUE

# Print variables
print(name)
print(age)

# R can also use = but <- is preferred
score = 95  # Also works but use <- instead
```

---

## 2. Data Types

### Vectors (Collections)

```r
# Numeric vector
numbers <- c(1, 2, 3, 4, 5)
numbers
# [1] 1 2 3 4 5

# Character vector
colors <- c("red", "blue", "green")
colors
# [1] "red"   "blue"  "green"

# Logical vector
flags <- c(TRUE, FALSE, TRUE)
flags
# [1]  TRUE FALSE  TRUE

# Sequence
1:10          # 1, 2, 3, ..., 10
# [1]  1  2  3  4  5  6  7  8  9 10

seq(1, 10, by=2)  # 1, 3, 5, 7, 9
# [1] 1 3 5 7 9

rep(5, 3)     # Repeat 5 three times
# [1] 5 5 5
```

### Vector Operations

```r
x <- c(1, 2, 3)
y <- c(4, 5, 6)

# Element-wise operations
x + y          # [1] 5 7 9
x * y          # [1] 4 10 18
x ** 2         # [1] 1 4 9 (exponentiation)

# Vector functions
sum(x)         # 6
mean(x)        # 2
length(x)      # 3
max(x)         # 3
min(x)         # 1
```

### Accessing Vector Elements

```r
v <- c(10, 20, 30, 40, 50)

v[1]           # First element: 10
v[2:4]         # Elements 2 to 4: 20 30 40
v[-1]          # All except first: 20 30 40 50
v[c(1, 3, 5)]  # Elements 1, 3, 5: 10 30 50

# Named vectors
person <- c(name = "John", age = "30", city = "NYC")
person["name"]  # "John"
```

### Lists (Different Types Together)

```r
# List can contain different types
person <- list(
  name = "John",
  age = 30,
  scores = c(85, 90, 88),
  is_active = TRUE
)

person$name       # "John"
person$age        # 30
person$scores     # 85 90 88
person[[1]]       # First element: "John"
```

### Data Frames (Table-Like)

```r
# Create a data frame
students <- data.frame(
  name = c("Alice", "Bob", "Charlie"),
  age = c(20, 21, 22),
  grade = c("A", "B", "A")
)

print(students)
#      name age grade
# 1   Alice  20     A
# 2     Bob  21     B
# 3 Charlie  22     A

# Access columns
students$name      # c("Alice", "Bob", "Charlie")
students[1, ]      # First row
students[, 1]      # First column (name)
students[1, 2]     # Element [row 1, column 2]
```

---

## 3. Control Flow

### If Statements

```r
age <- 18

if (age >= 18) {
  print("You are an adult")
} else if (age >= 13) {
  print("You're a teenager")
} else {
  print("You're a child")
}
# [1] "You are an adult"

# One-liner
result <- ifelse(age >= 18, "Adult", "Minor")
print(result)  # "Adult"
```

### Comparison and Logical Operators

```r
# Comparisons
5 == 5           # TRUE
5 != 3           # TRUE
5 > 3            # TRUE
5 < 3            # FALSE

# Logical operators
TRUE && FALSE    # FALSE (AND)
TRUE || FALSE    # TRUE (OR)
!TRUE            # FALSE (NOT)

# Vector comparisons
v <- c(1, 2, 3, 4, 5)
v > 3            # FALSE FALSE FALSE TRUE TRUE
sum(v > 3)       # Count elements > 3: 2
```

---

## 4. Loops

### For Loops

```r
# Loop through vector
for (i in 1:5) {
  print(i)
}
# [1] 1
# [1] 2
# [1] 3
# [1] 4
# [1] 5

# Loop through vector values
colors <- c("red", "blue", "green")
for (color in colors) {
  print(color)
}
# [1] "red"
# [1] "blue"
# [1] "green"
```

### While Loops

```r
count <- 1
while (count <= 5) {
  print(count)
  count <- count + 1
}
# [1] 1, 2, 3, 4, 5

# Break (exit loop)
i <- 0
while (TRUE) {
  i <- i + 1
  if (i == 5) break
  print(i)
}
# [1] 1, 2, 3, 4

# Next (skip iteration - like continue)
for (i in 1:5) {
  if (i == 3) next
  print(i)
}
# [1] 1, 2, 4, 5
```

---

## 5. Functions

### Defining Functions

```r
# Simple function
greet <- function(name) {
  return(paste("Hello,", name, "!"))
}

result <- greet("Alice")
print(result)  # "Hello, Alice !"

# Function with multiple parameters
add <- function(a, b) {
  a + b  # Last expression is returned
}

add(5, 3)  # 8

# Default parameters
welcome <- function(name = "Guest") {
  paste("Welcome,", name, "!")
}

welcome()        # "Welcome, Guest !"
welcome("John")  # "Welcome, John !"
```

### Multiple Return Values

```r
get_stats <- function(x) {
  list(
    mean = mean(x),
    median = median(x),
    sd = sd(x)
  )
}

stats <- get_stats(c(1, 2, 3, 4, 5))
stats$mean     # 3
stats$median   # 3
stats$sd       # 1.58...
```

---

## 6. Data Analysis Basics

### Summary Statistics

```r
data <- c(10, 20, 15, 25, 30)

mean(data)              # 20 (average)
median(data)            # 20 (middle value)
sd(data)                # 7.91 (standard deviation)
var(data)               # 62.5 (variance)
min(data)               # 10
max(data)               # 30
range(data)             # 10 30
quantile(data)          # 0%, 25%, 50%, 75%, 100%
```

### Basic Statistics

```r
x <- c(1, 2, 2, 3, 3, 3, 4, 4, 4, 4)

# Frequency table
table(x)
# x
# 1 2 3 4
# 1 2 3 4

# Unique values
unique(x)              # 1 2 3 4

# Sort
sort(x)                # 1 2 2 3 3 3 4 4 4 4

# Cumulative sum
cumsum(c(1, 2, 3))     # 1 3 6
```

---

## 7. Working with Data Frames

### Creating and Exploring

```r
# Create data frame
df <- data.frame(
  name = c("Alice", "Bob", "Charlie"),
  age = c(25, 30, 22),
  salary = c(50000, 60000, 45000)
)

# View structure
str(df)

# First/last rows
head(df, 2)     # First 2 rows
tail(df, 1)     # Last row

# Summary
summary(df)     # Statistical summary

# Dimensions
dim(df)         # [1] 3 3 (rows, columns)
nrow(df)        # 3
ncol(df)        # 3
```

### Filtering Data

```r
df <- data.frame(
  name = c("Alice", "Bob", "Charlie"),
  age = c(25, 30, 22),
  salary = c(50000, 60000, 45000)
)

# Filter rows where age > 25
df[df$age > 25, ]
#    name age salary
# 2   Bob  30  60000

# Select specific columns
df[, c("name", "age")]

# Subset function
subset(df, age > 25)
subset(df, select = c("name", "salary"))
```

---

## 8. Practical Examples

### Calculate Grade Average

```r
# Student grades
student1 <- c(85, 90, 88)
student2 <- c(92, 88, 95)
student3 <- c(78, 82, 80)

# Create data frame
grades <- data.frame(
  student = c("Alice", "Bob", "Charlie"),
  exam1 = c(85, 92, 78),
  exam2 = c(90, 88, 82),
  exam3 = c(88, 95, 80)
)

# Calculate average for each student
grades$average <- (grades$exam1 + grades$exam2 + grades$exam3) / 3

print(grades)
#   student exam1 exam2 exam3 average
# 1   Alice    85    90    88    87.67
# 2     Bob    92    88    95    91.67
# 3 Charlie    78    82    80    80.00
```

### Find Statistics

```r
sales <- c(100, 150, 120, 200, 180, 90, 210)

cat("Mean sales:", mean(sales), "\n")
cat("Median sales:", median(sales), "\n")
cat("Standard deviation:", sd(sales), "\n")
cat("Total sales:", sum(sales), "\n")
cat("Highest:", max(sales), "\n")
cat("Lowest:", min(sales), "\n")
```

---

## 9. Common Functions

```r
# Math
abs(-5)                # 5
sqrt(16)               # 4
exp(1)                 # e
log(10)                # Natural log
log10(100)             # Log base 10
sin(pi/2)              # Trigonometry

# Rounding
round(3.14159, 2)      # 3.14
floor(3.7)             # 3
ceiling(3.2)           # 4

# String functions
paste("Hello", "World")        # "Hello World"
substr("Hello", 1, 3)          # "Hel"
nchar("Hello")                 # 5 (length)
toupper("hello")               # "HELLO"
tolower("HELLO")               # "hello"
strsplit("a,b,c", ",")         # Split string
```

---

## 10. Best Practices

### Vectorization (Fast R Code!)

```r
# ❌ Slow: using loops
result <- c()
for (i in 1:1000000) {
  result <- c(result, i * 2)
}

# ✅ Fast: vectorized
result <- (1:1000000) * 2
```

### Naming Conventions

```r
# Good names
student_name <- "John"
age_in_years <- 25
is_active <- TRUE

# Bad names
x <- "John"        # Too vague
X <- 25            # Capital for variables confusing
n <- TRUE          # Unclear
```

---

## Quick Reference

```r
# Variables
x <- 5
y = 10   # Also works but <- preferred

# Vectors
c(1, 2, 3)
1:10
seq(1, 10, by=2)
rep(5, 3)

# Vector operations
sum(x)
mean(x)
length(x)
max(x)

# Indexing
v[1]               # First element
v[2:4]             # Elements 2-4
v[c(1, 3, 5)]      # Selected elements

# Data frames
data.frame(...)
df$column
df[1, ]
df[, 1]

# Control
if (x > 5) { } else { }
for (i in 1:10) { }
while (x > 0) { }

# Functions
function_name <- function(x, y) {
  x + y
}

# Statistics
mean()
median()
sd()
var()
```

R is powerful for data analysis! Keep exploring! 📊
