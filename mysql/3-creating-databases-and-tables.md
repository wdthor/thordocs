# 2 - Creating databases and tables

## Database commands

| Code                               | Example                     | Description                                  |
| ---------------------------------- | --------------------------- | -------------------------------------------- |
| `show databases;`                  |                             | Print out available databases                |
| `CREATE DATABASE <database_name>;` | `CREATE DATABASE pet_shop;` | Create a new database                        |
| `DROP DATABASE <database_name>;`   | `DROP DATABASE pet_shop;`   | Drop/Delete a database                       |
| `USE <database_name>;`             | `USE pet_shop;`             | Use a database                               |
| `SELECT database();`               |                             | Print out which database is currently in use |

## Table commands

| Code                              | Example                   | Description                   |
| --------------------------------- | ------------------------- | ----------------------------- |
| `SHOW TABLES;`                    |                           | Print out tables              |
| `SHOW COLUMNS FROM <table_name>;` | `SHOW COLUMNS FROM cats;` | Print out colums from a table |
| `DESC <table_name>;`              | `DESC cats;`              | Print out colums from a table |
| `DROP TABLE <table_name>;`        | `DROP TABLE cats;`        | Drop/Delete a table           |

## Tables

- A database is just a bunch of tables
- A table is a collection of related data held in a structured format within a database

## Data types

| Numeric Types | String Types | Date Types |
| ------------- | ------------ | ---------- |
| INT           | CHAR         | DATE       |
| SMALLINT      | VARCHAR      | DATETIME   |
| TINYINT       | BINARY       | TIMESTAMP  |
| MEDIUMINT     | VARBINARY    | TIME       |
| BIGINT        | BLOB         | YEAR       |
| DECIMAL       | TINYBLOB     |            |
| NUMERIC       | MEDIUMBLOB   |            |
| FLOAT         | LONGBLOB     |            |
| DOUBLE        | TEXT         |            |
| BIT           | TINYTEXT     |            |
|               | MEDIUMTEXT   |            |
|               | LONGTEXT     |            |
|               | ENUM         |            |

- INT - A whole number with a max (signed) value of 2147483647
- VARCHAR - A variable-length string

## Creating tables

```sql
CREATE TABLE cats (
    name VARCHAR(50),
    age INT
);
```

## MySQL comments

```sql
-- This is a comment
```
