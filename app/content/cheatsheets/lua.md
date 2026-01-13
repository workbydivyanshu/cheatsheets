---
title: Lua
description: Complete beginner-friendly guide to Lua programming language
category: Programming Language
---

# Lua Cheatsheet

**Lua** is a lightweight, embeddable scripting language designed for **simplicity and speed**. Popular in game development (Roblox, World of Warcraft), embedded systems, and configuration. Lua emphasizes small footprint and fast execution.

## Getting Started (🟢 Beginner)

### What is Lua?
Lua is a **dynamically-typed, interpreted language** with minimal syntax. It's designed to be embedded in other applications and runs on everything from servers to game engines.

### Your First Program
```lua
print("Hello, World!")
```

Run it:
```bash
lua hello.lua
# Output: Hello, World!
```

### Running Lua
```bash
# Run a script
lua script.lua

# Interactive mode
lua
-- Type code directly

# Execute from string
lua -e 'print("Hello")'
```

## Variables & Data Types (🟢 Beginner)

### Basics
```lua
-- Lua is dynamically typed
name = "Alice"          -- String
age = 25                -- Number
height = 5.9            -- Float
is_student = true       -- Boolean
nothing = nil           -- Nil (nothing/undefined)

-- Local variables (recommended)
local x = 10            -- Scoped variable
local y = 20
```

**Why `local`?** Makes variables function-scoped, avoids polluting global namespace.

### Strings
```lua
-- String literals
local str1 = "Hello"
local str2 = 'World'
local str3 = [[Multi
line string]]

-- Concatenation
local greeting = "Hello" .. " " .. "Lua"  -- .. is concatenation

-- String functions
string.upper("hello")           -- "HELLO"
string.lower("HELLO")           -- "hello"
string.len("lua")               -- 3
string.sub("hello", 1, 3)       -- "hel"
string.format("Age: %d", 25)    -- "Age: 25"
```

### Tables (Arrays & Dicts)
```lua
-- Array (1-indexed in Lua!)
local colors = {"red", "blue", "green"}
print(colors[1])        -- red (first element)

-- Dictionary
local person = {
    name = "Alice",
    age = 25,
    city = "NYC"
}
print(person.name)      -- Alice
print(person["age"])    -- 25

-- Mixed
local mixed = {
    "first",
    "second",
    name = "Alice",
    age = 25
}

-- Table operations
table.insert(colors, "yellow")  -- Add to end
table.remove(colors)            -- Remove from end
table.concat(colors, ", ")      -- "red, blue, green, yellow"
```

## Control Flow (🟢 Beginner)

### If/Elseif/Else
```lua
local score = 85

if score >= 90 then
    print("A")
elseif score >= 80 then
    print("B")
else
    print("C")
end

-- Ternary-like (conditional expression)
local grade = (score >= 90) and "A" or "B"
```

### Logical Operators
```lua
-- true, false, nil are falsy; everything else is truthy
if x and y then print("Both") end
if x or y then print("Either") end
if not x then print("Not x") end

-- Comparisons
x == y      -- Equal
x ~= y      -- Not equal (~ is NOT in Lua)
x > y
x < y
x >= y
x <= y
```

## Loops (🟢 Beginner)

### For Loop
```lua
-- Numeric for
for i = 1, 10 do
    print(i)
end

-- With step
for i = 1, 10, 2 do
    print(i)  -- 1, 3, 5, 7, 9
end

-- Iterate over array
local fruits = {"apple", "banana", "cherry"}
for i, fruit in ipairs(fruits) do
    print(i, fruit)  -- 1 apple, 2 banana, 3 cherry
end

-- Iterate over table keys
local person = {name = "Alice", age = 25}
for key, value in pairs(person) do
    print(key, value)
end
```

### While/Repeat
```lua
-- While
local i = 1
while i <= 5 do
    print(i)
    i = i + 1
end

-- Repeat-until (do-while)
local j = 1
repeat
    print(j)
    j = j + 1
until j > 5
```

## Functions (🟢 Beginner)

### Defining Functions
```lua
-- Simple function
function greet()
    print("Hello!")
end

-- Function with parameters
function add(a, b)
    return a + b
end

-- Call
greet()                 -- Hello!
local result = add(5, 3)  -- 8

-- Multiple return values
function swap(a, b)
    return b, a
end

local x, y = swap(10, 20)  -- x=20, y=10

-- Local function
local function double(x)
    return x * 2
end

-- Functions as variables
local multiply = function(a, b)
    return a * b
end
print(multiply(3, 4))   -- 12
```

### Variable Arguments
```lua
function sum(...)
    local total = 0
    for i, v in ipairs({...}) do
        total = total + v
    end
    return total
end

print(sum(1, 2, 3, 4, 5))  -- 15
```

## Tables & Metatables (🟡 Intermediate)

### Table Operations
```lua
-- Create and manipulate
local t = {}
t[1] = "first"
t.name = "Alice"

-- Check if key exists
if t[1] then print("Found") end

-- Get table size
print(#t)               -- 1 (only counts array part)

-- Copy table (shallow)
local t2 = {}
for k, v in pairs(t) do
    t2[k] = v
end
```

### Metatables (Advanced)
```lua
-- Define custom behavior
local mt = {}

function mt.__tostring(t)
    return "Custom: " .. t.name
end

local obj = {name = "Alice"}
setmetatable(obj, mt)
print(obj)  -- Custom: Alice

-- Operator overloading
function mt.__add(a, b)
    return a.value + b.value
end

local v1 = setmetatable({value = 5}, mt)
local v2 = setmetatable({value = 3}, mt)
print(v1 + v2)  -- 8
```

## Practical Examples

### File Reading
```lua
local function read_file(filename)
    local f = io.open(filename, "r")
    if not f then
        error("Cannot open file")
    end
    
    local content = f:read("*a")  -- Read all
    f:close()
    return content
end

local text = read_file("data.txt")
print(text)
```

### Simple Game Loop
```lua
-- Simulated game update
function love.load()
    x, y = 100, 100
    speed = 5
end

function love.update(dt)
    if love.keyboard.isDown("right") then
        x = x + speed
    end
    if love.keyboard.isDown("left") then
        x = x - speed
    end
end

function love.draw()
    love.graphics.rectangle("fill", x, y, 20, 20)
end
```

### Configuration Parser
```lua
-- Load config file
function load_config(filename)
    local f = io.open(filename, "r")
    local config = {}
    
    for line in f:lines() do
        local key, value = line:match("(.+)=(.+)")
        if key and value then
            config[key:gsub("%s", "")] = value:gsub("%s", "")
        end
    end
    
    f:close()
    return config
end

local cfg = load_config("app.conf")
print(cfg.port)  -- Access config values
```

## Summary

Lua shines as an **embeddable, lightweight scripting language**. Perfect for game development, configuration, and embedded systems. Its simplicity and speed make it ideal for extending larger applications.

Key strengths:
- **Embeddable** - lightweight, integrates easily
- **Game dev** - Roblox, love2D, game engines
- **Speed** - Lua is fast for interpreted language
- **Simple syntax** - minimal, clean code
- **Tables** - powerful data structure for both arrays and dicts
