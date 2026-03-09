# APIs for browser data storage

## State of Browser APIs

- Cookies
- Web Storage (localStorage, sessionStorage)
- Web SQL
- Application Cache

### Cookies

Cookies are not a good way to store data :

- They are limited in terms of data that can be stored (4KB per cookie)
- The structure is string based
- They are sent to the server with each request (every image, every json, every css, every js) which will impact performance

### Web Storage

Web storage includes `localStorage` and `sessionStorage`
We shouldn't be using these APIs anymore

The main reason we shouldn't use them is **performance**

- localStorage and sessionStorage are synchronous APIs, which means they block the main thread until the operation is complete

### Web SQL

We shouldn't be using Web SQL either

- They are deprecated
- It was a SQLite client

### Application Cache

Application Cache is a deprecated API

- It was a way to actually make web apps work offline

### IndexedDB

IndexedDB is a NoSQL database API, an object based client side database and easier to use than MongoDB

Using IndexedDB is **ok** even though :

- They have buggy implementations on many browsers
- The API is terrible (awful)
- It wasn't clear how it was working

Today, we are using IndexedDB 2.0 :

- They have a better API (still not great)
- The bugs for normal operations are fixed
- It is safer to use

- It stores data, like JavaScript objects
- It can also store bytes

### File and Directories (or FileSystem API)

They will be deprecated and are Chromium only

### Cache Storage API

Using Cache Storage is **ok**

- The Cache Storage API is actually a cache storage interface
- It's part of the Service Worker spec
- It is not only available from a Service Worker

- It stores HTTP responses including headers

### FileSystem Access API

FileSystem Access API is the new one

- It is not 100% compatible
- It is available on Chromium based browsers
- It lets you access to the real files and directories of the users with user's permission
- It is the only one on the list that requires user's permission!!!

## Data Storage APIs Comparison

| API                          | Stores                     | Using a key of...           | Grouped in...              | Up to...               |
| ---------------------------- | -------------------------- | --------------------------- | -------------------------- | ---------------------- |
| IndexedDB                    | JS Objects and binary data | A keyPath within the object | Object Stores in Databases | Available Quota (~1GB) |
| Cache Storage                | HTTP responses             | HTTP request                | Caches                     | Available Quota (~1GB) |
| Web Storage (local, session) | Strings                    | String                      | N/A                        | 5MB/12MB               |
| FileSystem Access            | Files and directories      | N/A                         | N/A                        | N/A                    |

## Web Storage

- Simple API
  - it stores only one string per key
  - The key for entries is also a string
- Synchronous API
  - Performance issues
  - not available on Workers or Service Workers
- We can emulate them with IndexedDB

```js
localStorage.setItem("key", "value");
const data = localStorage.getItem("key");

localStorage.removeItem("key");
localStorage.clear();
```

The difference between localStorage and sessionStorage is persistence

- The sessionStorage lives only within the browser session, so if the user closes the tab or the browser, the data is lost
- The localStorage persists even after the tab or browser is closed

### localStorage

- Persist data between navigation and browser sessions
- Since in most browsers, strings are stored in UTF-16, at the end, we can store up to **2.5MB** of data per origin in localStorage

### sessionStorage

- Persist data only with a browser's session and between navigation sessions
- Note : It is not clear what's a session on mobile
- Quota is typically between 5MB and 12MB


## Debugging tools
All browser data storage is public to the user, so they can see and modify it

## Quotas & Persistence
There is only one quota for all storage APIs combined
- localStorage
- indexedDB
- Cache Storage
- FileSystem Access
- Service Workers registration
- Web App Manifests from installed PWAs

Quota does not include:
- Cookies
- Files cached by the browser for performance (like images, js, css, etc)
- Session Storage
- Files created with the File System Access API

Quota per browser:
- Chrome: up to 60% of free disk space
- Firefox: up to 50% of free disk space with a maximum of 2GB per group (eTLD+1)
- Safari: 1GB per partition (origin) with increments of 200MB with user's permission

More complexity:
- Chrome Incognito mode: 5% of total disk space
- Chrome with the option "Clear cookies and site data when you close all windows" enabled: 300MB
- Other browsers Private mode: from zero storage (ephemeral) to APIs not available
