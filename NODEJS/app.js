const http = require('http');

const server = http.createServer((req, res) => {
    console.log(req.url, req.method, req.headers);
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>My first page</title></head>');
    if(req.url == '/home') 
        res.write('<body><h1>Welcome home</h1></body>');
    else if(req.url == '/about') 
        res.write('<body><h1>Welcome to About US Page</h1></body>');
    else if(req.url == '/node')
        res.write('<body><h1>Welcome to my node js project</h1></body>')
    res.write('</html>');
    res.end();
});

server.listen(3000);