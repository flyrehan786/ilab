const Joi = require("joi");
const db = require('../services/mysql').db;

function validatePatientTestRemarks(patientTest) {
    const schema = {
        patient_tests_uuid: Joi.string()
            .min(5)
            .max(256)
            .required(),
        patient_id: Joi.string()
            .min(1)
            .max(256)
            .required(),
        refered_by_doctor_id: Joi.string()
            .min(1)
            .max(256)
            .required(),
    };
    return Joi.validate(patientTest, schema);
}


async function findAll() {
    return new Promise((resolve, reject) => {
        db.execute((`SELECT * FROM patient_tests_remarks`), [], (err, result) => {
            if (err) reject(err);
            if (result.length > 0) resolve(result);
            else resolve([]);
        })
    })
}

async function savePatientTestsRemarks(newPatientTestsRemarks) {
    return new Promise((resolve, reject) => {
        db.execute(`INSERT INTO patient_tests_remarks VALUES(default, ?, ?, ?,?, NOW(), NOW())`,
            [
                newPatientTestsRemarks.patient_tests_uuid,
                newPatientTestsRemarks.patient_id,
                newPatientTestsRemarks.refered_by_doctor_id,
                newPatientTestsRemarks.remarks,
            ], (err, result) => {
                if (err) reject(err);
                db.execute(`SELECT id FROM patient_tests_remarks WHERE id = ?;`, [ result.insertId ], (err, result) => {
                    if (err) reject(err);
                    if (result.length > 0) resolve(result[0].id);
                    else resolve(null);
                })
            });
    })
}

async function findPatientTestsRemarks(id) {
    return new Promise((resolve, reject) => {
        db.execute(`SELECT * FROM patient_tests_remarks WHERE id=?`,
            [
                id
            ], (err, result) => {
                if (err) reject(err);
                if (result.length > 0) resolve(result);
                else resolve(null);
            });
    })
}

async function findPatientTestsRemarksByUUID(uuid) {
    return new Promise((resolve, reject) => {
        db.execute(`SELECT * FROM patient_tests_remarks WHERE patient_tests_uuid=?`,
            [
                uuid
            ], (err, result) => {
                if (err) reject(err);
                if (result.length > 0) resolve(result[0]);
                else resolve(null);
            });
    })
}

async function updatePatientTestsRemarks(id, updatedPatientTestsRemarks) {
    return new Promise((resolve, reject) => {
        db.execute('Update patient_tests_remarks SET patient_tests_uuid=?,patient_id=?, refered_by_doctor_id=?, remarks=?, updated_at=Now() WHERE id=?;',
            [
                updatedPatientTestsRemarks.patient_tests_uuid,
                updatedPatientTestsRemarks.patient_id,
                updatedPatientTestsRemarks.refered_by_doctor_id,
                updatedPatientTestsRemarks.remarks,
                id
            ], (err, result) => {
                if (err) reject(err);
                db.execute(`SELECT * FROM patient_tests_remarks WHERE id = ${id};`, (err, result) => {
                    if (err) reject(err);
                    if (result.length > 0) resolve(result[0]);
                    else resolve(null);
                })
            })
    })
}

async function deletePatientTestsRemarks(id) {
    return new Promise((resolve, reject) => {
        db.execute(`DELETE FROM patient_tests_remarks WHERE id=?`, [id], (err, result) => {
            if (err) reject(err);
            if (result.affectedRows == 1) resolve(true);
            else resolve(false);
        });
    })
}

exports.validate = validatePatientTestRemarks;
exports.findPatientTestsRemarks = findPatientTestsRemarks;
exports.findPatientTestsRemarksByUUID = findPatientTestsRemarksByUUID;
exports.savePatientTestsRemarks = savePatientTestsRemarks;
exports.findAll = findAll;
exports.updatePatientTestsRemarks = updatePatientTestsRemarks;
exports.deletePatientTestsRemarks = deletePatientTestsRemarks;
