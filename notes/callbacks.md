# Callbacks in JavaScript

## What is a Callback?

A **callback** is a function that is passed as an argument to another function and is executed later.

```javascript
function greet(name) {
    console.log("Hello " + name);
}

function processUser(callback) {
    const name = "Deepak";
    callback(name);
}

processUser(greet);
```

**Output:**

```
Hello Deepak
```

---

## Why Do We Use Callbacks?

Callbacks allow us to:

* Execute code after another task finishes.
* Handle asynchronous operations.
* Reuse functions.

Example:

```javascript
function calculate(a, b, operation) {
    return operation(a, b);
}

function add(x, y) {
    return x + y;
}

function multiply(x, y) {
    return x * y;
}

console.log(calculate(5, 3, add));      // 8
console.log(calculate(5, 3, multiply)); // 15
```

---

# Synchronous Callback

The callback executes immediately while the program is running.

```javascript
function display(message) {
    console.log(message);
}

function greet(callback) {
    callback("Good Morning");
}

greet(display);
console.log("Program End");
```

**Output**

```
Good Morning
Program End
```

---

# Asynchronous Callback

The callback executes later after an asynchronous task completes.

```javascript
console.log("Start");

setTimeout(function () {
    console.log("Inside Callback");
}, 2000);

console.log("End");
```

**Output**

```
Start
End
Inside Callback
```

---

# Callback with Anonymous Function

```javascript
function greet(callback) {
    callback();
}

greet(function () {
    console.log("Hello!");
});
```

---

# Callback with Arrow Function

```javascript
function greet(callback) {
    callback();
}

greet(() => {
    console.log("Hello from Arrow Function");
});
```

---

# Real-Life Example

Imagine ordering food.

1. You place the order.
2. The restaurant prepares the food.
3. When it's ready, they call you.

That phone call is like a callback.

---

# Callback in Event Listeners

```javascript
const button = document.querySelector("button");

button.addEventListener("click", function () {
    console.log("Button Clicked");
});
```

Here,

* `addEventListener()` is the main function.
* The second function is the callback.
* It runs only when the button is clicked.

---

# Callback with setTimeout

```javascript
function sayHello() {
    console.log("Hello");
}

setTimeout(sayHello, 3000);
```

After 3 seconds:

```
Hello
```

---

# Callback with Array Methods

## forEach()

```javascript
const nums = [1, 2, 3];

nums.forEach(function (num) {
    console.log(num);
});
```

---

## map()

```javascript
const nums = [1, 2, 3];

const doubled = nums.map(function (num) {
    return num * 2;
});

console.log(doubled);
```

Output:

```
[2, 4, 6]
```

---

## filter()

```javascript
const nums = [1, 2, 3, 4, 5];

const even = nums.filter(function (num) {
    return num % 2 === 0;
});

console.log(even);
```

Output:

```
[2, 4]
```

---

# Callback Hell

When many callbacks are nested inside one another, the code becomes difficult to read and maintain.

```javascript
loginUser(function (user) {
    getOrders(user, function (orders) {
        getPayment(orders, function (payment) {
            getDelivery(payment, function (delivery) {
                console.log(delivery);
            });
        });
    });
});
```

Problems:

* Hard to read
* Difficult to debug
* Difficult to maintain

This is called **Callback Hell** or the **Pyramid of Doom**.

---

# Solution to Callback Hell

Modern JavaScript uses:

* Promises
* Async/Await

Example:

```javascript
async function fetchData() {
    const data = await getData();
    console.log(data);
}
```

---

# Summary

| Topic                 | Description                                                  |
| --------------------- | ------------------------------------------------------------ |
| Callback              | A function passed to another function                        |
| Synchronous Callback  | Runs immediately                                             |
| Asynchronous Callback | Runs later after an async task completes                     |
| Common Uses           | `setTimeout`, `addEventListener`, `forEach`, `map`, `filter` |
| Callback Hell         | Deeply nested callbacks                                      |
| Modern Solution       | Promises and Async/Await                                     |

---

# Interview Questions

### 1. What is a callback?

A function passed as an argument to another function that is executed later.

### 2. Why are callbacks used?

To perform an action after another task finishes, especially asynchronous tasks.

### 3. What is callback hell?

Deep nesting of callbacks that makes code difficult to read and maintain.

### 4. How can callback hell be avoided?

Using Promises or Async/Await.

### 5. Is `setTimeout` a callback?

Yes. The function passed to `setTimeout` is a callback that executes after the specified delay.

### 6. Are array methods like `map()` and `forEach()` callback-based?

Yes. They accept callback functions that run for each array element.
