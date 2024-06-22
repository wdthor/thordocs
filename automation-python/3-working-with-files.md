# Working with files

## Opening, Reading and Closing Files

::: code-group

```py:line-numbers [read.py]
# This method is convenient but consume more computer ressources

# open the file in read mode
file = open('dad_jokes.txt', 'r')
# read the entire content of the file and return them as a single string
content = file.read()
# print the content
print(content)
# close the file
file.close()
```

```py:line-numbers [readlines.py]
# Reading a file line by line is more efficient

# manages opening and closing the files
with open('dad_jokes.txt', 'r') as file:
# Read the file, line by line
lines = file.readlines()

for line in lines:
  # .strip() Removes leading and trailing white spaces
  print(line.strip())

file.close()
```

:::

## Writing files in plain text

::: code-group

```py:line-numbers [write.py]
# open poem.txt in write mode
# if it doesn't exist, it will create it
# if it already exist, it will override it
with open('write/poem.txt', 'w') as file:
  file.write('Roses are red, \n')
  file.write('Violets are blue, \n')
  file.write('Sugar are sweet, \n')
  file.write('And so are you, \n')

```

```py:line-numbers [append.py]
additional_lines = ['Stars up above, \n', 'Whisper words of love']

# open poem.txt in append mode
# if it doesn't exist, it will create it
# if it already exist, it will append the new content in it
with open('write/poem.txt', 'a') as file:
  file.write('The sun is bright, \n')
  file.write('On this lovely night, \n')
  # Iterate and write additional_lines
  file.writelines(additional_lines)

```

:::

## Reading from CSV files

### What are Csv files

- Comma Separated Values
- table-like structure with rows and columns
- values separated by commas
- basically a stripped-down spreadsheet

### What are Csv files used for ?

- importing and exporting data
- data migration
- data analysis

::: code-group

```py:line-numbers [csv_reader.py]
import csv

with open('dad_jokes.csv', 'r') as csv_file:
  csv_reader = csv.reader(csv_file)

  # csv files often contain a header row
  # to skip the header row, we can use next()
  next(csv_reader)

  for row in csv_reader:
    # each row is a list of 3 datas
    # [line, joke, rating]
    joke = row[1]
    rating = row[2]
    print(f'"{joke}" - this joke has a rating of {rating}')
```

:::

## Writing to CSV files

::: code-group

```py:line-numbers [csv_writer.py]
import csv

# If we don't add newline='', on Windows, it will add a new empty line at the end of csv_writer.writerow()
with open('expensive_pets.csv', 'w', newline='') as file:
  csv_writer = csv.writer(file)

  # Writing headers
  csv_writer.writerow(['name', 'species', 'favorite_snack', 'monthly_cost'])
  csv_writer.writerows([
      ['Max', 'Dog', 'bacon strips', 4754],
      ['Julius','Cat','catnip',3215],
      ['Cal','Cat','anything edible',71142],
      ['Lena','Cat','Sheba',142],
      ['Bruiser','Featherfin Catfish','fish pellets',54]
    ])

```

:::

## Transferring in text files

::: code-group

```py:line-numbers [rating_category.py]
import csv

# Joke category function
def rating_category(rating):
    rating = int(rating)

    if rating <= -3:
        category = "abysmal"
    elif rating <= -1:
        category = "awful"
    else:
        category = "bad"
    return category

modified_dad_jokes = []

with open("dad_jokes.csv", "r") as csv_file:
    csv_reader = csv.reader(csv_file)
    # skip and get headers value
    headers = next(csv_reader)
    modified_dad_jokes.append(headers)

    # Add a new column
    headers.append("rating_category")
    for row in csv_reader:
      # add value to the new column
      row.append(rating_category(row[2]))
      modified_dad_jokes.append(row)

# Creates a new file
with open("modified_dad_jokes.csv", "w", newline="") as new_csv_file:
    csv_writer = csv.writer(new_csv_file)
    csv_writer.writerows(modified_dad_jokes)

```

:::
