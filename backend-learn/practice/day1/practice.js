const fs = require('fs');

console.log('start');
fs.readFile('hello.txt', 'utf-8', (err, data) => {
    if (err) {
        console.log("Error while reading file");
        console.error(err);
        return;
    }

    console.log(data);
});
console.log('End');

// fs.writeFile('hello.txt', 'Good Morinig\nSahil',(err)=>{
//     if(err){
//         console.log(err);
//         return;
//     }
//     console.log('written');
// })

// fs.appendFile('hello.txt','\nThis is node Class',(err)=>{
//     if(err){
//         console.log(err);
//         return ;
//     }
//     console.log("Appended");
// })

// fs.unlink('hello.txt',(err)=>{
//     if(err){
//         console.log(err);
//         return;
//     }
//     console.log("Deleted");
// })