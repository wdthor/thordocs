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
import { cleanup } from '@testing-library/vue';
import matchers from '@testing-library/jest-dom/matchers';
import { expect, afterEach } from 'vitest';

expect.extend(matchers);

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

### First test

- Testing if text given is present in the dom

::: code-group
```js:line-numbers [MainNav.test.ts]
import { render, screen } from '@testing-library/vue';

import MainNav from '@/components/MainNav.vue';

describe('MainNav', () => {
  it('displays company name', () => {
    render(MainNav);
    // Displays the DOM in raw html
    // screen.debug();
    const companyName = screen.getByText('ThorWD Careers');
    expect(companyName).toBeInTheDocument();
  });
});
```
:::

### Test arrays
::: code-group
```js:line-numbers [MainNav.test.ts]
import { render, screen } from '@testing-library/vue';

import MainNav from '@/components/MainNav.vue';

describe('MainNav', () => {
  it('displays menu items for navigation', () => {
    render(MainNav);
    // When we don't know the elemen role, we can let a empty string
    // screen.getAllByRole('');
    // The error will show the different elements and their roles
    const navigationMenuItems = screen.getAllByRole('listitem');
    const navigationMenuTexts = navigationMenuItems.map((item) => item.textContent);
    expect(navigationMenuTexts).toEqual([
      'Teams',
      'Locations',
      'Life at ThorWD',
      'How we hire',
      'Students',
      'Jobs',
    ]);
  });
});
```
:::