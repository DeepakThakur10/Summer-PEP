const http = require('http');

const server = http.createServer((req, res) => {

    if (req.url === '/' && req.method === 'GET') {
        res.end("Home");
    }
    else if (req.url === '/login' && req.method === 'GET') {
        res.end("Login Page");
    }
    else if (req.url === '/' && req.method === 'POST') {
        res.end("Welcome to homepage");
    }
    else {
        res.end("Enter Correct Path");
    }

});

server.listen(3000, () => {
    console.log("Server is running on port 3000");
});