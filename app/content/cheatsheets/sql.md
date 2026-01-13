---
title: SQL
description: Complete beginner's guide to SQL with queries, joins, aggregates, and optimization
category: Database
---

# SQL Cheatsheet

**SQL** (Structured Query Language) is the standard language for managing databases. It lets you **create, read, update, and delete data** from databases efficiently. Whether building websites, analyzing data, or managing inventories, SQL is essential.

## Getting Started

### What is SQL?
SQL is a **declarative language**, meaning you tell the database **what** you want, not **how** to get it. The database figures out the best way to retrieve or modify data.

### Basic Concept: Tables
```
Table: users
| id | name   | email            | age |
|----|--------|------------------|-----|
| 1  | Alice  | alice@email.com  | 25  |
| 2  | Bob    | bob@email.com    | 30  |
| 3  | Carol  | carol@email.com  | 28  |
```

A table has **rows** (records) and **columns** (fields).

### Your First Query
```sql
SELECT * FROM users;
```

**Why this matters:** `SELECT` retrieves data, `*` means "all columns", `FROM users` specifies which table.

## SELECT - Retrieving Data (🟢 Beginner)
```sql
-- Get all columns from all rows
SELECT * FROM users;

-- Get specific columns
SELECT name, email FROM users;

-- Get unique rows only
SELECT DISTINCT age FROM users;

-- Limit number of results
SELECT * FROM users LIMIT 10;

-- Skip rows (offset)
SELECT * FROM users LIMIT 10 OFFSET 5;  -- Skip first 5, get next 10
SELECT * FROM users LIMIT 5, 10;         -- Alternative syntax
```

### Filtering with WHERE

```sql
-- Exact match
SELECT * FROM users WHERE age = 25;

-- Greater than / Less than
SELECT * FROM users WHERE age > 25;
SELECT * FROM users WHERE age >= 25;
SELECT * FROM users WHERE age < 30;
SELECT * FROM users WHERE age <= 30;

-- Not equal
SELECT * FROM users WHERE age != 25;
SELECT * FROM users WHERE age <> 25;  -- Alternative syntax

-- Multiple conditions (AND)
SELECT * FROM users WHERE age > 25 AND name = 'Alice';

-- Multiple conditions (OR)
SELECT * FROM users WHERE age = 25 OR age = 30;

-- Negate with NOT
SELECT * FROM users WHERE NOT age = 25;
SELECT * FROM users WHERE age != 25;  -- Same thing
```

**Why this matters:** `WHERE` filters rows. Only rows matching the condition are returned. Always use WHERE to avoid processing entire tables unnecessarily.

### Pattern Matching with LIKE

```sql
-- Starts with 'A'
SELECT * FROM users WHERE name LIKE 'A%';

-- Ends with 'ice'
SELECT * FROM users WHERE name LIKE '%ice';

-- Contains 'li'
SELECT * FROM users WHERE name LIKE '%li%';

-- Exactly 5 characters
SELECT * FROM users WHERE name LIKE '_____';

-- First character is 'A', anything else
SELECT * FROM users WHERE name LIKE 'A%';

-- Case-insensitive (database dependent)
SELECT * FROM users WHERE name LIKE 'alice';  -- Depends on collation
```

### NULL Handling

```sql
-- Find NULL values
SELECT * FROM users WHERE email IS NULL;

-- Find non-NULL values
SELECT * FROM users WHERE email IS NOT NULL;

-- Important: NULL != NULL (NULL is unknown)
-- This returns nothing:
SELECT * FROM users WHERE email = NULL;  -- WRONG!
-- This is correct:
SELECT * FROM users WHERE email IS NULL;  -- RIGHT!
```

**Why this matters:** NULL represents "unknown" or "missing". It's not the same as empty string or zero. Always use `IS NULL` or `IS NOT NULL`.

### IN & BETWEEN

```sql
-- Check if in list
SELECT * FROM users WHERE id IN (1, 3, 5);
SELECT * FROM users WHERE name IN ('Alice', 'Bob');

-- NOT in list
SELECT * FROM users WHERE id NOT IN (1, 3, 5);

-- Range (inclusive)
SELECT * FROM users WHERE age BETWEEN 25 AND 30;

-- NOT in range
SELECT * FROM users WHERE age NOT BETWEEN 25 AND 30;
```

## Sorting with ORDER BY

```sql
-- Ascending order (default)
SELECT * FROM users ORDER BY age;
SELECT * FROM users ORDER BY age ASC;

-- Descending order
SELECT * FROM users ORDER BY age DESC;

-- Multiple columns
SELECT * FROM users ORDER BY age DESC, name ASC;
-- First by age (descending), then by name (ascending)

-- By column number (1 = first column selected)
SELECT name, age FROM users ORDER BY 1, 2;
-- Sorts by name column (1st), then age column (2nd)
```

**Common mistake:** ORDER BY doesn't change the original data, just the display order.

## INSERT - Adding Data

```sql
-- Insert single row with specific columns
INSERT INTO users (name, email, age) 
VALUES ('David', 'david@email.com', 32);

-- Insert multiple rows
INSERT INTO users (name, email, age) 
VALUES 
  ('Eve', 'eve@email.com', 26),
  ('Frank', 'frank@email.com', 29),
  ('Grace', 'grace@email.com', 31);

-- Insert without specifying columns (must match order)
INSERT INTO users VALUES (10, 'Henry', 'henry@email.com', 35);

-- Copy from another table
INSERT INTO users_backup 
SELECT * FROM users WHERE age > 30;
```

**Why this matters:** INSERT adds new data. Column order matters only if you don't specify columns.

## UPDATE - Modifying Data

```sql
-- Update specific rows
UPDATE users SET age = 26 WHERE name = 'Alice';

-- Update multiple columns
UPDATE users 
SET age = 26, email = 'newalice@email.com' 
WHERE name = 'Alice';

-- Update with expression
UPDATE users SET age = age + 1 WHERE id = 1;

-- Update based on conditions
UPDATE users 
SET status = 'inactive' 
WHERE age > 65;

-- DANGEROUS: Update all rows (no WHERE clause!)
UPDATE users SET age = 25;  -- Sets ALL ages to 25!
```

**⚠️ Critical:** Always use WHERE to specify which rows to update. Without it, all rows get updated!

## DELETE - Removing Data

```sql
-- Delete specific rows
DELETE FROM users WHERE id = 5;

-- Delete multiple rows
DELETE FROM users WHERE age > 65;

-- DANGEROUS: Delete all rows
DELETE FROM users;  -- Removes ALL data!
```

**⚠️ Critical:** Always use WHERE to specify which rows to delete. Without it, entire table is emptied!

## Aggregate Functions - Summarizing Data

Aggregate functions work on groups of rows and return a single result:

```sql
-- COUNT: Number of rows
SELECT COUNT(*) FROM users;           -- 10 (includes NULL)
SELECT COUNT(email) FROM users;       -- 9 (excludes NULL)
SELECT COUNT(DISTINCT age) FROM users; -- 7 (unique ages)

-- SUM: Total of numeric column
SELECT SUM(age) FROM users;           -- 280
SELECT SUM(salary) FROM employees;    -- Total payroll

-- AVG: Average value
SELECT AVG(age) FROM users;           -- 28
SELECT AVG(salary) FROM employees;

-- MIN & MAX: Smallest and largest
SELECT MIN(age) FROM users;           -- 25
SELECT MAX(age) FROM users;           -- 45
SELECT MIN(salary), MAX(salary) FROM employees;
```

**Real-world examples:**
```sql
-- How many customers bought something?
SELECT COUNT(DISTINCT customer_id) FROM orders;

-- What's our average order value?
SELECT AVG(amount) FROM orders;

-- Total revenue
SELECT SUM(amount) FROM orders;

-- Cheapest and most expensive product?
SELECT MIN(price), MAX(price) FROM products;
```

## GROUP BY - Aggregating by Categories

```sql
-- Sales by product
SELECT product_id, SUM(amount) 
FROM orders 
GROUP BY product_id;

-- Count users by age
SELECT age, COUNT(*) 
FROM users 
GROUP BY age;

-- Average salary by department
SELECT department, AVG(salary) 
FROM employees 
GROUP BY department;

-- Multiple grouping columns
SELECT department, job_title, AVG(salary)
FROM employees
GROUP BY department, job_title;
```

**Why this matters:** GROUP BY divides data into groups, then applies aggregate function to each group.

### HAVING - Filtering Groups

```sql
-- Show only products with sales > 5000
SELECT product_id, SUM(amount) as total
FROM orders
GROUP BY product_id
HAVING SUM(amount) > 5000;

-- Departments with more than 5 employees
SELECT department, COUNT(*) as employees
FROM employees
GROUP BY department
HAVING COUNT(*) > 5;

-- Aliases work in HAVING
SELECT department, AVG(salary) as avg_sal
FROM employees
GROUP BY department
HAVING AVG(salary) > 50000;
```

**Key difference:** WHERE filters rows BEFORE grouping, HAVING filters groups AFTER aggregation.

```sql
-- WHERE vs HAVING
SELECT department, COUNT(*) 
FROM employees
WHERE salary > 50000      -- Filter rows first
GROUP BY department
HAVING COUNT(*) > 2;      -- Filter groups second
```

## JOINs - Combining Tables (🟡 Intermediate)

### Why Joins Matter
**Databases have multiple tables** to avoid repeating data. Joins combine them:

```
users table:
| user_id | name   |
|---------|--------|
| 1       | Alice  |
| 2       | Bob    |

orders table:
| order_id | user_id | product |
|----------|---------|---------|
| 101      | 1       | Laptop  |
| 102      | 1       | Mouse   |
| 103      | 2       | Phone   |
```

Joins let you ask: "Show me each order WITH the customer's name"

### INNER JOIN - Both Tables Match

```sql
-- Basic syntax
SELECT orders.order_id, users.name, orders.product
FROM orders
INNER JOIN users ON orders.user_id = users.user_id;

-- Using aliases (shorter)
SELECT o.order_id, u.name, o.product
FROM orders o
INNER JOIN users u ON o.user_id = u.user_id;

-- Multiple joins
SELECT o.order_id, u.name, p.price
FROM orders o
INNER JOIN users u ON o.user_id = u.user_id
INNER JOIN products p ON o.product_id = p.product_id;
```

**Result:** Only rows where user_id matches in BOTH tables.

### LEFT JOIN - Keep Left Table, Add Right

```sql
-- All users, with their orders (if they have any)
SELECT u.name, COUNT(o.order_id) as order_count
FROM users u
LEFT JOIN orders o ON u.user_id = o.user_id
GROUP BY u.name;

-- Result includes users with 0 orders
```

**Key difference:** LEFT JOIN keeps all rows from LEFT table, even if no match in right table.

### RIGHT JOIN - Keep Right Table, Add Left

```sql
-- All products, with sales count (even unsold products)
SELECT p.name, COUNT(o.order_id) as sold
FROM orders o
RIGHT JOIN products p ON o.product_id = p.product_id
GROUP BY p.name;
```

### FULL OUTER JOIN - All Rows from Both

```sql
-- All users AND all products (even unmatched)
SELECT u.name, p.name
FROM users u
FULL OUTER JOIN products p ON u.preferred_product = p.product_id;
```

**Note:** Not all databases support FULL OUTER JOIN (MySQL doesn't). Use UNION instead:
```sql
SELECT u.name, p.name FROM users u
LEFT JOIN products p ON u.preferred_product = p.product_id
UNION
SELECT u.name, p.name FROM users u
RIGHT JOIN products p ON u.preferred_product = p.product_id;
```

### CROSS JOIN - Cartesian Product

```sql
-- Every user with every product (combinations)
SELECT u.name, p.name
FROM users u
CROSS JOIN products p;

-- If users has 5 rows and products has 3 rows,
-- result has 5 * 3 = 15 rows
```

### Self Join - Table Joined to Itself

```sql
-- Find users with the same age
SELECT u1.name, u2.name, u1.age
FROM users u1
INNER JOIN users u2 
  ON u1.age = u2.age 
  AND u1.user_id < u2.user_id;

-- Manager names with their direct reports
SELECT e.name as employee, m.name as manager
FROM employees e
LEFT JOIN employees m ON e.manager_id = m.employee_id;
```

### Join Examples

```sql
-- Show each order with customer name and product details
SELECT 
  o.order_id,
  u.name as customer,
  p.name as product,
  o.quantity,
  p.price,
  (o.quantity * p.price) as total
FROM orders o
INNER JOIN users u ON o.user_id = u.user_id
INNER JOIN products p ON o.product_id = p.product_id;

-- Orders per customer
SELECT 
  u.name,
  COUNT(o.order_id) as total_orders,
  SUM(o.quantity * p.price) as total_spent
FROM users u
LEFT JOIN orders o ON u.user_id = o.user_id
LEFT JOIN products p ON o.product_id = p.product_id
GROUP BY u.name
ORDER BY total_spent DESC;
```

## Subqueries - Queries Within Queries

### IN Subquery
```sql
-- Find users who placed orders
SELECT * FROM users
WHERE user_id IN (
  SELECT DISTINCT user_id FROM orders
);

-- Products more expensive than average
SELECT * FROM products
WHERE price > (
  SELECT AVG(price) FROM products
);
```

### Subquery in FROM

```sql
-- Average by category, then find categories above overall average
SELECT * FROM (
  SELECT category, AVG(price) as avg_price
  FROM products
  GROUP BY category
) category_averages
WHERE avg_price > 100;
```

### EXISTS Subquery

```sql
-- Find customers with at least one order
SELECT * FROM users u
WHERE EXISTS (
  SELECT 1 FROM orders o
  WHERE o.user_id = u.user_id
);

-- Find customers with NO orders
SELECT * FROM users u
WHERE NOT EXISTS (
  SELECT 1 FROM orders o
  WHERE o.user_id = u.user_id
);
```

## UNION - Combining Results

```sql
-- Combine two queries
SELECT name FROM users
UNION
SELECT name FROM employees;
-- Duplicates removed automatically

-- Keep duplicates
SELECT name FROM users
UNION ALL
SELECT name FROM employees;
```

## DISTINCT - Removing Duplicates

```sql
-- All unique ages
SELECT DISTINCT age FROM users;

-- Unique combinations
SELECT DISTINCT city, country FROM users;
```

## Practical Examples

### Example 1: Sales Analysis
```sql
SELECT 
  p.category,
  p.name,
  SUM(o.quantity) as units_sold,
  SUM(o.quantity * p.price) as revenue,
  AVG(p.price) as avg_price
FROM orders o
INNER JOIN products p ON o.product_id = p.product_id
WHERE o.order_date >= '2024-01-01'
GROUP BY p.category, p.name
HAVING SUM(o.quantity * p.price) > 5000
ORDER BY revenue DESC;
```

### Example 2: Customer Segmentation
```sql
SELECT 
  u.name,
  COUNT(o.order_id) as order_count,
  SUM(o.quantity * p.price) as lifetime_value,
  CASE 
    WHEN SUM(o.quantity * p.price) > 10000 THEN 'Gold'
    WHEN SUM(o.quantity * p.price) > 5000 THEN 'Silver'
    ELSE 'Bronze'
  END as tier
FROM users u
LEFT JOIN orders o ON u.user_id = o.user_id
LEFT JOIN products p ON o.product_id = p.product_id
GROUP BY u.name
ORDER BY lifetime_value DESC;
```

### Example 3: Find Inactive Customers
```sql
SELECT u.name, MAX(o.order_date) as last_order
FROM users u
LEFT JOIN orders o ON u.user_id = o.user_id
GROUP BY u.name
HAVING MAX(o.order_date) < DATE_SUB(NOW(), INTERVAL 6 MONTH)
  OR MAX(o.order_date) IS NULL;
```

## Best Practices

1. **Always use WHERE when possible** - Filter early to reduce data processed
2. **Use aliases for readability** - `FROM users u` instead of `FROM users`
3. **Be explicit in JOINs** - Use INNER/LEFT/RIGHT, not implicit joins
4. **Avoid SELECT \*** - Select only columns you need
5. **Use LIMIT in development** - Don't retrieve millions of rows
6. **Test carefully** - Before UPDATE/DELETE, SELECT the same rows first
7. **Use transactions** - Wrap related queries together
8. **Index frequently filtered columns** - Speeds up WHERE clauses
9. **Use meaningful names** - Column and table names should be clear
10. **Comment complex queries** - Help future you understand the logic

## Summary

SQL is **essential for data work**. Master:
- **SELECT** - retrieve data
- **WHERE** - filter rows
- **ORDER BY** - sort results
- **GROUP BY & aggregate functions** - summarize data
- **JOINs** - combine tables
- **INSERT, UPDATE, DELETE** - modify data

Start with simple queries, build complexity gradually!
