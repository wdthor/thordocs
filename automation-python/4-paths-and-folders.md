# Paths and Folders

## Handling paths with Pathlib

- OS (Windows, Linux) - have different path structures
- To solve this issue, we can use Pathlib

::: code-group

```py:line-numbers [paths.py]
from pathlib import Path

current_path = Path('.')

print(current_path, 'is the current working directory')

home = Path.home()
print("Home directory :", home)

# `/` operator is used with a path object
# It creates a new path object with the following argument
doc_path = home / "documents"

print("doc_path :", doc_path) # Users/wdthor/documents

file_path = doc_path / "my_file.txt"
print("file_path :", file_path) # Users/wdthor/documents/my_file.txt

# Opens my_file.txt
with open(file_path, "r") as file:
    print(file.read())
```

:::

## Pathlib methods

### {path}.parent

- get the parent directory of the path provided

::: code-group

```py:line-numbers [pathlib_methods.py]
from pathlib import Path

home = Path.home()
print("Home directory :", home)

doc_path = home / "documents"
print("doc_path :", doc_path)

doc_path_parent = doc_path.parent
print("doc_path_parent", doc_path_parent)

```

:::

### {path}.exists()

- returns a boolean

::: code-group

```py:line-numbers [pathlib_methods.py]
from pathlib import Path

random_path = Path.home() / "I" / "dont" / "exist.csv"
print(random_path)

if random_path.exists():
    with open(random_path, "r") as file:
        print(file.read())

else:
    print("The file doesn't exist")

```

:::

## Iterating over file paths

- `{path}.iterdir()`
- **iterdir** generates an iterator for files and folders within a directory, facilitating easy traversal of these items.
- This allows us to iterate over each item (file of folder) one at a time.
- Each item is a pathlib Path object, which gives us access to various useful properties of the objects.

::: code-group

```py:line-numbers [iterdir.py]
from pathlib import Path
from datetime import datetime

path = (
    Path.home()
    / "automation-python"
).iterdir()

for path in paths:
    # Print all path names inside "automation-python" folder (files and directories)
    print("path", path)

    if path.is_file() and path.suffix == '.txt':
        print(path), 'is a path'
        print(path.name, 'is a text file') # Prints only file names that have .txt extension
        print(path.stem, 'is a text file (without extensions)')

        # get file stats in an object
        stats = item.stat()
        print("File Stats", stats)
        print("Size :", stats.st_size)
        # datetime.fromtimestamp() to get a readable date format
        print("Last modified :", datetime.fromtimestamp(stats.st_mtime))

    if path.is_dir():
        print(path.name, 'is a directory') # Prints only directory names
    if 'pets' in path.name.lower():
        print(path.name, "contains the word 'pets'") # Prints the file names that contains the word "pets"

```

:::

## Creating folders

::: code-group

```py:line-numbers [creating-folders.py]
from datetime import datetime

# The path indludes the new folder name
# If the the folder name already exist, it won't create/ovewri-e it, and will throw an error
new_folder = (
    Path.home()
    / "automation-python"
    / "The new folder"
)

new_folder.mkdir()

# To prevent throwing an error we can use "exist_ok=True"
# It won't overwrite the existing folder
new_folder.mkdir(exist_error=True)

# creates a new folder inside another new folder "parents=True"
folders_that_do_not_exist = new_folder / "fun_folders" / "my_3rd_folder"
folders_that_do_not_exist.mkdir(exist_ok=True, parents=True)
```

:::

## Copying files

### The shutil module

- A Python utility tool that offers high-level operations for handling files and collections of files
- It provides functions for copying, moving, renaming, and deleting files, as well s for working with file archives

- When copying a file, 2 things to keep in mind
  - Does the source file actually exist ?
  - Is there a file with the same name already exist ? If yes, then it will be overwritten

::: code-group

```py:line-numbers [copying-files.py]
import shutil

file_to_copy = (
    Path.home()
    / "automation-python"
    / "3 - Working with files"
    / "dad_jokes.txt"
)

destination_path = (
    Path.home()
    / "automation-python"
    / "4 - Paths and Folders"
    / "copying files"
)

# Copy file to the path provided
shutil.copy(file_to_copy, destination_path)


destination_file_path = destination_path / "dad_jokes.txt"

if not (file_to_copy.exists()):
    print("The source file does not exist.")
elif destination_file_path.exists(): # checks if the file already exist
    print("The file already exists in the destination folder")
else:
    print("File copied")
    shutil.copy(file_to_copy, destination_path)

```

:::

## Copying folders

- shutil.copytree(folder_to_copy, destination_path) copy the entire folder (including files and folders inside)

::: code-group

```py:line-numbers [copying-folders.py]
import shutil

folder_to_copy = (
    Path.home()
    / "automation-python"
    / "4 - Paths and Folders"
    / "The new folder"
    / "fun_folders"
)

destination_path = (
    Path.home()
    / "automation-python"
    / "4 - Paths and Folders"
    / "The new folder"
    / "my_3rd_folder"
)


if not folder_to_copy.exists():
    print("Unknown path")
else:
    # dirs_exist_ok=True ignores the error and copy the folder anyway
    # It can be useful if there's a new file/folder to copy
    shutil.copytree(folder_to_copy, destination_path, dirs_exist_ok=True)
    print("folder copied")
```

:::

## Moving files and folders

- When moving file, the destination path should include the file/folder name we want to move
- Note : As of Python 3.12, we don't need to include the file name anymore

::: code-group

```py:line-numbers [moving-files-folders.py]
import shutil

file_to_move = (
    Path.home()
    / "automation-python"
    / "4 - Paths and Folders"
    / "The new folder"
    / "fun_folders"
    / "copying files"
    / "dad jokes file.txt"
)

folder_to_move = (
    Path.home()
    / "automation-python"
    / "4 - Paths and Folders"
    / "The new folder"
    / "fun_folders"
    / "my_3rd_folder"
)

destination_path = (
    Path.home()
    / "automation-python"
    / "4 - Paths and Folders"
    / "The new folder"
    / "my_3rd_folder"
)


if not file_to_move.exists():
    print("Unknown path")
else:
    # move file
    shutil.move(file_to_move, destination_path)
    print("file moved")
    # move folder
    shutil.move(folder_to_move, destination_path)

```

:::

## Renaming files and folders

- To rename a file/folder, we use the same method as the `.move()` method

::: code-group

```py:line-numbers [renaming-files-folders.py]
import shutil

path_to_file = (
    Path.home()
    / "automation-python"
    / "4 - Paths and Folders"
    / "The new folder"
    / "fun_folders"
    / "copying files"
)

file_to_rename = (
    path_to_file
    / "dad jokes file.txt"
)

file_rename_into = (
    path_to_file
    / "mom jokes.txt"
)

path_to_folder = (
    Path.home()
    / "automation-python"
    / "4 - Paths and Folders"
    / "The new folder"
    / "fun_folders"
)

folder_to_rename = (
    path_to_folder
    / "my_3rd_folder"
)

folder_rename_into = (
    path_to_folder
    / "my_4th_folder"
)

if not file_to_rename.exists():
    print("Unknown path")
else:
    # renamed file
    shutil.move(file_to_rename, file_rename_into)
    print("file renamed")

    # renamed folder
    shutil.move(folder_to_rename, folder_rename_into)

```

:::

## Deleting files and folders

- We don't need the shutil module to delete a single file or empty folder
- To delete a file, we use the `<file_name>.unlink()` method
- To delete a folder, we use the `<folder_name>.rmdir()` method
- `<folder_name>.rmdir()` only removes empty folders
- `shutil.rmtree(<folder_name>)` removes entire folders (containing files/folders)

::: code-group

```py:line-numbers [deleting-files-folders.py]
import shutil

path_to_file = (
    Path.home()
    / "automation-python"
    / "4 - Paths and Folders"
    / "The new folder"
    / "fun_folders"
    / "copying files"
)

file_to_delete = (
    path_to_file
    / "dad jokes file.txt"
)

path_to_folder = (
    Path.home()
    / "automation-python"
    / "4 - Paths and Folders"
    / "The new folder"
    / "fun_folders"
)

folder_to_delete = (
    path_to_folder
    / "my_3rd_folder"
)

if not file_to_delete.exists():
    print("Unknown path")
else:
    # delete file
    file_to_delete.unlink()
    print("file renamed")

    # If the file doesn't exist or is already deleted we can use unlink(missing_ok=True)
    file_to_delete.unlink(missing_ok=True)

    # delete folder
    folder_to_delete.rmdir()

    # recursively delete folders
    shutil.rmtree(folder_to_delete)

```

:::

## Converting file path to string

- When dealing with paths, characters can be escaped with `\` (ex: `\n` = new line)
- We can get raw strings (ignore escape characters) by using `r""`
- When using the `input()` to get the user prompt path, it automatically converts it into a raw string

::: code-group

```py:line-numbers [converting-file-path_to_string.py]
from pathlib import Path
# Get raw string
raw_path = r"C:\Users\username\folder\learning"
user_path = input("Enter a target folder")

# Convert string into path object
# Path() can interprate Windows/Linux/Mac paths
path = Path(raw_path)

if not path.exists():
    print("path does not exist")

```

:::
