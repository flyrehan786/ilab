// const auth = require("../middleware/auth");
// const _ = require("lodash");
const doctorModel = require('../models/doctor');
const express = require("express");
const router = express.Router();

router.get("", async (req, res) => {
  try {
    const doctors = await doctorModel.findAll();
    const formattedDoctors = doctors.map(doctor => ({
      ...doctor,
      created_at: new Date(doctor.created_at).toLocaleString(),
      updated_at: new Date(doctor.updated_at).toLocaleString(),
    }));
    res.send(formattedDoctors);
  } catch (error) {
    console.error('Error fetching doctors:', error);
    res.status(500).send('Internal Server Error');
  }
});

router.get("/:id", async (req, res) => {
  const doctor = await doctorModel.findDoctor(req.params.id);
  if (!doctor)
    return res
      .status(404)
      .send("The patient with the given ID was not found.");
  doctor.created_at = new Date(doctor.created_at).toLocaleString();
  doctor.updated_at = new Date(doctor.updated_at).toLocaleString();
  res.send(doctor);
});

router.put("/:id", async (req, res) => {
  const { error } = doctorModel.validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  const updatedDoctor = await doctorModel.updateDoctor(
    req.params.id,
    req.body
  );

  if (!updatedDoctor)
    return res
      .status(404)
      .send("The doctor with the given ID was not found.");
  res.send(updatedDoctor);
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
