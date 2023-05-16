const fs = require('fs');
const requestHandler = (req, res) => {
if(req.url === '/') {
    return fs.readFile("message.txt", {encoding: "utf-8"}, (err, data) => {
        if(err)
            console.log(err);
        console.log('data is>>>>>>>'+data);
        res.write(`<html>`);
        res.write(`<head><title>Enter Message</title></head>`);
        res.write(`<body>${data}<form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form></body>`);
        res.write(`</html>`);
        return res.end();

    })
}

if (req.url === '/message' && req.method === 'POST') {
    const body = [];
    req.on('data', (chunk) => {
        console.log(chunk);
        body.push(chunk);
    });
    return req.on('end', () => {
        const parsedBody = Buffer.concat(body).toString();
        //console.log(parsedBody);
        const message = parsedBody.split('=')[1];
        fs.writeFile('message.txt', message, (err) => {
            res.statusCode = 302;
        res.setHeader('Location', '/');
        return res.end();
        });
    })
}

res.setHeader('Content-Type', 'text/html');
res.write('<html>');
res.write('<head><title>My first page</title></head>');
if(req.url == '/home') 
    res.write('<body><h1>Welcome home</h1></body>');
else if(req.url == '/about') 
    res.write('<body><h1>Welcome to About US Page</h1></body>');
else if(req.url == '/node')
    res.write('<body><h1>Welcome to my node js project</h1></body>')
else
    res.write('<body><h1>Welcome!</h1></body>')
res.write('</html>');
res.end();
};

//module.exports = requestHandler;

module.exports= {
    handler: requestHandler,
    someText: 'Some hardcoded text'
};
//exports.handler = requestHandler;
//exports.someText = 'Some hardcoded text';