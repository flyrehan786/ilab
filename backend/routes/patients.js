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
    full_name: req.body.full_name,
    date_of_birth: req.body.date_of_birth,
    gender: req.body.gender,
    contact_number: req.body.contact_number,
    email_address: req.body.email_address,
    address: req.body.address,
  };

  const insertedId = await patientModel.savePatient(newPatient);
  newPatient.id = insertedId;
  res
    .send({
      id: newPatient.id,
      full_name: newPatient.full_name,
      date_of_birth: newPatient.date_of_birth,
      gender: newPatient.gender,
      contact_number: newPatient.contact_number,
      email_address: newPatient.email_address,
      address: newPatient.address,
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
