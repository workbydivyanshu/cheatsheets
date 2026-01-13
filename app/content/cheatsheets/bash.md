---
title: Bash
description: Complete beginner-friendly Bash scripting guide for Linux and macOS
category: Programming Language
---

# Bash - Complete Beginner's Guide

> **What is Bash?** Bash is the language of the command line on Linux and macOS. If you've ever typed commands in a terminal, you've used Bash! Learn to automate tasks and write powerful scripts. Essential for developers and system administrators!

## 1. Getting Started

### Your First Script

```bash
#!/bin/bash
# This is a comment - bash ignores it
echo "Hello, World!"  # echo prints text
```

Save as `hello.sh`, then run:
```bash
bash hello.sh
# Output: Hello, World!
```

**The `#!` line:** Tells the system to use bash. Always include it!

### Basic Output

```bash
echo "Hello"           # Print with newline
echo -n "No newline"   # Print without newline
echo "Line 1"
echo "Line 2"          # Prints on separate lines
```

---

## 2. Variables (🟢 Beginner - Storing Information)

### Creating and Using Variables

```bash
# Create variable (no spaces around =!)
name="Alice"
age=25
greeting="Hello, $name"  # Variables expand with $

echo "Name: $name"
echo "Age: $age"
echo "$greeting"
```

**Important:** NO SPACES around `=` or bash gets confused!

### Quote Types (Important!)

```bash
# Double quotes - variables expand
user="John"
echo "Hello $user"     # Output: Hello John

# Single quotes - no expansion
echo 'Hello $user'     # Output: Hello $user

# Backticks - execute command
result=`date`
echo "Current date: $result"

# $(...) - modern way to execute
result=$(date)
echo "Current date: $result"
```

### Special Variables

```bash
#!/bin/bash
echo "Script name: $0"           # The script name
echo "First argument: $1"        # First argument passed
echo "Second argument: $2"       # Second argument
echo "All arguments: $@"         # All arguments as array
echo "Number of arguments: $#"   # How many arguments
echo "Exit code: $?"             # 0 = success, other = error
echo "PID: $$"                   # Process ID
```

Run it:
```bash
bash script.sh arg1 arg2 arg3
# Script name: script.sh
# First argument: arg1
# ...
```

---

## 3. User Input

### Getting Input from User

```bash
#!/bin/bash

echo "What is your name?"
read name              # Store input in $name

echo "How old are you?"
read age

echo "Hello, $name! You are $age years old."
```

### Multiple Inputs at Once

```bash
echo "Enter first and last name:"
read first_name last_name  # Reads both

echo "First: $first_name, Last: $last_name"
```

---

## 4. Math and Arithmetic

### Basic Math

```bash
# Using $((  ))
echo $((5 + 3))        # 8
echo $((10 - 4))       # 6
echo $((3 * 4))        # 12
echo $((15 / 3))       # 5
echo $((17 % 5))       # 2 (remainder)
echo $((2 ** 3))       # 8 (exponentiation)

# Storing result
result=$((10 + 5))
echo "Result: $result"

# Incrementing
count=5
count=$((count + 1))   # count = 6
((count++))            # Also works
echo $count            # 6
```

---

## 5. Control Flow (🟢 Beginner - Making Decisions)

### If Statements

```bash
#!/bin/bash

age=18

# Simple if
if [ $age -ge 18 ]; then
  echo "You are an adult"
fi

# If-else
if [ $age -ge 18 ]; then
  echo "You can vote"
else
  echo "You are too young"
fi

# If-elif-else
if [ $age -lt 13 ]; then
  echo "You're a child"
elif [ $age -lt 18 ]; then
  echo "You're a teenager"
else
  echo "You're an adult"
fi
```

**Important Spacing:** `[ ]` needs spaces! `[$age]` is WRONG. Use `[ $age ]`

### Comparison Operators

```bash
# Numbers
-eq    # equal
-ne    # not equal
-lt    # less than
-le    # less than or equal
-gt    # greater than
-ge    # greater than or equal

# Strings
=      # equal
!=     # not equal
-z     # string is empty
-n     # string is not empty

# Files
-f     # file exists
-d     # directory exists
-e     # exists
-r     # readable
-w     # writable
-x     # executable

# Examples
[ $age -gt 21 ]        # Is age greater than 21?
[ "$name" = "John" ]   # String comparison
[ -f "file.txt" ]      # Does file exist?
[ -d "/home" ]         # Does directory exist?
```

### Logical Operators

```bash
# AND
if [ $age -gt 18 ] && [ $age -lt 65 ]; then
  echo "Working age"
fi

# OR
if [ $age -lt 13 ] || [ $age -gt 65 ]; then
  echo "Not working age"
fi

# NOT
if [ ! -f "file.txt" ]; then
  echo "File does not exist"
fi
```

---

## 6. Loops

### For Loops

```bash
# Loop through numbers
for i in 1 2 3 4 5; do
  echo "Number: $i"
done

# Using range
for i in {1..5}; do
  echo $i
done

# With step
for i in {1..10..2}; do  # 1, 3, 5, 7, 9
  echo $i
done

# Loop through list
fruits=("apple" "banana" "orange")
for fruit in "${fruits[@]}"; do
  echo "Fruit: $fruit"
done

# C-style loop
for ((i=1; i<=5; i++)); do
  echo $i
done
```

### While Loops

```bash
# Simple while
count=1
while [ $count -le 5 ]; do
  echo "Count: $count"
  count=$((count + 1))
done

# Reading lines from file
while read line; do
  echo "Line: $line"
done < "file.txt"
```

### Break and Continue

```bash
# Break (exit loop)
for i in {1..10}; do
  if [ $i -eq 5 ]; then
    break        # Exit loop when i = 5
  fi
  echo $i
done
# Output: 1 2 3 4

# Continue (skip to next iteration)
for i in {1..5}; do
  if [ $i -eq 3 ]; then
    continue     # Skip when i = 3
  fi
  echo $i
done
# Output: 1 2 4 5
```

---

## 7. Arrays

### Creating and Using Arrays

```bash
# Create array with values
fruits=("apple" "banana" "orange")

# Access by index (0-based)
echo ${fruits[0]}      # apple
echo ${fruits[1]}      # banana

# Add element
fruits+=("grape")      # ["apple", "banana", "orange", "grape"]

# Array length
echo ${#fruits[@]}     # 4

# All elements
echo ${fruits[@]}      # apple banana orange grape

# With for loop
for fruit in "${fruits[@]}"; do
  echo "$fruit"
done

# Associative arrays (like objects)
declare -A person
person[name]="John"
person[age]="30"
person[city]="NYC"

echo ${person[name]}   # John
```

---

## 8. Functions (🟡 Intermediate)

### Defining Functions

```bash
# Simple function
greet() {
  echo "Hello, $1!"    # $1 is first argument
}

greet "Alice"          # Output: Hello, Alice!
greet "Bob"            # Output: Hello, Bob!

# Function with multiple parameters
add() {
  result=$(($1 + $2))  # $1 and $2 are parameters
  echo $result
}

sum=$(add 5 3)         # 8
echo "Sum: $sum"

# Function with return value
is_even() {
  if [ $(($1 % 2)) -eq 0 ]; then
    return 0           # 0 means true/success
  else
    return 1           # 1 means false/failure
  fi
}

if is_even 4; then
  echo "4 is even"
fi
```

---

## 9. String Operations

### Manipulating Strings

```bash
text="Hello World"

# Length
echo ${#text}          # 11

# Substring
echo ${text:0:5}       # "Hello" (start at 0, length 5)
echo ${text:6}         # "World" (start at 6 to end)

# Replace
echo ${text/World/Bash}  # "Hello Bash"

# Remove prefix
str="filename.txt"
echo ${str#file}       # "name.txt"

# Remove suffix  
echo ${str%.txt}       # "filename"

# Uppercase/lowercase (Bash 4+)
echo ${text^^}         # "HELLO WORLD" (uppercase)
echo ${text,,}         # "hello world" (lowercase)

# Split string
IFS=',' read -ra words <<< "apple,banana,orange"
for word in "${words[@]}"; do
  echo "$word"
done
```

---

## 10. Working with Files

### Reading Files

```bash
# Read entire file
cat file.txt           # Print whole file

# Read line by line
while IFS= read -r line; do
  echo "Line: $line"
done < file.txt

# Count lines
wc -l file.txt         # Number of lines

# First N lines
head -5 file.txt       # First 5 lines

# Last N lines
tail -5 file.txt       # Last 5 lines

# Search for pattern
grep "pattern" file.txt   # Lines matching pattern
grep -c "pattern" file.txt  # Count matches
```

### Writing to Files

```bash
# Create/overwrite file
echo "Line 1" > output.txt
echo "Line 2" > output.txt   # Overwrites!

# Append to file
echo "New line" >> output.txt  # Adds to end

# Write multiple lines
cat > file.txt << EOF
Line 1
Line 2
Line 3
EOF

# Pipe output to file
ls -la > directory_listing.txt
```

### File Operations

```bash
# Check if file exists
if [ -f "file.txt" ]; then
  echo "File exists"
fi

# Check if directory exists
if [ -d "/home" ]; then
  echo "Directory exists"
fi

# Copy file
cp source.txt destination.txt

# Move file
mv file.txt new_location/

# Delete file
rm file.txt

# Create directory
mkdir new_folder
mkdir -p path/to/nested/folder  # Create parent directories

# Delete directory
rmdir empty_folder
rm -r folder_with_contents      # Recursive delete
```

---

## 11. Practical Examples

### Count Files in Directory

```bash
#!/bin/bash

if [ $# -ne 1 ]; then
  echo "Usage: $0 <directory>"
  exit 1
fi

directory=$1

if [ ! -d "$directory" ]; then
  echo "Directory not found!"
  exit 1
fi

count=$(ls -1 "$directory" | wc -l)
echo "Number of files: $count"
```

### Backup Script

```bash
#!/bin/bash

# Variables
source_dir="$HOME/documents"
backup_dir="$HOME/backups"
timestamp=$(date +"%Y%m%d_%H%M%S")
backup_name="backup_$timestamp.tar.gz"

# Create backup
tar -czf "$backup_dir/$backup_name" "$source_dir"

if [ $? -eq 0 ]; then
  echo "Backup successful: $backup_name"
else
  echo "Backup failed!"
  exit 1
fi
```

### Check System Resources

```bash
#!/bin/bash

echo "=== System Info ==="
echo "Hostname: $(hostname)"
echo "Kernel: $(uname -r)"
echo "Uptime: $(uptime)"
echo ""
echo "=== Disk Usage ==="
df -h
echo ""
echo "=== Memory Usage ==="
free -h
```

---

## 12. Best Practices

### Always Quote Variables!

```bash
# ❌ Bad: Can break with spaces
file=$1
if [ -f $file ]; then  # WRONG!
  cat $file
fi

# ✅ Good: Always quote
if [ -f "$file" ]; then
  cat "$file"
fi
```

### Use [[ ]] for Advanced Features

```bash
# [[ ]] is safer and more powerful
if [[ $string == pattern* ]]; then
  echo "Pattern match"
fi

if [[ $num -gt 5 && $num -lt 10 ]]; then
  echo "Between 5 and 10"
fi
```

### Error Handling

```bash
#!/bin/bash
set -e  # Exit on error

# Commands here will stop if any fail
mkdir mydir
cd mydir
touch file.txt

echo "All commands succeeded!"
```

---

## 11. Arrays (🟡 Intermediate - Collections of Data)

### Creating Arrays
```bash
# Index arrays (0-based)
colors=(red blue green)
numbers=(1 2 3 4 5)
mixed=(apple 42 "hello world")

# From separate values
fruits=(
    "apple"
    "banana"
    "cherry"
)

# Empty array
empty_array=()
```

### Accessing Array Elements
```bash
colors=(red blue green yellow)

# First element (index 0)
echo ${colors[0]}          # red

# Specific element
echo ${colors[2]}          # green

# All elements
echo ${colors[@]}          # red blue green yellow

# Number of elements
echo ${#colors[@]}         # 4

# Element length
echo ${#colors[0]}         # 3 (length of "red")
```

### Modifying Arrays
```bash
colors=(red blue green)

# Add element at end
colors+=(yellow)           # colors=(red blue green yellow)

# Change element
colors[1]=orange           # colors=(red orange green)

# Remove element (set to empty)
unset colors[1]            # colors=(red green)

# Remove entire array
unset colors
```

### Looping Through Arrays
```bash
fruits=(apple banana cherry)

# Loop with for...in
for fruit in "${fruits[@]}"
do
    echo "I like $fruit"
done

# Loop with index
for i in "${!fruits[@]}"
do
    echo "Index $i: ${fruits[$i]}"
done

# While loop with index
i=0
while [ $i -lt ${#fruits[@]} ]
do
    echo "${fruits[$i]}"
    i=$((i + 1))
done
```

### Slicing Arrays
```bash
colors=(red blue green yellow purple)

# All elements
echo ${colors[@]}          # red blue green yellow purple

# From index 1 to end
echo ${colors[@]:1}        # blue green yellow purple

# From index 1, 2 elements
echo ${colors[@]:1:2}      # blue green

# Last element (if 5 elements, index 4)
echo ${colors[-1]}         # In bash 4.3+: purple
```

### Associative Arrays (Dictionaries)
```bash
# Declare as associative
declare -A person

# Add elements
person[name]="Alice"
person[age]="25"
person[city]="New York"

# Access by key
echo ${person[name]}       # Alice

# All keys
echo ${!person[@]}         # name age city

# All values
echo ${person[@]}          # Alice 25 New York

# Iterate
for key in "${!person[@]}"
do
    echo "$key: ${person[$key]}"
done

# Output:
# name: Alice
# age: 25
# city: New York
```

### Practical Array Examples
```bash
#!/bin/bash

# Get file names in directory
files=($(ls))
echo "First file: ${files[0]}"

# Process multiple arguments as array
process_files() {
    local files=("$@")
    for file in "${files[@]}"
    do
        echo "Processing: $file"
    done
}

# Pass multiple arguments
process_files file1.txt file2.txt file3.txt

# Build array from command output
lines=()
while IFS= read -r line
do
    lines+=("$line")
done < <(cat file.txt)

# Filter array
numbers=(1 2 3 4 5 6 7 8 9 10)
even_numbers=()
for num in "${numbers[@]}"
do
    if [ $((num % 2)) -eq 0 ]
    then
        even_numbers+=($num)
    fi
done
echo "Even: ${even_numbers[@]}"  # 2 4 6 8 10
```

**Why arrays matter?** Process multiple items efficiently without repeating code.

---

Bash is powerful! Keep learning! 🚀
