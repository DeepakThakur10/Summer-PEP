# Closure in JavaScript

A **closure** is a function that remembers and can access variables from its **outer (lexical) scope**, even after the outer function has finished executing.

## Example

```js
function outer() {
  let count = 0;

  return function inner() {
    count++;
    console.log(count);
  };
}

const counter = outer();

counter(); // 1
counter(); // 2
counter(); // 3
```

## Why?

`inner()` remembers the variable `count` even after `outer()` has returned.

## Uses

* Data hiding (private variables)
* Function factories
* Callbacks
* Event handlers
* Memoization

## Remember

**Closure = Function + Lexical Environment (Outer Variables)**
