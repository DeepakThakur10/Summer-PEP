# Promises in JavaScript

## What is a Promise?

A **Promise** is an object that represents the eventual completion (or failure) of an asynchronous operation.

A Promise has **3 states**:

* **Pending** → Initial state
* **Fulfilled** → Operation completed successfully
* **Rejected** → Operation failed

```
Pending
   |
   +------> Fulfilled
   |
   +------> Rejected
```

---

## Creating a Promise

```javascript
const promise = new Promise((resolve, reject) => {
    let success = true;

    if (success) {
        resolve("Task Completed");
    } else {
        reject("Task Failed");
    }
});
```

---

## Consuming a Promise

```javascript
promise
    .then((result) => {
        console.log(result);
    })
    .catch((error) => {
        console.log(error);
    });
```

Output

```
Task Completed
```

---

## Example

```javascript
function fetchUser() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Deepak");
        }, 2000);
    });
}

fetchUser()
    .then((user) => {
        console.log(user);
    });
```

Output

```
Deepak
```

---

## Promise Chaining

```javascript
function step1() {
    return Promise.resolve("Step 1");
}

function step2(data) {
    console.log(data);
    return Promise.resolve("Step 2");
}

function step3(data) {
    console.log(data);
    return Promise.resolve("Step 3");
}

step1()
    .then(step2)
    .then(step3)
    .then(console.log);
```

Output

```
Step 1
Step 2
Step 3
```

---

## catch()

Handles rejected promises.

```javascript
Promise.reject("Something went wrong")
    .catch((err) => {
        console.log(err);
    });
```

Output

```
Something went wrong
```

---

## finally()

Runs whether the Promise is fulfilled or rejected.

```javascript
Promise.resolve("Success")
    .then(console.log)
    .finally(() => {
        console.log("Finished");
    });
```

Output

```
Success
Finished
```

---

## Promise.all()

Waits for **all** promises.

```javascript
const p1 = Promise.resolve(10);
const p2 = Promise.resolve(20);
const p3 = Promise.resolve(30);

Promise.all([p1, p2, p3])
    .then(console.log);
```

Output

```
[10, 20, 30]
```

---

## Promise.race()

Returns the first settled promise.

```javascript
const p1 = new Promise(resolve =>
    setTimeout(() => resolve("First"), 1000)
);

const p2 = new Promise(resolve =>
    setTimeout(() => resolve("Second"), 2000)
);

Promise.race([p1, p2])
    .then(console.log);
```

Output

```
First
```

---

## Promise.allSettled()

Returns the result of every promise.

```javascript
Promise.allSettled([
    Promise.resolve("Done"),
    Promise.reject("Failed")
]).then(console.log);
```

---

## Promise.any()

Returns the first fulfilled promise.

```javascript
Promise.any([
    Promise.reject(),
    Promise.resolve("Success")
]).then(console.log);
```

Output

```
Success
```

---

# Promise vs Callback

| Callback                    | Promise                   |
| --------------------------- | ------------------------- |
| Can lead to callback hell   | Cleaner syntax            |
| Hard to maintain            | Easy to chain             |
| Error handling is difficult | `.catch()` handles errors |
| Less readable               | More readable             |

---

# Interview Questions

### What is a Promise?

An object representing the eventual result of an asynchronous operation.

### What are the states of a Promise?

Pending, Fulfilled, Rejected.

### Difference between `then()` and `catch()`?

* `then()` handles success.
* `catch()` handles errors.

### Difference between `Promise.all()` and `Promise.race()`?

* `Promise.all()` waits for every promise.
* `Promise.race()` returns the first settled promise.

### What is Promise chaining?

Executing multiple asynchronous tasks sequentially using `.then()`.
