// const auth = require("../middleware/auth");
// const _ = require("lodash");
const patientModel = require('../models/patient');
const express = require("express");
const router = express.Router();

router.get("", async (req, res) => {
  const patients = await patientModel.findAll();
  patients.forEach(x => {
    x.created_at = new Date(x.created_at).toLocaleString();
    x.updated_at = new Date(x.updated_at).toLocaleString();
  })
  res.send(patients);
});

router.get("/:id", async (req, res) => {
  const user = await patientModel.findPatient(req.params.id);
  if (!user)
    return res
      .status(404)
      .send("The patient with the given ID was not found.");

  delete user.password;
  user.created_at = new Date(user.created_at).toLocaleString();
  user.updated_at = new Date(user.updated_at).toLocaleString();
  res.send(user);
});

router.post("", async (req, res) => {
  const { error } = patientModel.validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  const newPatient = {
    id: null,
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    email: req.body.email,
    username: req.body.username,
    password: encryptPassword,
    is_admin: req.body.is_admin,
    status: 1
  };

  const insertedId = await patientModel.savePatient(newPatient);
  newPatient.id = insertedId;
  res
    .send({
      id: newPatient.id,
      first_name: newPatient.first_name,
      last_name: newPatient.last_name,
      email: newPatient.email,
      username: newPatient.username,
      is_admin: newPatient.is_admin,
      status: newPatient.status
    });
});

router.delete("/:id", async (req, res) => {
  const rowsAffected = await patientModel.deletePatient(req.params.id);
  if (rowsAffected == false) {
    return res
    .status(404)
    .send("The patient with the given ID cannot be deleted.");
  }
  res.send({ deleted: true });
});


module.exports = router;
