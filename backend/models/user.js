const jwt = require("jsonwebtoken");
const Joi = require("joi");
const db = require('../services/mysql').db;
const bcrypt = require("bcrypt");
const config = require('../config/default.json');

function validateUser(user) {
  const schema = {
    first_name: Joi.string()
      .min(2)
      .max(50)
      .required(),
    last_name: Joi.string()
      .min(2)
      .max(50)
      .required(),
    email: Joi.string()
      .min(3)
      .max(255)
      .required()
      .email(),
    username: Joi.string()
      .min(2)
      .max(255)
      .required(),
    password: Joi.string()
      .min(2)
      .max(1024)
      .required(),
    is_admin: Joi.string()
      .min(1)
      .max(1)
      .required()
  };
  return Joi.validate(user, schema);
}

async function findAll() {
  return new Promise((resolve, reject) => {
    db.execute((`SELECT * FROM users`), [], (err, result) => {
      if(err) reject(err);
      if(result.length > 0) resolve(result);
      else resolve([]);
    })
  })
}

async function findUsername(username) {
  console.log('user: ' + username);
  return new Promise((resolve, reject) => {
    db.execute(`SELECT * FROM users WHERE username=?`, [username], (err, result) => {
      console.log(result);
      if (err) reject(err);
      if (result.length > 0) resolve(result[0]);
      else resolve(null);
    });
  })
}

async function saveUser(newUser) {
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

async function deActivateUser(id) { 
  return new Promise((resolve,reject) => {
    db.execute(`UPDATE users SET status=? WHERE id=?`, [0, id], (err, result) => {
      if (err) reject(err);
      if (result.affectedRows == 1) resolve(true);
      else resolve(false);
    })
  })
}

async function activateUser(id) { 
  return new Promise((resolve,reject) => {
    db.execute(`UPDATE users SET status=? WHERE id=?`, [1, id], (err, result) => {
      if (err) reject(err);
      if (result.affectedRows == 1) resolve(true);
      else resolve(false);
    })
  })
}

async function findUser(id) {
  return new Promise((resolve, reject) => {
    db.execute(`SELECT * FROM users WHERE id=?`, [id], (err, result) => {
      if (err) reject(err);
      if (result.length > 0) resolve(result[0]);
      else resolve(null);
    });
  })
}

async function updateUser(id, updatedUser) {}

async function deleteUser(id) {
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

async function encryptPassword(password) {
  const salt = await bcrypt.genSalt(10);
  const encryptedPassword = await bcrypt.hash(password, salt);
  return encryptedPassword;
}

function generateAuthToken(user) {
  const token = jwt.sign(
    {
      id: user.id,
      first_name: user.first_name,
      last_name: user.last_name,
      email: user.email,
      username: user.username,
      isAdmin: user.is_admin
    },
    config.jwtPrivateKey, {
      expiresIn: 3000
    }
  );
  return token;
};

exports.validate = validateUser;
exports.findUsername = findUsername;
exports.findUser = findUser;
exports.encryptedPassword = encryptPassword;
exports.saveUser = saveUser;
exports.generateAuthToken = generateAuthToken;
exports.findAll = findAll;
exports.updateUser = updateUser;
exports.deleteUser = deleteUser;
exports.deActivateUser = deActivateUser;
exports.activateUser = activateUser;