const config = require('../config/default.json');
let mysql2 = require('mysql2');
let pool = mysql2.createPool(config.mysql);

function checkConnection() {
    pool.getConnection((err, connection) => {
        if (err) {
            console.error('Error acquiring connection from pool:', err);
            return;
        }
        console.log('Connected to the database.');
        connection.release();
    });
}

module.exports.check_connection = checkConnection;
module.exports.db = pool;