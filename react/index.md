# React

## Rendering

- React versions below **V17** need to import `React` in order for **JSX** to work
- React versions from **V18** and above uses `ReactDOM` to render the root element

```js
import React from "react"; // Before V17
import ReactDOM from "react-dom";
import { createRoot } from "react-dom/client"; // from V18 and above

const navbar = (
  <nav>
    <h1>Bob's Bistro</h1>
    <ul>
      <li>Menu</li>
      <li>About</li>
      <li>Contact</li>
    </ul>
  </nav>
);

// Before V18
ReactDOM.render(navbar, document.getElementById("root"));

// V18 and above
createRoot(document.getElementById("root")).render(navbar);
```

## Declarative vs Imperative

- **Imperative** means we need to give specific step-by-step instructions on how to
  accomplish a task.
- **Declarative** means we can write our code to simply "describe" _what_ should show up
  on the page and allow the rool (React, e.g.) to handle the details on _how_ to
  put those things on the page.

## Component

- Components have single root (<div></div>)
- If there is no div, we can use an empty element (<></>)

::: code-group

```js:line-numbers [main.js]
import { createRoot } from "react-dom/client";
import { App } from "./App"
createRoot(document.getElementById("root")).render(<App />);
```

```js:line-numbers [App.jsx]
export function App() {
  return (
    <div>App</div>
  )
}
```

:::

## Pass data to component

::: code-group

```js:line-numbers [main.js]
import { createRoot } from "react-dom/client";
import { App } from "./App"
createRoot(document.getElementById("root")).render(
  <App
    name="name" // for text
    age={1} // for other data types
  />
);
```

```js:line-numbers [App.jsx]
// We can pass props as parameters
export function App(props) {
  return (
    <div>{props.name} - {props.age}</div>
  )
}
```

```js:line-numbers [App2.jsx]
// We can destructure props
export function App({name, age}) {
  return (
    <div>{name} - {age}</div>
  )
}
```

:::

## Mapping components

::: code-group

```js:line-numbers [App.jsx]
import { User } from "./components/User"
export function App({name, age}) {

  const cardListData = [
    {
      id: 1,
      name: "Paul"
      age: 32
    },
    {
      id: 2,
      name: "Sarah"
      age: 27
    },
  ]

  const cards = cardListData.map(data => {
    return (
      <User
        key={data.id} // map of components must set a unique key
        name={data.name}
        age={data.age}
      />
    )
  })

  return (
    <div>
      { cards }
    </div>
  )
}
```

```js:line-numbers [User.jsx]
export function User({name, age}) {
  return (
    <div>{name} - {age}</div>
  )
}
```

:::

## Conditions

- It is a best practice to use a ternary operator instead of `&&` because there might be a risk of displaying `0` instead of not displaying the content inside the condition

Ex :

```js
// In this scenario, `myArray` is empty and will display `0`
{
  myArray.length && <h1>Something</h1>;
}

// It's safer to do this
{
  myArray.length > 0 && <h1>Something</h1>;
}
```

::: code-group

```js:line-numbers [App.jsx]
import { User } from "./components/User"
export function App({name, age}) {

  const cardListData = [
    {
      id: 1,
      name: "Paul"
      age: 32
    },
    {
      id: 2,
      name: "Sarah"
      age: 27
    },
  ]

  const cards = cardListData.map(data => {
    return (
      <User
        key={data.id} // map of components must set a unique key
        name={data.name}
        age={data.age}
      />
    )
  })

  return (
    <div>
      { cards }
    </div>
  )
}
```

```js:line-numbers [User.jsx]
export function User({name, age}) {
  const isOverThirty = age > 30; // [!code ++]

  return (
    { isOverThirty && <div>{name} - {age}</div> } // [!code ++]
    // OR - Ternary
  )
}
```

:::

## state

In React, we save value in state

- useState returns a value and a function
- `const [value, func] = React.useState(<value>)`

```js
import React from "react";
const [count, setCount] = React.useState(1);

/* OR */
import { useState } from "react";
const [count, setCount] = useState(1);
```

- Use the `setCount` function to update `count` value

```js
const [count, setCount] = useState(1);
setCount(2);
```

- Use the arrow function to get the **previousValue**

```js
const [count, setCount] = useState(1);
setCount((oldValue) => oldValue + 1);
```

## Event and State

```js
const [count, setCount] = useState(1);

function Counter() {
  return (
    <button onClick={() => setCount(oldValue => oldValue + 1)}>Add<button>
  )
}

```

## Children

- Every component has a `children` props

```js
function Button({ children }) {
  return <button>{{ children }}</button>;
}

function App() {
  return (
    <Button>👈 Previous</Button>
    <Button>Next 👉</Button>
  )
}
```

## useEffect

- useEffect is a mix of onMounted, watch, and onUnmount in Vue

```js
import { useState } from "react";
const [count, setCount] = useState(1);

useEffect(() => {
  console.log("I will run only once");
}, []); // Using an empty array will allow useEffect to run only once the component is mounted

useEffect(() => {
  console.log(
    "I will run when the component is mounted and anytime a state changes"
  );
});

useEffect(() => {
  console.log(
    "I will run when the component is mounted anytime the count state changes"
  );
}, [count]);

useEffect(() => {
  return function () {
    console.log("I will run when the component is unMounted");
  };
});
```

## useRef

- Refs are similar to state, except :
  - You can mutate them directly
  - Changing them doesn't cause a re-render (doesn't update the DOM)
- They're commonly used for manual DOM manipulations without needing to assign an id to elements
- useRef value is saved inside a `current` object

```js
const renderCount = React.useRef(0);
console.log(renderCount); // {current: 0}
```

## Compound Components

- Compound Components, are simply component(s) inside another component.
- It helps flatten the hierarchy, and avoids _prop drilling_ by passing props directly to the component's grand children component

### Before

::: code-group

```js:line-numbers [App.jsx]
import Menu from "./Menu/Menu";
function App() {
  return (
    <>
      <Menu
        buttonText="Sports"
        items={["Tennis", "Racquetball", "Pickleball", "Squash"]}
      />
    </>
  );
}
```

```js:line-numbers [Menu.jsx]
import { useState } from "react";
import MenuButton from "./MenuButton";
import MenuDropdown from "./MenuDropdown";

export default function Menu({ buttonText = "Menu", items }) {
  const [open, setOpen] = useState(true);

  function toggle() {
    setOpen((prevOpen) => !prevOpen);
  }

  return (
    <div className="menu">
      <MenuButton buttonText={buttonText} onClick={toggle} />
      {open && <MenuDropdown items={items} />}
    </div>
  );
}
```

```js:line-numbers [MenuButton.jsx]
export default function MenuButton({ buttonText, onClick }) {
  return <button onClick={onClick}>{buttonText}</button>;
}
```

```js:line-numbers [MenuDropdown.jsx]
export default function MenuDropdown({ children }) {
  return <div className="menu-dropdown">{children}</div>;
}
```

:::

### After

::: code-group

```js:line-numbers [App.jsx]
import Menu from "./Menu/Menu";
import MenuButton from "./Menu/MenuButton";
import MenuDropdown from "./Menu/MenuDropdown";
import MenuItem from "./Menu/MenuItem";

function App() {
  const sports = ["Tennis", "Pickleball", "Racquetball", "Squash"];

  return (
    <Menu>
      <MenuButton>Sports</MenuButton>
      <MenuDropdown>
        {sports.map((sport) => (
          <MenuItem key={sport}>{sport}</MenuItem>
        ))}
      </MenuDropdown>
    </Menu>
  );
}
```

```js:line-numbers [Menu.jsx]
export default function Menu({ children }) {
  const [open, setOpen] = React.useState(true);

  function toggle() {
    setOpen((prevOpen) => !prevOpen);
  }

  return <div className="menu">{children}</div>;
}
```

```js:line-numbers [MenuButton.jsx]
export default function MenuButton({ children, onClick }) {
  return <button onClick={onClick}>{children}</button>;
}
```

```js:line-numbers [MenuDropdown.jsx]
export default function MenuDropdown({ items }) {
  return (
    <div className="menu-dropdown">
      {items.map((item) => (
        <div className="menu-item" key={item}>
          {item}
        </div>
      ))}
    </div>
  );
}
```

```js:line-numbers [MenuItem.jsx]
export default function MenuItem({ children }) {
  return <div className="menu-item">{children}</div>;
}
```

:::

### Augment Components with the dot syntax

- We can reduce the number of imports

::: code-group

```js:line-numbers [Menu/index.js]
import Menu from "./Menu";
import MenuButton from "./MenuButton";
import MenuDropdown from "./MenuDropdown";
import MenuItem from "./MenuItem";

Menu.Button = MenuButton;
Menu.Dropdown = MenuDropdown;
Menu.Item = MenuItem;

export default Menu;
```

```js:line-numbers [App.jsx]
import Menu from "./Menu/Menu";

function App() {
  const sports = ["Tennis", "Pickleball", "Racquetball", "Squash"];

  return (
    <Menu>
      <Menu.Button>Sports</Menu.Button>
      <Menu.Dropdown>
        {sports.map((sport) => (
          <Menu.Item key={sport}>{sport}</Menu.Item>
        ))}
      </Menu.Dropdown>
    </Menu>
  );
}
```

:::

## React.Children & React.cloneElement (old way)

Note : Equivalent to `scoped slot` in Vue

1. React.Children

- Utility that provides methods for interacting with a component's direct children elements
  - `React.Children.map()`
  - `React.Children.forEach()`
  - etc...

2. React.cloneElement

- Utility that duplicates a React element and provides a way to inject additional props to that element
- When used with React

::: code-group

```js:line-numbers [App.jsx]
function App() {
  const sports = ["Tennis", "Pickleball", "Racquetball", "Squash"]
  return (
    <Menu>
      <MenuButton>Sports</MenuButton>
      <MenuDropdown>
        {sports.map(sport => (
          <MenuItem key={sport}>{sport}</MenuItem>
        ))}
      </MenuDropdown>
    </Menu>
  )
}
```

```js:line-numbers [Menu.jsx]
import React from "react"
function Menu({children}) {
  const [open, setOpen] = React.useState(true)

    function toggle() {
        setOpen(prevOpen => !prevOpen)
    }

    return (
      <div className="menu">
        {React.Children.map(children, (child) => {
            return React.cloneElement(child, {
                open,
                toggle
            })
        })}
      </div>
    )
}
```

```js:line-numbers [MenuButton.jsx]
export default function MenuButton({ children, toggle }) {
  return (
    <Button onClick={toggle}>{children}</Button>
  )
}
```

```js:line-numbers [MenuDropdown.jsx]
export default function MenuDropdown({ children, open }) {
  return open ? (
    <div className="menu-dropdown">
      {React.Children.map(children, (child) => { // Only if we want to pass props to the child component
          return React.cloneElement(child, {open})
      })}
    </div>
  ) : null
}
```

:::

## Context Hook

- The Context is a Component (Provider), and any component importing the Provider, will get the props passed to the Provider

::: code-group

```js:line-numbers [App.jsx]
function App() {
  const sports = ["Tennis", "Pickleball", "Racquetball", "Squash"]
  return (
    <Menu>
      <MenuButton>Sports</MenuButton>
      <MenuDropdown>
        {sports.map(sport => (
          <MenuItem key={sport}>{sport}</MenuItem>
        ))}
      </MenuDropdown>
    </Menu>
  )
}
```

```js:line-numbers [Menu.jsx]
import React from "react";
function Menu({ children }) {
  const [open, setOpen] = React.useState(true);

  function toggle() {
    setOpen((prevOpen) => !prevOpen);
  }

  export const MenuContext = React.createContext(); // [!code ++]

  return (
    <MenuContext.Provider value={{ open, toggle }}> // [!code ++]
      <div className="menu"> // [!code ++]
        {children} // [!code ++]
      </div> // [!code ++]
    </MenuContext.Provider> // [!code ++]
    <div className="menu"> // [!code --]
      {React.Children.map(children, (child) => { // [!code --]
        return React.cloneElement(child, { // [!code --]
          open, // [!code --]
          toggle, // [!code --]
        }); // [!code --]
      })} // [!code --]
    </div> // [!code --]
  );
}
```

```js:line-numbers [MenuButton.jsx]
import { MenuContext } from './App'; // [!code ++]
export default function MenuButton({ children, toggle }) { // [!code --]
export default function MenuButton({ children }) { // [!code ++]
  const { toggle } = React.useContext(MenuContext); // [!code ++]
  return (
    <Button onClick={toggle}>{children}</Button>
  )
}
```

```js:line-numbers [MenuDropdown.jsx]
import { MenuContext } from './App'; // [!code ++]
export default function MenuDropdown({ children, open }) { // [!code --]
export default function MenuDropdown({ children }) { // [!code ++]
  return open ? (
    <div className="menu-dropdown"> // [!code ++]
      {children}  // [!code ++]
    </div> // [!code ++]
    <div className="menu-dropdown"> // [!code --]
      {React.Children.map(children, (child) => { // [!code --]
        return React.cloneElement(child, { toggle, open }); // [!code --]
      })} // [!code --]
    </div> // [!code --]
  ) : null;
}
```

:::

## Headless Components

- Headless Components don't have any styled UI to display, they're purely intended to provide functionality

### Use Case - Toggle Compound Components

- Button - has the role of switching state (not an actual button)
- On - what to display when Toggle state is "on"
- Off - what to display when Toggle state is "off"
- Display - expose internal state to give more control to user

### Simple use case - No event passed

::: code-group

```js:line-numbers [App.jsx]
import Toggle from "./components/Toggle/index";
import { BsStar, BsStarFill } from "react-icons/bs"

function App() {
  return (
    <>
      <Toggle>
        <Toggle.Button>
          <Toggle.On>
            <BsStarFill className="star filled" />
          </Toggle.On>
          <Toggle.Off>
            <BsStar className="star" />
          </Toggle.Off>
        </Toggle.Button>
      </Toggle>
    </>
  );
}
```

```js:line-numbers [Toggle.jsx]
/* Contain Toggle and state logic - renders nothing */
import { createContext, useState } from "react";
const ToggleContext = createContext();

export default function Toggle({ children }) {
  const [on, setOn] = useState(false);

  function toggle() {
    setOn((prevOn) => !prevOn);
  }

  return (
    <ToggleContext.Provider value={{ on, toggle }}>
      {children}
    </ToggleContext.Provider>
  );
}

export { ToggleContext };
```

```js:line-numbers [ToggleButton.jsx]
/* Only contains toggling event - returns nothing*/
import { ToggleContext } from "./Toggle";

export default function ToggleButton({ children }) {
  const { toggle } = React.useContext(ToggleContext);

  return <div onClick={toggle}>{children}</div>;
}
```

```js:line-numbers [ToggleOn.jsx]
/* Only handles truthy value - returns nothing*/
import {useContext} from "react"
import { ToggleContext } from "./Toggle"

export default function ToggleOn({ children }) {
    const { on } = useContext(ToggleContext)
    return on ? children : null
}
```

```js:line-numbers [ToggleOff.jsx]
/* Only handles falsy value - returns nothing*/
import {useContext} from "react"
import { ToggleContext } from "./Toggle"

export default function ToggleOff({ children }) {
    const { on } = useContext(ToggleContext)
    return on ? null : children
}
```

:::

### Expose event use case

- In the Toggle component we expose the `onToggle` function for the users to be used
  - ex: posting something in the database for instance
- We need to use an `useRef` inside a `useEffect` to prevent the function to be executed on first component render

Note : we can use a custom hook to handle the `useRef` and `useEffect` parts

::: code-group

```js:line-numbers [App.jsx]
import Toggle from "./components/Toggle/index";
import { BsStar, BsStarFill } from "react-icons/bs";

function onChange() { // [!code ++]
  console.log("Event Triggered"); // [!code ++]
} // [!code ++]

function App() {
  return (
    <>
      <Toggle onToggle={onChange}> // [!code ++]
        <Toggle.Button>
          <Toggle.On>
            <BsStarFill className="star filled" />
          </Toggle.On>
          <Toggle.Off>
            <BsStar className="star" />
          </Toggle.Off>
        </Toggle.Button>
      </Toggle>
    </>
  );
}
```

```js:line-numbers [Toggle.jsx]
import { createContext, useState, useEffect } from "react";
const ToggleContext = createContext();

export default function Toggle({ children, onToggle }) { // [!code ++]
  const [on, setOn] = useState(false);
  const firstRender = useEffect(true); // [!code ++]

  function toggle() {
    setOn((prevOn) => !prevOn);
  }

  useEffect(() => { // [!code ++]
    if (firstRender.current) { // [!code ++]
      firstRender.current = false; // [!code ++]
    } else { // [!code ++]
      onToggle(); // [!code ++]
    } // [!code ++]
  }, [on]); // [!code ++]

  return (
    <ToggleContext.Provider value={{ on, toggle }}>
      {children}
    </ToggleContext.Provider>
  );
}

export { ToggleContext };
```

:::

### Render Props

- It's just passing data from a child component through a prop to be used in the parent component

::: code-group

```js:line-numbers [App.jsx]
import Decision from "./Decision";

export default function App() {
  return (
    <div>
      {/* As prop */}
      <Decision
        render={(goingOut) => {
          return (
            <h1>Am I going out tonight?? {goingOut ? "Yes!" : "Nope..."}</h1>
          );
        }}
      />

      {/* OR */}

      {/* As children (more common) */}
      <Decision>
        {(goingOut) => {
          return (
            <h1>Am I going out tonight?? {goingOut ? "Yes!" : "Nope..."}</h1>
          );
        }}
      </Decision>
    </div>
  );
}
```

```js:line-numbers [Decision.jsx]
import { useState } from "react";

export default function Decision({ render, children }) {
  const [goingOut, setGoingOut] = React.useState(false);

  function toggleGoingOut() {
    setGoingOut((prev) => !prev);
  }
  // As prop
  return (
    <div>
      <button onClick={toggleGoingOut}>Change mind</button>
      {render(goingOut)} {/* The data is passed to the function which will be used in the parent component */}
    </div>
  );

  // OR
  // As children
  return (
    <div>
      <button onClick={toggleGoingOut}>Change mind</button>
      {children(goingOut)}
    </div>
  );
}
```

:::

### Use case with the Toggle example

::: code-group

```js:line-numbers [App.jsx]
import Toggle from "./components/Toggle/index";
import { BsStar, BsStarFill } from "react-icons/bs"

function App() {
  return (
    <>
      <Toggle>
        <Toggle.Button>
          <Toggle.Display>
            {(on) => {
              return on ? <BsStarFill className="star filled" /> : <BsStar className="star" />
            }}
          </Toggle.Display>
          <Toggle.On> // [!code --]
            <BsStarFill className="star filled" /> // [!code --]
          </Toggle.On> // [!code --]
          <Toggle.Off> // [!code --]
            <BsStar className="star" /> // [!code --]
          </Toggle.Off> // [!code --]
        </Toggle.Button>
      </Toggle>
    </>
  );
}
```

```js:line-numbers [Toggle.jsx]
import { createContext, useState } from "react";
const ToggleContext = createContext();

export default function Toggle({ children }) {
  const [on, setOn] = useState(false);

  function toggle() {
    setOn((prevOn) => !prevOn);
  }

  return (
    <ToggleContext.Provider value={{ on, toggle }}>
      {children}
    </ToggleContext.Provider>
  );
}

export { ToggleContext };
```

```js:line-numbers [ToggleDisplay.jsx]
import React from "react";
import { ToggleContext } from "./Toggle";

export default function ToggleDisplay({ children }) {
  const { on } = React.useContext(ToggleContext);
  return children(on);
}
```

:::

## Custom Hooks

- The purpose of custom hooks is to combine together other React Hooks into a useful pattern that will the be reused in other places

### Hooks reminder

- **Hooks** allow you "hook into" the rendering cycles of React
- ex : **useState** maintains variables accross render cycles and triggers re-renders on change
- **useRef** maintains values across render cycles without causing re-renders

### Simple custom hook - useEffectOnUpdate()

- Triggers `useEffect` on second component rendering

::: code-group

```js:line-numbers [hooks/useEffectOnUpdate.jsx]
import React from "react";

export default function useEffectOnUpdate(effectFunction, deps) {
  const firstRender = React.useRef(true);

  React.useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false;
    } else {
      effectFunction();
    }
  }, deps);
}
```

```js:line-numbers [Toggle.jsx]
import { createContext, useState } from "react";
import useEffectOnUpdate from "../../hooks/useEffectOnUpdate"; // [!code ++]

const ToggleContext = React.createContext();

export default function Toggle({ children, onToggle = () => {} }) { // [!code ++]
  const [on, setOn] = React.useState(false);

  function toggle() {
    setOn((prevOn) => !prevOn);
  }

  useEffectOnUpdate(onToggle, [on]); // [!code ++]

  return (
    <ToggleContext.Provider value={{ on, toggle }}>
      {children}
    </ToggleContext.Provider>
  );
}

export { ToggleContext };
```

:::
