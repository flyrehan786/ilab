
const config = require('../app-config.json');
let redis = require("redis");
var createInstance = function (db) {
    return redis.createClient({
        host: config.redis.host,
        port: config.redis.port,
        db: +db,
    });
}
module.exports = createInstance;