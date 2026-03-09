# Linux Basics

## Linux basic commands

- `echo "Hello World"` : print "Hello World"
- `ls` : list files in the current directory
- `cd <directory>` : change directory
- `pwd` : print working directory
- `mkdir <directory>` : create directory
- `mkdir -p <directory>` - `mkdir -p directory/directory2` : create directory and parent directories if they do not exist
- `touch <file>` : create file

- `cat <file>` : print file contents
- `cat > <file>` : create file and write to it
- `cat >> <file>` : append to file
- `;` - `cd directory; mkdir directory2; ls` : multiple commands

- `rm <file>` : remove file
- `rm -r <directory>` : remove directory
- `rm -rf <directory>` : remove directory and its contents

- `cp <file> <destination>` : copy file to destination
- `mv <file> <destination>` : move file to destination
- `mv <file> <newname>` : rename file

### User Accounts

- `whoami` : print current user
- `id` : list user id
- `su <user>` : switch to user
- `ssh <user>@<host>` : connect to remote host
- `sudo <command>` : run command as root (if user has sudo permissions)

### Download files

- `curl <url> -O` : download file and save with original name
- `curl <url> -o <filename>` : download file and save with new name
- `wget <url> -O <filename>` : download file and save with new name

### Check OS Version

- `ls /etc/*release*` : list files in /etc directory that contain "release" (`*release*` is a wildcard)
- `cat /etc/*release*` : print contents of files in /etc directory that contain "release"

## VI Editor

- When we open a file with **VI**, we are in command mode
- To enter insert mode, we press `i`
- To enter command mode, we press `Esc`

### Basic commands in command mode

- `x` : delete
- `dd` : delete line
- `yy` : yank (copy)
- `p` : paste
- `ctrl + u` : scroll up
- `ctrl + d` : scroll down

- `:w` : write (save)
- `:w filename` : write (save) to a different file
- `:q` : quit
- `:q!` : quit without saving
- `:wq` : write (save) and quit

- `/pattern` : search for a pattern
- `n` : next
- `N` : previous

## Package Management

Redhad Package Manager (RPM)

- `rpm -qa` : list all installed packages
- `rpm -q <package>` : list installed package
- `rpm -i <package>` - `rpm -i package.rpm` : install package
- `rpm -e <package>` : remove package

Installing packages with RPM that require dependencies is not recommended. Use `yum` instead.

Yum is a high level package manager that uses RPM underneath.

- `yum install <package>` : install package with its dependencies
- `yum install <package>-<version>` : install specific version of package with its dependencies
- `yum remove <package>` : remove package
- `yum update <package>` : update package
- `yum list installed` : list installed packages
- `yum search <package>` : search for package
- `yum info <package>` : show information about package
- `yum clean all` : clean yum cache
- `yum --showduplicates list <package>` : show all versions of the package

The information about the repository is stored in a file called `/etc/yum.repos.d`.

To see the list of repositories, we can use the following command:

- `yum repolist` : list repositories

Yum pulls packages from the official **CentOS 9 Stream** repository.
These repos prioritize stability over recency, hence they stick with a well-tested, enterprise-safe version of the package.
