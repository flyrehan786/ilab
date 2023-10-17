const { check_connection } = require('./services/mysql');
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
    check_connection();
});

module.exports = server;
