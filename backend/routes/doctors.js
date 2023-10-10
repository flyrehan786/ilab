// const auth = require("../middleware/auth");
// const _ = require("lodash");
const doctorModel = require('../models/doctor');
const express = require("express");
const router = express.Router();

router.get("", async (req, res) => {
  const patients = await doctorModel.findAll();
  patients.forEach(x => {
    x.created_at = new Date(x.created_at).toLocaleString();
    x.updated_at = new Date(x.updated_at).toLocaleString();
  })
  res.send(patients);
});

router.get("/:id", async (req, res) => {
  const user = await doctorModel.findDoctor(req.params.id);
  if (!user)
    return res
      .status(404)
      .send("The patient with the given ID was not found.");

  delete user.password;
  user.created_at = new Date(user.created_at).toLocaleString();
  user.updated_at = new Date(user.updated_at).toLocaleString();
  res.send(user);
});

router.put("/:id", async (req, res) => {
  const { error } = patientModel.validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  const updatedPatient = await patientModel.updatePatient(
    req.params.id,
    req.body
  );

  if (!updatedPatient)
    return res
      .status(404)
      .send("The patient with the given ID was not found.");
  res.send(updatedPatient);
});

router.post("", async (req, res) => {
  const { error } = doctorModel.validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  const newDoctor = {
    id: null,
    full_name: req.body.full_name,
    gender: req.body.gender,
    contact_number: req.body.contact_number,
    email_address: req.body.email_address,
    address: req.body.address,
    specialization: req.body.specialization,
  };

  const insertedId = await doctorModel.saveDoctor(newDoctor);
  newDoctor.id = insertedId;
  res
    .send({
      id: newDoctor.id,
      full_name: newDoctor.full_name,
      gender: newDoctor.gender,
      contact_number: newDoctor.contact_number,
      email_address: newDoctor.email_address,
      address: newDoctor.address,
      specialization: newDoctor.specialization
    });
});

router.delete("/:id", async (req, res) => {
  const rowsAffected = await doctorModel.deleteDoctor(req.params.id);
  if (rowsAffected == false) {
    return res
    .status(404)
    .send("The patient with the given ID cannot be deleted.");
  }
  res.send({ deleted: true });
});


module.exports = router;
