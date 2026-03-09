# Next 15

- logo color : #e7047d
- Next makes it easier to build **fast** and **scalable** web applications. It provides built-in features like **SSR**, **SSG**, API routes, and **automatic code splitting**, all of which help with **performance** and **SEO**
- React doesn't handle routing, no compiler (before React 19), no SEO, no SSR/SSG, no backend logic (connexion to DB), no structure, no Api integration
- Next handles:
  - Hot Reloading
  - Compiler
  - SSR/SSG
  - Backend logic
  - Routing
  - SEO Optimization
  - Performance

## Next Structure

- .next - The build folder where Next stores all the output files (compiled code, optimized assets)
- node_modules
- public - Contains static files (images, fonts, or icons)
- src - The main source code folder where the application lives (components, pages, logic)
- next-env.d.ts - A TypeScript declaration file that helps Next understand specific types used internally (ex: env variables, file imports)
- next.config.ts - Configuration file for Next where you can tweak various settings like redirects, rewrites, and more
- tsconfig.json - Configuration file for TypeScript, defining how TypeScript should behave in your project

### Special files

1. page.tsx

- Represents a **regular page** in your app. It contains the UI and logic for what users will see when they visit a specific route in your application
  - app>about>page.tsx => localhost:3000/about
  - app>contact>page.tsx => localhost:3000/contact
- Naming a file differently will not include the file in the router

2. Layout.tsx

3. Template.tsx
4. Not-Found.tsx
5. Loading.tsx
6. Error.tsx

## Dynamic API

- Dynamic API's are Async
  Ex:
- params, searchParams props from pages, layouts, metadata APIs, and route handlers
- cookies(), draftMode(), and headers() from `next/headers`

```ts
interface PageProps {
  params: Promise<{ videoId: string }>;
}
// Async component
const page = async ({ params }: PageProps) => {
  const { videoId } = await params;
  return <div>page {videoId}</div>;
};

export default page;
```

## Client/Server component

Component in NextJS are server by default

- To define a component as client, we use `"use client"`
- Only Server components can be async
- React methods like `useEffect` only works with Client components

## Layout

Layout are reserved component for displaying the Layout of pages

## .Next folder

- It's just a cache folder, removing it won't do anything and it will be regenerated when re-launching the server

## Route Group - (folder-name)

- (folder-name) tells Next, the "folder name" is not part of the url

Ex :

- auth

  - login
    `http://localhost:3000/login` = Error
    `http://localhost:3000/auth/login` = Ok

- (auth)
  - login
    `http://localhost:3000/login` = Ok
    `http://localhost:3000/auth/login` = Error

## Link

The Link component allow us to navigate between pages using the client routing

```js
<div>
  <Link href="/">Go to main page</Link>
</div>
```

## useRouter

`useRouter` allow us to navigate forward/backward in the route history, refresh the page, redirect, etc...

```js:line-numbers
"use client";

import { useRouter } from "next/navigation";

const Home = () => {
  const router = useRouter();

  const navigate = (page: string) => {
    router.push(`/${page}`);
  };

  const refresh = () => {
    router.refresh();
  };
  return (
    <div>
      <button
        className="p-4 rounded-2xl bg-green-500 text-white"
        onClick={() => navigate("login")}
      >
        Go to the Login page
      </button>
      <button
        className="p-4 rounded-2xl bg-blue-500 text-white"
        onClick={() => router.refresh()}
      >
        Refresh Page
      </button>
    </div>
  );
};

export default Home;
```

## Private pages

- To set private pages, simply add `_` to the file name (ex: `_private-page/page.tsx`)
