const  app = require('http');

const server = app.createServer((req,res) => {
     res.end("Response from server");

    if(req.url=== '/'){
        res.end("Home");
    }
    else if(req.url === '/login'){
        res.end("Login Page");
    }
    else{
        res.end("Enter Correct Path");
    }
});

server.listen(3000,()=>{
    console.log("server is running ");
});