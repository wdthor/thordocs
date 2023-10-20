## Test arrays

::: code-group

```js:line-numbers [MainNav.test.ts]
import { render, screen } from '@testing-library/vue';

import MainNav from '@/components/MainNav.vue';

describe('MainNav', () => {
  it('displays menu items for navigation', () => {
    render(MainNav);
    // When we don't know the element role, we can let a empty string
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

## Test user connexion - image not visible

```js:line-numbers [MainNav.test.ts]
import { render, screen } from '@testing-library/vue';

import MainNav from '@/components/MainNav.vue';

describe('When the user logs in', () => {
  it('displays user profile picture', async () => {
    render(MainNav);
    screen.debug();

    // screen.getByRole('img'); This method will fail because in the beginning it doesn't exist yet
    let profileImage = screen.queryByRole('img', {
      name: /user profile image/i, // in case of img, it will look for alt - i = case incensitive
      // VueTL recommends using Regex instead of strings
    }); // If the img doesn't exist, it will return null instead of raising an error

    expect(profileImage).not.toBeInTheDocument();

    const loginButton = screen.getByRole('button', {
      name: /sign in/i,
    });
    await userEvent.click(loginButton);

    profileImage = screen.getByRole('img', { // We need to re-search the img
      name: /user profile image/i,
    });

    expect(profileImage).toBeInTheDocument();
  });
});
```

:::
