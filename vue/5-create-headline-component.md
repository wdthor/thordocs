# Create headline component

## Export logic into utils

- Easier to test
- Prevent logic from being framework dependent
- Before

::: code-group

```html:line-numbers [AppHeadline.vue]
<script setup lang="ts">

const action = ref('Build');
const interval = ref();

const changeTitle = (): void => {
  interval.value = setInterval(() => {
    const actions = ['Build', 'Create', 'Design', 'Code'];
    const currentActionIndex = actions.indexOf(action.value);
    const nextActionIndex = (currentActionIndex + 1) % actions.length;
    const nextAction = actions[nextActionIndex];
    action.value = nextAction;
  }, 2000);
};
</script>
```

:::

- After

::: code-group

```html:line-numbers [AppHeadline.vue]
<script setup lang="ts">
import { nextElementInList } from '@/utils/nextElementInList';

const action = ref('Build');
const interval = ref();

const changeTitle = (): void => {
  interval.value = setInterval(() => {
    const actions = ['Build', 'Create', 'Design', 'Code'];
    action.value = nextElementInList(actions, action.value);
  }, 2000);
};
</script>
```

:::

## Test nextElementInList

::: code-group

```js:line-numbers [utils/nextElementInList.ts]
import { nextElementInList } from '@/utils/nextElementInList';

describe('nextElementInList', () => {
  it('locates element in list and returns the next element in list', () => {
    const list = ['A', 'B', 'C', 'D', 'E'];
    const value = 'C';

    const result = nextElementInList(list, value);
    expect(result).toBe('D');
  });

  describe('When the element is at the end of the list', () => {
    it('locates next element at start of list', () => {
      const list = ['A', 'B', 'C', 'D', 'E'];
      const value = 'E';

      const result = nextElementInList(list, value);
      expect(result).toBe('A');
    });
  });
});
```

:::

## Mock functions

- A function that can track how many times it has been called and with what arguments
- We use them to replace real world functionality within our components in order to decouple what we are testing from something else required

::: code-group

```js:line-numbers [toHaveBeenCalled.test.ts]
describe('Vitest playground', () => {
    it('tracks whether it has been called', () => {
      const mockFunction = vi.fn();
      mockFunction();
      expect(mockFunction).toHaveBeenCalled();
    });
  });
```

```js:line-numbers [toHaveBeenCalledWith.test.ts]
describe('Vitest playground', () => {
    it('tracks whether it has been called', () => {
      const mockFunction = vi.fn();
      mockFunction(1, 2);
      expect(mockFunction).toHaveBeenCalledWith(1, 2);
    });
  });
```

:::

## test setInterval

::: code-group

```js:line-numbers [toHaveBeenCalled.test.ts]
import { render, screen } from '@testing-library/vue';

import AppHeadline from '@/components/AppHeadline.vue';

describe('AppHeadline', () => {
  it('displays introductory action verb', () => {
    vi.useFakeTimers; // Mocks setTimeOut
    render(AppHeadline);

    const actionPhrase = screen.getByRole('heading', {
      name: /build for everyone/i,
    });

    expect(actionPhrase).toBeInTheDocument();
    vi.useRealTimers(); // Use the real time implementation - Remove the time mock to make sure the next test is not impacted by this test
  });

  it('changes action verb at a consistent interval', () => {
    vi.useFakeTimers();
    const mock = vi.fn();
    vi.stubGlobal('setInterval', mock); // Replace a global name with something else - replace setInterval with mock
    render(AppHeadline);

    expect(mock).toHaveBeenCalled();
    vi.useRealTimers();
  });

  it('swaps action verb after interval', async () => {
    vi.useFakeTimers();
    render(AppHeadline);
    vi.advanceTimersToNextTimer(); // make AppHeadline re-renders, so anything we search in AppHeadline won't be found or won't have time to be updated with the new value

    await nextTick(); // nextTick is async, and wait for AppHealine to fully re-render
    const actionPhrase = screen.getByRole('heading', {
      name: /create for everyone/i,
    });

    expect(actionPhrase).toBeInTheDocument();
  });
});
```

:::
