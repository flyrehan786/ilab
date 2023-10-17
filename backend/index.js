const MYSQL = require('./services/mysql');
const express = require("express");
const routes = require('./routes-config/routes');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());
app.use('/', routes);

const port = process.env.PORT || 4000;
const server = app.listen(port, () => {
    console.log(`Listening on port ${port}...`)
    MYSQL.check_connection();
});

// const ZERO = require('./services/redis/database/redis-db');
// ZERO.worker.
// ZERO.worker.keys().then(keys => {
//     console.log(keys);
// })
// ZERO.worker.save('key-001', { name: 'John', details: '...' });
// ZERO.worker.keys().then(keys => {
//     console.log(keys);
// })

module.exports = server;
