const Joi = require("joi");
const db = require('../services/mysql').db;

function validatePatientTest(patientTest) {
    const schema = {
        uuid: Joi.string()
            .min(4)
            .max(256)
            .required(),
        test_id: Joi.string()
            .min(4)
            .max(256)
            .required(),
        status: Joi.string()
            .min(1)
            .max(1)
            .required(),
    };
    return Joi.validate(patientTest, schema);
}

async function findAll() {
    return new Promise((resolve, reject) => {
        db.execute((`SELECT * FROM patient_tests`), [], (err, result) => {
            if (err) reject(err);
            if (result.length > 0) resolve(result);
            else resolve([]);
        })
    })
}

async function savePatientTests(newPatientTest) {
    return new Promise((resolve, reject) => {
        db.execute(`INSERT INTO patient_tests VALUES(default, ?, ?, ?, NOW(), NOW())`,
            [
                newPatientTest.uuid,
                newPatientTest.test_id,
                newPatientTest.status,
            ], (err, result) => {
                if (err) reject(err);
                db.execute(`SELECT id FROM patient_tests WHERE id = ?;`,[ result.insertId ], (err, result) => {
                    if (err) reject(err);
                    if (result.length > 0) resolve(result[0].id);
                    else resolve(null);
                })
            });
    })
}

async function findPatientTests(id) {
    return new Promise((resolve, reject) => {
        db.execute(`SELECT * FROM patient_tests WHERE id=?`,
            [
                id
            ], (err, result) => {
                if (err) reject(err);
                if (result.length > 0) resolve(result[0]);
                else resolve(null);
            });
    })
}

async function updatePatientTests(id, updatedPatientTests) {
    return new Promise((resolve, reject) => {
        db.execute('Update patient_tests SET uuid=?,test_id=?, status=?, updated_at=Now() WHERE id=?;',
            [
                updatedPatientTests.uuid,
                updatedPatientTests.test_id,
                updatedPatientTests.status,
                id
            ], (err, result) => {
                if (err) reject(err);
                db.execute(`SELECT * FROM patient_tests WHERE id = ${id};`, (err, result) => {
                    if (err) reject(err);
                    if (result.length > 0) resolve(result[0]);
                    else resolve(null);
                })
            })
    })
}

async function deletePatientTests(id) {
    return new Promise((resolve, reject) => {
        db.execute(`DELETE FROM patient_tests WHERE id=?`, [id], (err, result) => {
            if (err) reject(err);
            if (result.affectedRows == 1) resolve(true);
            else resolve(false);
        });
    })
}

async function patientTestCompleted() {
    return new Promise((resolve, reject) => {
        db.execute('Update patient_tests SET status=?, updated_at=Now() WHERE id=?;',
            [
                1,
                id
            ], (err, result) => {
                if (err) reject(err);
                db.execute(`SELECT * FROM patient_tests WHERE id = ${id};`, (err, result) => {
                    if (err) reject(err);
                    if (result.length > 0) resolve(result[0]);
                    else resolve(null);
                })
            })
    })
}
async function patientTestPending() {
    return new Promise((resolve, reject) => {
        db.execute('Update patient_tests SET status=?, updated_at=Now() WHERE id=?;',
            [
                0,
                id
            ], (err, result) => {
                if (err) reject(err);
                db.execute(`SELECT * FROM patient_tests WHERE id = ${id};`, (err, result) => {
                    if (err) reject(err);
                    if (result.length > 0) resolve(result[0]);
                    else resolve(null);
                })
            })
    })
}


exports.validate = validatePatientTest;
exports.findPatientTests = findPatientTests;
exports.savePatientTests = savePatientTests;
exports.findAll = findAll;
exports.updatePatientTests = updatePatientTests;
exports.deletePatientTests = deletePatientTests;
exports.patientTestCompleted = patientTestCompleted;
exports.patientTestPending = patientTestPending;
