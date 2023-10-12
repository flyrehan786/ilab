const Joi = require("joi");
const db = require('../services/mysql').db;

function validateDoctor(doctor) {
    const schema = {
        full_name: Joi.string()
            .min(4)
            .max(256)
            .required(),
        gender: Joi.string()
            .min(1)
            .max(1)
            .required(),
        contact_number: Joi.string()
            .min(6)
            .max(256)
            .required(),
        email_address: Joi.string()
            .min(6)
            .max(256)
            .required()
            .email(),
        address: Joi.string()
            .min(6)
            .max(256)
            .required(),
        specialization: Joi.string()
            .min(2)
            .max(256)
            .required()
    };
    return Joi.validate(doctor, schema);
}

async function findAll() {
    return new Promise((resolve, reject) => {
        db.execute((`SELECT * FROM doctors`), [], (err, result) => {
            if (err) reject(err);
            if (result.length > 0) resolve(result);
            else resolve([]);
        })
    })
}

async function saveDoctor(newDoctor) {
    return new Promise((resolve, reject) => {
        db.execute(`INSERT INTO doctors VALUES(default, ?, ?, ?, ?, ?, ?, NOW(), NOW())`,
            [
                newDoctor.full_name,
                newDoctor.gender,
                newDoctor.contact_number,
                newDoctor.email_address,
                newDoctor.address,
                newDoctor.specialization,
            ], (err, result) => {
                if (err) reject(err);
                db.execute(`SELECT id FROM doctors WHERE id = LAST_INSERT_ID();`, (err, result) => {
                    if (err) reject(err);
                    if (result.length > 0) resolve(result[0].id);
                    else resolve(null);
                })
            });
    })
}

async function findDoctor(id) {
    return new Promise((resolve, reject) => {
        db.execute(`SELECT * FROM doctors WHERE id=?`,
            [
                id
            ], (err, result) => {
                if (err) reject(err);
                if (result.length > 0) resolve(result[0]);
                else resolve(null);
            });
    })
}

async function updateDoctor(id, updatedDoctor) {
    return new Promise((resolve, reject) => {
        db.execute('Update doctors SET full_name=?,gender=?, contact_number=?, email_address=?, address=?, specialization=? WHERE id=?;',
            [
                updatedDoctor.full_name,
                updatedDoctor.gender,
                updatedDoctor.contact_number,
                updatedDoctor.email_address,
                updatedDoctor.address,
                updatedDoctor.specialization,
                id
            ], (err, result) => {
                if (err) reject(err);
                db.execute(`SELECT * FROM doctors WHERE id = ${id};`, (err, result) => {
                    if (err) reject(err);
                    if (result.length > 0) resolve(result[0]);
                    else resolve(null);
                })
            })
    })
}

async function deleteDoctor(id) {
    return new Promise((resolve, reject) => {
        db.execute(`DELETE FROM doctors WHERE id=?`, [id], (err, result) => {
            if (err) reject(err);
            if (result.affectedRows == 1) resolve(true);
            else resolve(false);
        });
    })
}

exports.validate = validateDoctor;
exports.findDoctor = findDoctor;
exports.saveDoctor = saveDoctor;
exports.findAll = findAll;
exports.updateDoctor = updateDoctor;
exports.deleteDoctor = deleteDoctor;