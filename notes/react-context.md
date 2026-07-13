# React Context API Notes

## What is Context API?

The **Context API** is a built-in feature in React that allows you to share data between components **without passing props manually at every level**.

It solves the problem of **prop drilling**.

---

# What is Prop Drilling?

**Prop Drilling** is the process of passing data from a parent component to a deeply nested child through intermediate components.

### Example

```text
App
│
▼
GrandParent
│ message
▼
Parent
│ message
▼
Child
│ message
▼
GrandChild
```

Here,

- `Parent` doesn't use `message`.
- `Child` doesn't use `message`.
- They simply pass it to the next component.

This unnecessary passing of props is called **Prop Drilling**.

---

# Why Context API?

Instead of passing props through every component, Context API allows any component inside the Provider to access the data directly.

```text
ContextProvider
│
▼
App
│
▼
GrandParent
│
▼
Parent
│
▼
Child
│
▼
GrandChild
```

No prop drilling is required.

---

# Steps to Use Context API

## Step 1: Create Context

Create a context using `createContext()`.

```jsx
import { createContext } from "react";

export const UserContext = createContext();
```

---

## Step 2: Create a Context Provider

The Provider stores the shared state.

```jsx
import { createContext, useState } from "react";

export const UserContext = createContext();

function ContextProvider({ children }) {
  const [user, setUser] = useState("Jerry");

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
}

export default ContextProvider;
```

### Explanation

- `createContext()` creates the context.
- `useState()` stores the shared state.
- `value={{ user, setUser }}` makes both the data and update function available to all child components.

---

## Step 3: Wrap Your App with Provider

Usually this is done in `main.jsx`.

```jsx
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import ContextProvider from "./context/UserContext";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ContextProvider>
      <App />
    </ContextProvider>
  </StrictMode>
);
```

Now every component inside `App` can access the context.

---

## Step 4: Access Context

Use the `useContext()` hook.

```jsx
import { useContext } from "react";
import { UserContext } from "../context/UserContext";

function Parent() {
  const { user } = useContext(UserContext);

  return <h2>{user}</h2>;
}
```

### Explanation

- `useContext(UserContext)` reads the value stored in the nearest `UserContext.Provider`.

---

## Step 5: Update Context

```jsx
const { user, setUser } = useContext(UserContext);

<button onClick={() => setUser("Tom")}>
  Change User
</button>
```

Whenever `setUser()` is called,

```text
setUser()
    │
    ▼
Context Value Changes
    │
    ▼
All Components Using useContext() Re-render
```

---

# Dynamic Example

```jsx
import { useContext, useState } from "react";
import { UserContext } from "../context/UserContext";

function GrandChild() {
  const { user, setUser } = useContext(UserContext);
  const [name, setName] = useState("");

  return (
    <>
      <h2>GrandChild Component</h2>

      <p>{user}</p>

      <input
        type="text"
        value={name}
        placeholder="Enter New Name"
        onChange={(e) => setName(e.target.value)}
      />

      <button onClick={() => setUser(name)}>
        Change User
      </button>
    </>
  );
}

export default GrandChild;
```

---

# Complete Flow

```text
createContext()
       │
       ▼
ContextProvider
       │
       ▼
UserContext.Provider
       │
       ▼
Wrap App
       │
       ▼
GrandParent
       │
       ▼
Parent
       │
       ▼
Child
       │
       ▼
GrandChild
       │
       ▼
useContext(UserContext)
       │
       ▼
user, setUser
       │
       ▼
setUser()
       │
       ▼
Context Updated
       │
       ▼
All Components Using Context Re-render
```

---

# Important Hooks

## 1. createContext()

Creates a Context object.

```jsx
const UserContext = createContext();
```

---

## 2. useContext()

Reads data from the nearest Provider.

```jsx
const value = useContext(UserContext);
```

---

## 3. useState()

Stores the shared state inside the Provider.

```jsx
const [user, setUser] = useState("Jerry");
```

---

# Advantages of Context API

- Eliminates prop drilling.
- Built into React.
- Easy to share global data.
- Cleaner code.
- Automatically updates every component using the context.
- No need to pass props manually.

---

# Limitations

- Not ideal for very large applications with frequent state updates.
- Can trigger unnecessary re-renders if many components consume the same context.
- For complex global state, Redux, Zustand, or Recoil may be better choices.

---

# Props vs Context API

| Props | Context API |
|--------|-------------|
| Pass data from parent to child | Share data globally |
| Can lead to prop drilling | Avoids prop drilling |
| Best for small component trees | Best for shared application state |
| Passed manually | Accessed using `useContext()` |

---

# Interview Questions

## 1. What is Context API?

Context API is a built-in React feature used to share data between components without passing props manually through every intermediate component.

---

## 2. What is Prop Drilling?

Passing props through intermediate components that don't use the data, only to forward it to a nested component.

---

## 3. What are the three main parts of Context API?

- `createContext()`
- `Context.Provider`
- `useContext()`

---

## 4. Why do we use a Provider?

The Provider makes shared data available to all nested components.

---

## 5. Why is `value` used in Provider?

The `value` prop contains the data that will be shared with all components consuming the context.

Example:

```jsx
<UserContext.Provider value={{ user, setUser }}>
```

---

## 6. Why do we usually wrap the app in `main.jsx`?

Wrapping `<App />` inside `ContextProvider` makes the context available to the entire application.

---

## 7. What happens when `setUser()` is called?

- The context value changes.
- React re-renders every component using `useContext(UserContext)`.
- Updated data appears automatically.

---

## 8. Can Context API replace Redux?

For **small to medium applications**, yes.

For **large applications with complex state management**, libraries like **Redux** or **Zustand** are generally better suited.

---

# Summary

```text
createContext()
       │
       ▼
ContextProvider
       │
       ▼
Wrap App
       │
       ▼
useContext()
       │
       ▼
Read Data
       │
       ▼
setUser()
       │
       ▼
Context Updates
       │
       ▼
All Consumers Re-render
```

### Key Takeaways

- Props are great for parent-to-child communication.
- Prop drilling becomes cumbersome when many intermediate components are involved.
- Context API removes the need for prop drilling.
- Use `createContext()` to create a context.
- Wrap components with `ContextProvider`.
- Use `useContext()` to read shared data.
- Updating context automatically updates all components consuming it.