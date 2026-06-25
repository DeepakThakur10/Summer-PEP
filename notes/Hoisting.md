# JavaScript Hoisting

## Hoisting

Hoisting moves declarations to the top of their scope before execution.

### Rules

* **`var`** → Hoisted, initialized as `undefined`.
* **`let` / `const`** → Hoisted but in **TDZ** (ReferenceError if accessed before declaration).
* **Function Declarations** → Fully hoisted; can be called before declaration.
* **Function Expressions** → Only the variable is hoisted.

  * `var` → `TypeError`
  * `let` / `const` → `ReferenceError`
* **Class Declarations** → Hoisted but in TDZ.

## Examples

### `var`

```js
console.log(a); // undefined
var a = 5;
```

### `let`

```js
console.log(b); // ReferenceError
let b = 10;
```

### Function Declaration

```js
greet(); // Hello!

function greet() {
  console.log("Hello!");
}
```

### Function Expression

```js
sayHi(); // TypeError

var sayHi = function() {
  console.log("Hi!");
};
```

## Remember

* `var` → `undefined`
* `let` / `const` → TDZ
* Function Declaration → Works before declaration
* Function Expression → Doesn't work before assignment
