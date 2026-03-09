# Crafting containers by hand

## What are containers?

The core of what containers are is just a few features of the Linux kernel duct-taped together

## chroot

chroot is a command that changes the root directory of a process. It's a way to isolate a process from the rest of the system

### docker commands

```bash
docker run -it --name docker-host -rm --privileged ubuntu:jammy
```
- `-it` : interactive terminal
- `--name docker-host` : name of the container
- `-rm` : remove the container when it exits
- `--privileged` : give the container full access to the host
- `ubuntu:jammy` : use the ubuntu image

- Display the Linux distribution version actually running
```bash
cat /etc/issue
```

### chroot commands

- chroot my-new-root bash : change the root directory to my-new-root and start a bash shell
```bash
mkdir my-new-root
chroot my-new-root bash
```
- This won't work because when changing directories to my-new-root, the root directory of the process is still the old one and won't know about bash
- To make it work, we need to copy bash and its dependencies to my-new-root
- We can use ldd to find out what dependencies bash has

- Create a new root directory
- mkdir lib{,64} : create lib and lib64 directories
```bash
mkdir my-new-root/lib{,64}
```

```bash
ldd /bin/bash
```
- We can copy the dependencies to the corresponding lib directories

- Copy the libraries to my-new-root
```bash
cp /lib/x86_64-linux-gnu/libc.so.6 my-new-root/lib/
cp /lib/x86_64-linux-gnu/libdl.so.2 my-new-root/lib/
...
```

- Copy the binary to my-new-root
```bash
mkdir my-new-root/bin
cp /bin/bash my-new-root/bin/
```

- This command will now work
```bash
chroot my-new-root bash
```

- When running `pwd`, it will now think that `/` is the root directory