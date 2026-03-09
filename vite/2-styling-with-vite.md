# Styling with Vite

## Import CSS & CSS Modules

CSS modules allow us to scope our styles to the component/file they are used in

```js
import styles from "./style.module.css";

const title = document.querySelector(".title");
title.classList.add(styles.title);

// OR
import { title } from "./style.module.css";
const titleElement = document.querySelector(".title");
titleElement.classList.add(title);
```

## Configure PostCSS & CSS Preprocessors

Let's say we want to install postcss-nested plugin

```js
pnpm i -D postcss-nested
```

Create a `postcss.config.cjs` file in the root of your project and add it to the `postcss.config.cjs` file

```js [postcss.config.cjs]
module.exports = {
  plugins: {
    "postcss-nested": {},
  },
};
```

Now we can use nested CSS

```css [postcss-style.css]
.title {
  color: rebeccapurple;

  &:hover {
    color: deepskyblue;
  }
}
```

And import it in your js file

```js
import "./postcss-style.css";
```

### Use SCSS

There is no need to configure anything when installing sass

```js
pnpm i -D sass
```

And use it like this

```css [scss-style.scss]
.title {
  color: rebeccapurple;

  &:hover {
    color: deepskyblue;
  }
}
```
