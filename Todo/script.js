const form = document.querySelector("form");
const title = document.getElementById("title");
const desc = document.getElementById("desc");
const todos = document.getElementById("todos");

function outer() {
    let count = 0;

    return function(action){
        if(action === "add"){
            count++;
            console.log(count);
        }
        else if(action === "delete"){
            count--;
            console.log(count);
        }
        return count;
    };
}


const counter = outer();
form.addEventListener("submit", function (e) {
    e.preventDefault();

    const titleV = title.value.trim();
    const descV = desc.value.trim();

    if (titleV === "" || descV === "") {
        alert("Please fill the value");
        return;
    }

    const todoCount = counter("add");

    const li = document.createElement("li");
    const deletebtn = document.createElement("button");

    deletebtn.style.backgroundColor = "red";
    deletebtn.innerText="Delete";
    deletebtn.style.color = "white"; // text color
    deletebtn.style.border = "grey";
    deletebtn.style.borderRadius = '8px';
    deletebtn.style.padding = '6px 12px';
    deletebtn.style.marginRight = '20px';
    deletebtn.style.cursor = 'pointer';
    deletebtn.style.transition = 'background-color 0.3s ease';

    deletebtn.addEventListener('mouseenter', function () {
        deletebtn.style.backgroundColor = "darkred";
    });
    deletebtn.addEventListener('mouseleave', function () {
        deletebtn.style.backgroundColor = "red";
    });
    li.innerHTML = `
        <h3>${todoCount}. ${titleV}</h3>
        <p>${descV}</p>
    `;

    li.appendChild(deletebtn);
    deletebtn.addEventListener("click",function(){
        li.remove();
        counter("delete");

        
    })
    todos.appendChild(li);      
    

    title.value = "";
    desc.value = "";
});
