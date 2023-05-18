const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const adminRoutes = require('./routes/admin')
const shopRoutes = require('./routes/shop');
const contactUsRoutes = require('./routes/contactus');
const errorController = require('./controllers/errors');

//app.use(bodyParser.urlencoded({extended: false}));
//app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.urlencoded({extended: false})); 
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminRoutes);
app.use('/shop', shopRoutes);
app.use('/contactus', contactUsRoutes);
app.use('/success', contactUsRoutes);

app.use(errorController.getError);;

app.listen(3000);