# Creating Subnav section

## Install font-awesome

```bash
pnpm add @fortawesome/fontawesome-svg-core @fortawesome/free-solid-svg-icons @fortawesome/vue-fontawesome@latest-3
```

## Add font awesome globally

::: code-group

```js:line-numbers [main.ts]
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faSearch } from '@fortawesome/free-solid-svg-icons';

library.add(faSearch);

createApp(App).mount("#app"); // [!code --]
createApp(App).component('font-awesome-icon', FontAwesomeIcon).mount('#app'); // [!code ++]
```

:::
