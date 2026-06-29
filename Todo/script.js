const form = document.querySelector("form");
const title = document.getElementById("title");

const desc = document.getElementById("desc");
const todos = document.getElementById("todos");

form.addEventListener("submit",function(e){
    e.preventDefault();

    const titleV = title.value.trim();
    const descV = desc.value.trim();

    if(titleV=="" || descV==""){
        alert("please fill the value");
        return 0;
    }

    const li = document.createElement("li");

    li.innerHTML = `
    <h3>${titleV}</h3>
    <p>${descV}</p>
    `;
    todos.appendChild(li);
    title.value="";
    desc.value="";
});
