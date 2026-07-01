# Async/Await in JavaScript

## What is async/await?

`async/await` is a cleaner way to work with Promises.

It makes asynchronous code look like synchronous code.

---

## async Function

Adding `async` before a function automatically makes it return a Promise.

```javascript
async function greet() {
    return "Hello";
}

greet().then(console.log);
```

Output

```
Hello
```

---

## await Keyword

`await` pauses execution until a Promise is resolved.

```javascript
function fetchData() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve("Data Received");
        }, 2000);
    });
}

async function display() {
    const data = await fetchData();
    console.log(data);
}

display();
```

Output (after 2 seconds)

```
Data Received
```

---

## Example Without async/await

```javascript
fetchData()
    .then((data) => {
        console.log(data);
    });
```

---

## Same Example Using async/await

```javascript
async function showData() {
    const data = await fetchData();
    console.log(data);
}

showData();
```

---

## Multiple await

```javascript
function task(name, time) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(name);
        }, time);
    });
}

async function run() {
    const a = await task("Task A", 1000);
    console.log(a);

    const b = await task("Task B", 1000);
    console.log(b);
}

run();
```

Output

```
Task A
Task B
```

---

## Error Handling

```javascript
async function test() {
    try {
        const result = await Promise.reject("Error");
        console.log(result);
    } catch (err) {
        console.log(err);
    }
}

test();
```

Output

```
Error
```

---

## Parallel Execution

Instead of waiting one by one:

```javascript
const p1 = fetchData();
const p2 = fetchData();

const result = await Promise.all([p1, p2]);

console.log(result);
```

---

## Comparison

### Promise

```javascript
fetchData()
    .then(data => {
        console.log(data);
    })
    .catch(console.log);
```

### Async/Await

```javascript
try {
    const data = await fetchData();
    console.log(data);
} catch (err) {
    console.log(err);
}
```

---

# Execution Flow

```
Start

↓

Call async function

↓

await Promise

↓

Promise finishes

↓

Continue remaining code

↓

End
```

---

# async vs await

| async                             | await                                                                  |
| --------------------------------- | ---------------------------------------------------------------------- |
| Declares an asynchronous function | Waits for a Promise                                                    |
| Always returns a Promise          | Can only be used inside an async function (or top-level in ES modules) |

---

# Promise vs Async/Await

| Promise                         | Async/Await                    |
| ------------------------------- | ------------------------------ |
| Uses `.then()`                  | Uses `await`                   |
| Chaining required               | Sequential style               |
| Less readable for complex flows | Easier to read                 |
| Good for chaining               | Best for most application code |

---

# Interview Questions

### What does `async` do?

It makes a function return a Promise.

### What does `await` do?

It pauses execution until a Promise settles (typically until it fulfills or throws on rejection).

### Can `await` be used outside an async function?

Generally no. An exception is top-level `await` in ES modules.

### Does `await` block JavaScript?

No. It pauses only the execution of the current async function. The JavaScript event loop continues running other tasks.

### Is async/await built on Promises?

Yes. It is syntactic sugar over Promises.

### When should you use Promise.all() with async/await?

When independent asynchronous operations can run in parallel to improve performance.
