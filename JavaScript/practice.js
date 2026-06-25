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
scope();