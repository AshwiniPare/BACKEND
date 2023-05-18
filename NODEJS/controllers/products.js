const path = require('path');
const rootDir = require('../util/path');

/*exports.getAddProduct = (req, res, next) => {
    console.log('inside req');
    res.sendFile(path.join(rootDir, 'views', 'add-product.html'));
};

exports.postAddProduct =  (req, res, next) => {
    console.log(req.body);
    res.redirect('/shop/');
};

exports.getProducts = (req, res, next) => {
    res.sendFile(path.join(rootDir, 'views', 'shop.html'));
};*/
const Product = require('../models/product');

exports.getAddProduct = (req, res, next) => {
    res.render('add-product', {
      pageTitle: 'Add Product',
      path: '/admin/add-product',
      formsCSS: true,
      productCSS: true,
      activeAddProduct: true
    });
};

exports.postAddProduct =  (req, res, next) => {
    res.redirect('/');
  };

  exports.getProducts = (req, res, next) => {
    const products = adminData.products;
    res.render('shop', {
      prods: products,
      pageTitle: 'Shop',
      path: '/',
      hasProducts: products.length > 0,
      activeShop: true,
      productCSS: true
    });
  };
  