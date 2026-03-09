# Web Storage

Web storage includes `localStorage` and `sessionStorage`

Everything is promise based, even though the APIs themselves are synchronous.

## Request Persistance Storage

```js
(async function() {
    // Checks if the storage Api exists in the browser used
    if(navigator.storage && navigator.storage.persist) {
        // If persistance has not yet been allowed
        if(!await navigator.storage.persisted()) {
            // Request user for persistance (usually Firefox will ask it)
            const result = await navigator.storage.persist();
            console.log(`The persistance request returned: ${result}`);
        }
    }
})();
```
## Estimate Storage Usage
We use this only when we store a lot of data (99% of the time, we don't need it).
```js
(async function() {
    if(navigator.storage && navigator.storage.estimate) {
        const { usage, quota } = await navigator.storage.estimate();
        console.log(`Quota available: ${quota / 1024 / 1024}MiB`);
        console.log(`Quota used: ${usage / 1024}KiB`);
    }
})();
```
