function getCategory() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Electronics");
        }, 1000);
    });
}

function getProduct() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("iPhone 16");
        }, 2000);
    });
}

function getOrder() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Order Delivered");
        }, 3000);
    });
}

async function loadData(){
    await getCategory();
    await getProduct();
    await getOrder();
}