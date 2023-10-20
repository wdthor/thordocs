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
