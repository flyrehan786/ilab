const { check_connection } = require('./services/mysql');
const express = require("express");

const app = express();
const cors = require('cors');

app.use(cors());
app.use(express.json());

const usersRoutes = require('./routes/users');
const authRoute = require('./routes/auth');
const patientsRoutes = require('./routes/patients');
const doctorsRoutes = require('./routes/doctors');
const testsRoutes = require('./routes/tests');

app.use('/api/auth', authRoute);
app.use('/api/users', usersRoutes);
app.use('/api/patients', patientsRoutes);
app.use('/api/doctors', doctorsRoutes);
app.use('/api/tests', testsRoutes);

const port = process.env.PORT || 4000;
const server = app.listen(port, () => {
    console.log(`Listening on port ${port}...`)
    check_connection();
});

module.exports = server;
