function sayHello(){
    let num =5;
    if(true){
        num = 7;
        console.log(num)
    }
}
//sayHello();
function scope(){
    if(true){
        //let num1  = 5;
        //console.log(num1);
        //const num2 = 6;
        //console.log(num2);
        var num3 = 10;
        console.log(num3);

    }
    //console.log(num1);
    //console.log(num2);
    console.log(num3);
}
//scope();
/*setTimeout(()=>{
    console.log("hello")
},1000);*/

/*setInterval(()=>{
    console.log("Intervel");
},1000);*/

console.log("1");

console.log("2");

setTimeout(()=>{
    console.log("3")
},3000);

setTimeout(()=>{
    console.log("4")
},1000);

Promise.resolve().then(() =>{
    console.log("7");
})

console.log("5");

setTimeout(()=>{
    console.log("6")
},2000);



