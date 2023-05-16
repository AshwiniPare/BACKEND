const http = require('http');

const routes = require('./routes'); //custom file

const server = http.createServer(routes.handler);

server.listen(3000);