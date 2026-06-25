# Temporal Dead Zone (TDZ)

**Temporal Dead Zone (TDZ)** is the period between entering a scope and the declaration of a `let`, `const`, or `class` variable. During this time, the variable exists but **cannot be accessed**.

### Example

```js
console.log(a); // ReferenceError
let a = 10;
```

Here, `a` is in the **TDZ** until `let a = 10;` is executed.

### Key Points

* Applies to **`let`**, **`const`**, and **`class`**.
* Accessing the variable before its declaration throws a **ReferenceError**.
* TDZ helps prevent using variables before they are initialized.

### Easy to Remember

* `var` → Hoisted + `undefined`
* `let` / `const` → Hoisted + **TDZ** → `ReferenceError`
