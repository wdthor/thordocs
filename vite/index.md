# Vite

Vite is built on top of Rollup, esbuild, and PostCSS.

## Introduction

### Build Optimizations

Behind the scenes, Vite is doing:

- CSS Code Splitting
- Preload directives
- Asynchronous chunks generation and parallelizing dependency loading

## Initial Setup

- Script modules wait for the DOM to load before executing
- With script modules, we can use import statements to import files

```js [index.js]
import { initializeCounter } from "./counter";

initializeCounter();
```

### Dynamic Import & Code Splitting

```js [index.js]
// Dynamic import - returns a promise
import("./counter").then(({ initializeCounter }) => {
  initializeCounter();
});
```

- If we run `npm run build`, Vite will split the code into chunks

```
dist/index.html
dist/assets/counter-[hash].js
dist/assets/index-[hash].js
```

- `npm vite preview` will look at the built assets and run a dev server around them
