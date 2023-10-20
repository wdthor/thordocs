# Vitest

### Import describe, it, expect globally

::: code-group

```js:line-numbers [vite.config.js]
export default defineConfig({
  plugins: [vue()],
  resolve: {},
  test: { // [!code ++]
    globals: true, // [!code ++]
  }, // [!code ++]
});
```

:::

- eslint is unaware of the vitest global config, so we need to install this

::: code-group

```bash [terminal]
pnpm add eslint-plugin-vitest-globals -D
```

```js:line-numbers [.eslintrc.cjs]
module.exports = {
  root: true,
  extends: [
    'plugin:vue/vue3-recommended',
    'eslint:recommended',
    '@vue/eslint-config-typescript',
    '@vue/eslint-config-prettier/skip-formatting',
    'plugin:vitest-globals/recommended',  // [!code ++]
  ],
  parserOptions: {
    ecmaVersion: 'latest',
  },  // [!code ++]
  env: {  // [!code ++]
    'vitest-globals/env': true,  // [!code ++]
  },  // [!code ++]
};

```

:::

### Install vue testing library

- `jest-dom` adds more functionality to check if everything is in the DOM, it's DOM specific rather than JS specific
- `user-event` dependency is for user interactions
- We need to use `cleanup` because vue-testing-library creates a VDOM environment that persists between different tests
  Note : when using TS, install `@types/testing-library__jest-dom`

::: code-group

```bash [terminal]
pnpm add @testing-library/vue @testing-library/jest-dom @testing-library/user-event -D
```

```js:line-numbers [setup.js]
// Old version
import { cleanup } from '@testing-library/vue'; // [!code --]
import matchers from '@testing-library/jest-dom/matchers'; // [!code --]
import { expect, afterEach } from 'vitest'; // [!code --]

expect.extend(matchers); // [!code --]

afterEach(() => { // [!code --]
  cleanup(); // [!code --]
}); // [!code --]

// New version since August 2023
import '@testing-library/jest-dom/vitest';
import { cleanup } from '@testing-library/vue';
import { afterEach } from 'vitest';

afterEach(() => {
  cleanup();
});
```

```js:line-numbers [vite.config.js]
export default defineConfig({
  plugins: [vue()],
  resolve: {},
  test: {
    globals: true,
    setupFiles: ['./tests/setup.js'], // [!code ++]
  },
});

```

:::
