const Joi = require('joi');
const bcrypt = require('bcrypt');
const express = require('express');
const { findUsername, generateAuthToken } = require('../models/user');
const router = express.Router();

router.post('/', async (req, res) => {
  const { error } = validate(req.body); 
  if (error) return res.status(400).send(error.details[0].message);
  let user = await findUsername(req.body.username);
  if (!user) return res.status(400).send('1. Invalid username or password.');
  const validPassword = await bcrypt.compare(req.body.password, user.password);
  console.log('Orignal Password: ' + user.password);
  console.log('Requested Password: ' + req.body.password);
  console.log('Password Validation: ' + validPassword);
  if (!validPassword) return res.status(400).send('2. Invalid username or password.');
  const token = generateAuthToken(user);
  res.send({
    token
  });
});

function validate(req) {
  const schema = {
    username: Joi.string().min(2).max(255).required(),
    password: Joi.string().min(2).max(1024).required()
  };
  return Joi.validate(req, schema);
}
module.exports = router; 
