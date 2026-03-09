# PostgreSQL

## Challenges of PostgreSQL

- Writing efficient queries to retrieve information
- Designing the schema, or structure of the database
- Understanding when to use advanced features
- Managing the database in a production environment

## Database Design Process

- What kind of _thing_ are we storing ?
- What properties does this thing have ?
- What _type_ of data does each of those properties contain ?

## String Operators and Functions

| String Operators and Functions | Description                            |
| ------------------------------ | -------------------------------------- |
| \|\|                           | Join two strings                       |
| LENGTH()                       | Gives number of characters in a string |
| CONCAT()                       | Join two strings                       |
| UPPER()                        | Gives an upper case string             |
| LOWER()                        | Gives a lower case string              |

## WHERE keyword

The WHERE keyword allow us to filter the results we get from a query

## Create, Insert, Select, Filter (Where), Update, Delete

### Create table

```sql
CREATE TABLE cities (
  name VARCHAR(50),
  country VARCHAR(50),
  population INTEGER,
  area INTEGER
);
```

### Insert rows

```sql
-- Insert single row
INSERT INTO cities (name, country, population, area)
VALUES ('Tokyo', 'Japan', 38505000, 8223);

-- Insert multiple rows
INSERT INTO cities (name, country, population, area)
VALUES
  ('Delhi', 'India', 28125000, 2240),
  ('Shanghai', 'China', 22125000, 4015),
  ('Sao Paulo', 'Brazil', 20935000, 3043);
```

### Select rows

```sql
-- List all data
SELECT * FROM cities;

-- List name and population data
SELECT name, population FROM cities;

-- Calculate the number of population per square kilometer (area)
-- The calculation will be named population_density
SELECT name, population / area AS population_density FROM cities;

-- Combine name and country separated by a comma ','
SELECT name || ', ' || country AS location FROM cities;
```

### Filtering rows (WHERE clause)

```sql
SELECT name, area
FROM cities
WHERE area > 4000;

-- Compound where
SELECT name, area
FROM cities
WHERE area BETWEEN 2000 AND 4000;

-- Check value in list
SELECT name, area
FROM cities
WHERE name IN ('Delhi', 'Shanghai');

-- not in
SELECT name, area
FROM cities
WHERE area NOT IN (3043, 8223);

-- Compound search using AND or OR
SELECT name, area
FROM cities
WHERE area NOT IN (3043, 8223) AND name = 'Delhi';

-- Calculation is possible in SELECT and WHERE clauses
-- Since FROM and WHERE run before SELECT the alias cannot be used in the WHERE clause
SELECT name, population AS population_density
FROM cities
WHERE population / area > 6000;
```

### Update rows

```sql
-- if 2 cities have the name Tokyo, BOTH will be updated
UPDATE cities
SET population = 39505000
WHERE name = 'Tokyo';
```

### Delete rows

```sql
-- if 2 cities have the name Tokyo, BOTH will be deleted
DELETE FROM cities
WHERE name = 'Tokyo';
```

## Working with tables

### What tables should we make ?

- Common features (authentification, comments, etc...) are frequently built with conventional table names and columns
- What type of resources exist in your app ? Create a separate table for each of these features
- Features that seem to indicate a _relationship or ownership_ between two types of resources need to be reflected in our table design

### One to Many and Many to One Relationships

Ex: **One** user _has many_ photos, and _many_ photos belongs to **one** user

### One to One and Many to Many Relationships

One to one ex:

- A boat has only one captain
- A company has only one CEO
- A student has only one desk

Many to many ex:

- Many students attends to several classes
- Multiple players play to multiple football matches
- Many movies have many several actors/actresses

### Primary keys & Foreign keys

#### Primary keys

- Each row in every table has one primary key
- No other row in the same table can have the same value
- 99% of the time called 'id'
- Either an integer or a UUID
- Will never change

#### Foreign keys

- Rows only have this if they _belong to_ another record
- Many rows in the same table can have the same foreign key
- Name varies, usually called something like 'xyz_id'
- **Exactly equal to the primary key of the referenced row**
- Will change if the relationship changes
