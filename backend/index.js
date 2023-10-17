const express = require('express');
const routes = require('./routes-config/routes');
const cors = require('cors');
const cluster = require('cluster');
const numCPUs = require('os').cpus().length;

if (cluster.isMaster) {
    // This is the master process
    console.log(`Master ${process.pid} is running`);
    // Fork workers for each CPU core
    for (let i = 0; i < numCPUs; i++) {
        cluster.fork();
    }
    cluster.on('exit', (worker, code, signal) => {
        console.log(`Worker ${worker.process.pid} died`);
    });
} else {
    // This is a worker process
    const app = express();
    app.use(cors());
    app.use(express.json());
    app.use('/', routes);
    const port = process.env.PORT || 4000;
    app.listen(port, () => {
        console.log(`Worker ${process.pid} is listening on port ${port}`);
    });
}
