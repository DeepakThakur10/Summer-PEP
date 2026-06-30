const child = document.querySelector('#child');

const grandParent = document.querySelector("#grandParent");

const parent = document.querySelector("#parent");

child.addEventListener('click',()=>{
    console.log("Child");
},true);

parent.addEventListener('click',()=>{
    console.log("parent");
},true);

grandParent.addEventListener('click',()=>{
    console.log("grandParent");
},true);

child.addEventListener('click',()=>{
    console.log("Child");
},true);

parent.addEventListener('click',()=>{
    console.log("parent");
},true);

grandParent.addEventListener('click',()=>{
    console.log("grandParent");
},true);