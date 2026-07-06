function getOrder() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let success = true;

            if (success) {
                resolve("Order delivered");
            } else {
                reject("Order failed");
            }
        }, 2000);
    });
}

function getCategory() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let success = true;

            if (success) {
                resolve("Category fetched");
            } else {
                reject("Failed to fetch category");
            }
        }, 1500);
    });
}

function getProduct() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let success = false;

            if (success) {
                resolve("Product fetched");
            } else {
                reject("Failed to fetch product");
            }
        }, 1000);
    });
}
Promise.allSettled([
    getCategory(),
    getProduct(),
    getOrder()
])
.then((result) => {
    console.log("Resolved",result);
})
.catch((err) => {
    console.log("Error: ",err);
});

/*const p1 = new Promise(resolve =>
    setTimeout(() => resolve("First"), 1000)
);

const p2 = new Promise(resolve =>
    setTimeout(() => resolve("Second"), 2000)
);
*/
Promise.any([
    getCategory(),
    getProduct(),
    getOrder()
])
.then((result) => {
    console.log("Resolved",result);
})
.catch((err) => {
    console.log("Error: ",err);
});
