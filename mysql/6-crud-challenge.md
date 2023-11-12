# CRUD Challenge

```sql
-- Create a new dabase shirts_db
-- Create a new table shirts
-- shirt_id, article, color, shirt_size, last_worn

-- ('t-shirt', 'white', 'S', 10),
-- ('t-shirt', 'green', 'S', 200),
-- ('polo shirt', 'black', 'M', 10),
-- ('tank top', 'blue', 'S', 50),
-- ('t-shirt', 'pink', 'S', 0),
-- ('polo shirt', 'red', 'M', 5),
-- ('tank top', 'white', 'S', 200),
-- ('tank top', 'blue', 'M', 15)

-- Get all that data in there with a single line
-- Add a new shirt - purple polo shirt, size M, last worn 50 days ago
-- Select all shirts, but only print out Article and Color
-- Select all medium shirts, print out everything but shirt_id
-- Update all polo shirts, change their size to L
-- Update the shirt last worn 15 days ago, change last_worn to 0
-- Update all white shirts, change size to 'XS' and collor to 'off white'
-- Delete all old shirts, last worn 200 days ago
-- Delete all tank tops
-- Delete all shirts
-- Drop the entire shirts table
```

```sql
-- Create a new dabase shirts_db
CREATE DATABASE shirts_db;
SHOW DATABASES;
SELECT DATABASE();
USE shirts_db;

-- Create a new table shirts
-- shirt_id, article, color, shirt_size, last_worn
CREATE TABLE shirts
(
	shirt_id INT AUTO_INCREMENT PRIMARY KEY,
	article VARCHAR(100) NOT NULL,
    color VARCHAR(100) NOT NULL,
    shirt_size VARCHAR(10) NOT NULL,
    last_worn INT NOT NULL
);

SHOW TABLES;
DESC shirts;

-- ('t-shirt', 'white', 'S', 10),
-- ('t-shirt', 'green', 'S', 200),
-- ('polo shirt', 'black', 'M', 10),
-- ('tank top', 'blue', 'S', 50),
-- ('t-shirt', 'pink', 'S', 0),
-- ('polo shirt', 'red', 'M', 5),
-- ('tank top', 'white', 'S', 200),
-- ('tank top', 'blue', 'M', 15)
-- Get all that data in there with a single line
INSERT INTO shirts(article, color, shirt_size, last_worn) VALUES
('t-shirt', 'white', 'S', 10),
('t-shirt', 'green', 'S', 200),
('polo shirt', 'black', 'M', 10),
('tank top', 'blue', 'S', 50),
('t-shirt', 'pink', 'S', 0),
('polo shirt', 'red', 'M', 5),
('tank top', 'white', 'S', 200),
('tank top', 'blue', 'M', 15);
SELECT * FROM shirts;

-- Add a new shirt - purple polo shirt, size M, last worn 50 days ago
INSERT INTO shirts(article, color, shirt_size, last_worn)
VALUES('polo shirt', 'purple', 'M', 50);
SELECT * FROM shirts;

-- Select all shirts, but only print out Article and Color
SELECT article, color FROM shirts;

-- Select all medium shirts, print out everything but shirt_id
SELECT article, color, shirt_size, last_worn FROM shirts WHERE shirt_size='M';

-- Update all polo shirts, change their size to L
SELECT * FROM shirts WHERE article='polo shirt';
UPDATE shirts SET shirt_size='L' WHERE article='polo shirt';
SELECT * FROM shirts WHERE article='polo shirt';

-- Update the shirt last worn 15 days ago, change last_worn to 0
SELECT * FROM shirts WHERE last_worn=15;
UPDATE shirts SET last_worn=0 WHERE last_worn=15;
SELECT * FROM shirts;

-- Update all white shirts, change size to 'XS' and color to 'off white'
SELECT * FROM shirts WHERE color='white';
UPDATE shirts SET shirt_size='XS', color='off white' WHERE color='white';
SELECT * FROM shirts;

-- Delete all old shirts, last worn 200 days ago
SELECT * FROM shirts WHERE last_worn=200;
DELETE FROM shirts WHERE last_worn=200;
SELECT * FROM shirts;d

-- Delete all tank tops
SELECT * FROM shirts WHERE article='tank top';
DELETE FROM shirts WHERE article='tank top';
SELECT * FROM shirts;

-- Delete all shirts
SELECT * FROM shirts;
DELETE FROM shirts;
SELECT * FROM shirts;

-- Drop the entire shirts table
SHOW TABLES;
DROP TABLE shirts;
SHOW TABLES;
```
