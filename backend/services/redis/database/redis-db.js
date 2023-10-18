const instance = require('../redis')
const worker = require('../worker');
const cl = instance(0);
module.exports = {
    worker: worker(cl)
}