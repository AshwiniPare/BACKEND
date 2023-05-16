const express = require('express');

const app = express();

app.use((req, res, next) => {
    console.log('In the middleware');
    next();
});
app.use((req, res, next) => {
    console.log('In the another middleware');
    res.send('<h1>Hi from Express!</h1>');
   // res.send( '{ key1: value }');
});

app.listen(3000);