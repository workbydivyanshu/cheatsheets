---
title: SQL
description: SQL queries, commands, and database operations
category: Database
---

# SQL Cheatsheet

## Basic Syntax

### SELECT
```sql
SELECT * FROM table_name;
SELECT column1, column2 FROM table_name;
SELECT DISTINCT column FROM table;
SELECT * FROM table WHERE condition;
```

### INSERT
```sql
INSERT INTO table_name (col1, col2) VALUES (val1, val2);
INSERT INTO table_name VALUES (val1, val2, val3);
INSERT INTO table1 SELECT * FROM table2;
```

### UPDATE
```sql
UPDATE table_name SET column = value;
UPDATE table_name SET column = value WHERE condition;
UPDATE table_name SET col1 = val1, col2 = val2 WHERE condition;
```

### DELETE
```sql
DELETE FROM table_name;
DELETE FROM table_name WHERE condition;
```

## WHERE Clause

### Operators
```sql
WHERE column = value;
WHERE column != value;
WHERE column > value;
WHERE column < value;
WHERE column >= value;
WHERE column <= value;
WHERE column LIKE 'pattern';
WHERE column IN (val1, val2, val3);
WHERE column BETWEEN val1 AND val2;
WHERE column IS NULL;
WHERE column IS NOT NULL;
```

### Logical Operators
```sql
WHERE col1 = val1 AND col2 = val2;
WHERE col1 = val1 OR col2 = val2;
WHERE NOT column = value;
```

## LIKE Pattern Matching

```sql
LIKE 'a%'      -- Starts with 'a'
LIKE '%a'      -- Ends with 'a'
LIKE '%a%'     -- Contains 'a'
LIKE 'a_c'     -- 3 chars, starts with 'a', ends with 'c'
LIKE '[abc]%'  -- Starts with a, b, or c
LIKE '[^abc]%' -- Does not start with a, b, or c
```

## ORDER BY

```sql
SELECT * FROM table ORDER BY column;
SELECT * FROM table ORDER BY column ASC;
SELECT * FROM table ORDER BY column DESC;
SELECT * FROM table ORDER BY col1 ASC, col2 DESC;
SELECT * FROM table ORDER BY 1, 2;  -- By column number
```

## LIMIT & OFFSET

```sql
SELECT * FROM table LIMIT 10;
SELECT * FROM table LIMIT 10 OFFSET 5;
SELECT * FROM table LIMIT 5, 10;  -- Offset 5, limit 10
```

## DISTINCT

```sql
SELECT DISTINCT column FROM table;
SELECT DISTINCT col1, col2 FROM table;
```

## JOIN Operations

### INNER JOIN
```sql
SELECT * FROM table1
INNER JOIN table2 ON table1.id = table2.id;

SELECT * FROM table1
JOIN table2 ON table1.id = table2.id;
```

### LEFT JOIN
```sql
SELECT * FROM table1
LEFT JOIN table2 ON table1.id = table2.id;

SELECT * FROM table1
LEFT OUTER JOIN table2 ON table1.id = table2.id;
```

### RIGHT JOIN
```sql
SELECT * FROM table1
RIGHT JOIN table2 ON table1.id = table2.id;

SELECT * FROM table1
RIGHT OUTER JOIN table2 ON table1.id = table2.id;
```

### FULL OUTER JOIN
```sql
SELECT * FROM table1
FULL OUTER JOIN table2 ON table1.id = table2.id;
```

### CROSS JOIN
```sql
SELECT * FROM table1
CROSS JOIN table2;
```

### Self Join
```sql
SELECT a.id, b.id FROM table a
JOIN table b ON a.parent_id = b.id;
```

## Aggregate Functions

```sql
COUNT(column)       -- Count non-null values
COUNT(*)            -- Count all rows
SUM(column)         -- Sum values
AVG(column)         -- Average value
MIN(column)         -- Minimum value
MAX(column)         -- Maximum value
```

### GROUP BY
```sql
SELECT column, COUNT(*) FROM table GROUP BY column;
SELECT col1, SUM(col2) FROM table GROUP BY col1;
```

### HAVING
```sql
SELECT column, COUNT(*) FROM table
GROUP BY column HAVING COUNT(*) > 5;
```

## String Functions

```sql
CONCAT(str1, str2)           -- Concatenate strings
LENGTH(string)               -- String length
UPPER(string)                -- Convert to uppercase
LOWER(string)                -- Convert to lowercase
SUBSTRING(string, start, len) -- Extract substring
TRIM(string)                 -- Remove whitespace
LTRIM(string)                -- Remove left whitespace
RTRIM(string)                -- Remove right whitespace
REPLACE(string, from, to)    -- Replace substring
CHARINDEX(substr, string)    -- Find substring position
REVERSE(string)              -- Reverse string
REPEAT(string, count)        -- Repeat string
```

## Math Functions

```sql
ABS(number)                  -- Absolute value
ROUND(number, decimals)      -- Round number
FLOOR(number)                -- Floor value
CEIL(number)                 -- Ceiling value
SQRT(number)                 -- Square root
POWER(number, exponent)      -- Raise to power
MOD(number, divisor)         -- Modulo operation
RAND()                       -- Random number (0-1)
```

## Date Functions

```sql
GETDATE()                    -- Current date/time
DATEADD(unit, value, date)   -- Add to date
DATEDIFF(unit, date1, date2) -- Difference between dates
YEAR(date)                   -- Extract year
MONTH(date)                  -- Extract month
DAY(date)                    -- Extract day
DATEFROMPARTS(year, month, day) -- Create date
FORMAT(date, format)         -- Format date
```

## NULL Handling

```sql
ISNULL(column, default)      -- Replace NULL with default
COALESCE(col1, col2, col3)   -- Return first non-null
NULLIF(col1, col2)           -- Return NULL if equal
```

## UNION

```sql
SELECT col FROM table1
UNION
SELECT col FROM table2;

SELECT col FROM table1
UNION ALL
SELECT col FROM table2;     -- Include duplicates
```

## CASE Statement

```sql
SELECT column,
  CASE
    WHEN condition1 THEN value1
    WHEN condition2 THEN value2
    ELSE value3
  END AS alias
FROM table;
```

## Subqueries

### Scalar Subquery
```sql
SELECT (SELECT COUNT(*) FROM table2) FROM table1;
```

### WHERE Subquery
```sql
SELECT * FROM table1
WHERE id IN (SELECT id FROM table2);

SELECT * FROM table1
WHERE EXISTS (SELECT 1 FROM table2 WHERE table2.id = table1.id);
```

### FROM Subquery
```sql
SELECT * FROM (
  SELECT col1, col2 FROM table
) AS subquery;
```

## CREATE TABLE

```sql
CREATE TABLE table_name (
  id INT PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(100) NOT NULL,
  email VARCHAR(100) UNIQUE,
  age INT CHECK (age >= 0),
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);
```

## Data Types

```sql
INT, INTEGER               -- Integer
DECIMAL(10, 2)            -- Decimal number
FLOAT, DOUBLE             -- Floating point
VARCHAR(100)              -- Variable length string
CHAR(10)                  -- Fixed length string
TEXT                      -- Large text
DATE                      -- Date
DATETIME, TIMESTAMP       -- Date and time
TIME                      -- Time
BOOLEAN                   -- Boolean (TRUE/FALSE)
```

## ALTER TABLE

```sql
ALTER TABLE table ADD COLUMN column_name TYPE;
ALTER TABLE table DROP COLUMN column_name;
ALTER TABLE table MODIFY COLUMN column_name TYPE;
ALTER TABLE table RENAME COLUMN old TO new;
ALTER TABLE table ADD CONSTRAINT constraint_name ...;
ALTER TABLE table DROP CONSTRAINT constraint_name;
```

## Constraints

```sql
PRIMARY KEY     -- Unique identifier
UNIQUE          -- Unique value
NOT NULL        -- Must have value
DEFAULT value   -- Default value
CHECK condition -- Check condition
FOREIGN KEY     -- Reference another table
```

## Indexes

```sql
CREATE INDEX idx_name ON table(column);
CREATE UNIQUE INDEX idx_name ON table(column);
DROP INDEX idx_name;
```

## Views

```sql
CREATE VIEW view_name AS
SELECT col1, col2 FROM table WHERE condition;

DROP VIEW view_name;
```

## Transactions

```sql
BEGIN TRANSACTION;
  -- SQL statements
COMMIT;           -- Save changes

BEGIN TRANSACTION;
  -- SQL statements
ROLLBACK;         -- Undo changes
```

## Stored Procedures

```sql
CREATE PROCEDURE proc_name
  @param1 TYPE,
  @param2 TYPE
AS
BEGIN
  SELECT * FROM table WHERE col = @param1;
END;

EXEC proc_name @param1 = value1, @param2 = value2;
DROP PROCEDURE proc_name;
```

## Common Queries

### Top N Records
```sql
SELECT TOP 10 * FROM table;        -- SQL Server
SELECT * FROM table LIMIT 10;      -- MySQL/SQLite
SELECT * FROM table FETCH FIRST 10 ROWS ONLY; -- Standard SQL
```

### Duplicate Check
```sql
SELECT column, COUNT(*) FROM table
GROUP BY column HAVING COUNT(*) > 1;
```

### Delete Duplicates
```sql
DELETE FROM table WHERE id NOT IN (
  SELECT MIN(id) FROM table GROUP BY column
);
```

### Update with Join
```sql
UPDATE table1
SET col = value
FROM table2
WHERE table1.id = table2.id;
```

### Pagination
```sql
SELECT * FROM table
ORDER BY id
OFFSET 20 ROWS FETCH NEXT 10 ROWS ONLY;
```
