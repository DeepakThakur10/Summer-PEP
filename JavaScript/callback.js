
/*function  one(){
    console.log("one");
}

function two(fn){
    console.log("Two");
    fn();
}

two(one);
function greet(name){
    console.log(`Hello ${name}`);
}

function callGreet(callback){
    callback();
}
callGreet(()=>{
    greet("Deepak");
})*/

function login() {
    console.log("Logging")

    setTimeout(()=>{
        console.log("Login successfull")
    },1000);
}
function getUser(){
    console.log("getting user")

    setTimeout(()=>{
        console.log("User is found")
    })
}


login();
getUser();
