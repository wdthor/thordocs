# Performance

Things to take into account

- Don't prematurely optimize
- Balance optimizations with readability/maintainability

## Recursive Rendering

When the Root component have children components which have children components and so on, they render in this order
›[GP] [P] [C] [GC] APP just rendered  
›[👴🏼] [ ] [ ] [ ] rendered  
›[ ] [👩🏼‍⚕️] [ ] [ ] rendered  
›[ ] [ ] [🧒🏻] [ ] rendered  
›[ ] [ ] [ ] [👶🏻] rendered  
›[ ] [ ] [ ] [👶🏻] rendered  
›[ ] [ ] [🧒🏻] [ ] rendered  
›[ ] [ ] [ ] [👶🏻] rendered  
›[ ] [ ] [ ] [👶🏻] rendered  
›[ ] [👩🏼‍⚕️] [ ] [ ] rendered  
›[ ] [ ] [🧒🏻] [ ] rendered  
›[ ] [ ] [ ] [👶🏻] rendered  
›[ ] [ ] [ ] [👶🏻] rendered  
›[ ] [ ] [🧒🏻] [ ] rendered  
›[ ] [ ] [ ] [👶🏻] rendered  
›[ ] [ ] [ ] [👶🏻] rendered  
›[👴🏼] [ ] [ ] [ ] rendered  
›[ ] [👩🏼‍⚕️] [ ] [ ] rendered  
›[ ] [ ] [🧒🏻] [ ] rendered  
›[ ] [ ] [ ] [👶🏻] rendered  
›[ ] [ ] [ ] [👶🏻] rendered  
›[ ] [ ] [🧒🏻] [ ] rendered  
›[ ] [ ] [ ] [👶🏻] rendered  
›[ ] [ ] [ ] [👶🏻] rendered  
›[ ] [👩🏼‍⚕️] [ ] [ ] rendered  
›[ ] [ ] [🧒🏻] [ ] rendered  
›[ ] [ ] [ ] [👶🏻] rendered  
›[ ] [ ] [ ] [👶🏻] rendered  
›[ ] [ ] [🧒🏻] [ ] rendered  
›[ ] [ ] [ ] [👶🏻] rendered  
›[ ] [ ] [ ] [👶🏻] rendered

## 3 phases of rendering

1. Rendering

- React runs the code from the component that had the state change, and all the descendent components of that component as well.

2. Reconciliation

- React uses an advanced **diffing algorithm** to compare the old render with the new render (in VDOM) to figure out what changes needs to be made in the real DOM

3. Commit

- The changes determined from the reconciliation phase are actually committed (painted) to the real DOM, and the user sees the updates on the page.

## StrictMode

### What is StrictMode doing ?

- Double renders all functions that should be pure functions
- Re-runs all effects in components
- Checks for deprecated APIs
- Runs only in Developement env

### Clean up side effects

- If we use `setInterval` inside `useEffect`, we shouldn't forget to return `clearInterval(<intervalId>)`

## Code Splitting

- Instead of **always** importing "heavy" code, we can conditionally import it only if/when needed.
- Splits up download times, so your main features aren't blocked by slow connections
- Sometimes bypasses unneeded code altogether

### How does it work ?

- Uses "dynamic import" function - `import()`
- Combine `import()` with `React.lazy()` to only load a "heavy" component if needed
- use `<Suspense>` to provide a fallback UI while the "lazy component" is loading

### React.lazy and React.Suspense

```js:line-numbers
// import ProductsList from "./ProductsList"
const ProductsList = React.lazy(() => {
  return import("./ProductsList");
});

return (
  <>
    <React.Suspense fallback={<h2>Loading...</h2>}>
      <div>{showProducts && <ProductsList />}</div>
    </React.Suspense>
  </>
);
```

## useMemo()

- Remembers calculated values between renders

### When to use `useMemo()` ?

- Avoid recalculating expensive calculations if it's not necessary
- Maintain referential equality of a complex data type between renders

```js:line-numbers
import productsData from "./data";

function App() {
  const [sort, setSort] = React.useState(false);

  const sortedProducts = React.useMemo(() => { // [!code ++]
    return [...productsData].sort((a, b) => a.name.localeCompare(b.name)); // [!code ++]
  }, [productsData]); // [!code ++]

  const visibleProducts = sort ? sortedProducts : productsData;

  return (
    <>
      <button className="button" onClick={() => setSort((prev) => !prev)}>
        {sort ? "Unsort" : "Sort"}
      </button>
      <br />
      <div className="products-list">
        {visibleProducts.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </div>
    </>
  );
}
```

## React.memo()

- To reduce unnecessary rerenders
- Not to confuse with `useMemo()`

### What is `React.memo()`

- A "Higher-Order" component (HOC) built by React
  - A higher-order function is a method or function that takes another function as an argument (ex: `.map()`, `.filter()`, etc...)
  - A HOC is a function that takes a component as an argument, adds some special abilities to it, and gives the "beefed-up" version of it back

### What does `React.memo()` do

- Memoizes (caches/"remembers") a component if the props don't change from one render to the next
- **Reminder**: the "rendering" phase in React isn't usually slow/expensive. It's more important to **fix slow renders** before worrying about reducing rerenders

```js:line-numbers
import React from "react";

function Product() {
  return <p>Product</p>;
}

export default React.memo(Product);
```

## useCallback()

- Used for caching function definitions

### When to use `useCallback()`

- Maintaining reference to functions between renders
  - Avoid rerenders with with React.memo()
  - Avoid too many useEffect() calls

### Differences between `useMemo` and `useCallback`

- useCallback - The function we pass it will be the value that we are maintaining a reference to, from one render to the next
- useMemo - The value we return from the function, is the value that will be maintained from one render to the next

```js:line-numbers
export default function App() {
  const [count, setCount] = React.useState(0);
  const [darkMode, setDarkMode] = React.useState(false);

  // useCallback
  // Note : There is no performance issue if we pass setCount to the child component directly
  const increment = React.useCallback(() => {
    setCount((prevCount) => prevCount + 1);
  }, [setCount]);

  // useMemo
  const style = React.useMemo(() => {
    return {
      backgroundColor: darkMode ? "#2b283a" : "#e9e3ff",
      color: darkMode ? "#e9e3ff" : "#2b283a",
    };
  }, [darkMode]);

  return (
    <div>
      <button onClick={increment}>+</button>
      <h2>Count: {count}</h2>
      <button onClick={() => setDarkMode((prev) => !prev)}>
        {darkMode ? "Switch to Light" : "Switch to Dark"}
      </button>
      <p>App component</p>
      <GrandParent style={style} increment={increment} />
      <GrandParent />
    </div>
  );
}
```
