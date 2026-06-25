# **Hoisting**





**In JavaScript, hoisting is the behavior where declarations of variables, functions, and classes are moved to the top of their scope during the compilation phase, before code execution begins. This means you can reference certain identifiers before their actual declaration line, though the behavior differs depending on how they are declared.**



**Key points:**



**var declarations are hoisted and initialized with undefined.**



**let and const are hoisted but remain in the Temporal Dead Zone (TDZ) until their declaration is reached, causing a ReferenceError if accessed early.**



**Function declarations are hoisted with their full body, allowing calls before their definition.**



**Function expressions and class declarations are hoisted but not initialized, leading to errors if accessed before declaration.**



**Example with var:**



**console.log(a); // undefined**

**var a = 5;**

**Copy**

**Here, var a; is hoisted, but the assignment happens later, so the initial log shows undefined.**



**Example with let (TDZ):**



**console.log(b); // ReferenceError**

**let b = 10;**

**Copy**

**The variable b is hoisted but inaccessible until its declaration line.**



**Function declaration hoisting:**



**greet(); // "Hello!"**

**function greet() {**

**console.log("Hello!");**

**}**

**Copy**

**The entire function is available before its definition.**



**Function expression hoisting:**



**sayHi(); // TypeError**

**var sayHi = function() {**

**console.log("Hi!");**

**};**

**Copy**

**Only the variable sayHi is hoisted (as undefined), not the function assignment.**



**Best practices:**



**Always declare variables at the top of their scope to avoid confusion.**



**Prefer let and const for block scoping and to prevent accidental redeclarations.**



**Understand TDZ to avoid runtime errors with let, const, and class.**



**Hoisting is not explicitly defined as a term in the ECMAScript spec, but understanding it is crucial for predictable JavaScript behavior.**

