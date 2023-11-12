# Inserting Data

INSERT INTO cats(name, age)
VALUES ("Blue Steele", 5);

| Code                                                                                                                  | Example                                                                                                             | Description                       |
| --------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- | --------------------------------- |
| `INSERT INTO <table_name>(<column_name1>, <column_name2)` <br /> `VALUES(<value1>, <value2>);`                        | `INSERT INTO cats(name, age)` <br /> `VALUES('Blue Steele', 5);`                                                    | Insert data into a table          |
| `INSERT INTO <table_name>(<column_name1>, <column_name2)` <br /> `(<value1>, <value2>),` <br /> `(<value1>, <value2>` | `INSERT INTO cats(name, age)` <br /> `VALUES('Meatball', 5),` <br /> `('Turkey', 1),` <br /> `('Potato Face', 15);` | Insert multiple data into a table |

## NOT NULL

- When create a table we can set data to be mandatory using `NOT NULL`

```sql
CREATE TABLE cats (
    name VARCHAR(50) NOT NULL,
    age INT NOT NULL
);
```

- Now, if we add a new cat without age or name, it will throw an error

## Single quote

- Some databases do not accept double quotes `""`, so a good practice is to use single quote `''`

## Default value

- We can default value to tables by using `DEFAULT`

```sql
CREATE TABLE cats (
    name VARCHAR(50) DEFAULT 'unnamed',
    age INT DEFAULT 99
);
```

- We can combine `NOT NULL` with `DEFAULT` because it doesn't prevent us to set a value to `NULL`

```sql
CREATE TABLE cats (
    name VARCHAR(50) NOT NULL DEFAULT 'unnamed',
    age INT DEFAULT 99
);
```

## Primary key

- Primary key is a unique identifier to allow us to differentiate data
- They can never be `NULL`

- 1st method

```sql
CREATE TABLE cats (
    cat_id INT PRIMARY KEY,
    name VARCHAR(50),
    age INT
);
```

- 2nd method

```sql
CREATE TABLE cats (
    cat_id INT,
    name VARCHAR(50),
    age INT,
    PRIMARY KEY (cat_id)
);
```

## Auto increment

- Since auto increment works by itself, we do not need to specify a VALUE into it

```sql
CREATE TABLE cats (
    cat_id INT AUTO_INCREMENT,
    name VARCHAR(50),
    age INT,
    PRIMARY KEY (cat_id)
);
```

```sql
INSERT INTO cats VALUES
('Bingo', 3); -- We didn't need to set `cat_id` value
```

## Create Table / Insert Exercise

```sql
-- Defining employees table
CREATE TABLE employees (
	id INT AUTO_INCREMENT PRIMARY KEY,
    last_name VARCHAR(100) NOT NULL,
    first_name VARCHAR(100) NOT NULL,
    middle_name VARCHAR(100),
    age INT NOT NULL,
    current_status VARCHAR(100) NOT NULL DEFAULT 'employed'
);

-- A test INSERT:
INSERT INTO employees(first_name, last_name, age) VALUES
('Dora', 'Smith', 58);
```
