
function  one(){
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
})