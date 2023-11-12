# CRUD Basics

- Create Read Update Delete

## Read

| Code                                                            | Example                                                    | Description                     |
| --------------------------------------------------------------- | ---------------------------------------------------------- | ------------------------------- |
| `SELECT <column1>, <column2> FROM <table>;`                     | `SELECT name, age FROM cats;`                              | get multiple columns from table |
| `SELECT ... FROM <table> WHERE <column>=<value>;`               | `SELECT name, age FROM cats WHERE age=4;`                  | get multiple columns from table |
| `UPDATE <table> SET <column> = <value> WHERE <column>=<value>;` | `UPDATE cats SET breed = 'Shorthair' WHERE breed='Tabby';` | update row(s) in a table        |
| `DELETE FROM <table> WHERE <column>=<value>;`                   | `DELETE FROM cats WHERE name='Egg';`                       | Delete row(s) from a table      |

### Some SELECT examples :

- Based on this table and data

```sql
-- create table
CREATE TABLE cats
(
	cat_id INT AUTO_INCREMENT,
    name VARCHAR(100),
    breed VARCHAR(100),
    age INT,
    PRIMARY KEY (cat_id)
);

-- fill table
INSERT INTO cats(name, breed, age)
VALUES ('Ringo', 'Tabby', 4),
       ('Cindy', 'Maine Coon', 10),
       ('Dumbledore', 'Maine Coon', 11),
       ('Egg', 'Persian', 4),
       ('Misty', 'Tabby', 13),
       ('George Michael', 'Ragdoll', 9),
       ('Jackson', 'Sphynx', 7);
```

```sql
-- Select cat_id from cats
SELECT cat_id FROM cats;

-- Select name and bree from cats;
SELECT name, breed FROM cats;

-- Select name and age of Tabby cats
SELECT name, age FROM cats WHERE breed='Tabby';

-- Select cat_id and age that have equal values from cats;
SELECT cat_id, age FROM cats WHERE cat_id = age;
```

## Alias

```sql
-- Use 'AS' to alias a column in your results
-- (it doesn't actually change the name of the column in the table)
SELECT cat_id AS id FROM cats;

```

## Update

- update data in a table

```sql
UPDATE cats SET breed = 'Shorthair'
WHERE breed='Tabby';
-- If we don't specify which rows to update in WHERE, it will update all rows
UPDATE cats SET age=14
WHERE name='Mysty';
```

- A good rule of thumb is to always SELECT the rows before UPDATE

### Some UPDATE examples

```sql
-- Change Jackson's name to 'Jack'
SELECT * FROM cats WHERE name='Jackson';
UPDATE cats SET name='Jack' WHERE name='Jackson';

-- Change Ringo's breed to 'British Shorthair'
SELECT * FROM cats WHERE name='Ringo';
UPDATE cats SET breed='British Shorthair' WHERE name='Ringo';

-- Update both Maine Coons' ages to be 12
SELECT * FROM cats WHERE breed='Maine Coon';
UPDATE cats SET age=12 WHERE breed='Maine Coon';

```

## Delete

```sql
-- Delete all cats with name of 'Egg':
DELETE FROM cats
WHERE name='Egg';
-- If we don't use WHERE we delete all rows from the table
-- Delete all rows in the cats table:
DELETE FROM cats;
```

### Some DELETE examples

```sql
-- Delete all 4 year old cats
SELECT * FROM cats WHERE age=4;
DELETE FROM cats WHERE age=4;

-- Delete cats whose age is the same as their cat_id
SELECT * FROM cats WHERE age=cat_id;
DELETE FROM cats WHERE age=cat_id;

-- Delete all cats
SELECT * FROM cats;
DELETE FROM cats;
```
