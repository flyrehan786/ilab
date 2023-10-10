const Joi = require("joi");
const db = require('../services/mysql').db;

function validateTest(test) {
    const schema = {
        name: Joi.string()
            .min(4)
            .max(256)
            .required(),
        unit: Joi.string()
            .min(4)
            .max(256)
            .required(),
        male_reference_rage: Joi.string()
            .min(1)
            .max(1)
            .required(),
        female_reference_rage: Joi.string()
            .min(6)
            .max(256),
        price: Joi.string()
            .min(6)
            .max(256)
            .required(),
        description: Joi.string()
            .min(6)
            .max(256)
            .required()
    };
    return Joi.validate(test, schema);
}

async function findAll() {
    return new Promise((resolve, reject) => {
        db.execute((`SELECT * FROM tests`), [], (err, result) => {
            if (err) reject(err);
            if (result.length > 0) resolve(result);
            else resolve([]);
        })
    })
}

async function saveTest(newTest) {
    return new Promise((resolve, reject) => {
        db.execute(`INSERT INTO tests VALUES(default, ?, ?, ?, ?, ?, ?, NOW(), NOW())`,
            [
                newTest.name,
                newTest.unit,
                newTest.male_reference_rage,
                newTest.female_reference_rage,
                newTest.price,
                newTest.description,
            ], (err, result) => {
                if (err) reject(err);
                db.execute(`SELECT id FROM patients WHERE id = LAST_INSERT_ID();`, (err, result) => {
                    if (err) reject(err);
                    if (result.length > 0) resolve(result[0].id);
                    else resolve(null);
                })
            });
    })
}

async function findTest(id) {
    return new Promise((resolve, reject) => {
        db.execute(`SELECT * FROM tests WHERE id=?`,
            [
                id
            ], (err, result) => {
                if (err) reject(err);
                if (result.length > 0) resolve(result[0]);
                else resolve(null);
            });
    })
}

async function updateTest(id, updatedTest) {
    return new Promise((resolve, reject) => {
        db.execute('Update tests SET name=?,unit=?, male_reference_rage=?, female_reference_rage=?, price=?, description=? WHERE id=?;',
            [
                updatedTest.name,
                updatedTest.unit,
                updatedTest.male_reference_rage,
                updatedTest.female_reference_rage,
                updatedTest.price,
                updatedTest.description,
                id
            ], (err, result) => {
                if (err) reject(err);
                db.execute(`SELECT * FROM tests WHERE id = ${id};`, (err, result) => {
                    if (err) reject(err);
                    if (result.length > 0) resolve(result[0]);
                    else resolve(null);
                })
            })
    })
}

async function deleteTest(id) {
    return new Promise((resolve, reject) => {
        db.execute(`DELETE FROM patients WHERE id=?`, [id], (err, result) => {
            if (err) reject(err);
            if (result.affectedRows == 1) resolve(true);
            else resolve(false);
        });
    })
}

exports.validate = validateTest;
exports.findTest = findTest;
exports.saveTest = saveTest;
exports.findAll = findAll;
exports.updateTest = updateTest;
exports.deleteTest = deleteTest;