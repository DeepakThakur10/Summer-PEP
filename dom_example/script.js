function outer() {
    let count = 0;

    return function inner() {
        count++;
        console.log(count);
        document.getElementById("count").textContent = count;
    };
}

const counter = outer();

const btn = document.getElementById("btn");

btn.addEventListener("click", function () {
    counter();
    alert("Button is clicked");
});