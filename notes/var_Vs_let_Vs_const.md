# `var` vs `let` vs `const`

| Feature         | `var`               | `let`       | `const`     |
| --------------- | ------------------- | ----------- | ----------- |
| Scope           | Function            | Block       | Block       |
| Hoisted         | ✅ Yes (`undefined`) | ✅ Yes (TDZ) | ✅ Yes (TDZ) |
| Redeclare       | ✅ Yes               | ❌ No        | ❌ No        |
| Reassign        | ✅ Yes               | ✅ Yes       | ❌ No        |
| Must Initialize | ❌ No                | ❌ No        | ✅ Yes       |

## Examples

### `var`

```js
var x = 10;
var x = 20; // ✅ Allowed
x = 30;     // ✅ Allowed
```

### `let`

```js
let y = 10;
// let y = 20; // ❌ Error
y = 20;        // ✅ Allowed
```

### `const`

```js
const z = 10;
// z = 20; // ❌ Error
```

## Remember

* **`var`** → Function scope, hoisted as `undefined`.
* **`let`** → Block scope, can reassign.
* **`const`** → Block scope, cannot reassign, must initialize.
* **Prefer `let` and `const`** in modern JavaScript.
