---
layout: doc
---

# github cicd

## Simple action job

::: code-group

```yml:line-numbers [unit-test-pnpm.yml]
name: Run Unit Tests # The name of the workflow

on: # What kind of event are we listening for ? (in this case - 2 events)
  push:
    branches: [main]
  pull_request:
    branches: [main]

jobs: # A list of jobs that will run in parallel (in this case - 1 job - build-and-test)
  build-and-test:
    runs-on: ubuntu-latest
    steps: # Each job has one or more steps. These steps run synchronously (one after the other)
      - uses: actions/checkout@v3 # This one is super important. It checks out the repository.
      - uses: pnpm/action-setup@v2
        with:
          version: 8
      - name: Setup Node
        uses: actions/setup-node@v3 # Called "Setup Node", it installs Node onto whatever container the action is running in
      - run: pnpm install --frozen-lockfile # run commands and use actions
      - run: pnpm test
      - run: pnpm build
```

```yml:line-numbers [unit-test-npm.yml]
name: Run Unit Tests

on:
  push:
    branches: [main]
  pull_request:
    branches: [main]

jobs:
  build-and-test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - name: Setup Node
        uses: actions/setup-node@v3
      - run: npm ci # a variation of npm install
      - run: npm test
      - run: npm run build
```

:::

## Note about npm ci

`npm ci` is a variation on `npm install`, but it has a few important cavaets:

- It insists on you already having a `package-lock.json`.
- It will error out instead of updating `package-lock.json` if something doesn't match.
- It install all of the dependencies. I.e. you can't just use it to install one depenedency like `npm ci @testing-library/vue` or something.
- It blows away `node_modules` if present.
- It doesn't write to `package.json`.

## Running multiple jobs in parallel

::: code-group

```yml:line-numbers [unit-test-pnpm.yml]
name: Run Unit Tests

on:
  push:
    branches: [main]
  pull_request:
    branches: [main]

jobs:
  unit-test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: pnpm/action-setup@v2
        with:
          version: 8
      - name: Setup Node
        uses: actions/setup-node@v3
      - run: pnpm install --frozen-lockfile
      - run: pnpm test
  build:
    runs-on: ubuntu-latest
    # needs: unit-test # won't run until unit-test is successful
    # needs: [unit-test another-job] # depends on multiple jobs before running
    steps:
      - uses: actions/checkout@v3
      - uses: pnpm/action-setup@v2
        with:
          version: 8
      - name: Setup Node
        uses: actions/setup-node@v3
      - run: pnpm install --frozen-lockfile
      - run: pnpm build
```

```yml:line-numbers [unit-test-npm.yml]
name: Run Unit Tests

on:
  push:
    branches: [main]
  pull_request:
    branches: [main]

jobs:
  unit-test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - name: Setup Node
        uses: actions/setup-node@v3
      - run: npm ci
      - run: npm test
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - name: Setup Node
        uses: actions/setup-node@v3
      - run: npm ci
      - run: npm run build
```

:::

## Caching with npm (long way)

- After 100gigs Github cache will be purged
- And anything not accessed in the last 7 days

::: code-group

```yml:line-numbers [unit-test-npm.yml]
name: Run Unit Tests

on:
  push:
    branches: [main]
  pull_request:
    branches: [main]

jobs:
  unit-test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - name: Setup Node
        uses: actions/setup-node@v3
      - uses: actions/cache@v3 // [!code ++]
        id: npm-cache // [!code ++]
        with: // [!code ++]
          path: ~/.npm // [!code ++]
          key: npm-${{ hashFiles('**/package-lock.json') }} // [!code ++]
      - run: npm ci
      - run: npm test
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - name: Setup Node
        uses: actions/setup-node@v3
      - uses: actions/cache@v3 // [!code ++]
        id: npm-cache // [!code ++]
        with: // [!code ++]
          path: ~/.npm // [!code ++]
          key: npm-${{ hashFiles('**/package-lock.json') }} // [!code ++]
      - run: npm ci
      - run: npm run build
```

:::

## Caching (short way)

::: code-group

```yml:line-numbers [unit-test-pnpm.yml]
name: Run Unit Tests

on:
  push:
    branches: [main]
  pull_request:
    branches: [main]

jobs:
  unit-test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: pnpm/action-setup@v2
        with:
          version: 8
      - name: Setup Node
        uses: actions/setup-node@v3
        with: // [!code ++]
          cache: 'pnpm' // [!code ++]
      - run: pnpm install --frozen-lockfile
      - run: pnpm test
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: pnpm/action-setup@v2
        with:
          version: 8
      - name: Setup Node
        uses: actions/setup-node@v3
        with: // [!code ++]
          cache: 'pnpm' // [!code ++]
      - run: pnpm install --frozen-lockfile
      - run: pnpm build
```

```yml:line-numbers [unit-test-npm.yml]
name: Run Unit Tests

on:
  push:
    branches: [main]
  pull_request:
    branches: [main]

jobs:
  unit-test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - name: Setup Node
        uses: actions/setup-node@v3
        with: // [!code ++]
          node-version: 18 // [!code ++]
          cache: 'npm' // [!code ++]
      - run: npm ci
      - run: npm test
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - name: Setup Node
        uses: actions/setup-node@v3
        with: // [!code ++]
          node-version: 18 // [!code ++]
          cache: 'npm' // [!code ++]
      - run: npm ci
      - run: npm run build
```

:::

## Useful links

[jobs - needs](https://docs.github.com/en/actions/using-workflows/workflow-syntax-for-github-actions#jobsjob_idneeds)
[uses - checkout](https://github.com/actions/checkout)
[Github actions events](https://github.com/stevekinney/enterprise-ui-dev/blob/main/content/Github%20Actions%20Events.md)
[pnpm Github actions](https://pnpm.io/continuous-integration#github-actions)
