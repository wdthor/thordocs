# Learn Shells and Terminal

## Chapter 1 - Terminals and Shells

### REPL

- Shells are ofter referred to as REPL
- Read - Read the commands you type
- Eval (evaluate) - Evaluate those commands, usually by running other programs on your computer
- Print - Print the output of those commands
- Loop - Give you a new prompt to type another command and repeat

### Variables

#### Create variables

```sh
name="Thor"
```

#### Use a variable

```sh
echo $name
```

#### Practice

```sh
echo "$bankname was founded in $founded by $ceo"
```

### History

- to see previous commands

```sh
history
```

### Clear terminal's screen

`clear` or `ctrl + l`

## Chapter 2 - Filesystems

### What is a Filesystem

- **Files** and **directories** are organized into a tree-like structure called a **filesystem**.
- The **filesystem** tree starts with a single directory called the **root** directory.

### pwd - print working directory

- command to see the filepath of your current working directory

```sh
pwd
```

- The output of the `pwd` command is a **filepath**
- A filepath is a string that describes the location of a file or directory on the computer
- `/Users/thor`

```sh
root
  └── Users
        └── wdthor
```

### Absolute vs Relative Paths

- **relative path** are just path that takes into account the current directory
- An **absolute path** is a path that starts at the root of the filesystem

### The cat command

- The `cat` command is used to view the contents of a file. It's short for "concatenate", which is a fancy way of saying "put things together".
- It can be used to view multiple files at once

```sh
# Print the contents of a file to the terminal
cat file1.txt

# Concatenate the contents of multiple files and print them to the terminal
cat file1.txt file2.txt
```

### Head and Tail

#### Head

- The `head` command prints **the first** `n` lines of a file, where `n` is a number you specify.
- If you don't specify a number, it will default to 10.

```sh
head -n 10 file1.txt
```

#### Tail

- The `tail` command prints **the last** `n` lines of a file, where `n` is a number you specify.

```sh
tail -n 10 file1.txt
```

### More and Less

- The `more` and `less` commands let you view the contents of a file one page (or line) at a time
- The `less` command does everything that the `more` command does but also **has more features**
- As a general rule, you should use `less` instead of `more`

```sh
less 2023.csv
```

- You're now in an interactive mode because `less` has taken over your terminal window.
- Press `enter` to scroll down a few lines
- Use the `spacebar` to scroll down a page at a time
- Press `b` to go back up
- Press `q` to exit the `less` program

- Run the `less` command, with the `-N` flag to show line numbers:

### Touch

- The `touch` command is designed to update the access and modification timestamps of a file.
- By default, if the specified file does not exist, `touch` will **create an empty file** with the given filename
- `touch` can be very handy when writing scripts because it ensures certain files exist without altering existing ones, creating new files only if necessary.

### Directories

- On some systems, directories are called "folders", but it's the same thing

#### mkdir - make directory

- The "make directory" command creates a new directory inside the current directory.

### Move

- The `move` command moves a file or directory from one location to another
- You can use it to rename a file or to move it to a different directory altogether
- Your working directory can't be the directory you're moving.

```sh
mv some_file.txt some_other_name.txt
mv some_file.txt some_directory/some_file.txt
```

- If you don't want to rename the file and you're just moving it to a different directory, you can omit the filename

```sh
mv some_file.txt some_directory/
```

### Remove

- The remove command deletes a file or empty directory

```sh
rm some_file.txt
```

- You can optionally add a `-r` flag to tell the `rm` command to delete a directory and all of its contents recursively
- "Recursively" is just a fancy way of saying "do it again on all of the subdirectories and their contents".

```sh
rm -r some_directory
```

### Copy

- It copies a file from one location to another

```sh
cp source_file.txt destination/
```

- You can also copy a directory and all of its contents recursively by adding the `-R` flag

```sh
cp -R my_dir new_dir
```

### Home

- Your `home` directory is where you want to spend most of your time
- Many of the other directories on your machine are critical to the operating system or other programs
- Be careful when working in other directories like `/bin`, `/etc`, `/var`, etc.

#### The `~` alias

- The `~` character is an alias for your home directory
- So when I want to go `home`, I can just type : `cd ~`

### Grep

- searching for text in files on a CLI can be much faster than using a GUI

#### The `grep` command

- The `grep` command allows you to search for a string in a file
- if we wanted to search for the word "hello" in the file `hello.txt`, we could run:

```sh
grep "hello" hello.txt
```

- This will print out every line in `hello.txt` that contains the word "hello"
- It's a case-sensitive search, so it will not match "Hello" or "HELLO"

#### Grep Multiple Files

- You can also search multiple files at once

```sh
grep "hello" hello.txt hello2.txt
```

#### Recursive search

- You can also search an entire directory, including all subdirectories

```sh
grep -r "hello" .
```

- The `.` is a special alias for the current directory

### Find

- The `find` command is a powerful tool for **finding files and directories by name**, not by their contents.

```sh
find some_directory -name hello.txt
```

#### Pattern search

- The `find` command can also search for files that **match a pattern**

```sh
find some_directory -name "*.txt"
```

- The `*` character is a wildcard that matches anything. If you're trying to find filenames that contain a specific word, you can use the `*` character to match the rest of the filename

```sh
# Find all files that contain the word "chad"
find some_directory -name "*chad*"
```

## Chapter 3 - Permissions

### Users

#### Sudo

- The `sudo` keyword lets you run a command as a "superuser". It's short for "superuser do"

### Permissions

- In a Unix-like operating system, permissions control **who can do what to which files and directories**
- The permissions of an individual file or directory are visually represented as a **10-character string**

```sh
drwxrwxrwx
```

- `-`: Regular file (-rwxrwxrwx)
- `d`: Directory (drwxrwxrwx)

- The next 9 characters are broken up into **3 sets** of `rwx` and represent the permissions for the "owner", "group", and "others", in order
- Each group of 3 represents the permissions for **reading**, **writing**, and **executing**, in order.

- `-rwxrwxrwx`: A file where everyone can do everything
- `-rwxr-xr-x`: A file where everyone can read and execute, but only the owner can write
- `drwxr-xr-x`: A directory where everyone can read (`ls` the contents) and execute (`cd` into it), but only the owner can write (modify the contents)
- `drwx------`: A directory where only the owner can read, write and execute

### Change Permissions

- The `chmod` command (change mode) lets you change the permissions of a file or directory
- Use `ls -l` will print out the permissions of each file and directory in long format

#### Example

- Change the permissions of the `private` directory and all of its contents so that :
  - The owner can read, write, and execute
  - The group can do nothing
  - Others can do nothing

```sh
chmod -R u=rwx,g=,o= DIRECTORY
```

- `u` means "user" (aka "owner")
- `g` means "group"
- `o` means "others"
- `=` means "set the permissions to the following"
- `rwx` means "read, write and execute"
- `g=` and `o=` mean "set group and other permissions to nothing"
- `-R` means "recursively", which means "do this to all of the contents of the directory as well"

### Executables

- Executable files are just programs that you can run on your computer
- Files with a `.sh` extension are **shell scripts**
- They're just text files that contain shell commands
- You can run a file in your shell by just typing its filepath:

```sh
mydir/program.sh
```

- If the program is in the current directory, you need to prefix it with `./`:

```sh
./program.sh
```

- `-x` is a flag used with the `chmod` command that will remove the executable permission (to all users) from the file

```sh
chmod -x <file-name>
```

- use `+x` to re-add the executable permission

```sh
chmod +x <file-name>
```

### Chown

- `chmod` allows you to change the permissions of any file or directory that you own
- But what if you don't own the file or directory? That's where `sudo` is required
- `chown` allows you to change the owner of a file or directory, and it **requires root privileges**.

```sh
sudo chown -R root contacts
```

- `sudo` - Run as the root user
- `chown` - Command to change the owner
- `-R` - "Recursive", meaning also apply the changes to everything inside the directory
- `root` - The name of the new owner
- `contacts` - The directory to change the owner of

## Chapter 3 - Programs

### Compiled vs Interpreted

#### Compiled programs

- A compiled program is a program that has been converted from human-readable source code into machine code (binary)
- Machine code is a set of instructions that a computer can execute directly
- Programming languages like Go, C, and Rust are compiled languages that produce compiled programs

#### Interpreted programs

- An interpreted program is a program that is executed by _another_ program
- The program that executes the interpreted program is called an interpreter
- The interpreter reads the source code of the interpreted program and executes it
- Programming languages like Python, Ruby, and JavaScript, are interpreted languages
- Your computer needs to have an interpreter installed to run programs written in those languages

#### which command

- The `which` command tells you the location of an installed command line program

### Shebang

- A "shebang" is a special line at the top of a script that tells your shell which program to use to execute the file.

The format of a shebang is:

```sh
#! interpreter [optional-arg]
```

For example, if your script is a Python script and you want to use Python 3, your shebang might look like this :

```sh
#!/usr/bin/python3
```

- This tells the system to use Python 3 located at `/usr/bin/python3` to run the script

### Bourne Shell

- `sh` - The Bourne shell. This is the original Unix shell and is POSIX-compliant. It's very basic and doesn't have many quality-of-life features.
- `bash` - The Bourne Again shell. This is the most popular shell on Linux. It builds on `sh`, but also has a lot of extra features.
- `zsh` - The Z shell. This is the most popular shell on macOS. Like `bash`, it does what `sh` can do, but also has a lot of extra features.
- Both `zsh` and `bash` are "sh-compatible" shells, meaning they can run `.sh` scripts, but they also have extra features that generally make them more pleasant to use

### Shell Configuration

- `Bash` and `Zsh` both have configuration files that run automatically each time you start a new shell session
- These files are located in your **home** directory (~) and are hidden by default
- The `ls` command has a `-a` flag that will show hidden files

```sh
ls -a ~
```

### Environment Variables

- There is another type of variable called **environment variables**
- They are available to all programs that you run in your shell
- You can view all of the environment variables that are currently set in your shell with the command `env`

- If you want to set a variable in your shell, you can use the `export` command

```sh
export NAME="wdthor"
```

- You can then use the variable in your shell, just as before

```sh
echo $NAME
# wdthor
```

- The interesting part is that **programs and scripts** you run in your shell **can also use that variable**
- For example, we can create a file called `introduce.sh` with the following contents

```sh
#!/bin/sh
echo "Hi I'm $NAME"
```

- Then we run it

```sh
chmod +x ./introduce.sh

./introduce.sh
# Hi I'm wdthor
```

### PATH

- There are environment variables that are sort of "built-in" to your shell
- "built-in" just mean that different programs and parts of your system know about them and use them
- The `PATH` variable is one of those.
- If it weren't for the `PATH`, you'd have to remember the filesystem path of every executable you wanted to run
- Instead of just running `ls`, you'd have to run `/bin/ls`
- The `PATH` variable is a list of directories that your shell will look into when you try to run a command
- If you type `ls`, your shell will look in each directory listed in your `PATH` variable for an executable called `ls`
- If it finds one, it will just run it
- If it doesn't, it will give you an error like: "command not found".

### Change your PATH

- A common problem you'll run into in the future is that you install a new program on your machine
- but when you try to run it from your terminal, you get an error like :

```sh
$ my-new-program
-bash: my-new-program: command not found
```

- Nine times out of ten, this is because the program is installed in a location that's not in your `PATH` variable
- Oftentimes when you install a program using the CLI, **it will print a message** during the installation process **that tells you where the command was installed**
- To add a directory to your `PATH` without overwriting all of the existing directories, use the `export` command and reference the existing `PATH` variable :

```sh
export PATH="$PATH:/path/to/new"
```

### PATH Config

- The next time you restart your shell, the `PATH` variable will be reset to its default value
- The most common way to change your `PATH` variable permanently is to add the export command in the `.bashrc` file

### Man

- The `man` command is short for "manual". It's a program that displays the manual for other programs

#### Using man

- The `man` command will only work for programs that it has a manual for

#### Searching

- You can search for text in the manual by pressing the `/` key and typing your search, then pressing `enter`

```sh
man ls
# type '/-r' to start searching

# press 'n' to jump to the next result

# press 'N' to go back if you went too far
```

### Flags

- Flags are options that you can pass to a command to change its behavior
- For example, the `ls` command can take a `-l` flag to show a "long" listing of files :

```sh
ls -l
```

- You can combine flags:

```sh
ls -al
```

#### Conventions

- Single-character flags are prefixed with a single dash (`-a`)
- Multi-character flags are prefixed with two dashes (`--help`)
- Sometimes the same flag can be used with a single dash or two dashes (`-h` or `--help`)

### Positional Arguments

- In a shell, commands (programs) can also take arguments. For example, the `cd` command takes a **single** argument (the directory to change to) :

```sh
cd /home/wdthor
```

- Other commands might take **multiple** arguments. For example, the `mv` command takes two arguments: the file to move, and the destination to move it to :

```sh
mv file.txt newfile.txt
```

### Help

- By convention, most production-ready CLI tools have a "help" option that will print out some information about how to use the tool
- `--help` (flag)
- `-h` (flag)
- `help` (first positional argument)
  The "help" output is often easier to parse than a full `man` page. It's usually more of a quick start guide than a full manual.

### Exit Codes

- Exit codes (sometimes called "return codes" or "status codes") are how programs communicate back whether they ran successfully or not
- 0 is the exit code for success
- Any other exit code is an error
- 9 times out of 10, if a non-zero exit code is returned (meaning an error) it will be 1, which is the "catch-all" error code
- Programs that call other programs use error codes to figure out if execution was successful
- In a shell, you can access the exit code of the last program you ran with the question mark (?) variable

```sh
ls ~
echo $?
# 0

ls /does/not/exist
echo $?
# 1
```

### Standard Error

- "Standard Error", usually called "stderr", is the same thing as standard output, but for error messages

#### Redirecting streams

- You can redirect `stdout` and `stderr` to different places using the `>` and `2>` operators. `>` redirects `stdout`, and `2>` redirects `stderr`.

- Redirect stdout to a file

```sh
echo "Hello world" > hello.txt
cat hello.txt
# Hello world
```

- Redirect stderr to a file

```sh
cat doesnotexist.txt 2> error.txt
cat error.txt
# cat: doesnotexist.txt: No such file or directory
```

### Standard In

- "Standard Input", usually called "standard in" or "stdin", is the default place where programs read their input
- It's just a stream of data that programs can read from as they run.

```sh
# execution stops until the user types
# something (in this case "wdthor") and presses enter
name = input("What is your name? ")

print("Hello,", name)
# Hello, wdthor!
```

### Pipe

- The pipe operator takes the stdout of the program on the left and "pipes" it into the stdin of the program on the right.

```sh
echo "Have you heard the tragedy of Darth Plagueis the Wise?" | wc -w
# 10
```

### Kill

```sh
kill PID
```

- `PID` stands for "process ID". Every process that's running on your machine has a unique ID
- The `ps`, "process status" command can be used to list the processes running on your machine, and their IDs:

```sh
ps aux
```

- The "aux" options just mean "show all processes, including those owned by other users, and show extra information about each process".

### Unix Philosophy

- The Unix Philosophy is a simple set of principles that have guided the development of Unix-like operating systems for decades.
- It can be summarized as:

1. Write programs that do one thing and do it well.
2. Write programs to work together.
3. Write programs to handle text streams, because that is a universal interface.
