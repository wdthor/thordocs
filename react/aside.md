# Aside

## What is JSX ?

- JSX is a **declarative** syntax to _describe_ what components _look like_ and _how they work_
- Components must **return** a block of _JSX_
- Extension of JavaScript that allows us to _embed JavaScript, CSS, and React component into HTML_
- Each JSX element is **converted** to a `React.createElement` function call
- We could use React **without JSX**

### Imperative vs Declarative

#### Imperative - How to do things

- Manual DOM element selections and DOM traversing
- Step-by-step DOM mutations until we reach the desired UI

#### Declarative - What we want

- Describe what UI should look like using JSX, **based on current data**
- React is an **abstraction** away from the DOM: **we never touch the DOM**
- Instead, we think of the UI as a** reflection of the current data**

## State & State Guideline

- Each component has and manages **its own state**, no matter how many times we render the same component
- With state, we view UI as a **reflection of data changing over time**
- We **describe that reflection** of data using state, event handlers, and JSX

### Guidelines

- Use a state variable for any data that the component should keep track of (remember) over time. **This is data that will change at some point**. In VanillaJS, that's a `let` variable, or an `[]` or `{}`
- Whenever you want something in the component to be **dynamic**, create a piece of state related to that "thing", and update the state when the "thing" should change (be dynamic)
- For data that should not trigger component re-renders, **don't use state** (it can cause performance issues). Use a regular variable instead

## Component Categories

- Stateless / Presentational components
  - **no State**
  - can receive props and simply present received data or other content
  - usually **small and reusable**
- Statefull components
  - **have state**
  - can still be **reusable**
- Structural components
  - **pages**, **layouts** or **screens** of the app
  - result of **composition**
  - can be **huge and non reusable** (but don't have to)

## Component Composition

- Combining different components using the `children` prop (or explicitly defined props)

Ex :

```js
function Modal({ children }) {
  return <div className="modal">{children}</div>;
}

function Error() {
  return <p>Something went wrong</p>;
}

// Component Composition = Modal + Error
function App() {
  <Modal>
    <Error />
  </Modal>;
}
```

## View as a function of state

1. Render

- React runs your function and displays whatever gets returned.
- The function will only be run again if

2. setState
3. view = function(state)

## About component re-rendering

- If a parent component has a changing state (useState)
- All child components will also re-render

## Controlled components

It means whatever data is displayed should be a reflection of the data state inside the component
Ex:

```js
const [inputValue, setInputValue] = useState("Hello");

return (
  // The input value should come from and controlled by
  // the state of inputValue
  <input type="text" value={inputValue} />
);
```
