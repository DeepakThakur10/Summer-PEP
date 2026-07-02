function getOrders() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const success = true;

            if (success) {
                resolve(["Pizza", "Burger", "Pasta"]);
            } else {
                reject("Could not fetch orders");
            }
        }, 2000);
    });
}


function login(){
    
}
getOrders()
    .then((orders) => {
        console.log(orders);
    })
    .catch((error) => {
        console.log(error);
    });