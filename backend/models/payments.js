const Joi = require("joi");
const db = require('../services/mysql').db;

function validatePayment(payment) {
    const schema = {
        patient_tests_uuid: Joi.string()
            .min(4)
            .max(256)
            .required(),
        total_amount: Joi.string()
            .min(4)
            .max(256)
            .required(),
        total_discount: Joi.string()
            .min(4)
            .max(256)
            .required(),
        total_paid_amount: Joi.string()
            .min(4)
            .max(256)
            .required(),
        total_balance_amount: Joi.string()
            .min(4)
            .max(256)
            .required()
    };
    return Joi.validate(payment, schema);
}

async function findAll() {
    return new Promise((resolve, reject) => {
        db.execute((`SELECT * FROM payments`), [], (err, result) => {
            if (err) reject(err);
            if (result.length > 0) resolve(result);
            else resolve([]);
        })
    })
}

async function savePayment(newPayment) {
    return new Promise((resolve, reject) => {
        db.execute(`INSERT INTO payments VALUES(default, ?, ?, ?, ?, ?, NOW(), NOW())`,
            [
                newPayment.patient_tests_uuid,
                newPayment.total_amount,
                newPayment.total_discount,
                newPayment.total_paid_amount,
                newPayment.total_balance_amount
            ], (err, result) => {
                if (err) reject(err);
                db.execute(`SELECT id FROM payments WHERE id = ?;`, [ result?.insertId ], (err, result) => {
                    if (err) reject(err);
                    if (result.length > 0) resolve(result[0].id);
                    else resolve(null);
                })
            });
    })
}

async function findPayment(id) {
    return new Promise((resolve, reject) => {
        db.execute(`SELECT * FROM payments WHERE id=?`,
            [
                id
            ], (err, result) => {
                if (err) reject(err);
                if (result.length > 0) resolve(result[0]);
                else resolve(null);
            });
    })
}

async function findPaymentByUUID(uuid) {
    return new Promise((resolve, reject) => {
        db.execute(`SELECT * FROM payments WHERE patient_tests_uuid=?`,
            [
                uuid
            ], (err, result) => {
                if (err) reject(err);
                if (result.length > 0) resolve(result);
                else resolve(null);
            });
    })
}

async function updatePayment(id, updatedPayment) {
    return new Promise((resolve, reject) => {
        db.execute('Update payments SET patient_tests_uuid=?,total_amount=?, total_discount=?, total_paid_amount=?, total_balance_amount=?, updated_at=Now() WHERE id=?;',
            [
                updatedPayment.patient_tests_uuid,
                updatedPayment.total_amount,
                updatedPayment.total_discount,
                updatedPayment.total_paid_amount,
                updatedPayment.total_balance_amount,
                id
            ], (err, result) => {
                if (err) reject(err);
                db.execute(`SELECT * FROM payments WHERE id = ${id};`, (err, result) => {
                    if (err) reject(err);
                    if (result.length > 0) resolve(result[0]);
                    else resolve(null);
                })
            })
    })
}

async function deletePayment(id) {
    return new Promise((resolve, reject) => {
        db.execute(`DELETE FROM payments WHERE id=?`, [id], (err, result) => {
            if (err) reject(err);
            if (result.affectedRows == 1) resolve(true);
            else resolve(false);
        });
    })
}

exports.validate = validatePayment;
exports.findPayment = findPayment;
exports.findPaymentByUUID = findPaymentByUUID;
exports.savePayment = savePayment;
exports.findAll = findAll;
exports.updatePayment = updatePayment;
exports.deletePayment = deletePayment;
