const { check_connection } = require('./services/mysql');
const express = require("express");

const app = express();
const cors = require('cors');

app.use(cors());
app.use(express.json());

const port = process.env.PORT || 3000;
const server = app.listen(port, () => {
    console.log(`Listening on port ${port}...`)
    check_connection();
});

module.exports = server;
