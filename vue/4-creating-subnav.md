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

- AppSubnav shouldn't know too much about details (set data)
- Stubs are a replacement, lightweight versions of components
- The idea of Vue Testing Library is to render the whole hierarchy of components so stubs added here (child component) needs to be added in the parent component

::: code-group

```js:line-numbers [AppSubnav.test.ts]
describe('AppSubnav', () => {
  describe('When user is on jobs page', () => {
    it('displays job count', () => {
      render(AppSubnav, {
        global: {
            stubs: {
                FontAwesomeIcon: true,
            }
        }
      });

      const jobCount = screen.getByText('1653');

      expect(jobCount).toBeInTheDocument();
    });
  });

  describe.skip('When user is not on jobs page', () => {
    it('does not display job count', () => {
      render(AppSubnav, {
        global: {
            stubs: {
                FontAwesomeIcon: true,
            }
        }
      });
      const jobCount = screen.queryByText('1653');

      expect(jobCount).not.toBeInTheDocument();
    });
  });
});
```

:::

- We can use Helper Functions instead of beforeEach to avoid repititive tasks because it help us keep track what is happening in tests

::: code-group

```js:line-numbers [AppSubnav.test.ts]
describe('AppSubnav', () => {
    const renderAppSubnav = () => { // [!code ++]
        render(AppSubnav, { // [!code ++]
            global: { // [!code ++]
                stubs: { // [!code ++]
                    FontAwesomeIcon: true, // [!code ++]
                } // [!code ++]
            } // [!code ++]
      }); // [!code ++]
    }
  describe('When user is on jobs page', () => {
    it('displays job count', () => {
      render(AppSubnav, { // [!code --]
        global: { // [!code --]
            stubs: { // [!code --]
                FontAwesomeIcon: true, // [!code --]
            } // [!code --]
        } // [!code --]
      }); // [!code --]
      renderAppSubnav(); // [!code ++]

      const jobCount = screen.getByText('1653');

      expect(jobCount).toBeInTheDocument();
    });
  });

  describe.skip('When user is not on jobs page', () => {
    it('does not display job count', () => {
      render(AppSubnav, { // [!code --]
        global: { // [!code --]
            stubs: { // [!code --]
                FontAwesomeIcon: true, // [!code --]
            } // [!code --]
        } // [!code --]
      }); // [!code --]
      renderAppSubnav();  // [!code ++]
      const jobCount = screen.queryByText('1653');

      expect(jobCount).not.toBeInTheDocument();
    });
  });
});
```

:::
