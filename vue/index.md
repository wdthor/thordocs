# Installation

## Installing Tailwind

### 1. Install Tailwind dependencies

```bash
  pnpm add -D tailwindcss postcss autoprefixer
```

### 2. Instanciate Tailwind config file

```bash
  npx tailwindcss init -p
```

### 3. Configure Tailwind

::: code-group

```js:line-numbers [tailwind.config.js]
  /** @type {import('tailwindcss').Config} */
  module.exports = {
  content: [],  // [!code --]
  content: ['./index.html', './src/**/*.{vue, js, ts}'],  // [!code ++]
  theme: {
    extend: {}
  },
  plugins: []
  };

```

```css:line-numbers [index.css]
/* The bundle after the build will only include styles used by tailwind */
@tailwind base;  // [!code ++]
@tailwind components;  // [!code ++]
@tailwind utilities;  // [!code ++]
```

```ts:line-numbers [main.ts]
import "@/index.css";
```

:::

## Import font

::: code-group

```html:line-numbers [index.html]
<!DOCTYPE html>
<html lang="en">
  <head>
    <link rel="preconnect" href="https://fonts.googleapis.com" />  // [!code ++]
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />  // [!code ++]
    <link  // [!code ++]
      href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap"  // [!code ++]
      rel="stylesheet"  // [!code ++]
    />  // [!code ++]
  </head>
</html>
```

```js:line-numbers [tailwind.config.js]
/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');  // [!code ++]
module.exports = {
  content: ['./index.html', './src/**/*.{vue, js, ts}'],
  theme: {
    extend: {}  // [!code --]
    extend: {  // [!code ++]
      fontFamily: {  // [!code ++]
        sans: ['Roboto', ...defaultTheme.fontFamily.sans]  // [!code ++]
      }  // [!code ++]
    }  // [!code ++]
  },
  plugins: []
};
```

:::

## Install Prettier plugin for Tailwind and troubleshooting

```bash
  pnpm add prettier-plugin-tailwindcss -D
```

### Note

- This dependency doesn't work with `pnpm`
- To fix this :

::: code-group

```json [.prettierrc.json]
{
  "$schema": "https://json.schemastore.org/prettierrc",
  "semi": true,
  "tabWidth": 2,
  "singleQuote": true,
  "printWidth": 100,
  "trailingComma": "none",
  "plugins": ["prettier-plugin-tailwindcss"], // [!code ++]
  "pluginSearchDirs": false // [!code ++]
}
```

:::

## Add colors config

::: code-group

```js:line-numbers [tailwind.config.js]
/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: ["./index.html", "./src/**/*.{vue, js, ts}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Roboto", ...defaultTheme.fontFamily.sans],
      },
      colors: {  // [!code ++]

        "brand-gray-1": "#dadce0", // [!code ++]
        "brand-blue-1": "#1967d2", // [!code ++]
      }, // [!code ++]
    },
  },
  plugins: [],
};
```

:::

- Tailwind will generate css classes based on this setting
  - bg-brand-gray-1
  - text-brand-gray-1
