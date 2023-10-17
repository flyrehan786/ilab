const express = require('express');
const routes = require('./routes-config/routes');
const cors = require('cors');
const config = require('./config/default.json');
const MYSQL = require('./services/mysql');
if (config.CLUSTER_MODE == true) {
    const cluster = require('cluster');
    const numCPUs = require('os').cpus().length;
    if (cluster.isMaster) {
        console.log(`Master ${process.pid} is running`);
        for (let i = 0; i < numCPUs; i++) {
            cluster.fork();
        }
        cluster.on('exit', (worker, code, signal) => {
            console.log(`Worker ${worker.process.pid} died`);
        });
    } else {
        const app = express();
        app.use(cors());
        app.use(express.json());
        app.use('/', routes);
        const port = process.env.PORT || 4000;
        app.listen(port, () => {
            console.log(`Worker ${process.pid} is listening on port ${port}`);
            console.log(`Listening on port ${port}...`)
            MYSQL.check_connection();
        });
    }
} else {
    const app = express();
    app.use(cors());
    app.use(express.json());
    app.use('/', routes);
    const port = process.env.PORT || 4000;
    app.listen(port, () => {
        console.log(`Worker ${process.pid} is listening on port ${port}`);
        console.log(`Listening on port ${port}...`)
        MYSQL.check_connection();
    });
}