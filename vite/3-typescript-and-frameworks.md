# TypeScript & Frameworks

## TypeScript

- To use TypeScript with Vite, we simply need to rename our `index.js` file to `index.ts`

- Vite will not type check our code by default, but it will compile TypeScript to JavaScript

## Frameworks

To use a framework like react, we can use a template

```js
pnpm create vite@latest
```

And select the framework you want to use
This will create a new project with the following structure

```js
my-app/
├── index.html
├── package.json
├── vite.config.js
└── src/
    ├── index.css
    ├── main.tsx
    └── App.tsx
```
