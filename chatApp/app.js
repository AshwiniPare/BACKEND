const express = require('express');

const app = express();

const adminRoutes = require('./routes/admin')
//const shopRoutes = require('./routes/shop');

app.use(express.urlencoded({extended: true})); 

app.use(adminRoutes);
//app.use('/shop', shopRoutes);

app.use((req, res, next) => {
    res.status(404).send('<h1>Page not found</h1>');
});

app.listen(3000);

/*const http = require('http');

const routes = require('./routes'); //custom file

const server = http.createServer(routes.handler);

server.listen(3000);*/