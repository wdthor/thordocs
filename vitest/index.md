---
layout: doc
---

# Vitest Settings

1. Import *describe*, *it*, *expect*, etc... globally

::: code-group
```js:line-numbers{8-10} [vite.config.ts]
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  test: {
    globals: true
  }
})
```
:::


2. Install es-lint plugin for Vitest

```bash
pnpm add -D eslint-plugin-vitest-globals
```

3. Edit .eslintrc.cjs file

::: code-group
```js:line-numbers{8,13-15} [.eslintrc.cjs]
module.exports = {
  root: true,
  extends: [
    'plugin:vue/vue3-recommended',
    'eslint:recommended',
    '@vue/eslint-config-typescript',
    '@vue/eslint-config-prettier'
    'plugin:vitest-globals/recommended' // Adds eslint rules
  ],
  parserOptions: {
    ecmaVersion: 'latest'
  },
  env: {
    'vitest-globals/env': true, // Tells eslint that Vitest's describe, it, etc... has been imported globally
  }
};

```
:::