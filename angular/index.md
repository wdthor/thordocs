# Angular

## Bootstrapping Angular

### Understanding the Framework

There are 2 types of frameworks

1. Configuration over convention
   - Easy to learn
   - Freedom to structure however you please
   - Needs additional libraries to fill in missing features
   - (ex: React, Vue)
2. Convention over configuration
   - Structure straight out of the box
   - Provide solutions for common problems
   - Larger learning curve
   - (ex: Angular)

#### What is Angular ?

- Convention-over-configuration
- Not meant for small apps
- High learning curve

### Creating a new application

```sh
npm install -g @angular/cli
ng new <project-name> --package-manager=pnpm
```

### JIT vs AOT

1. JIT Just-in-Time

- larger file size
- loads slower since compiler needs to run in browser
- catch errors in browser

2. AOT Ahead-of-Time

- small file size
- loads faster since the app is compiled on delivery to the browser
- catch errors on the server
