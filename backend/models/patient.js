const Joi = require("joi");
const db = require('../services/mysql').db;

function validatePatient(patient) {
  const schema = {
    full_name: Joi.string()
      .min(4)
      .max(256)
      .required(),
    date_of_birth: Joi.string()
      .min(4)
      .max(256)
      .required(),
    gender: Joi.string()
      .min(1)
      .max(1)
      .required()
      .email(),
    contact_number: Joi.string()
      .min(6)
      .max(256)
      .required(),
    email_address: Joi.string()
      .min(6)
      .max(256)
      .required(),
    address: Joi.string()
      .min(6)
      .max(256)
      .required()
  };
  return Joi.validate(patient, schema);
}

async function findAll() {
  return new Promise((resolve, reject) => {
    db.execute((`SELECT * FROM patients`), [], (err, result) => {
      if(err) reject(err);
      if(result.length > 0) resolve(result);
      else resolve([]);
    })
  })
}

async function savePatient(newUser) {
  return new Promise((resolve, reject) => {
    db.execute(`INSERT INTO users VALUES(default, ?, ?, ?, ?, ?, ?, ?, NOW(), NOW(), 1, 1)`, [ newUser.first_name, newUser.last_name, newUser.email, newUser.username, newUser.password, newUser.is_admin, newUser.status ], (err, result) => {
      if (err) reject(err);
      db.execute(`SELECT id FROM users WHERE id = LAST_INSERT_ID();`, (err, result) => {
        if (err) reject(err);
        if (result.length > 0) resolve(result[0].id);
        else resolve(null);
      })
    });
  })
}

async function findPatient(id) {
  return new Promise((resolve, reject) => {
    db.execute(`SELECT * FROM users WHERE id=?`, [id], (err, result) => {
      if (err) reject(err);
      if (result.length > 0) resolve(result[0]);
      else resolve(null);
    });
  })
}

async function updatePatient(id, updatedUser) {}

async function deletePatient(id) {
  return new Promise((resolve, reject) => {
    db.execute(`SELECT * FROM users WHERE id=?`, [id], (err, result) => {
      console.log(result);
      if(result[0].is_admin == '1') resolve(false);
      else {
        db.execute(`DELETE FROM users WHERE id=?`, [id], (err, result) => {
          if (err) reject(err);
          if (result.affectedRows == 1) resolve(true);
          else resolve(false);
        });
      }
    });
  })
}

exports.validate = validatePatient;
exports.findPatient = findPatient;
exports.savePatient = savePatient;
exports.findAll = findAll;
exports.updatePatient = updatePatient;
exports.deletePatient = deletePatient;