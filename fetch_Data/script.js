const list = document.getElementById("list");

async function fetchData() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts");
        const data = await response.json();

        data.slice(0,100).forEach((post => {
            const li = document.createElement("li");
            li.textContent = post.title;
            list.appendChild(li);
        }));

    } catch (error) {
        console.log(error);
    }
}

fetchData();