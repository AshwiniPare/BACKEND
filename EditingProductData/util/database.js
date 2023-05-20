const mysql = require('mysql2');

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    databse: 'node-complete',
    password: 'root'
});

module.exports = pool.promise();
