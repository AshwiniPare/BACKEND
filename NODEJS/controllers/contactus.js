const path = require('path');
const rootDir = require('../util/path');

exports.getContactUs = (req, res, next) => {
    console.log('inside contact');
    res.sendFile(path.join(rootDir, 'views', 'contactus.html'));
};

exports.postContactUs = (req, res, next) => {
    res.sendFile(path.join(rootDir, 'views', 'success.html'));
};