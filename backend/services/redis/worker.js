var worker = function (client) {
    return {
        save: function (key, value) {
            client.set(key, JSON.stringify(value));
        },
        get: function (key) {
            return new Promise((resolve, reject) => {
                client.get(key, function (err, reply) {
                    resolve(reply);
                });
            });
        },
        keys: function () {
            return new Promise((resolve, reject) => {
                client.keys('*', function (err, keys) {
                    if (err) return console.log(err);
                    resolve(keys);
                });
            })
        },
    }
}
module.exports = worker;