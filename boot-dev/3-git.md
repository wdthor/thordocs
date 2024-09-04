# Git

## Commit

### Change the last commit message

- Add `--amend` flag

```sh
git commit --amend -m "New commit message"
```

## Git log

### A commit hash

- Each commit has a unique identifier called a "commit hash".

```sh
5ba786fcc93e8092831c01e71444b9baa2228a4f
```

- For convenience, you can refer to any commit or change within Git by using the first **7** characters of its hash

```sh
5ba786f
```

### git log

- use --no-pager to run the command without the interactive page
- use `-n <max_number_of_commit>` to limit the maximum number of commits shown

```sh
git --no-pager log -n 10
```

### Hash = SHA

- Git uses a cryptographic hash function called SHA-1 to generate commit hashes
- you might also hear commit hashes referred to as "SHAs"

### It's just files all the way down

- All the data in a Git repository is stored directly in the (hidden) `.git` directory. That includes all the commits, branches, tags, and other objects
- Git is made up of **objects** that are stored in the `.git/objects` directory. A commit is just a type of object

## Storing Data

- Git stores an entire _snapshot_ of files on a _per-commit_ level

### Optimization

- While it's true that Git stores entire snapshots, it does have some performance optimizations so that your `.git` directory doesn't get too unbearably large.
- Git _compresses and packs_ files to store them more efficiently
- Git deduplicates files that are the same across different commits
- If a file doesn't change between commits, Git will only store it once.

742ae47

## Config

- Git stores author information so that when you're making a commit it can track _who_ made the change

```sh
git config --add --global user.name "wdthor"
git config --add --global user.email "wdthor@mail.com"
```

- `git config`: The command to interact with your Git configuration
- `--add`: Flag stating you want to add a configuration
- `--global`: Flag stating you want this configuration to be stored globally in your ~/.gitconfig. The opposite is "local", which stores the configuration in the current repository only
- `user`: The section
- `name`: The key within the section
- `"wdthor"`: The value you want to set for the key

- You can actually store any old data in your Git configuration. Granted, only certain keys are used by Git, but you can store whatever you want

```sh
git config --add thorwd.ceo "wdthor"
git config --add thorwd.valuation "mid"
```

### Command to view the contents of your config

- See _all_ configuration values

```sh
git config --list --local

# OR
cat .git/config
```

- Get a single value

```sh
git config --get <key>
```

- Keys are in the format `<section>.<keyname>`. For example:

- `user.name`
- `wdthor.ceo`

### Unset

- The `--unset` flag is used to remove a configuration value

```sh
git config --unset <key>
```

### Duplicates

- Typically, in a `key/value` store, like a Python dictionary, you aren't allowed to have duplicate keys. Strangely enough, Git doesn't care

#### Unset all

- The `--unset-all` flag is useful to purge all instances of a key from your configuration

```sh
git config --unset-all example.key
```

#### Remove a section

- `--remove-section` flag is used to remove an entire section from the Git configuration

```sh
git config --remove-section section
```

### Location

There are several locations where Git can be configured. From more general to more specific, they are :

- **system**: `/etc/gitconfig` - a file that configures Git for all users on the system
- **global**: `~/.gitconfig` - a file that configures Git for all projects of a user
- **local**: `.git/config` - a file that configures Git for a specific project
- **worktree**: `.git/config.worktree` - a file that configures Git for part of a project

- **90%** of the time you will be using `--global` to set things like your username and email
- The other **9%** of the time you will be using `--local` to set project-specific configurations
- The last **1%** of the time you might need to futz with system and worktree configurations, but it's extremely rare

#### Overriding

- If you set a configuration in a more specific location, it will override the same configuration in a more general location
- For example, if you set `user.name` in the **local** configuration, **it will override** the `user.name` set in the **global** configuration.

System < Global < Local < Worktree

## Branching

### Rename a branch

```sh
git branch -m oldname newname
```

- Change global Git configuration to use `main` as the default branch

```sh

```

### Log Flags

There are a few flags we can use from time to time to make the output easier to read

#### decorate

`--decorate`

- `short` (the default)
- `full` (shows the full ref name)
- `no` (no decoration)

```sh
git log --decorate=full
```

- When running `git log --decorate=full`, you should see that instead of just using your branch name, it will **show the full ref name**.
- A `ref` is just a pointer to a commit. All branches are refs, but not all refs are branches.

#### oneline

`--oneline`

- This flag will show you a more compact view of the log
- It just makes it so much easier to see what's going on.

## Merge

### Visual

- Let's say you're in a state where you have two branches, each with their own unique commits

```
A - B - C    main
   \
    D - E    other_branch
```

- If you merge `other_branch` into `main`, Git combines both branches by creating a new commit that has _both histories_ as parents
- In the diagram below, `F` is a merge commit that has `C` and `E` as parents
- `F` brings all the changes from `D` and `E` back into the main branch.

```
A - B - C - F    main
   \     /
    D - E        other_branch
```

- Run `git log --oneline --graph --all` to see a nice ASCII art representation of your commit history

### Merge Commits

- A merge commit is the result of merging two branches together

Let's say we start with this :

```
A - B - C    main
   \
    D - E    vimchadsonly
```

And we merge `vimchadsonly` into `main` by running this while on main :

```sh
git merge vimchadsonly
```

After:

```
A - B - C - F    main
   \     /
    D - E        vimchadsonly
```

The merge will :

1. Find the "merge base" commit, or "best common ancestor" of the two branches. In this case, "A".
2. Replays the changes from vimchadsonly onto main starting from the best common ancestor.
3. Records the result as a new commit, in our case "F".
4. "F" is special because it has two parents, "C" and "E".

- Run `git log --oneline --decorate --graph --parents` to see a nice visual representation of the merge commit

### Fast Forward Merge

The simplest type of merge is a fast-forward merge. Let's say we start with this :

```
      C     delete_vscode
     /
A - B       main
```

And we run this while on main :

```sh
git merge delete_vscode
```

- Because `delete_vscode` has all the commits that `main` has
- Git automatically does a _fast-forward_ merge
- It just moves the pointer of the "base" branch to the tip of the "feature" branch :

```
            delete_vscode
A - B - C   main
```

- Notice that with a fast-forward merge, no merge commit is created

This is a common workflow when working with Git on a team of developers :

1. Create a branch for a new change
2. Make the change
3. Merge the branch back into main (or whatever branch your team dubs the "default" branch)
4. Remove the branch
5. Repeat

## Rebase

### Visualizing Rebase

Say we have this commit history :

```
A - B - C    main
   \
    D - E    feature_branch
```

- We're working on `feature_branch`, and want to bring in the changes our team added to `main` so we're not working with a stale branch
- We could merge `main` into `feature_branch`, but that would create an additional merge commit
- Rebase avoids a merge commit by replaying the commits from `feature_branch` on top of `main`

After a rebase, the history will look like this :

```
A - B - C         main
         \
          D - E   feature_branch
```

### Switch new branch based on previous hash/commit

```sh
git switch -c <name_branch> <commit_hash>
```

## Reset

### Git Reset Soft

- The `git reset` command can be used to undo the last commit(s) or any changes in the index (staged but not committed changes) and the worktree (unstaged and not committed changes).

```sh
git reset --soft COMMITHASH
```

- The `--soft` option is useful if you just want to go back to a previous commit, but keep all of your changes
- _Committed changes_ will be _uncommitted_ and _staged_, while _uncommitted_ changes will remain _staged_ or _unstaged_ as before.

### Git Reset Hard

- use `--hard` to reset changes
- Gets back to the previous commit and discard all changes

```sh
git reset --hard COMMITHASH
```

- To remove changes to the current commit there is no need to include the commit hash

```sh
git reset --hard

```
